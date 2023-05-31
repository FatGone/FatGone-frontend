import { defineStore } from "pinia";
import type { Account } from "../models/Account";


interface IState {
    account: Account | undefined,
}
export const useAccountStore = defineStore('account', {
    state: (): IState => ({
        account: undefined,

    }),
    getters: {


    },
    actions: {
        setAccount(account: Account) {
            this.account = account;
        },


    }
});