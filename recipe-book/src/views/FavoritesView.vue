<script setup lang="ts">
import { useRecipeStore } from '../stores/recipeStore';

const store = useRecipeStore();
const favoriteRecipes = store.getFavorites


</script>
<template>
    <div>Favorites</div>

    <div v-if="favoriteRecipes.length > 0">
        <ul>
            <li v-for="recipe in favoriteRecipes" :key="recipe.id">
                <RouterLink :to="{ name: 'recipe', params: { id: recipe.id }}">{{ recipe.title }}</RouterLink>
                <RouterLink :to="{ name: 'editrecipe', params: { id: recipe.id }}">
                    <span class="cursor-pointer m-2 p-[2px] border-1">Edit</span>
                </RouterLink>
                <span class="cursor-pointer m-2 p-[2px] border-1" :class="recipe.favorite ? 'bg-red-300' : ''" @click="store.favoriteRecipe(recipe.id as string)">Unfavorite</span>
            </li>
        </ul>
    </div>
    <div v-else>
        No favorite recipes found.
    </div>
</template>