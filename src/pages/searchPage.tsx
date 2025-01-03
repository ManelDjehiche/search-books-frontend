// searchPage.tsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/searchBar";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../components/logo";

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box
      sx={{
        width: "100vw",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Logo></Logo>

      <Typography
        variant="h5"
        component="h1"
        sx={{
          marginBottom: "32px",
          fontWeight: 400,
          fontSize: { xs: "20px", sm: "22px", md: "24px" },
          lineHeight: "32px",
          color: "text.primary", 
        }}
      >
        Book Search Assignment
      </Typography>
      <SearchBar top="550px" />
    </Box>
  );
};

export default SearchPage;
