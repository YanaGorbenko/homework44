import type { Book } from '../../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBook } from '../../services/booksApi';
import {
  BookList,
  ListItem,
  BookTitle,
  BookText,
  Span,
  DeleteButton,
} from './BookList.styled';

interface Props {
  books: Book[];
}

export const BooksList = ({ books }: Props) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
  });

  const handleDelete = (id: Book['id']) => {
    mutate(id);
  };
  return (
    <BookList>
      {books.map(book => (
        <ListItem key={book.id}>
          <BookTitle>{book.title}</BookTitle>
          <BookText>
            <Span>Автор:</Span> {book.author}
          </BookText>
          <BookText>
            <Span>Рік видання:</Span> {book.year}
          </BookText>
          <DeleteButton onClick={() => handleDelete(book.id)}>
            Видалити
          </DeleteButton>
        </ListItem>
      ))}
    </BookList>
  );
};
