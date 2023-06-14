import { ServerError, type AppException } from "@/common/models/AppException";
import { left, right, type Either } from "fp-ts/lib/Either";
import type { AccountInterface } from "../interfaces/AccountInterface";
import type { Account } from "../models/Account";
import { AxiosClient } from "@/common/utils/http_client/AxiosClient";
import { AccountFactory } from "../factories/AccountFactory";
import type { AccountDto } from "../models/dtos/AccountDto";


export class AccountService implements AccountInterface {
    async get(): Promise<Either<AppException, Account>> {
        console.log('[AccoundService] get()');
        const response = await AxiosClient.instance.get<AccountDto>('/account');
        console.log('response: ' + response.data);

        if (response.status == 200) {

            const account: Account = AccountFactory.fromDto(response.data);
            console.log('account: ' + account);

            return right(account);
        } else {
            return left(new ServerError());
        }
    }
    async delete(): Promise<void> {
        return await AxiosClient.instance.delete('/account');
    }
}