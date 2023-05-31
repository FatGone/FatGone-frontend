export class Membership {
    public constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly price: string,
        public readonly wellnessAccess: string,
        public readonly registrationFee: string,
    ) { }
}