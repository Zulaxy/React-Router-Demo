import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NoQuotesFound = () => {
  return (
    <div>
      <Typography variant="h5" component="h2">
        No Quotes Found
      </Typography>

      <Link to="/new-quote">
        <Button variant="contained" type="submit">
          Add Quote
        </Button>
      </Link>
    </div>
  );
};

export default NoQuotesFound;
