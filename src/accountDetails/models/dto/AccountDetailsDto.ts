import type { ClientMembership } from "@/clientMembership/models/ClientMembership";
import type { CardDto } from "../../../card/models/dto/CardDto";

export interface AccountDetailsDto {
    id: number,
    firstName: string,
    lastName: string,
    street: string,
    streetNumber: string,
    flatNumber: string,
    city: string,
    postCode: string,
    card: CardDto | null,
    clientMembership: ClientMembership | null,
}