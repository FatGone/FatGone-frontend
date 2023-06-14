import { defineStore } from "pinia";
import { Membership } from "../models/Membership";

interface IState {
    memberShips: Array<Membership>,
}
export const useMembershipStore = defineStore('membership', {
    state: (): IState => ({
        memberShips: [
            new Membership(1, 'HALF-OPEN', 49, false, 89.99),
            new Membership(2, 'OPEN', 99, true, 59.99),
        ],
    }),
    getters: {


    },
    actions: {
        getMembershipById(id: number): Membership {
            return this.memberShips.find(x => x.id == id)!;
        }
    }
});