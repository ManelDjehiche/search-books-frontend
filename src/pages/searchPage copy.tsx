import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/searchBar";

const SearchPage: React.FC = () => {


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
      <Box
        component="img"
        src="/logo.png"
        alt="SAG Study Abroad Global"
        sx={{
          width: "180px",
          height: "57.6px",
          marginBottom: "16px",
        }}
      />
      <Typography
        variant="h5"
        component="h1"
        sx={{
          marginBottom: "32px",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "32px",
          color: "#000000",
        }}
      >
        Book Search Assignment
      </Typography>
      <SearchBar />
    </Box>
  );
};

export default SearchPage;
