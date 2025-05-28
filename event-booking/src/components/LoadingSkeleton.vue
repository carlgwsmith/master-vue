<script setup>
import RoundedCard from './RoundedCard.vue';

defineProps({
    isEvent: {
        type: Boolean,
        default: false
    }
});
</script>
<template>
    <div>
    <RoundedCard class="animate-pulse animate-slide-right duration-300"
    :class="isEvent ? 'min-h-[235px]' : 'min-h-[126px]'">
        <template #name>
            <div class="h-[40px] bg-slate-300 rounded"></div>
        </template>
        <template #date class="mt-[8px]" v-if="isEvent">
            <div class="h-[24px] bg-slate-300 rounded mt-[8px]"></div>
        </template>
        <template #description v-if="isEvent">
            <div class="h-[60px] bg-slate-300 rounded mt-[8px]"></div>
        </template>
        <template #button>
            <div class="float-right">
                <div class="h-[30px] w-[80px] bg-slate-300 rounded mt-[10px]"></div>
            </div>
        </template>
    </RoundedCard>
    </div>
</template>