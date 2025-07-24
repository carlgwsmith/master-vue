<script setup lang="ts">
import Recipes from '../components/Recipes.vue';
import { RouterLink } from 'vue-router';
import { useRecipeStore } from '../stores/recipeStore';
import { ref,computed} from 'vue';

const store = useRecipeStore()

const inComponentSearch = ref('')

const filteredRecipesInComponent = computed(() => {
    return store.filteredRecipesOutStore(inComponentSearch.value)
    })

</script>
<template>
    <div>
        <h2 class="text-[24px]">Home View</h2>
        <p class="text-[18px]">store query search</p>
        <div class="mb-2">
            <input type="text" class="border-slate-300 border-2" placeholder="search recipes" v-model="store.searchQuery"/>
            <div v-if="store.filteredRecipesInStore.length > 0">
                <ul>
                <li v-for="recipe in store.filteredRecipesInStore" :key="recipe.id">
                    <RouterLink :to="{ name: 'recipe', params: { id: recipe.id }}">{{ recipe.title }}</RouterLink>
                </li>
            </ul>
        </div>
            <div v-else>
                no recipes found
            </div>
        </div>

        <div class="mb-2">
            <p class="text-[18px]">component query search</p>
            <input type="text" class="border-slate-300 border-2" placeholder="search recipes in component" v-model="inComponentSearch"/>
            <div v-if="filteredRecipesInComponent.length > 0">
                <ul>
                <li v-for="recipe in filteredRecipesInComponent" :key="recipe.id">
                    <RouterLink :to="{ name: 'recipe', params: { id: recipe.id }}">{{ recipe.title }}</RouterLink>
                </li>
            </ul>
        </div>
            <div v-else>
                no recipes found
            </div>
        </div>
        <h2 class="text-[24px]">All Recipes List</h2>
        <Recipes/>
    </div>
</template>

<style scoped>

</style>