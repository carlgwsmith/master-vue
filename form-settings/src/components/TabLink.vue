<script setup lang="ts">
import {computed} from 'vue'
import type {Tab,TabKey} from '../types'
const props = defineProps<{
   currentTab:string;
   tab:Tab;
}>()

const isCurrent = computed(()=>{
    return props.currentTab === props.tab.key
})

const emit = defineEmits<{
    click:[key: TabKey]
}>()

const handleClick = () => {
    emit('click', props.tab.key)
}
</script>
<template>
    <button @click="handleClick" :class="[isCurrent ? 'text-blue-500 border-blue-500': 'border-slate-100', 'cursor-pointer pb-2 border-b-4']">
        {{tab.label}}
    </button>
</template>