<script setup lang="ts">
import { ref } from 'vue';
import EditPersonalDetailsDrawer from '../components/EditPersonalDetailsDrawer.vue';
import EditCardDetailsDrawer from '../components/EditCardDetailsDrawer.vue';
import EditCarnetTypeDrawer from '../components/EditCarnetTypeDrawer.vue';
import TransactionsDrawer from '../components/TransactionsDrawer.vue';
import ConfirmCarnetFreezeDialog from '../components/dialogs/ConfirmCarnetFreeze.vue';
import ConfirmFingerprintResetDialog from '../components/dialogs/ConfirmFingerprintReset.vue';
import ConfirmAccountDeletionDialog from '../components/dialogs/ConfirmAccountDeletion.vue';
import ConfirmCarnetWithdrawalDialog from '../components/dialogs/ConfirmCarnetWithdrawal.vue';


const name = ref('Janusz');
const surname = ref('Kowalski');
const street = ref('Kowalska');
const houseNumber = ref('1');
const flatNumber = ref('1');
const city = ref('Kowale');
const postalCode = ref('80-180');
const lastFourCardDigits = ref('1234');
const cardHolderName = ref('Janusz Kowalski');
const cardExpirationDate = ref('01/2023');
const carnetType = ref('half-open');
const carnetCost = ref(49.99);
const carnetNextPaymentDate = ref('24.05.2023');
const transactions = ref([
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '24.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '23.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '22.05.2021',
        cardNumber: '**** **** **** 1234',

    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '21.05.2021',
        cardNumber: '**** **** **** 1234',

    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '20.05.2021',
        cardNumber: '**** **** **** 1234',

    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '19.05.2021',
        cardNumber: '**** **** **** 1234',

    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '18.05.2021',
        cardNumber: '**** **** **** 1234',

    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '17.05.2021',
        cardNumber: '**** **** **** 1234',

    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
    {
        title: 'Obciążenie karty',
        amount: 49.99,
        date: '15.05.2021',
        cardNumber: '**** **** **** 1234',
    },
]);


const showPersonalDetailsDrawer = ref(false);
const showCardDetailsDrawer = ref(false);
const showCarnetDrawer = ref(false);
const showTransactionsDrawer = ref(false);
const showConfirmCarnetFreezeDialog = ref(false);
const showConfirmFingerprintResetDialog = ref(false);
const showConfirmAccountDeletionDialog = ref(false);
const showConfirmCarnetWithdrawalDialog = ref(false);
const accountFreezedSnackbar = ref(false);
const fingerprintResetSnackbar = ref(true);

</script>

