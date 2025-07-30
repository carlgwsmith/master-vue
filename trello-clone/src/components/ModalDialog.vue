<script setup lang="ts">
import type { Card } from '@/types';
import { defineEmits,ref, watch } from 'vue';

const props = defineProps<{
  showModal: boolean
  card: Card | null
  mode: 'add' | 'edit'
}>();
defineEmits(['close', 'addCard'])


const localCard = ref<Card>({
  id: 0,
  title: '',
  description: ''
});

watch(() => props.card, (newCard) => {
  console.log(props.mode)
  if (newCard) {
    localCard.value = { ...newCard };
  } else {
    console.log(props.card)
    localCard.value = { id: 0, title: '', description: '' };
  }
}, { immediate: true });


</script>
<template>
    <div class="fixed inset-0 bg-[#000000c7] flex items-center justify-center font-sans" v-if="showModal">
        <div>
            <div class="bg-white p-5 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold mb-4 font-sans">{{ mode === 'add' ? 'Add Card' : 'Edit Card' }}</h2>
                <input type="text" placeholder="Card title" class="border p-2 w-full mb-4" v-model="localCard.title"/>
                <textarea placeholder="Card description" class="border p-2 w-full mb-4" rows="4" v-model="localCard.description"></textarea>
                <div class="flex justify-end gap-2">
                    <button class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600" @click="$emit('close')">Close</button>
                    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" @click="$emit('addCard', localCard)">Add Card</button>
                </div>
            </div>
            </div>
    </div>
</template>

<style scoped>

</style>