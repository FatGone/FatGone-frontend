import type { MembershipType } from "./MembershipType";

export class ClientMembership {
    public constructor(
        public readonly id: number,
        public readonly freezed: boolean,
        public readonly remainingDays: number | null,
        public readonly joinedAt: string,
        public readonly nextPayment: string,
        public readonly price: number,
        public readonly membershipType: MembershipType,
    ) { }
}