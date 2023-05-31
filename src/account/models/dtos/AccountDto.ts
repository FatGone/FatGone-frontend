import type { AccountDetailsDto } from "@/accountDetails/models/dto/AccountDetailsDto";


export interface AccountDto {
    id: number,
    email: string,
    accountDetails: AccountDetailsDto,
}