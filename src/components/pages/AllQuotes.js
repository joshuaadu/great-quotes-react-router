import { useContext, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../quotes/NoQuotesFound";
import QuoteList from "../quotes/QuoteList";
import { QuoteContext } from "../store/quotes-data";
import LoadingSpinner from "../UI/LoadingSpinner";

const AllQuotes = (props) => {
  // const { quotes } = useContext(QuoteContext);
  const { sendRequest, status, data: quotes } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  console.log(quotes);

  if (status === "completed" && quotes.length > 0) {
    return <QuoteList quotes={quotes} />;
  }
  if (status === "pending") {
    return <LoadingSpinner />;
  }

  return <NoQuotesFound />;
};

export default AllQuotes;
