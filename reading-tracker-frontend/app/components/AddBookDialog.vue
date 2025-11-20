<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { defineProps, defineEmits } from 'vue';
import type { BookCreate, BookUpdate, Book } from '../utils/api';

const props = defineProps<{
  modelValue: boolean;
  book?: Book | null;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'save', book: BookCreate | BookUpdate): void;
}>();

const isEditing = computed(() => !!props.book);

const dialog = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const form = ref<BookCreate>({
  title: '',
  author: '',
  start_date: null,
  end_date: null,
  status: 'want to read',
});

const valid = ref(false);
const titleRules = [(v: string) => !!v || 'El título es requerido'];
const authorRules = [(v: string) => !!v || 'El autor es requerido'];

const showStartDateField = computed(() => {
  return form.value.status === 'reading' || form.value.status === 'finished';
});

const showDateFields = computed(() => {
  return form.value.status === 'finished';
});

// Watch for book prop changes to populate form when editing
watch(() => props.book, (book) => {
  if (book) {
    form.value = {
      title: book.title,
      author: book.author,
      start_date: book.start_date || null,
      end_date: book.end_date || null,
      status: book.status,
    };
    valid.value = true;
  }
}, { immediate: true });

// Watch for dialog open/close to reset form when adding
watch(() => props.modelValue, (isOpen) => {
  if (isOpen && !props.book) {
    // Reset form for new book
    form.value = {
      title: '',
      author: '',
      start_date: null,
      end_date: null,
      status: 'want to read',
    };
    valid.value = false;
  }
});

function close() {
  emit('update:modelValue', false);
}

function save() {
  if (valid.value) {
    const bookData: BookCreate | BookUpdate = {
      title: form.value.title,
      author: form.value.author,
      start_date: form.value.start_date || null,
      end_date: form.value.end_date || null,
      status: form.value.status,
    };
    emit('save', bookData);
    close();
  }
}
</script>

<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>{{ isEditing ? 'Editar Libro' : 'Agregar Libro' }}</v-card-title>
      <v-card-text>
        <v-form v-model="valid" lazy-validation>
          <v-text-field
            v-model="form.title"
            :rules="titleRules"
            label="Título"
            required
          />
          <v-text-field
            v-model="form.author"
            :rules="authorRules"
            label="Autor"
            required
          />
          <v-select
            v-model="form.status"
            :items="['reading', 'finished', 'want to read']"
            label="Status"
            required
          />
          <v-text-field
            v-if="showStartDateField"
            v-model="form.start_date"
            label="Start date"
            type="date"
            prepend-icon="mdi-calendar"
          />
          <v-text-field
            v-if="showDateFields"
            v-model="form.end_date"
            label="End date"
            type="date"
            prepend-icon="mdi-calendar"
          />
          
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="close">Cancelar</v-btn>
        <v-btn color="primary" :disabled="!valid" @click="save">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>