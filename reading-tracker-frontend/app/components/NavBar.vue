<template>
  <v-app-bar app color="red-darken-4">
    <v-toolbar-title>Juanin's Books</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn 
    color="white"
    font-weight="bold"
    font-size="1.5rem"
    @click="openAddModal">
      Add book
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const openAddModal = inject<() => void>('openAddBookDialog', () => {
  console.warn('openAddBookDialog not provided');
});
</script>
