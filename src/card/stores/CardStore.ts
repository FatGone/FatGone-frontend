import { defineStore } from "pinia";
import type { Card } from "../models/Card";

interface IState {
    cardNumber: string,
    cvvNumber: number,
    expiryDate: string,
    cardHolder: string,

}
export const useCardStore = defineStore('card', {
    state: (): IState => ({
        cardNumber: '',
        cvvNumber: 0,
        expiryDate: '',
        cardHolder: '',

    }),
    getters: {


    },
    actions: {
        setCard(card: Card) {
            this.cardNumber = card.cardNumber;
            this.cvvNumber = card.cvvNumber;
            this.expiryDate = card.expiryDate;
            this.cardHolder = card.cardHolder;
        },
        updateCardNumber(cardNumber: string) {
            this.cardNumber = cardNumber;
        },
        updateCvvNumber(cvvNumber: number) {
            this.cvvNumber = cvvNumber;
        },
        updateExpiryDate(expiryDate: string) {
            this.expiryDate = expiryDate;
        },
        updateCardHolder(cardHolder: string) {
            this.cardHolder = cardHolder;
        }


    }
})