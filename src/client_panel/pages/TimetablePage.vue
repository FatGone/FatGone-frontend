<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timeGrid'
import type { CalendarOptions } from '@fullcalendar/core'
import type { EventSourceInput } from '@fullcalendar/core'
import TimetableClubSelectionDrawer from '@/client_panel/components/TimetableClubSelectionDrawer.vue'
import { ref } from 'vue';

const selectedSite = ref('');

function setSelectedSite(site: string) {
    selectedSite.value = site;
}


const events: EventSourceInput = [

    {
        title: 'Sesja odprężająca w saunie',
        daysOfWeek: [1, 3, 5],
        startTime: '18:00:00',
        endTime: '19:00:00',
        startRecur: '2023-05-01',
        endRecur: '2023-06-30',
        color: '#5A3D59',
        textColor: '#FED7F9',
        display: 'block'
    },
    {
        title: 'Dyżur instruktora - Maciej Kowalski',
        daysOfWeek: [1, 3, 5],
        startTime: '13:00:00',
        endTime: '18:00:00',
        startRecur: '2023-05-01',
        endRecur: '2023-06-30',
        color: '#404659',
        textColor: '#DCE2F9',
        display: 'block'
    },
    {
        title: 'Dyżur instruktora - Damian Nowak',
        daysOfWeek: [0, 2, 4],
        startTime: '10:00:00',
        endTime: '18:00:00',
        startRecur: '2023-05-01',
        endRecur: '2023-06-30',
        color: '#404659',
        textColor: '#DCE2F9',
        display: 'block'
    },
    {
        title: "Yoga - Zajęcia grupowe",
        daysOfWeek: [1, 3, 5],
        startTime: '15:00:00',
        endTime: '16:00:00',
        startRecur: '2023-05-01',
        endRecur: '2023-06-30',
        color: '#5A3D59',
        textColor: '#FED7F9',
        display: 'block'
    },
    {
        title: "Zumba - Zajęcia grupowe",
        daysOfWeek: [0, 2, 4],
        startTime: '15:30:00',
        endTime: '16:30:00',
        startRecur: '2023-05-01',
        endRecur: '2023-06-30',
        color: '#5A3D59',
        textColor: '#FED7F9',
        display: 'block'
    },
    {
        title: "Puchar FatGone w wyciskaniu leżąc",
        start: '2023-05-31 10:00:00',
        end: '2023-05-31 17:30:00',
        color: '#B2C5FF',
        textColor: '#002C72',
        display: 'block'
    }
]


const calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
    themeSystem: 'bootstrap',
    events: events,
    expandRows: true,
    allDaySlot: false,
    headerToolbar: {
        left: 'prev,next,today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
    },
    slotMaxTime: '21:00:00',
    slotMinTime: '08:00:00',
    slotDuration: '00:30:00',
    slotLabelInterval: '00:30:00',
    buttonText: {
        today: 'Dzisiaj',
        month: 'Miesiąc',
        week: 'Tydzień',
        day: 'Dzień',
        list: 'Lista'
    },
    slotLabelFormat: {
        hour: 'numeric',
        minute: '2-digit',
        meridiem: 'short',
        omitZeroMinute: false,

    },
    locale: 'pl',

}

</script>


<template>
    <TimetableClubSelectionDrawer />
    <v-container>
        <v-icon icon="mdi p"></v-icon>
        <FullCalendar :options="calendarOptions" />
    </v-container>
</template>

<style >
.fc .fc-button-primary {
    background-color: #B2C5FF !important;
    color: #002C72 !important;
}

.fc .fc-timegrid-col.fc-day-today {
    background-color: #104199 !important;
}
</style>