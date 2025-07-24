<script setup lang="ts">
import {ref} from 'vue'
import { useSettings } from '../composables/useSettings'
import { useNotifications } from '../composables/useNotifications';

const {general} = useSettings();
const {addNotification}= useNotifications();
const save = ()=>{
    addNotification('General Settings Saved')
}

</script>
<template>
    <div>
       <h2 class="text-2xl my-4">General</h2>
       <form @submit.prevent="save">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Username" v-model="general.username"></input>
        <label for="email" class="mt-4">Email Address</label>
        <input type="text" id="email" placeholder="email" v-model="general.email"></input>
        <label for="gender" class="mt-4">Gender</label>
        <div>
            <input type="radio" id="male" v-model="general.gender" value="male">Male</input >
            <input type="radio" id="female" v-model="general.gender" value="female">Female</input >
            <input type="radio" id="other" v-model="general.gender" value="other">Other</input >
        </div>
        <label for="country" class="mt-4">Country</label>
        <select id="country" v-model="general.country">
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="mexico">Mexico</option>
        </select>
        <button type="submit" class="mt-4 btn-primary">Submit</button>
       </form>
    </div>
</template>

<style lang="scss" scoped>

</style>