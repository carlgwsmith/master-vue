<script setup lang="ts">
import {  computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useRecipeStore } from '../stores/recipeStore';

const store = useRecipeStore()

const route = useRoute()

const recipe = computed(() => store.getRecipeById(route.params.id as string))

</script>
<template>
    <div class="px-5">
    <h1 class="text-[24px] font-bold">{{ recipe?.title }}</h1>
    <div class="pt-5">
        <p class="font-medium">ingredients:</p>
        <hr>
        <ul class="list-disc list-inside">
            <li v-for="ingredient in recipe?.ingredients">{{ ingredient }}</li>
        </ul>
    </div>

    <div class="pt-5">
        <p class="font-medium">instructions:</p>
        <hr>
        <ol class="list-inside list-decimal">
            <li v-for="instruction in recipe?.instructions">{{ instruction }}</li>
        </ol>
    </div>
    <nav class="mt-5">
        <ul><li>
            <RouterLink :to="{name:'recipe',params:{id:1}}">rECIPE1</RouterLink>
            <RouterLink :to="{name:'recipe',params:{id:2}}">Recipe2</RouterLink>
        </li></ul>
    </nav>
    </div>
</template>