<template>
    <edit-personal-details-drawer :value="showPersonalDetailsDrawer"
        @update:model-value="(value) => showPersonalDetailsDrawer = value" />
    <edit-card-details-drawer :value="showCardDetailsDrawer"
        @update:model-value="(value) => showCardDetailsDrawer = value" />
    <edit-carnet-type-drawer :value="showCarnetDrawer" @update:model-value="(value) => showCarnetDrawer = value" />
    <transactions-drawer :value="showTransactionsDrawer" :transactions="transactions"
        @update:model-value="(value) => showTransactionsDrawer = value" />
    <confirm-carnet-freeze-dialog :value="showConfirmCarnetFreezeDialog"
        @update:model-value="(value) => showConfirmCarnetFreezeDialog = value"></confirm-carnet-freeze-dialog>
    <confirm-fingerprint-reset-dialog :value="showConfirmFingerprintResetDialog"
        @update:model-value="(value) => showConfirmFingerprintResetDialog = value"></confirm-fingerprint-reset-dialog>
    <confirm-account-deletion-dialog :value="showConfirmAccountDeletionDialog"
        @update:model-value="(value) => showConfirmAccountDeletionDialog = value"></confirm-account-deletion-dialog>
    <confirm-carnet-withdrawal-dialog :value="showConfirmCarnetWithdrawalDialog"
        @update:model-value="(value) => showConfirmCarnetWithdrawalDialog = value"></confirm-carnet-withdrawal-dialog>
    <v-snackbar v-model="accountFreezedSnackbar" :timeout="2000">
        Karnet został zamrożony
        <template v-slot:actions>
            <v-btn icon="mdi-close" @click="fingerprintResetSnackbar = false" />
        </template>
    </v-snackbar>
    <v-snackbar v-model="fingerprintResetSnackbar" :timeout="3000">
        Przy następnej wizytcie, odwiedź kiosk i ustaw nowy odcisk palca
        <template v-slot:actions>
            <v-btn icon="mdi-close" @click="fingerprintResetSnackbar = false" />
        </template>
    </v-snackbar>
    <v-container class="d-flex flex-column justify-center">
        <v-row no-gutters style="min-height: 100vh; margin-right: 156px; margin-left: 156px;" align="center">
            <v-col class="px-4">
                <v-card class="mb-8 pa-8 bg-surface-1" variant="elevated" elevation="1">
                    <v-card-item>
                        <v-card-title>
                            <h2 class="text-h5 text-center fg-headline-small text-primary">Dane personalne</h2>
                            <v-divider class="mt-4 mb-8"></v-divider>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="pt-0">
                        <v-col class="pa-0 mb-8">
                            <p>
                                <span class="fg-title-medium ">Imię: </span>
                                <span class="fg-title-small font-weight-regular">{{ name }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Nazwisko: </span>
                                <span class="fg-title-small font-weight-regular">{{ surname }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Ulica: </span>
                                <span class="fg-title-small font-weight-regular">{{ street }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Numer domu: </span>
                                <span class="fg-title-small font-weight-regular">{{ houseNumber }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Numer mieszkania: </span>
                                <span class="fg-title-small font-weight-regular">{{ flatNumber }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Kod pocztowy: </span>
                                <span class="fg-title-small font-weight-regular">{{ postalCode }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Miasto: </span>
                                <span class="fg-title-small font-weight-regular">{{ city }}</span>
                            </p>
                        </v-col>
                        <v-btn prepend-icon="mdi-pencil" variant="outlined" class="w-100" height="40"
                            @click="showPersonalDetailsDrawer = !showPersonalDetailsDrawer">
                            <p>Edytuj</p>
                        </v-btn>
                    </v-card-text>
                </v-card>
                <v-card class="pa-8 bg-surface-1" variant="elevated" elevation="4">
                    <v-card-item>
                        <v-card-title>
                            <h2 class="text-h5 text-center fg-headline-small text-primary">Metoda Płatności</h2>
                            <v-divider class="mt-4 mb-8"></v-divider>
                        </v-card-title>
                    </v-card-item>

                    <v-card-text class="pt-0 fg-body-small">
                        <v-col class="pa-0 mb-8">
                            <p>
                                <span class="fg-title-medium ">Karta: </span>
                                <span class="fg-title-small font-weight-regular">**** **** **** {{ lastFourCardDigits
                                }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Data ważności: </span>
                                <span class="fg-title-small font-weight-regular">{{ cardExpirationDate }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Imię i nazwisko: </span>
                                <span class="fg-title-small font-weight-regular">{{ cardHolderName }}</span>
                            </p>
                        </v-col>
                        <v-btn prepend-icon="mdi-pencil" variant="outlined" class="w-100" height="40"
                            @click="showCardDetailsDrawer = !showCardDetailsDrawer">
                            <p>Edytuj</p>
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col class="px-4">
                <v-card class="mb-8 pa-8 bg-surface-1" variant="elevated" elevation="4">
                    <v-card-item>
                        <v-card-title>
                            <h2 class="text-h5 text-center fg-headline-small text-primary">Karnet</h2>
                            <v-divider class="mt-4 mb-8"></v-divider>
                        </v-card-title>
                    </v-card-item>

                    <v-card-text class="pt-0 fg-body-small">
                        <v-col class="pa-0 mb-8">
                            <p>
                                <span class="fg-title-medium ">Typ: </span>
                                <span class="fg-title-large-acetone text-primary" style="text-transform: uppercase;">{{
                                    carnetType
                                }}</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Koszt: </span>
                                <span class="fg-title-small font-weight-regular">{{ carnetCost }} zł</span>
                            </p>
                            <p>
                                <span class="fg-title-medium ">Data następnej płatności: </span>
                                <span class="fg-title-small font-weight-regular">{{ carnetNextPaymentDate }}</span>
                            </p>
                        </v-col>
                        <v-btn variant="outlined" class="w-100 mb-4 d-flex flex-row justify-center" height="40"
                            @click="showCarnetDrawer = !showCarnetDrawer">
                            <p>Zmień typ karnetu</p>
                        </v-btn>
                        <v-btn prepend-icon="mdi-snowflake" variant="outlined"
                            class="w-100 mb-4 on-surface d-flex flex-row justify-center" height="40"
                            @click="showConfirmCarnetFreezeDialog = !showConfirmCarnetFreezeDialog">
                            <p>Zamrożenie karnetu</p>
                        </v-btn>
                        <v-btn prepend-icon="mdi-close" variant="outlined"
                            class="w-100 on-error-container  d-flex flex-row justify-center" height="40"
                            @click="showConfirmCarnetWithdrawalDialog = !showConfirmCarnetWithdrawalDialog">
                            <p>Zrezygnuj</p>
                        </v-btn>
                    </v-card-text>

                </v-card>
                <v-card class="mb-8 pa-8 bg-surface-1" variant="elevated" elevation="4">
                    <v-card-item>
                        <v-card-title>
                            <h2 class="text-h5 text-center fg-headline-small text-primary">Zarządzanie kontem</h2>
                            <v-divider class="mt-4 mb-8"></v-divider>
                        </v-card-title>
                    </v-card-item>

                    <v-card-text class="pt-0 fg-body-small">
                        <v-btn prepend-icon="mdi-fingerprint" variant="outlined"
                            class="w-100 mb-4 on-surface d-flex flex-row justify-center on-primary-container" height="40"
                            @click="showConfirmFingerprintResetDialog = !showConfirmFingerprintResetDialog">
                            <p>Zresetuj odcisk palca</p>
                        </v-btn>
                        <v-btn prepend-icon="mdi-delete" variant="outlined"
                            class="w-100 on-error-container  d-flex flex-row justify-center" height="40"
                            @click="showConfirmAccountDeletionDialog = !showConfirmAccountDeletionDialog">
                            <p>Usuń Konto</p>
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col class="px-4">
                <v-card class="mb-8 pa-8 bg-surface-1" variant="elevated" elevation="4">
                    <v-card-item>
                        <v-card-title>
                            <h2 class="text-h5 text-center fg-headline-small text-primary">Historia Transakcji</h2>
                            <v-divider class="mt-4 mb-8"></v-divider>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text class="pt-0 fg-body-small">
                        <v-list class="bg-surface-1">
                            <v-list-item v-for="transaction in transactions.slice(0, 7)" :key="transaction.date"
                                class="w-100 my-2 bg-surface-2" lines="three" variant="elevated" :elevation="2">
                                <v-list-item-title class="fg-body-large">{{ transaction.title }}</v-list-item-title>
                                <v-list-item-subtitle class="fg-body-small font-weight-regular">
                                    <p class="text-primary">{{ transaction.cardNumber }}</p>
                                    <p class="text-secondary">{{ transaction.date }}</p>
                                </v-list-item-subtitle>
                                <template v-slot:append>
                                    <v-list-item-title class="fg-title-medium text-right">
                                        <p class="text-secondary">{{ transaction.amount }} zł</p>
                                    </v-list-item-title>
                                </template>
                            </v-list-item>
                        </v-list>
                        <v-btn variant="outlined" class="w-100 on-surface d-flex flex-row justify-center mt-4" height="40"
                            @click="showTransactionsDrawer = !showTransactionsDrawer">
                            <p>Pokaż więcej</p>
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<style scoped lang="scss">
.bg-surface-1 {
    background-color: mix(#FFBA32, #1D1B1E, 5%)
}

.bg-surface-2 {
    background-color: mix(#FFBA32, #1D1B1E, 8%)
}
</style>
