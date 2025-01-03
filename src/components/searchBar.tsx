import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useBooksContext } from '../context/booksContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({
  width = '489px',
  height = '56px',
  top = '',
  placeholder = 'Search',
}) => {
  const navigate = useNavigate();
  const { setQuery } = useBooksContext();
  const [localQuery, setLocalQuery] = useState('');

  const handleInputChange = (event: any) => {
    setLocalQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    const trimmedQuery = localQuery.trim();
    if (trimmedQuery) {
      setQuery(trimmedQuery);
      navigate('/results');
    } else {
      console.warn('Search term is empty');
    }
  };

  return (
    <TextField
      label={placeholder}
      variant="outlined"
      value={localQuery}
      onChange={handleInputChange}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleSearchSubmit}
              aria-label="search"
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width,
        position: 'absolute',
        top,
        '& .MuiOutlinedInput-root': {
          borderRadius: '4px',
          height,
          display: 'flex',
          alignItems: 'center',
          '& input': {
            padding: '8px 16px',
            boxSizing: 'border-box',
          },
          '& fieldset': {
            borderColor: '#1976D2',
          },
          '&:hover fieldset': {
            borderColor: '#1565C0',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#0D47A1',
          },
        },
        '& .MuiInputLabel-root': {
          lineHeight: '1.5',
          transform: 'translate(16px, 50%) scale(1)',
          transition: 'transform 0.2s ease-in-out',
        },
        '& .MuiInputLabel-shrink': {
          transform: 'translate(16px, -6px) scale(0.75)',
        },
      }}
    />
  );
};

export default SearchBar;
