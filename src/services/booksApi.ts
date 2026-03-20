import axios from 'axios';
import type { Book } from '../types';

axios.defaults.baseURL = 'https://6971cf4a32c6bacb12c49096.mockapi.io';

export const getBooks = async () => {
  const { data } = await axios.get<Book[]>('/books');
  return data;
};

export const deleteBook = async (id: Book['id']) => {
  const { data } = await axios.delete<Book>(`/books/${id}`);
  return data;
};
