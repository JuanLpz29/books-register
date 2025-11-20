<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { Book } from '../utils/api';

const props = defineProps<{
  book: Book;
}>();

const emit = defineEmits<{
  (e: 'edit', id: number): void;
  (e: 'delete', id: number): void;
}>();

function onEdit() {
  emit('edit', props.book.id);
}

function onDelete() {
  emit('delete', props.book.id);
}

function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    'reading': 'blue',
    'finished': 'green',
    'want to read': 'orange',
  };
  return statusColors[status] || 'grey';
}
</script>

<template>
  <v-card class="ma-3" style="background-color: #EEEEEE;">
    <v-card-title style="background-color: #B71C1C; color: white;">{{ book.title }}</v-card-title>
    <v-card-subtitle class="mt-4" style="color: #000000; font-weight: bolder;">{{ book.author }}</v-card-subtitle>
    <v-card-text>
      <div v-if="book.comments">{{ book.comments }}</div>
      <div class="mt-2">
        <v-chip small :color="getStatusColor(book.status)" style="font-weight: bolder;">{{ book.status }}</v-chip>
        <v-chip v-if="book.rating" small class="ml-2">{{ book.rating }}/5</v-chip>
        <v-card-text v-if="book.start_date">Start on 
          <v-chip small class="ml-2">{{ book.start_date }}</v-chip></v-card-text>
        <v-card-text v-if="book.end_date">End on
          <v-chip small class="ml-2">{{ book.end_date }}</v-chip></v-card-text>
      </div>
    </v-card-text>
    <v-divider class="mx-2 my-0" style="border-color: #B71C1C; border-width: 1px;"></v-divider>
    <v-card-actions>
      <v-btn color="primary" @click="onEdit" icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn color="error" @click="onDelete" icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>