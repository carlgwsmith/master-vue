<script setup>
import { onMounted } from 'vue';
import useBookings from '../composables/useBookings';
import BookingItem from './BookingItem.vue';
import LoadingSkeleton from './LoadingSkeleton.vue'
import ErrorCard from './ErrorCard.vue';
const {loading, bookings, cancelBooking, fetchBookings, error} = useBookings();

onMounted(()=>{
  fetchBookings()
});
</script>
<template>
    <template v-if="error">
            <ErrorCard :retry="fetchBookings">
                <template #message>
        couldn't load booking at the moments. Please try again
      </template>
            </ErrorCard>
        </template>
        <template v-else>
    <div class="grid grid-cols-2 gap-4 mt-4">
        <template v-if="!bookings.length && !loading && !error">
        <ErrorCard class="col-span-2">
            <template #message>
                <div class="text-slate-500">No bookings yet, register for an event</div>
            </template>
        </ErrorCard>
    </template>
            <template v-else-if="!loading">
    <BookingItem v-for="(booking,i) in bookings" :key="booking.id" :title="booking.name" :status="booking.status" @cancel="cancelBooking(i)"/>
            </template>
    <template v-else>
      <LoadingSkeleton v-for="i in 4" :key="i"/>
    </template>
   </div>
   </template>
</template>