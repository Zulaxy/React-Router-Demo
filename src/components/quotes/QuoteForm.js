import { Button, CardContent, TextField, Box } from "@mui/material";
import { Fragment, useRef, useState } from "react";

import CardField from "@mui/material/Card";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

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
      {/* <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card> */}

      <CardField sx={{ maxWidth: 500 }}>
        <CardContent>
          <form onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
            {props.isLoading && (
              <div className={classes.loading}>
                <LoadingSpinner />
              </div>
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
              rows={4}
              required
              fullWidth
              placeholder="Add your quote"
              name="text"
              inputRef={textInputRef}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              
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
