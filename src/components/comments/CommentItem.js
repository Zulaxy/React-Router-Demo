import { Typography } from "@mui/material";
import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li>
      <Typography
        variant="h6"
        component="h6"
        sx={{ m: "1rem 0", b: "0.5 rem", borderBottom: 1 }}
      >
        {props.text}
      </Typography>
    </li>
  );
};

export default CommentItem;
