import { Button, CardContent, TextField, Box, Typography } from "@mui/material";
import { Fragment, useRef, useState } from "react";

import CardField from "@mui/material/Card";

import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <CardField
        sx={{
          width: 600,
          padding: "1rem",
          margin: "1rem 0",
        }}
      >
        <CardContent>
          <Typography sx={{ mb: 1.5 }} variant="h3" component="h3">
            Add a New Quote
          </Typography>
          <form onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
            {props.isLoading && (
              <Box>
                <LoadingSpinner />
              </Box>
            )}

            <TextField
              sx={{ mb: 1.5 }}
              id="outlined-multiline-flexible"
              label="Author"
              multiline
              maxRows={4}
              name="author"
              required
              fullWidth
              placeholder="Add your Author"
              inputRef={authorInputRef}
            />
            <TextField
              sx={{ mb: 1.5 }}
              id="outlined-multiline-static"
              label="Quote"
              multiline
              rows={10}
              required
              fullWidth
              placeholder="Add your quote"
              name="text"
              inputRef={textInputRef}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                onClick={finishEnteringHandler}
              >
                Add Quote
              </Button>
            </Box>
          </form>
        </CardContent>
      </CardField>
    </Fragment>
  );
};

export default QuoteForm;
