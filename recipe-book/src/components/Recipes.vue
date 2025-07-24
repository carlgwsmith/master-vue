<script setup lang="ts">
import { useRecipeStore } from '../stores/recipeStore';
import { RouterLink } from 'vue-router';


const store = useRecipeStore();
const recipes = store.getRecipes;


</script>

<template>
    <div v-if="store.recipes.length > 0">
        <ul>
            <li v-for="recipe in recipes" :key="recipe.id">
                <RouterLink :to="{ name: 'recipe', params: { id: recipe.id }}">{{ recipe.title }}</RouterLink><RouterLink :to="{ name: 'editrecipe', params: { id: recipe.id }}"><span class="cursor-pointer m-2 p-[2px] border-1">Edit</span></RouterLink> <span class="cursor-pointer m-2 p-[2px] border-1" :class="recipe.favorite ? 'bg-red-300' : ''" @click="store.favoriteRecipe(recipe.id as string)">Favorite</span></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>