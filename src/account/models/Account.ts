import type { AccountDetails } from "@/accountDetails/models/AccountDetails";


export class Account {
    public constructor(
        public readonly id: number,
        public readonly email: string,
        public readonly accountDetails: AccountDetails,
    ) { }
}

