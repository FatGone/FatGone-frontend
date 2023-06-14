<script setup lang="ts">
import { AccountController } from '@/account/controllers/AccountController';
import { useAccountDetailsStore } from '@/accountDetails/stores/AccountDetailsStore';
import { useMembershipStore } from '@/membership/stores/MembershipStore';
import { OnboardingController } from '@/onboarding/controllers/OnboardingController';
import type { PropType } from 'vue';


export type CarnetType = {
    id: number,
    name: string;
    price: number;
    benefits: string[];
}

const props = defineProps({
    carnetType: {
        type: Object as PropType<CarnetType>,
        required: true,
    },
});

const accountDetailsStore = useAccountDetailsStore();
const clientMembership = accountDetailsStore.clientMembership;
const onboardingController = new OnboardingController();
const membershipStore = useMembershipStore();


async function _updateMembershipType(typeId: number) {
    console.log('typeId: ' + typeId);
    const membership = membershipStore.getMembershipById(typeId);
    if (membership) {
        await onboardingController.setMembershipType(typeId);
        const accountController = new AccountController();
        await accountController.get();
        window.location.reload();


    }
}


</script>


<template>
    <v-card class="bg-surface-2 pa-4" elevation="4">
        <h3 class="fg-display-large-acetone text-primary  text-center" style="text-transform: uppercase;">{{
            props.carnetType.name }}
        </h3>
        <v-col>
            <p class="d-flex pb-4" v-for="benefit in props.carnetType.benefits" :key="benefit"><v-icon color="primary"
                    class="pr-2">mdi-check</v-icon>{{ benefit }}</p>
            <v-row>
                <v-col>
                    <p class="fg-headline-medium">{{ props.carnetType.price }} zł<span
                            class="text-primary fg-headline-medium">/</span>msc
                    </p>
                </v-col>
                <v-col>
                    <v-btn height="40" class="w-100" :disabled="clientMembership?.membershipType.id == props.carnetType.id"
                        @click="_updateMembershipType(props.carnetType.id)">Zmień</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-card>
</template>


<style scoped lang="scss">
.bg-surface-2 {
    background-color: mix(#B2C5FF, #1B1B1F, 8%) !important;
}
</style>