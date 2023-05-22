<script setup lang="ts">
import RailItem from '@/common/components/RailItem.vue';
import fgSmall from '@/assets/svg/fg-small.svg';
</script>

<template>
    <v-layout>
        <v-navigation-drawer permanent rail rail-width="80" :expand-on-hover="false">
            <v-list color="transparent" class="d-flex flex-column align-center">
                <v-list-item class="d-flex justify-center align-center mb-8 mt-16" to="/">
                    <v-avatar size="small" :image="fgSmall" rounded="0"></v-avatar>
                </v-list-item>
                <RailItem icon="mdi-account" text="Konto" navigate-to="/panel/account" />
                <RailItem icon="mdi-calendar-month" text="Terminarz" navigate-to="/panel/calendar" />
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <RouterView />
        </v-main>
    </v-layout>
</template>