import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/booksApi';
import { BooksList } from '../BooksList/BooksList';
import { PageTitle, Loading, Error } from './App.styled.ts';

export const App = () => {
  const {
    data: books,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  });

  return (
    <>
      <PageTitle>Список книг</PageTitle>
      {books && books.length > 0 && <BooksList books={books || []} />}
      {isLoading && <Loading>Завантаження</Loading>}
      {isError && <Error>Ой! Сталася помилка</Error>}
    </>
  );
};
