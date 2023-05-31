import { AccountService } from "../services/AccountService";
import { type Either, isLeft, left, right } from "fp-ts/lib/Either";
import type { Account } from "../models/Account";
import { useAccountStore } from "../stores/AccountStore";
import { useAccountDetailsStore } from "@/accountDetails/stores/AccountDetailsStore";

export class AccountController {
    constructor(private accountService: AccountService = new AccountService()) { }
    public async get(): Promise<Either<string, Account>> {
        const accountStore = useAccountStore();
        const accountDetailsStore = useAccountDetailsStore();
        const response = await this.accountService.get();
        console.log('response: ' + response);

        if (isLeft(response)) {
            return left('Wystąpił błąd serwera, spróbuj ponownie później');
        } else {
            accountStore.setAccount(response.right);
            accountDetailsStore.setAccountDetails(response.right.accountDetails);
            return right(response.right);
        }
    }
}