import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import { margin } from "@mui/system";

const AppBarMUI = () => {
  return (
    <Box sx={{ height: 100, width: '100%', maxWidth: 'auto', justifyContent: "center" }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Great Quotes
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between"}}>
            <Button href="/quotes" variant="contained">
              All Quotes
            </Button>
            <Button href="/new-quote" variant="contained">
              Add a Quote
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarMUI;
