// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/searchPage';
import ResultsPage from './pages/resultsPage';
import { BooksProvider } from './context/booksContext'; // Import the BooksProvider

const App: React.FC = () => {
  return (
    <Router>
      <BooksProvider>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BooksProvider>
    </Router>
  );
};

export default App;
