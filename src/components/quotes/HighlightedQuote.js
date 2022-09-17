import { Fragment } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const HighlightedQuote = (props) => {
  return (
    <Fragment>
      <Card sx={{ width: 600, padding: 1 }}>
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
    </Fragment>
  );
};

export default HighlightedQuote;
