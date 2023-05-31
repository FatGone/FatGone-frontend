<script lang="ts" setup>
import { useMembershipStore } from '@/membership/stores/MembershipStore';
import { useOnboardingStore } from '@/onboarding/stores/OnboardingStore';
import router from '@/router';

defineProps({
    'id': Number,
    'title': String,
    'price': Number
})

const onboardingStore = useOnboardingStore();
const membershipStore = useMembershipStore();
function _updateMembership(membershipTypeId: number | undefined) {
    if (membershipTypeId) {
        const membership = membershipStore.getMembershipById(membershipTypeId)
        if (membership) {
            onboardingStore.updateMembership(membership);
            router.push('/register');
        }
    }
}
</script>

<template>
    <v-card class="w-100 px-8 rounded-lg">
        <v-card-title class="fg-display-small text-center pt-6 ">Karnet</v-card-title>
        <p class="fg-display-large-acetone text-center text-primary pt-3">{{ title }}</p>
        <slot></slot>
        <v-card-item class="pa-0">
            <p class="font-acetone text-center text-primary pt-9"
                style="font-weight: 400px; font-size: 16px; line-height: 24px; letter: 0.5px;">TYLKO</p>
            <p class="fg-headline-medium text-center">{{ price }} zł<span
                    class="pa-0 text-primary fg-headline-medium">/</span>msc</p>
            <v-btn block variant="flat" class="fg-label-large text-none mb-4" @click="_updateMembership(id)">
                Wybieram
            </v-btn>
        </v-card-item>
    </v-card>
</template>

<style scoped></style>