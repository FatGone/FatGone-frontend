export class Card {
    public constructor(
        public readonly cardNumber: string,
        public readonly cvvNumber: number,
        public readonly expiryDate: string,
        public readonly cardHolder: string,
    ) { }

}