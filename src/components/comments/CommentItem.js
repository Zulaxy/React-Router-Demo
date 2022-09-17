import { Typography } from "@mui/material";

const CommentItem = (props) => {
  return (
    <Typography
      variant="h6"
      component="h6"
      sx={{ m: "1rem 0", b: "0.5 rem", borderBottom: 1 }}
    >
      {props.text}
    </Typography>
  );
};

export default CommentItem;
