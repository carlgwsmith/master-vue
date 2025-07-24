<script setup lang="ts">
import {ref, computed, Transition} from 'vue'
import type {Tab,TabKey} from './types'
import TabLink from './components/TabLink.vue'
import GeneralSettings from './components/GeneralSettings.vue'
import NotificationSettings from './components/NotificationSettings.vue'
import PrivacySettings from './components/PrivacySettings.vue'
import SlideTransition from './components/SlideTransition.vue'
import NotificationList from './components/NotificationList.vue'

const tabs: Tab[]=[
  {
    key:'General',
    label:'General',
    component: GeneralSettings
  },
  {
    key:'Notifications',
    label:'Notifications',
    component: NotificationSettings
  },
  {
    key:'Privacy',
    label:'Privacy',
    component: PrivacySettings
  }
]
const currentTabComponent = computed(()=>{
  return tabs.find(tab => tab.key === currentTab.value)?.component
})
const currentTab = ref<TabKey>('General')
</script>

<template>
  <!-- <TabLink/> -->
  <div class="max-w-2xl mx-auto px-4">
        <nav class="font-medium text-slate-500 border-slate-200 border-b-2">
            <ul class="flex space-x-8 flex-wrap ">
                <li v-for="tab in tabs" :key="tab.key">
                  <TabLink :tab="tab" :currentTab="currentTab" @click="()=>{currentTab = tab.key}"/>
                  </li>
            </ul>
        </nav>
        <SlideTransition>
          <KeepAlive>
            <component :is="currentTabComponent"/>
          </KeepAlive>
        </SlideTransition>
        <NotificationList/>
    </div>
</template>


