import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import AddRecipeView from '../views/AddRecipeView.vue'
import RecipeView from '../views/RecipeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import EditRecipe from '../views/EditRecipe.vue'

const routes = [
  { name: 'home', path: '/', component: HomeView },
  { path: '/home', redirect: '/' },
  { name: 'about', path: '/about', component: AboutView },
  { name: 'favorites', path: '/favorites', component: FavoritesView },
  { name: 'addrecipe', path: '/addrecipe', component: AddRecipeView },
  { name: 'editrecipe', path: '/editrecipe/:id', component: EditRecipe },
  {name: 'recipe', path: '/recipe/:id', alias:'/meal/:id', component: RecipeView},
//   { path: '/:catchAll(.*)', redirect: '/' },
  {path:'/:pathMatch(.*)*', name:'not-found', component: NotFoundView}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router