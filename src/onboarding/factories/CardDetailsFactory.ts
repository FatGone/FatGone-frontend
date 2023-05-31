
import { CardDetails } from "../models/CardDetails";
import type { CardDetailsDto } from "../models/dto/CardDetailsDto";


export class CardDetailsFactory {
    public static fromDto(dto: CardDetailsDto): CardDetails {
        return new CardDetails(
            dto.cardNumber,
            dto.cvvNumber,
            dto.expiryDate,
            dto.cardHolder,
        );
    }
}