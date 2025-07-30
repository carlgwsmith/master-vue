<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import ListCard from './components/ListCard.vue';
import ModalDialog from './components/ModalDialog.vue';
import { computed, reactive } from 'vue';
import type { Card, List } from './types';

import { ref } from 'vue';

const editingCard = ref<Card | null>(null);
const editingListIndex = ref<number | null>(null);
const modalMode = computed(() => editingCard.value ? 'edit' : 'add');
const lists = reactive<List[]>([
  {
    id: 1,
    title: 'To Do',
    cards: [
      { id: 1, title: 'Task 1', description: 'Description for Task 1' },
      { id: 2, title: 'Task 2', description: 'Description for Task 2' }
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    cards: [
      { id: 3, title: 'Task 3', description: 'Description for Task 3' },
      { id: 4, title: 'Task 4', description: 'Description for Task 4' }
    ]
  },
  {
    id: 3,
    title: 'Done',
    cards: [{ id: 5, title: 'Task 5', description: 'Description for Task 5' }]
  }
])
const isModalOpen = ref(false);
function openModal(listIndex: number, card?: Card) {
  editingListIndex.value = listIndex;
  editingCard.value = card || null;
  isModalOpen.value = !isModalOpen.value;

  console.log(listIndex, card, editingCard.value, isModalOpen.value);
}
function addCard(card: Card) {
  console.log('Card added:', card);
  const listIndex = editingListIndex.value;
  if (listIndex == null) {
   return
  }
  if(modalMode.value === 'edit') {
    console.log('Editing card:', editingCard.value);
    // Logic to update the card if in edit mode
    const index = lists[listIndex].cards.findIndex((c: Card) => c.id === editingCard.value?.id);
    if (index !== -1) {
      lists[listIndex].cards[index] = { ...card, id: editingCard.value?.id }; // Preserve the ID
    }
  } else {
    console.log('Adding new card');
    // Logic to add a new card
    card.id = Date.now(); // Simple ID generation
     lists[listIndex].cards.push(card);
     console.log(card, lists)
  }
  // Logic to add the card to the appropriate list
  isModalOpen.value = false; // Close modal after adding card
}
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <ListCard @openModal="openModal" :lists="lists"/>
      <ModalDialog :showModal="isModalOpen" :card="editingCard" :mode="modalMode" @close="openModal" @addCard="addCard"/>
    </div>
  </header>

</template>