import { defineStore } from "pinia";
import type { AccountDetailsDto } from "../models/dto/AccountDetailsDto";
import type { AccountDetails } from "../models/AccountDetails";
import type { Card } from "@/card/models/Card";
import type { ClientMembership } from "@/clientMembership/models/ClientMembership";


interface IState {
    id: number,
    firstName: string,
    lastName: string,
    street: string,
    streetNumber: string,
    flatNumber: string,
    city: string,
    postCode: string,
    card: Card | null,
    clientMembership: ClientMembership | null,
}
export const useAccountDetailsStore = defineStore('accountDetails', {
    state: (): IState => ({
        id: 0,
        firstName: '',
        lastName: '',
        street: '',
        streetNumber: '',
        flatNumber: '',
        city: '',
        postCode: '',
        card: null,
        clientMembership: null,
    }),
    getters: {


    },
    actions: {
        setAccountDetailsDto(accountDetailsDto: AccountDetailsDto) {
            this.id = accountDetailsDto.id;
            this.firstName = accountDetailsDto.firstName;
            this.lastName = accountDetailsDto.lastName;
            this.street = accountDetailsDto.street;
            this.streetNumber = accountDetailsDto.streetNumber;
            this.flatNumber = accountDetailsDto.flatNumber;
            this.city = accountDetailsDto.city;
            this.postCode = accountDetailsDto.postCode;
            this.card = accountDetailsDto.card;
        },
        setAccountDetails(accountDetails: AccountDetails) {
            this.id = accountDetails.id;
            this.firstName = accountDetails.firstName;
            this.lastName = accountDetails.lastName;
            this.street = accountDetails.street;
            this.streetNumber = accountDetails.streetNumber;
            this.flatNumber = accountDetails.flatNumber;
            this.city = accountDetails.city;
            this.postCode = accountDetails.postCode;
            this.card = accountDetails.card;
            this.clientMembership = accountDetails.clientMembership;
            console.log('clientMembership: ' + this.clientMembership);

        },
        // updateExpiryDate(expiryDate: string) {
        //     this.shortExpiryDate = expiryDate;
        // },
    }
});