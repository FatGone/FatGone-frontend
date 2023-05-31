<script lang="ts" setup>

import { computed, ref, type PropType } from 'vue';

const buttonHtml = ref<HTMLElement | null>();

type TVariant = 'primary' | 'secondary';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    variant: {
        type: String as PropType<TVariant>,
        required: false,
        default: 'primary',
    },
    icon: {
        type: String,
        required: false,
    }
});

const buttonClasses = computed(() => {
    return {
        'mdc-button--icon-leading': props.icon !== undefined,
        [props.variant]: true,
    };
});


</script>


<template>
    <button class="bg-primary rounded-pill fg-label-large pt-2 pb-2 pr-4 pl-4" ref="buttonHtml" :class="buttonClasses">
        <span>{{ props.label }}</span>
    </button>
</template>

<style lang="scss"></style>