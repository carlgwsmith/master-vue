<script setup lang="ts">
import { RouterLink } from 'vue-router';

const links = [
    { text: 'Home', route: '/' },
    { text: 'About', route: '/about' },
    { text: 'Favorites', route: '/favorites' },
    {text: 'Add Recipe', route:'/addrecipe'}
];


</script>
<template>
    <header>
        <nav class="bg-gray-800 p-4 text-white">
            <ul class="flex justify-center space-x-4">
                <li v-for="link in links"><RouterLink :to="link.route">{{ link.text }}</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
.router-link-active{
    font-weight: bold;
    text-decoration: underline
}
</style>