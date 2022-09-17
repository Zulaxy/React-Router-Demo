import { Button, CardContent, TextField } from "@mui/material";
import { useRef, useEffect, Fragment } from "react";
import CardField from "@mui/material/Card";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
  };

  return (
    <Fragment>
      {/* <form className={classes.form} onSubmit={submitFormHandler}>
        {status === "pending" && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
        <div className={classes.control} onSubmit={submitFormHandler}>
          <label htmlFor="comment">Your Comment</label>
          <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Comment</button>
        </div>
      </form> */}

      <CardField >
        <CardContent>
          <form onSubmit={submitFormHandler}>
            {status === "pending" && (
              <div className="centered">
                <LoadingSpinner />
              </div>
            )}

            <TextField
              sx={{ mb: 1.5 }}
              id="outlined-multiline-flexible"
              label="Your Comment"
              multiline
              rows={6}
              name="comment"
              required
              fullWidth
              placeholder="Add your Comment"
              inputRef={commentTextRef}
            />
            <Button
              variant="contained"
              type="submit"
            >
              Add Comment
            </Button>
          </form>
        </CardContent>
      </CardField>
    </Fragment>
  );
};

export default NewCommentForm;
