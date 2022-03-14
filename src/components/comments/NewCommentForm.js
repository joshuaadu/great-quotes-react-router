import { useContext, useRef } from "react";
import { QuoteContext } from "../store/quotes-data";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const { addComment } = useContext(QuoteContext);

  const { quoteId, onCommentAdded } = props;
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(
      "Quote ID: ",
      quoteId,
      "\n",
      "Comment: ",
      commentTextRef.current.value
    );
    // optional: Could validate here

    // send comment to server
    addComment(quoteId, commentTextRef.current.value);
    onCommentAdded(false);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
