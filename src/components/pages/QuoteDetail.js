import { useContext, useMemo } from "react";
import { Link, Route, useParams } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import { QuoteContext } from "../store/quotes-data";
const QuoteDetail = (props) => {
  const { quoteId } = useParams();
  const { quotes } = useContext(QuoteContext);

  const quotesMemoized = useMemo(() => quotes, [quotes]);
  const quote = quotesMemoized.find((quote) => quote.id === quoteId);

  return (
    <>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <Route path={`/quotes/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quoteId}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
