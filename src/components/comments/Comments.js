import { useCallback, useContext, useEffect, useState } from "react";
import { Link, Route, useRouteMatch, useParams } from "react-router-dom";
import useHttp from "../hooks/use-http.js";
import { getAllComments } from "../lib/api.js";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList.js";
import NewCommentForm from "./NewCommentForm";
import LoadingSpinner from "../UI/LoadingSpinner";

const Comments = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();
  const { sendRequest, data: loadedComments, status, error } = useHttp(
    getAllComments,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  console.log("quoteId in Comments", quoteId);

  let comments;
  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (loadedComments.length === 0 || !loadedComments)
  ) {
    comments = (
      <div className="centered">
        <p>No comments add yet!</p>
      </div>
    );
  }

  if (error) {
    comments = (
      <div className="centered">
        <p>Failed to load comments!</p>;
      </div>
    );
  }

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      <Route path={match.url} exact>
        <Link
          to={`${match.url}/new`}
          style={{ textDecoration: "none", color: "inherit" }}
          className="btn"
        >
          Add a Comment
        </Link>
      </Route>

      <Route path={`${match.url}/new`}>
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      </Route>

      {comments}
    </section>
  );
};

export default Comments;
