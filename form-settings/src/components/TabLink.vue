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
    <div @click="handleClick" :class="[isCurrent ? 'underline font-bold': '', 'cursor-pointer']">
        {{tab.label}}
    </div>
</template>