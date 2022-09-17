import { Box } from "@mui/material";
import { Fragment } from "react";
import AppBarMUI from "./AppBarMUI";

const Layout = (props) => {
  return (
    <Fragment>
      <AppBarMUI />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
    
        }}
      >
        {props.children}
      </Box>
    </Fragment>
  );
};

export default Layout;
