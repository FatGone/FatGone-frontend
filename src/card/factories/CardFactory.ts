
import { Card } from "../models/Card";
import type { CardDto } from "../models/dto/CardDto";


export class CardFactory {
    public static fromDto(dto: CardDto): Card {
        return new Card(
            dto.cardNumber,
            dto.cvvNumber,
            dto.expiryDate,
            dto.cardHolder,
        );
    }
}