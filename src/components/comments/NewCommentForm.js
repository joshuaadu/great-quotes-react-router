import { useRef } from "react";
import { useParams } from "react-router-dom";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const { quoteId } = useParams();
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
