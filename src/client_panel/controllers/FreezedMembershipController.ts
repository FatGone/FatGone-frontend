import { useFreezedMembershipStore } from "@/client_panel/stores/FreezedMembershipStore";

export class FreezedMembershipController{
    constructor() { }

    public  get(): boolean {
        const store = useFreezedMembershipStore();
        return store.freezed;
    }


    public  set(freezed: boolean): void {
        const store = useFreezedMembershipStore();
        store.setFreezed(freezed);
        return;
    }
}