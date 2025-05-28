<script setup>
import RoundedButton from './RoundedButton.vue';
defineProps({
    retry:{
        type: Function,
        required: false,
    }
})
</script>
<template>
    <div class="space-y-4 items-center flex flex-col p-4 border-2 border-slate-300 rounded-md bg-slate-50 drop-shadow-blue-200 shadow-md">
        <div class="text-red-500">
      <slot name="message" ></slot>
      </div>
      <RoundedButton @click="fetchEvents" v-if="retry">Retry</RoundedButton>
    </div>
</template>