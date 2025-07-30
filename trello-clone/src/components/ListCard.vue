<script setup lang="ts">
import Draggable from 'vuedraggable';
import Child from './child.vue';
import type { Card, List } from '../types.ts';

defineEmits(['openModal']);

defineProps<{
  lists: List[]
}>();

</script>

<template>
    <main class="p-5 font-sans">
        <div class="flex gap-5 py-5 overflow-x-auto">
            <div class="bg-gray-100 p-5 rounded-lg shadow-md flex flex-col" v-for="(list,listIndex) in lists" :key="list.id">
                <h2 class="font-medium text-xl">{{ list.title  }}</h2>
                <Draggable
                    :list="list.cards"
                    group="cards"
                    item-key="id"
                    >
                    <template #item="{ element }">
                        <div class="bg-white p-2 my-2 rounded shadow cursor-pointer" @click="$emit('openModal', listIndex, element)">
                            <span class="text-sm font-medium">{{ element.title }}</span>
                            <p class="text-xs">{{element.description}}</p>
                        </div>
                    </template>
                </Draggable>
                <button class="w-full mt-2 p-2 text-blue-500 hover:bg-white rounded text-sm font-medium" @click="$emit('openModal', listIndex)">+ Add another card</button>
            </div>
        </div>
        <!-- <Child :items="lists">
            <template #item="props">
                <p class="text-red-500">{{ props.item.title }} - {{ props.item.description }}</p>
            </template>
        </Child> -->
    </main>
</template>