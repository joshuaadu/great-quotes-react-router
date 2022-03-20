import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const { quoteId, onAddedComment } = props;
  const commentTextRef = useRef();
  const history = useHistory();
  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
      history.push(`/quotes/${quoteId}/comments`);
    }
  }, [history, quoteId, status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const comment = commentTextRef.current.value;
    // optional: Could validate here

    // send comment to server
    sendRequest({ quoteId, commentData: { text: comment } });
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
