import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = (props) => {
  const { quoteId } = useParams();
  const { sendRequest, status, data: quote } = useHttp(getSingleQuote);

  const match = useRouteMatch();
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <Route path={`${match.url}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
