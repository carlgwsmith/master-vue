import {ref} from 'vue';

const bookings = ref([]);
const loading = ref(false)
const error = ref(null);


async function fetchBookings() {
 loading.value = true
 error.value = null;
  try {
    const response = await fetch('http://localhost:3001/bookings')
 bookings.value = await response.json()
  } catch (e) {
    console.error("err", error)
   loading.value = false
   error.value = e
  } finally {
   loading.value = false
  }
}

async function registerEvent(event) {

  if(bookings.value.some(booking => booking.eventId === event.id && booking.userId === 1)){
    alert("you are already registered for this event")
    return;
  }
  const newBooking = {
    id: Date.now().toString(),
    eventId: event.id,
    userId: 1,
    name: event.title,
    status: 'pending'
  }

  bookings.value.push(newBooking)
  try {
     const response = await fetch('http://localhost:3001/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...newBooking,
      status: 'confirmed'
    })
  })
  if(response.ok){
    // const data = await response.json()
    // console.log(data)
    const index = bookings.value.findIndex(booking => booking.id === newBooking.id)
    bookings.value[index] = await response.json()
  } else{
    throw new Error('booking failed to confirm')
  }
    
  } catch (error) {
    console.error("booking failed to confirm", error)
    bookings.value = bookings.value.filter(booking => booking.id !== newBooking.id)
  }
}

async function cancelBooking(key) {
  const booking = bookings.value[key]
  bookings.value.splice(key, 1)
  try {
    const response = await fetch(`http://localhost:3001/bookings/${booking.id}`, {
      method: 'DELETE'
    })
    if(response.ok){
      bookings.value.splice(key, 1)
    }
    else{
      console.error('booking failed to cancel')
    }
  } catch (error) {
    console.error("booking failed to cancel", error)
    bookings.value.push(booking)
  }
}

export default function useBookings(){
    return {bookings, loading, fetchBookings, registerEvent, cancelBooking, error}
}