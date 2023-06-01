import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{ borderRadius: "1px solid #e3e3e3", pl: 2, boxShadow: "none" }}
    >
      SearchBar
    </Paper>
  );
};

export default SearchBar;
