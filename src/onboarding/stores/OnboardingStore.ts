import { defineStore } from "pinia";
import type { AccountDetailsDto } from "../models/dto/AccountDetailsDto";
import type { CardDetailsDto } from "../models/dto/CardDetailsDto";
import type { AddressDto } from "../models/dto/AddressDto";
import type { Membership } from "@/membership/models/Membership";

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
        updateAccountDetails(accountDetailsDto: AccountDetailsDto, addressDto: AddressDto) {
            this.firstName = accountDetailsDto.firstName;
            this.lastName = accountDetailsDto.lastName;
            this.address = accountDetailsDto.address;
            this.city = accountDetailsDto.city;
            this.postCode = accountDetailsDto.postCode;
            this.street = addressDto.street;
            this.streetNumber = addressDto.streetNumber;
            this.flatNumber = addressDto.flatNumber;
        },

        updateCardDetails(cardDetailsDto: CardDetailsDto) {
            this.cardNumber = cardDetailsDto.cardNumber;
            this.cardExpiryDate = cardDetailsDto.expiryDate;
            this.cvvCode = cardDetailsDto.cvvNumber;
            this.cardHolder = cardDetailsDto.cardHolder;
        }
    }
});