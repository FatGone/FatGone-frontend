
<template>
    <v-navigation-drawer permanent>
        <v-list class="mt-n2">
            <v-list-item :ripple="false" :disabled="true">
                <v-list-item-title class="fg-title-medium on-surface">Łódź</v-list-item-title></v-list-item>
            <v-divider></v-divider>
            <v-list-item value="ldz-1" rounded="pill" class="mt-4 mb-2">
                <v-list-item-title class="fg-title-medium on-surface">ul. Rozwadowska
                    39a</v-list-item-title>
            </v-list-item>
            <v-list-item value="ldz-2" rounded="pill" class="mb-2">
                <v-list-item-title class="fg-title-medium on-surface">ul. Pomorska 21</v-list-item-title>
            </v-list-item>
            <v-list-item value="ldz-3" rounded="pill" class="mb-2">
                <v-list-item-title class="fg-title-medium on-surface">ul. Okulickiego 73b</v-list-item-title>
            </v-list-item>
            <v-list-item value="ldz-4" rounded="pill" class="mb-2">
                <v-list-item-title class="fg-title-medium on-surface">ul. Generała Ignacego Prądzyńskiego
                    13</v-list-item-title>
            </v-list-item>
            <v-list-item value="ldz-5" rounded="pill" class="mb-2">
                <v-list-item-title class="fg-title-medium on-surface">ul. Inflacka 87</v-list-item-title>
            </v-list-item>
            <v-list-item :ripple="false" :disabled="true" class="mt-4">
                <v-list-item-title class="fg-title-medium on-surface">Katowice</v-list-item-title></v-list-item>
            <v-divider></v-divider>
            <v-list-item value="kt-1" class="mt-4 mb-2" rounded="pill">
                <v-list-item-title class="fg-title-medium on-surface">ul. Generała Ignacego Prądzyńskiego
                    13</v-list-item-title>
            </v-list-item>
            <v-list-item value="kt-2" rounded="pill" class="mb-2">
                <v-list-item-title class="fg-title-medium on-surface">ul. Okulickiego 73b</v-list-item-title>
            </v-list-item>
            <v-list-item value="kt-3" rounded="pill" class="mb-2">
                <v-list-item-title class="fg-title-medium on-surface">ul. Inflacka 87</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>