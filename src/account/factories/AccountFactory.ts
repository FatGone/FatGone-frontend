import { Account } from "../models/Account";
import type { AccountDto } from "../models/dtos/AccountDto";


export class AccountFactory {
    public static fromDto(dto: AccountDto): Account {
        return new Account(
            dto.id,
            dto.email,
            dto.accountDetails,
        );
    }
}