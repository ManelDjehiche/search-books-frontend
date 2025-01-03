import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useBooksContext } from "../context/booksContext";
import { OpenLibraryResponse, SearchBooksParams } from "src/interfaces/books.interface";
import { fetchBooks } from "../services/booksService";
import { useNavigate } from 'react-router-dom';

const StyledSelect: React.FC = () => {
  const navigate = useNavigate();
  const {sort, setSort } = useBooksContext(); // Use correct context variables

  const handleChange = async (event: SelectChangeEvent) => {
    const sortValue: string = event.target.value;
    setSort(sortValue);
    console.log('Search initiated for:', sortValue);
    navigate('/results');
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "240px",
        width: "220px",
      }}
    >
      <FormControl
        fullWidth
        size="small"
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.23)",
          borderRadius: "4px",
        }}
      >
        <InputLabel>Filter</InputLabel>
        <Select
          value={sort || ""} // Fallback to an empty string for controlled component
          onChange={handleChange} // Pass the change handler
          label="Filter"
        >
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="old">Old</MenuItem>
          <MenuItem value="random">Random</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default StyledSelect;
