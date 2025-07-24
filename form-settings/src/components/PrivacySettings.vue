<script setup lang="ts">
import {ref} from 'vue'
import { useSettings } from '../composables/useSettings'

const {privacy} = useSettings();

</script>
<template>
    <div>
       <h2 class="text-2xl my-4">Privacy</h2>
       <form action="">
        <label for="visibility" class="mt-4">Visibility</label>
        <select id="visibility" v-model="privacy.visibility">
            <option value="private">Private</option>
            <option value="public">Public</option>
        </select>
        <div class="flex items-center gap-2 mt-4">
        <label for="searchable">Searchable</label>
        <input type="checkbox" id="searchable" v-model="privacy.searchable" />
        </div>
                {{ privacy }}
        <button type="submit" class="mt-4 btn-primary">Submit</button>
       </form>
    </div>
</template>

<style lang="scss" scoped>

</style>