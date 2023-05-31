import type { AccountDetailsDto } from "@/onboarding/models/dto/AccountDetailsDto";


export interface AccountDto {
    id: number,
    email: string,
    accountDetails: AccountDetailsDto,
}