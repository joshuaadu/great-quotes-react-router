import { useContext, useMemo } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { QuoteContext } from "../store/quotes-data";

import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";

const QuoteDetail = (props) => {
  const { quoteId } = useParams();
  const { quotes } = useContext(QuoteContext);
  const match = useRouteMatch();
  console.log("Route match", match);

  const quotesMemoized = useMemo(() => quotes, [quotes]);
  const quote = quotesMemoized.find((quote) => quote.id === quoteId);

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
