<script setup lang="ts">
import Button from '@/common/components/Button.vue'
import BackgroundGirl from '@/common/components/BackgroundGirl.vue'
import Logo from '@/common/components/FGLogo.vue'
import PaginationDots from '@/onboarding/components/PaginationDots.vue'
import router from '@/router';
import { useOnboardingStore } from '../stores/OnboardingStore';
import { ref } from 'vue';
import { OnboardingController } from '../controllers/OnboardingController';

const onboardingController = new OnboardingController();
const onboardingStore = useOnboardingStore();

async function _updateMembershipType(membershipTypeId: number) {
    onboardingStore.updateMembershipTypeId(membershipTypeId);
    const accountDetailsDto = onboardingStore.formAccountDetailsDto();
    await onboardingController.patchAccountDetails(accountDetailsDto);
    _navigationIntent();
}

const carnetTypes = ref([
    {
        id: 1,
        name: 'half-open',
        price: 49,
        benefits: [
            "Dostęp do wszystkich obiektów AquaSplash",
            "Dodatkowo płatny dostęp do sekcji SPA i Wellness",
            "4 zajęcia grupowe w miesiącu",
            "1 konsultacja z trenerem personalnym w miesiącu",
        ],
        alreadyActive: true,
    },
    {
        id: 2,
        name: 'open',
        price: 99,
        benefits: [
            "Dostęp do wszystkich obiektów AquaSplash",
            "Dostęp do sekcji SPA i Wellness",
            "Wszystkie zajęcia grupowe",
            "Trening przygotowany i nadzorowany przez naszego specjalistę dostosowany do ciebie",
        ],
        alreadyActive: false,
    }
])

function _navigationIntent(): void {
    router.push('/onboarding/card');
}


</script>
<template>
    <v-layout>
        <v-main>
            <v-container>
                <v-row class="h-screen" align-content="center">
                    <v-col class="d-flex flex-column justify-center align-center" cols="5" lg="7" offset="1">
                        <Logo :height="163" :width="567" />
                        <p class="text-on-background fg-display-medium pt-16">Wybierz rodzaj karnetu</p>
                        <v-row>
                            <v-col v-for="carnet in carnetTypes" :key="carnet.id">
                                <v-card color="bg-surface" class="w-100 px-8 mt-8 pb-6 rounded-lg">
                                    <p class="fg-display-small text-on-surface pt-6  text-center">Karnet</p>
                                    <p class="pt-3 text-primary fg-display-large-acetone  text-center"
                                        style="text-transform: uppercase;">{{ carnet.name }}</p>
                                    <p class="d-flex pb-4" v-for="benefit in carnet.benefits" :key="benefit">
                                        <v-icon color="primary" class="pr-2">mdi-check</v-icon>{{ benefit }}
                                    </p>
                                    <p class="pt-12 fg-headline-medium text-center">{{ carnet.price }} zł<span
                                            class="pa-0 text-primary fg-headline-medium">/</span>msc</p>
                                    <Button class="w-100 py-2 px-16 mb-8" label="Wybieram"
                                        @click="_updateMembershipType(carnet.id)"></Button>
                                </v-card>
                            </v-col>
                        </v-row>
                        <PaginationDots :step=4 />
                    </v-col>
                    <BackgroundGirl :width="750" style="position: absolute; right: 250px; bottom:0px" />
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>