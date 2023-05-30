export class AccountDetails {
    public constructor(
        public readonly id: number,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly phoneNumber: string,
        public readonly city: string,
        public readonly postCode: string,
    ) { }
}