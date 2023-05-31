<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';
import { useOnboardingStore } from '../stores/OnboardingStore';
import { useMembershipStore } from '@/membership/stores/MembershipStore';

const onboardingStore = useOnboardingStore();
const membershipStore = useMembershipStore();

function _updateMembershipType(typeId: number) {
    const membership = membershipStore.getMembershipById(typeId);
    if (membership) {
        onboardingStore.updateMembership(membership);
        _navigationIntent();
    }
}

function _navigationIntent(): void {
    router.push('/onboarding/card');
}


</script>
<template>
    <VLayout>
        <VMain>
            <VContainer>
                <VRow class="h-screen" align-content="center">
                    <VCol class="d-flex flex-column justify-center align-center" cols="5" offset="2">
                        <Logo :height="163" :width="567" />
                        <p class="text-on-background fg-display-medium pt-16">Wybierz rodzaj karnetu</p>
                        <VRow>
                            <VCol>
                                <VCard color="bg-background" class="w-100 px-8 mt-8 pb-6 rounded-lg text-center">
                                    <p class="fg-display-small text-on-surface pt-6">Karnet</p>
                                    <p class="pt-3 text-primary fg-display-large-acetone">HALF-OPEN</p>
                                    <VRow class="px-8 pt-6">
                                        <p>
                                            <VIcon class="pa-0" icon="mdi-check" color="primary"></VIcon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Dostęp do wszystkich
                                                obiektów FATGONE
                                            </span>>
                                        </p>
                                    </VRow>
                                    <VRow class="px-8 pt-6">
                                        <p>
                                            <VIcon class="pa-0" icon="mdi-check" color="primary"></VIcon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Dodatkowo płatny dostęp do
                                                sekcji
                                                SPA i
                                                Wellness</span>
                                        </p>
                                    </VRow>
                                    <VRow class="px-8 pt-6">
                                        <p>
                                            <VIcon class="pa-0" icon="mdi-check" color="primary"></VIcon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">4 zajęcia grupowe w
                                                miesiącu</span>
                                        </p>
                                    </VRow>
                                    <VRow class="px-8 pt-6">
                                        <p>
                                            <VIcon class="pa-0" icon="mdi-check" color="primary"></VIcon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">1 konsultacja z trenerem
                                                personalnym w
                                                miesiącu
                                            </span>
                                        </p>
                                    </VRow>
                                    <p class="pt-12 fg-headline-medium">49 zł<span
                                            class="pa-0 text-primary fg-headline-medium">/</span>msc</p>
                                    <Button class="w-100 py-2 px-16 mb-8 " label="Wybieram"
                                        @click="_updateMembershipType(1)"></Button>

                                </VCard>
                            </VCol>
                            <VCol class="d-flex">
                                <VCard color="bg-background"
                                    class="align-center justify-center w-100 px-8 mt-8 rounded-lg ">
                                    <p class="fg-display-small text-on-surface pt-6 text-center">Karnet</p>
                                    <p class="pt-3 text-primary fg-display-large-acetone text-center">OPEN</p>
                                    <VRow class="px-8 pt-6">
                                        <p>
                                            <VIcon class="pa-0" icon="mdi-check" color="primary"></VIcon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Dostęp do wszystkich
                                                obiektów FATGONE
                                            </span>
                                        </p>
                                    </VRow>
                                    <VRow class="px-8 pt-6">
                                        <p>
                                            <VIcon class="pa-0" icon="mdi-check" color="primary"></VIcon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Dostęp do sekcji SPA i
                                                Wellness
                                            </span>
                                        </p>
                                    </VRow>
                                    <VRow class="px-8 pt-6">
                                        <p>
                                            <VIcon class="pa-0" icon="mdi-check" color="primary"></VIcon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Wszystkie zajęcia
                                                grupowe</span>
                                        </p>
                                    </VRow>
                                    <VRow class="px-8 pt-6">
                                        <p>
                                            <VIcon class="pa-0" icon="mdi-check" color="primary"></VIcon>
                                            <span class="pa-0 pl-2 text-on-surface fg-body-large">Trening przygotowany i
                                                nadzorowany przez naszego specjalistę dostosowany do ciebie
                                            </span>
                                        </p>
                                    </VRow>
                                    <p class="pt-6 fg-headline-medium text-center">99 zł<span
                                            class="pa-0 text-primary fg-headline-medium ">/</span>msc</p>
                                    <Button class="w-100 py-2 px-16 mb-8 " label="Wybieram"
                                        @click="_updateMembershipType(2)"></Button>

                                </VCard>
                            </VCol>
                        </VRow>
                        <PaginationDots :step=4 />
                    </VCol>
                    <BackgroundGirl :width="750" style="position: absolute; right: 250px; bottom:0px" />
                </VRow>
            </VContainer>
        </VMain>
    </VLayout>
</template>