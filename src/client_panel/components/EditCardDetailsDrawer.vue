<script lang="ts" setup>
import { ref, watch, } from 'vue';



const props = defineProps({
    value: {
        type: Boolean,
        default: false,
    },
});

const show = ref(props.value);

watch(() => props.value, (value: boolean) => {
    show.value = value;
});

const emit = defineEmits(['update:modelValue']);

</script>
<template>
    <v-navigation-drawer class="" temporary location="right" v-model="show"
        @update:model-value="emit('update:modelValue', show)" width="419">
        <div class="d-flex flex-column h-screen pa-8">
            <v-list>
                <h2 class="fg-title-large text-primary mb-8">Edycja metody płatności</h2>
                <v-text-field label="Numer karty" variant="outlined"
                    prepend-inner-icon="mdi-credit-card-outline"></v-text-field>

                <v-row no-gutters>
                    <v-col cols="8 mr-4">
                        <v-text-field label="Data ważności" prepend-inner-icon="mdi-calendar-today"
                            variant="outlined"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="CVV" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
                <v-text-field label="Imię i nazwisko posiadacza karty" prepend-inner-icon="mdi-account-outline"
                    variant="outlined"></v-text-field>
            </v-list>
            <div style="position: absolute; bottom: 32px; width: 100%;">
                <v-divider></v-divider>
                <div class="d-flex flex-row pt-4">
                    <v-btn class="mr-4" color="primary">Zapisz</v-btn>
                    <v-btn color="primary" variant="outlined">Anuluj</v-btn>
                </div>
            </div>
        </div>

    </v-navigation-drawer>
</template>