import { useState } from "react";
import { Link, Route, useParams } from "react-router-dom";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const { quoteId } = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          <Link
            to={`/quotes/${quoteId}/comments/new`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Add a Comment
          </Link>
        </button>
      )}
      {isAddingComment && (
        <Route path={`/quotes/${quoteId}/comments/new`}>
          <NewCommentForm />
        </Route>
      )}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
