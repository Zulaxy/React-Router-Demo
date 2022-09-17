import { Fragment } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const HighlightedQuote = (props) => {
  return (
    <Box
    >
      <Card
        sx={{
          width: 600,
          padding: "1rem",
          margin: "1rem 0",
        }}
      >
        <CardContent>
          <Typography variant="h4">{props.text}</Typography>
        </CardContent>
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "right", padding: 2 }}
        >
          {props.author}
        </Typography>
      </Card>
    </Box>
  );
};

export default HighlightedQuote;
