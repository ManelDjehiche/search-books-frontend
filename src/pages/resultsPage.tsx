import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress"; // Import the spinner
import StyledSelect from "../components/select";
import StyledTable from "../components/table";
import StyledPagination from "../components/tablePagination";
import SearchBar from "../components/searchBar";
import Logo from "../components/logo";
import { useBooksContext } from "../context/booksContext";

const ResultsPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#FFFFFF",
        padding: "30px",
        boxSizing: "border-box",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1500px",
          marginTop: "8px",
        }}
      >
        {/* Logo (Left aligned, same line as Search) */}
        <Logo width="120px" height="38.4px" marginBottom="140px" />

        {/* Search Bar and Select (Aligned right, with spacing between) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "16px",
            flex: 1,
          }}
        >
          <SearchBar
            width="323px"
            height="40px"
            placeholder="Search for books..."
            top="160px"
          />
          <StyledSelect />
        </Box>
      </Box>

      {/* Conditional Rendering: Spinner or Table */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "1500px",
          marginTop: "30px",
        }}
      >
        <StyledTable />
      </Box>

    </Box>
  );
};

export default ResultsPage;
