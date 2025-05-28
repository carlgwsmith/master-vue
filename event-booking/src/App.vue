<script setup>
import EventList from './components/EventList.vue';
import BookingList from './components/BookingList.vue';

</script>

<template>
  <div class="container mx-auto my-8 space-y-8">
    <h1 class="text-3xl font-bold text-center">Event booker</h1>
    <h2 class="text-3xl font-medium">All events</h2>
    <EventList/>
    <h2 class="text-3xl font-medium mt-6">Your bookings</h2>
    <BookingList/>
  </div>
</template>
