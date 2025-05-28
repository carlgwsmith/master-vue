<script setup lang="ts">
import {ref} from 'vue'
import type {Tab,TabKey} from './types'
import TabLink from './components/TabLink.vue'
const tabs: Tab[]=[
  {
    key:'General',
    label:'General'
  },
  {
    key:'Notifications',
    label:'Notifications'
  },
  {
    key:'Privacy',
    label:'Privacy'
  }
]

const currentTab = ref<TabKey>('General' as TabKey)
</script>

<template>
  <!-- <TabLink/> -->
  <div class="max-w-2xl mx-auto px-4">
        <nav class="font-medium text-slate-500 border-gray-500">
            <ul class="flex space-x-8 flex-wrap">
                <li v-for="tab in tabs" :key="tab.key"><TabLink :tab="tab" :currentTab="currentTab" @click="()=>{currentTab = tab.key}"/></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
