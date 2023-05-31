import { AccountDetails } from "../models/AccountDetails";
import type { AccountDetailsDto } from "../models/dto/AccountDetailsDto";


export class AccountDetailsFactory {
    public static fromDto(dto: AccountDetailsDto): AccountDetails {
        return new AccountDetails(
            dto.id,
            dto.firstName,
            dto.lastName,
            dto.phoneNumber,
            dto.city,
            dto.postCode
        );
    }
}