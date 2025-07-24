import { defineStore } from "pinia";
import EditRecipe from "../views/EditRecipe.vue";

interface Recipe {
    title:string,
    id?: string,
    ingredients:string[],
    instructions:string[],
    favorite: boolean
}
interface RecipeState {
    searchQuery: string,
    recipes: Recipe[],
}


export const useRecipeStore = defineStore('recipe', {
    state: ():RecipeState => ({
        searchQuery: '',
        recipes: [
            {
                title: 'StirFried Green Beans',
                ingredients: ['greenbean', 'oil', 'soy sauce'],
                instructions: ['cut beans', 'marinate beans', 'heat oil', 'stir fry'],
                id: Date.now().toString(),
                favorite: false
            }
        ]
    }),
    getters: {
        getRecipes: (state:RecipeState) => state.recipes,
        getRecipeById: (state:RecipeState) => (id:string) => {
            return state.recipes.find(recipe => recipe.id === id)
        },
        filteredRecipesInStore: (state:RecipeState) => {
            console.log('store query', state.searchQuery)
            return state.recipes.filter(recipe => recipe.title.toLocaleLowerCase().includes(state.searchQuery.toLocaleLowerCase()))
        },
        filteredRecipesOutStore: (state: RecipeState) => (searchQueryInComponent: string) => {
            console.log(searchQueryInComponent)
            return state.recipes.filter(recipe => recipe.title.toLocaleLowerCase().includes(searchQueryInComponent.toLocaleLowerCase()))
        },
        getFavorites: (state:RecipeState) => {
            return state.recipes.filter(recipe => recipe.favorite)
        }
    },
    actions: {
        addRecipe(recipe:Recipe) {
            this.recipes.push(recipe)
        }, 
        editRecipe(recipe:Recipe) {
            this.recipes = this.recipes.map(r => {
                if (r.id === recipe.id) {
                    return recipe
                }
                return r
            })
        },
        favoriteRecipe(id:string) {
            const recipe = this.getRecipeById(id);
            if (recipe) {
                recipe.favorite = !recipe.favorite;
            }
            
        },

    }
})
