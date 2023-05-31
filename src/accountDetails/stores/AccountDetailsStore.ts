import { defineStore } from "pinia";
import type { AccountDetails } from "../models/AccountDetails";


interface IState {
    accountDetails: AccountDetails | undefined,
}
export const useAccountDetailsStore = defineStore('accountDetails', {
    state: (): IState => ({
        accountDetails: undefined,

    }),
    getters: {


    },
    actions: {
        setAccountDetails(accountDetails: AccountDetails) {
            this.accountDetails = accountDetails;
        },


    }
});