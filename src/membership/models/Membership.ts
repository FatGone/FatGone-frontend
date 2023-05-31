export class Membership {
    public constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly price: number,
        public readonly wellnessAccess: boolean,
        public readonly registrationFee: number,
    ) { }
}