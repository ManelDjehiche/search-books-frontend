import React, { createContext, useContext, useState, ReactNode } from 'react';
import { OpenLibraryResponse } from 'src/interfaces/books.interface';

interface BooksContextProps {
  query: string;
  setQuery: (query: string) => void;
  sort: string;
  setSort: (sort: string) => void;
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  booksList: OpenLibraryResponse;
  setbooksList: (booksList: OpenLibraryResponse) => void;
  displaySpinner: boolean;
  setDisplaySpinner: (displaySpinner: boolean) => void;
}

const BooksContext = createContext<BooksContextProps | undefined>(undefined);

export const BooksProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('new');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [booksList, setbooksList] = useState({ numFound: 0, start: 0, docs: [{}] } as OpenLibraryResponse);
  const [displaySpinner, setDisplaySpinner] = useState(true);

  return (
    <BooksContext.Provider value={{ query, setQuery, sort, setSort, page, setPage, limit, setLimit, booksList, setbooksList, displaySpinner, setDisplaySpinner }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error('useBooksContext must be used within a BooksProvider');
  }
  return context;
};
