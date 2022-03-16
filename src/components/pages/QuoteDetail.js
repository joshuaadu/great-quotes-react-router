import { useContext, useMemo, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import { QuoteContext } from "../store/quotes-data";
const QuoteDetail = (props) => {
  const { quoteId } = useParams();
  const { quotes } = useContext(QuoteContext);
  const [showComments, setShowComments] = useState(false);

  const quotesMemoized = useMemo(() => quotes, [quotes]);
  console.log("quotes", quotesMemoized, quoteId);
  const quote = quotesMemoized.find((quote) => quote.id === quoteId);
  console.log("quote", quote);

  const showCommentHandler = () => {
    setShowComments(true);
  };
  return (
    <>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <div className="centered">
        {!showComments && (
          <Link to={`/quotes/${quoteId}/comments`}>
            <button onClick={showCommentHandler} className="btn--flat">
              Show Comments
            </button>
          </Link>
        )}
      </div>
      {showComments && (
        <Route path={`/quotes/${quoteId}/comments`}>
          <Comments />
        </Route>
      )}
    </>
  );
};

export default QuoteDetail;
