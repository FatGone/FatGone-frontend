import { defineStore } from "pinia";


interface IState {
    freezed: boolean,
}
export const useFreezedMembershipStore = defineStore('freezed_membership', {
    state: (): IState => ({
        freezed: false,
    }),
    getters: {
        freezed(): boolean{
            return this.freezed;
        }
    },
    actions: {
        setFreezed(freezed: boolean) {
            this.freezed = freezed;
        }
    }
});