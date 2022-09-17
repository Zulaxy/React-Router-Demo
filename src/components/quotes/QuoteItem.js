import { Link } from "react-router-dom";
import { Fragment } from "react";
import classes from "./QuoteItem.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const QuoteItem = (props) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: '100vh' }}
    >
      <Card
        sx={{
          width: 500,
          padding: "1rem",
          margin: "1rem 0",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {props.author}
          </Typography>

          <Typography variant="body2">{props.text}</Typography>
        </CardContent>
        <CardActions>
          <Button href={`/quotes/${props.id}`} variant="contained">
            View Fullscreen
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default QuoteItem;
