import { defineStore } from "pinia";
import type { AccountDetailsDto } from "../models/dto/AccountDetailsDto";
import type { CardDetailsDto } from "../models/dto/CardDetailsDto";
import type { AddressDto } from "../models/dto/AddressDto";

interface IState {
    code: string,
    firstName: string,
    lastName: string,
    address: string,
    street: string,
    streetNumber: string,
    flatNumber: string,
    city: string,
    postCode: string,
    membershipTypeId: number,
    cardNumber: string,
    cardExpiryDate: string,
    cvvCode: number,
    cardHolder: string,
}
export const useOnboardingStore = defineStore('onboarding', {
    state: (): IState => ({
        code: '',
        firstName: '',
        lastName: '',
        address: '',
        street: '',
        streetNumber: '',
        flatNumber: '',
        city: '',
        postCode: '',
        membershipTypeId: 0,
        cardNumber: '',
        cardExpiryDate: '',
        cvvCode: 0,
        cardHolder: '',
    }),
    getters: {


    },
    actions: {
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
        updateMembershipType(typeId: number) {
            this.membershipTypeId = typeId;
        },
        updateCardDetails(cardDetailsDto: CardDetailsDto) {
            this.cardNumber = cardDetailsDto.cardNumber;
            this.cardExpiryDate = cardDetailsDto.expiryDate;
            this.cvvCode = cardDetailsDto.cvvNumber;
            this.cardHolder = cardDetailsDto.cardHolder;
        }
    }
});