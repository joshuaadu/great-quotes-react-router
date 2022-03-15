import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const { onAddQuote } = props;
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const addFocusHandler = () => {
    setIsEntering(true);
  };
  const finishedEnteringHandler = () => {
    setIsEntering(false);
  };
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    onAddQuote({
      id: Date.now(),
      author: enteredAuthor,
      text: enteredText
    });
  }

  return (
    <>
      <Prompt when={isEntering} message="Do you want to leave this page?" />
      <Card>
        <form
          className={classes.form}
          onFocus={addFocusHandler}
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
            <button onClick={finishedEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
