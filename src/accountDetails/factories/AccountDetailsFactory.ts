import { AccountDetails } from "@/accountDetails/models/AccountDetails";
import type { AccountDetailsDto } from "../models/dto/AccountDetailsDto";


export class AccountDetailsFactory {
    public static fromDto(dto: AccountDetailsDto): AccountDetails {
        return new AccountDetails(
            dto.id,
            dto.firstName,
            dto.lastName,
            dto.city,
            dto.postCode,
            dto.street,
            dto.streetNumber,
            dto.flatNumber,
            dto.card,
            dto.clientMembership,
        );
    }

}