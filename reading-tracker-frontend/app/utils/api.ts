// API utility functions for books

const API_BASE = 'http://localhost:8000';

export interface Book {
  id: number;
  title: string;
  author: string;
  start_date?: string | null;
  end_date?: string | null;
  rating?: number | null;
  comments?: string | null;
  status: string; // "reading", "finished", "want to read"
}

export interface BookCreate {
  title: string;
  author: string;
  start_date?: string | null;
  end_date?: string | null;
  rating?: number | null;
  comments?: string | null;
  status: string;
}

export interface BookUpdate {
  title?: string;
  author?: string;
  start_date?: string | null;
  end_date?: string | null;
  rating?: number | null;
  comments?: string | null;
  status?: string;
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function getBooks(): Promise<Book[]> {
  const response = await fetch(`${API_BASE}/books`);
  return handleResponse<Book[]>(response);
}

export async function getBook(id: number): Promise<Book> {
  const response = await fetch(`${API_BASE}/books/${id}`);
  return handleResponse<Book>(response);
}

export async function createBook(book: BookCreate): Promise<Book> {
  const response = await fetch(`${API_BASE}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  return handleResponse<Book>(response);
}

export async function updateBook(id: number, book: BookUpdate): Promise<Book> {
  const response = await fetch(`${API_BASE}/books/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  return handleResponse<Book>(response);
}

export async function deleteBook(id: number): Promise<Book> {
  const response = await fetch(`${API_BASE}/books/${id}`, {
    method: 'DELETE',
  });
  return handleResponse<Book>(response);
}

