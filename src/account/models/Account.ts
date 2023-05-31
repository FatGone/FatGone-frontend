import type { AccountDetails } from "@/onboarding/models/AccountDetails"

export class Account {
    public constructor(
        public readonly id: number,
        public readonly email: string,
        public readonly accountDetails: AccountDetails,
    ) { }
}

