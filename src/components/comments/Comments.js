import { useContext, useEffect, useState } from "react";
import { Link, Route, useRouteMatch, useParams } from "react-router-dom";
import useHttp from "../hooks/use-http.js";
import { getAllComments } from "../lib/api.js";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();
  const { sendRequest, data, status } = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  console.log("quoteId in Comments", quoteId);
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
        <NewCommentForm quoteId={quoteId} />
      </Route>

      <p>Comments...</p>
    </section>
  );
};

export default Comments;

// import { useState, useEffect, useCallback } from "react";
// import { useParams } from "react-router-dom";

// import classes from "./Comments.module.css";
// import NewCommentForm from "./NewCommentForm";
// import useHttp from "../hooks/use-http.js";
// import { getAllComments } from "../lib/api.js";
// import LoadingSpinner from "../UI/LoadingSpinner";
// import CommentsList from "./CommentsList";

// const Comments = () => {
//   const [isAddingComment, setIsAddingComment] = useState(false);
//   const params = useParams();

//   const { quoteId } = params;

//   const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

//   useEffect(() => {
//     sendRequest(quoteId);
//   }, [quoteId, sendRequest]);

//   const startAddCommentHandler = () => {
//     setIsAddingComment(true);
//   };

//   const addedCommentHandler = useCallback(() => {
//     sendRequest(quoteId);
//   }, [sendRequest, quoteId]);

//   let comments;

//   if (status === "pending") {
//     comments = (
//       <div className="centered">
//         <LoadingSpinner />
//       </div>
//     );
//   }

//   if (status === "completed" && loadedComments && loadedComments.length > 0) {
//     comments = <CommentsList comments={loadedComments} />;
//   }

//   if (
//     status === "completed" &&
//     (!loadedComments || loadedComments.length === 0)
//   ) {
//     comments = <p className="centered">No comments were added yet!</p>;
//   }

//   return (
//     <section className={classes.comments}>
//       <h2>User Comments</h2>
//       {!isAddingComment && (
//         <button className="btn" onClick={startAddCommentHandler}>
//           Add a Comment
//         </button>
//       )}
//       {isAddingComment && (
//         <NewCommentForm
//           quoteId={quoteId}
//           onAddedComment={addedCommentHandler}
//         />
//       )}
//       {comments}
//     </section>
//   );
// };

// export default Comments;
