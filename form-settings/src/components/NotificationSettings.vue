<script setup lang="ts">
import { useSettings } from '../composables/useSettings'

const {notifications} = useSettings();


</script>
<template>
    <div>
        <h2 class="text-2xl my-4">Notifications</h2>
        <form action="">
        <label for="notifications" class="mt-4">Enable Notifications</label>
        <div class="flex gap-4">
            <div>
                <input type="checkbox" id="email" v-model="notifications.email">Email</input >
            </div>
            <div>
                <input type="checkbox" id="sms" v-model="notifications.sms">SMS</input >
            </div>
        </div>
        {{ notifications }}
        <button type="submit" class="mt-4 btn-primary">Submit</button>
       </form>
    </div>
</template>

<style lang="scss" scoped>

</style>