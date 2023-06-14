
export interface CardDto {
    id: number | null,
    cardNumber: string;
    cvvNumber: number;
    expiryDate: string;
    cardHolder: string;
}