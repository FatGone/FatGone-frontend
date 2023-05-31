import type { CardDetails } from "@/onboarding/models/CardDetails";


export class AccountDetails {
    public constructor(
        public readonly id: number,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phoneNumber: string,
        public readonly city: string,
        public readonly postCode: string,
        public readonly street: string,
        public readonly streetNumber: string,
        public readonly flatNumber: string,
        public readonly membershipTypeId: number,
        public readonly card: CardDetails | null,
    ) { }

}