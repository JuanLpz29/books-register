<template>
  <v-app style="background-color: #212121;">
    <NavBar />
    <v-main style="background-color: #212121;">
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import NavBar from './components/NavBar.vue';

const showAddDialog = ref(false);

function openAddModal() {
  showAddDialog.value = true;
}

// Provide function for NavBar to use
provide('openAddBookDialog', openAddModal);
provide('showAddDialog', showAddDialog);
</script>