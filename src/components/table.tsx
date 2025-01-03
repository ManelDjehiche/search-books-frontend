import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress"; // Import spinner
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useBooksContext } from "../context/booksContext";
import StyledPagination from "../components/tablePagination";
import { OpenLibraryResponse, SearchBooksParams } from "../interfaces/books.interface";
import { fetchBooks } from "../services/booksService";

const StyledTable: React.FC = () => {
  const { query, page, limit, sort, setbooksList, booksList, setDisplaySpinner, displaySpinner } = useBooksContext();
  let books: OpenLibraryResponse = booksList; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(" >>> I will get data ")
        setDisplaySpinner(true);
        const payload: SearchBooksParams = { query, page, limit, sort };
        const result = await fetchBooks(payload);
        setbooksList(result);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        console.log(" >>> done  ")
        setDisplaySpinner(false); 
      }
    };

    fetchData();
  }, [query, page, limit, sort]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh", // page height
        width: "100%",
        position: "relative",
        flexDirection: "column", // Allow stacking of table and pagination
      }}
    >
      {displaySpinner ? (
        <CircularProgress size={60} /> // Display spinner when loading
      ) : books.docs.length > 0 ? (
        <>
          <TableContainer
            component={Paper}
            sx={{
              width: "100%",
              minWidth: "1500px",
              overflowX: "auto",
              padding: "16px",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Author</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Publish Year</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Rating</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>First Sentence</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.docs.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.author_name}</TableCell>
                    <TableCell>{row.first_publish_year}</TableCell>
                    <TableCell>{row.ratings_average}</TableCell>
                    <TableCell>{row.first_sentence}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              maxWidth: "1500px",
              marginTop: "16px",
            }}
          >
            <StyledPagination />
          </Box>
        </>
      ) : (
        <Box
          sx={{
            position: "absolute",
            width: "126px",
            height: "46px",
            left: "657px",
            top: "347px",
            fontFamily: "'Roboto', sans-serif",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            textAlign: "center",
            letterSpacing: "0.1px",
            color: "#AEAEAE",
          }}
        >
          No books found! Please try again
        </Box>
      )}
    </Box>
  );
};

export default StyledTable;
