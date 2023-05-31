import { defineStore } from "pinia";

import type { CardDetailsDto } from "../models/dto/CardDetailsDto";
import type { Membership } from "@/membership/models/Membership";
import type { AccountDetailsDto } from "../../accountDetails/models/dto/AccountDetailsDto";

interface IState {
    membership: Membership | undefined,
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
    cvvCode: number,
    cardHolder: string,
}
export const useOnboardingStore = defineStore('onboarding', {
    state: (): IState => ({
        membership: undefined,
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
        cvvCode: 0,
        cardHolder: '',
    }),
    getters: {


    },
    actions: {
        updateExpiryDate(expiryDate: string) {
            this.shortExpiryDate = expiryDate;
        },

        updateMembership(membership: Membership) {
            this.membership = membership;
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

        updateCardDetails(cardDetailsDto: CardDetailsDto) {
            this.cardNumber = cardDetailsDto.cardNumber;
            this.cardExpiryDate = cardDetailsDto.expiryDate;
            this.cvvCode = cardDetailsDto.cvvNumber;
            this.cardHolder = cardDetailsDto.cardHolder;
        },
        formAccountDetailsDto(): AccountDetailsDto {
            const accountDetailsDto: AccountDetailsDto = {
                id: 0,
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: 'phoneNumber',
                street: this.street,
                streetNumber: this.streetNumber,
                flatNumber: this.flatNumber,
                city: this.city,
                postCode: this.postCode,
                membershipTypeId: (this.membership) ? this.membership.id : 1,
                card: null,
            };
            return accountDetailsDto;

        }
    }
});