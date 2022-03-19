import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const history = useHistory();
  const { quoteId } = props;
  const commentTextRef = useRef();
  const { sendRequest, data, status, error } = useHttp(addComment);
  useEffect(() => {
    if (status === "completed") {
      history.push(`/quotes/${quoteId}/comments`);
    }
  });
  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(
      "Quote ID: ",
      quoteId,
      "\n",
      "Comment: ",
      commentTextRef.current.value
    );

    const comment = commentTextRef.current.value;
    // optional: Could validate here

    // send comment to server
    sendRequest({ quoteId, commentData: comment });
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
