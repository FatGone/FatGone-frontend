import type { CardDetailsDto } from "./CardDetailsDto";

export interface AccountDetailsDto {
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    city: string,
    postCode: string,
    card: CardDetailsDto | null,
}