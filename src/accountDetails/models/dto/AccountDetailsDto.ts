import type { CardDetailsDto } from "../../../onboarding/models/dto/CardDetailsDto";

export interface AccountDetailsDto {
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    street: string,
    streetNumber: string,
    flatNumber: string,
    city: string,
    postCode: string,
    membershipTypeId: number,
    card: CardDetailsDto | null,
}