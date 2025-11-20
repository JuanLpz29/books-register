<script setup lang="ts">
import { ref, onMounted, inject, type Ref } from 'vue';
import BookCard from '../components/BookCard.vue';
import AddBookDialog from '../components/AddBookDialog.vue';
import { getBooks, createBook, deleteBook, updateBook, getBook, type Book, type BookCreate, type BookUpdate } from '../utils/api';

const books = ref<Book[]>([]);
const showAddDialog = inject<Ref<boolean>>('showAddDialog', ref(false));
const showEditDialog = ref(false);
const editingBook = ref<Book | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

async function fetchBooks() {
  loading.value = true;
  error.value = null;
  try {
    books.value = await getBooks();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Error fetching books';
    console.error('Error fetching books:', err);
  } finally {
    loading.value = false;
  }
}

async function handleSave(bookData: BookCreate | BookUpdate) {
  error.value = null;
  try {
    await createBook(bookData as BookCreate);
    showAddDialog.value = false;
    await fetchBooks();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Error creating book';
    console.error('Error creating book:', err);
  }
}

async function handleEdit(id: number) {
  error.value = null;
  try {
    const book = await getBook(id);
    editingBook.value = book;
    showEditDialog.value = true;
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Error loading book for editing';
    console.error('Error loading book:', err);
  }
}

async function handleUpdate(bookData: BookCreate | BookUpdate) {
  if (!editingBook.value) return;
  
  error.value = null;
  try {
    await updateBook(editingBook.value.id, bookData as BookUpdate);
    showEditDialog.value = false;
    editingBook.value = null;
    await fetchBooks();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Error updating book';
    console.error('Error updating book:', err);
  }
}

async function handleDelete(id: number) {
  if (!confirm('¿Estás seguro de que quieres eliminar este libro?')) {
    return;
  }
  
  error.value = null;
  try {
    await deleteBook(id);
    await fetchBooks();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Error deleting book';
    console.error('Error deleting book:', err);
  }
}

onMounted(() => {
  fetchBooks();
});
</script>

<template>
  <v-container>
    <v-alert v-if="error" type="error" class="mb-4">{{ error }}</v-alert>

    <div v-if="loading" class="text-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>

    <v-row v-else>
      <v-col
        v-for="book in books"
        :key="book.id"
        cols="12"
        sm="6"
        md="4"
      >
        <BookCard
          :book="book"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </v-col>
      <v-col v-if="books.length === 0" cols="12" class="text-center">
        <p class="text-h6 grey--text">No books registered</p>
      </v-col>
    </v-row>

    <AddBookDialog
      v-model="showAddDialog"
      @save="handleSave"
    />

    <AddBookDialog
      v-if="editingBook"
      v-model="showEditDialog"
      :book="editingBook"
      @save="handleUpdate"
    />
  </v-container>
</template>