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
    <button class="bg-primary" ref="buttonHtml" :class="buttonClasses">
        <span>{{ props.label }}</span>
    </button>
</template>

<style lang="scss">
button {
    border-radius: 20px;
    margin-top: 10px;
}

span {
    font-family: Oswald-VariableFont_wght;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 24px;
}
</style>