import { defineStore } from "pinia";

import type { CardDto } from "../../card/models/dto/CardDto";
import type { AccountDetailsDto } from "../../accountDetails/models/dto/AccountDetailsDto";

interface IState {
    membershipTypeId: number,
    email: string,
    code: string,
    firstName: string,
    lastName: string,
    address: string,
    street: string,
    streetNumber: string,
    flatNumber: string,
    city: string,
    postCode: string,
    cardNumber: string,
    cardExpiryDate: string,
    shortExpiryDate: string,
    cvvNumber: number,
    cardHolder: string,
}
export const useOnboardingStore = defineStore('onboarding', {
    state: (): IState => ({
        membershipTypeId: 0,
        email: '',
        code: '',
        firstName: '',
        lastName: '',
        address: '',
        street: '',
        streetNumber: '',
        flatNumber: '',
        city: '',
        postCode: '',
        cardNumber: '',
        cardExpiryDate: '',
        shortExpiryDate: '',
        cvvNumber: 0,
        cardHolder: '',
    }),
    getters: {


    },
    actions: {
        updateExpiryDate(expiryDate: string) {
            this.shortExpiryDate = expiryDate;
        },

        updateMembershipTypeId(membershipTypeId: number) {
            this.membershipTypeId = membershipTypeId;
        },
        updateEmail(email: string) {
            this.email = email;
        },
        updateCode(code: string) {
            this.code = code;
        },
        updateAccountDetails(accountDetailsDto: AccountDetailsDto) {
            this.firstName = accountDetailsDto.firstName;
            this.lastName = accountDetailsDto.lastName;
            this.street = accountDetailsDto.street;
            this.streetNumber = accountDetailsDto.streetNumber;
            this.flatNumber = accountDetailsDto.flatNumber;
            this.city = accountDetailsDto.city;
            this.postCode = accountDetailsDto.postCode;
            this.address = this.street + ' ' + this.streetNumber + '/' + this.flatNumber;
        },

        updateCardDetails(cardDetailsDto: CardDto) {
            this.cardNumber = cardDetailsDto.cardNumber;
            this.cardExpiryDate = cardDetailsDto.expiryDate;
            this.cvvNumber = cardDetailsDto.cvvNumber;
            this.cardHolder = cardDetailsDto.cardHolder;
        },

        formAccountDetailsDto(): AccountDetailsDto {
            const accountDetailsDto: AccountDetailsDto = {
                id: 0,
                firstName: this.firstName,
                lastName: this.lastName,
                street: this.street,
                streetNumber: this.streetNumber,
                flatNumber: this.flatNumber,
                city: this.city,
                postCode: this.postCode,
                card: null,
                clientMembership: null,
            };
            return accountDetailsDto;

        }
    }
});