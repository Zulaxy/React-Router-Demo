import { Box } from '@mui/material';
import CommentItem from './CommentItem';

const CommentsList = (props) => {
  return (
    <Box>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </Box>
  );
};

export default CommentsList;
