export interface OpenLibraryResponse {
  numFound: number;
  start: number;
  docs: [{
    ratings_average: String,
    first_sentence: String
    first_publish_year: String,
    author_name: String,
    title: String
  }]; 
}

export interface BooksContextProps {
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
}

export interface SearchBooksParams {
  query?: string;
  title?: string;
  author?: string;
  sort?: string;
  lang?: string;
  offset?: number;
  page?: number;
  limit?: number;
  fields?: string;
}

export interface SearchBarProps {
  width?: string;
  height?: string;
  top?: string;
  placeholder?: string;
}