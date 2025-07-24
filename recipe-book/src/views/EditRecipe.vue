<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRecipeStore} from '../stores/recipeStore';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute()

const navigateToRecipe =(id: string)=>{
    router.push(
        {name: 'recipe',
        params:{id}
}
    )
}

const title = ref('')
const ingredients=ref()
const instructions = ref()

const recipeStore = useRecipeStore()
const recipesId = ref()

const parseInstructions = computed(()=>{
    return instructions.value.split('. ')
})

const parseIngredients = computed(()=>{
    return ingredients.value.split(', ')
})


const submitRecipe = ()=>{
    const newRecipe = {title: title.value, ingredients: parseIngredients.value, instructions: parseInstructions.value, id: recipesId.value}

    recipeStore.editRecipe(newRecipe)
    navigateToRecipe(recipesId.value)
}

onMounted(()=>{
    const id = route.params.id
    const recipe = recipeStore.getRecipeById(id as string);
    if(recipe){
        title.value = recipe.title
        ingredients.value = recipe.ingredients.join(', ')
        instructions.value = recipe.instructions.join('. ')
        recipesId.value = recipe.id
    } else{
        router.push({name: 'not-found'})
    }
})
</script>
<template>
<div class="flex justify-center pt-10">
    <form @submit.prevent="submitRecipe">
        <div><label class="block font-bold" for="title">Title</label>
        <input type="text" class="p-2 border-1 border-slate-300" id="title" v-model="title">
        </div>
        <div>
            <label  class="block font-bold" for="ingredients">ingredients(separate with comma) </label>
        <textarea class="p-2 border-1 border-slate-300" id="ingredients" v-model="ingredients"/>
        </div>
        <div class="mb-4">
            <label class="block font-bold" for="instructions">instructions (separate with a period)</label>
        <textarea class="p-2 border-1 border-slate-300" id="instructions" v-model="instructions"/>
        </div>
        <button class="p-2 bg-blue-500 text-white"
        type="submit">Submit</button>
    </form>
</div></template>