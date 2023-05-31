import { ServerError, type AppException } from "@/common/models/AppException";
import { left, right, type Either } from "fp-ts/lib/Either";
import type { AccountInterface } from "../interfaces/AccountInterface";
import type { Account } from "../models/Account";
import { AxiosClient } from "@/common/utils/http_client/AxiosClient";
import { AccountFactory } from "../factories/AccountFactory";
import type { AccountDto } from "../models/dtos/AccountDto";


export class AccountService implements AccountInterface {
    async get(): Promise<Either<AppException, Account>> {
        const response = await AxiosClient.instance.get<AccountDto>('/account');
        if (response.status == 200) {
            const account: Account = AccountFactory.fromDto(response.data);
            return right(account);
        } else {
            return left(new ServerError());
        }
    }
}