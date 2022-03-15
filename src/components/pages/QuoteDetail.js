import { useContext, useMemo } from "react";
import { Route, useParams } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
import { QuoteContext } from "../store/quotes-data";
const QuoteDetail = (props) => {
  const { quoteId } = useParams();
  const { quotes } = useContext(QuoteContext);

  const quotesMemoized = useMemo(() => quotes, [quotes]);
  console.log("quotes", quotesMemoized, quoteId);
  const quote = quotesMemoized.find((quote) => quote.id === quoteId);
  console.log("quote", quote);
  return (
    <>
      <HighlightedQuote text={quote?.text} author={quote?.author} />
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
