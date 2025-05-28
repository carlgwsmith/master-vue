<script setup>
import {ref, onMounted} from 'vue'
import EventCard from './EventCard.vue';
import LoadingSkeleton from './LoadingSkeleton.vue'
import RoundedButton from './RoundedButton.vue';
import useBookings from '../composables/useBookings';
import ErrorCard from './ErrorCard.vue';

const {registerEvent} = useBookings();

const loading = ref(false);
const events = ref([]);
const fetchError = ref(null);


async function fetchEvents() {
  loading.value = true
  fetchError.value = null
  try {
    const response = await fetch('http://localhost:3001/events')
    events.value = await response.json()
  } catch (e) {
    fetchError.value = e
  } finally {
    loading.value = false
  }
}

onMounted(()=>{
    fetchEvents()
});
</script>
<template>
  <template v-if="fetchError">
    <ErrorCard :retry="fetchEvents">
      <template #message>
        couldn't load events at the moments. Please try again
      </template>
      </ErrorCard>
  </template>
  <template v-else>
    <div class="grid grid-cols-2 gap-4 mt-4" >
      <template v-if="!loading">
        <template v-if="events.length">
        <EventCard v-for="(eventItem, i) in events" :key="i" @register="registerEvent(eventItem)" :name="eventItem.title" :description="eventItem.description" :date="eventItem.date"/>
        </template>
        <template v-else>
          <div  class="col-span-2 text-center">
            <p class="text-slate-500 text-[12px]">No events found</p>
            </div>
        </template>
      </template>
      <template v-else>
        <LoadingSkeleton isEvent v-for="i in 4" :key="i"/>
      </template>
    </div>
    </template>
</template>