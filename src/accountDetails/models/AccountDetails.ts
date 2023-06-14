import type { ClientMembership } from "@/clientMembership/models/ClientMembership";
import type { Card } from "@/card/models/Card";


export class AccountDetails {
    public constructor(
        public readonly id: number,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly city: string,
        public readonly postCode: string,
        public readonly street: string,
        public readonly streetNumber: string,
        public readonly flatNumber: string,
        public readonly card: Card | null,
        public readonly clientMembership: ClientMembership | null
    ) { }

}