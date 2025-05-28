<script setup>
defineProps({
    cancelBtn: {
        type: Boolean,
        default: false
    }
})
defineEmits([
    'click'
]);
</script>
<template>
    <button @click="$emit('click')" class="border-1 rounded py-[4px] px-[8px] text-[12px] mt-4 font-medium hover:brightness-[92%] hover:cursor-pointer" :class="cancelBtn === true ? 'bg-red-100 border-red-400': 'bg-green-100 border-green-400'">
        <slot />
    </button>
</template>