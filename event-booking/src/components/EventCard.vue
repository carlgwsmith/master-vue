<script setup>
import RoundedButton from './RoundedButton.vue';
import RoundedCard from './RoundedCard.vue';
const props = defineProps({
name: String,
description: String,
date: String
});

defineEmits(['register']);
</script>
<template>
<div>
    <RoundedCard>
        <template #name>
            <h3 class="text-xl text-medium">{{ name }}</h3>
        </template>
        <template #date>
            <p class="text-xs">{{ date }}</p>
        </template>
        <template #description>
            <p class="text-sm">{{ description }}</p>
        </template>
        <template #button>
            <div class="text-right">
    <RoundedButton @click="$emit('register', i)" >Register</RoundedButton>
</div>
        </template>
    </RoundedCard>
</div>
</template>