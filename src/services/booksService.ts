import axios from 'axios';
import { useBooksContext } from '../context/booksContext';
import { OpenLibraryResponse, SearchBooksParams } from '../interfaces/books.interface';


export const fetchBooks = async (params: SearchBooksParams): Promise<OpenLibraryResponse> => {
  try {
    const queryParams: any = {
      query: params.query,
      title: params.title,
      author: params.author,
      sort: params.sort,
      lang: params.lang,
      offset: params.offset,
      page: params.page || 1,
      limit: params.limit || 10,
      fields: 'ratings_average,first_sentence,first_publish_year,author_name,title,availability',
    };
  
    Object.keys(queryParams).forEach((key) => queryParams[key] === undefined && delete queryParams[key]);
  
    const response = await axios.get(`http://localhost:5000/books/search`, {
      headers: {
        Accept: 'application/json',
      },
      params: queryParams,
    });

    return response.data;
  } catch (error: any) {
    console.log(" EROOR when requesting backend: ", error)
    throw new Error(error.message);
  }
};

