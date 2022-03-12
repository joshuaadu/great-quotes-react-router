import { useContext } from "react";
import NoQuotesFound from "../quotes/NoQuotesFound";
import QuoteList from "../quotes/QuoteList";
import { QuoteContext } from "../store/quotes-data";

const AllQuotes = (props) => {
  const { quotes } = useContext(QuoteContext);
  console.log(quotes);
  // const quotes = [
  //   // {
  //   //   key: "1",
  //   //   id: "1",
  //   //   author: "author1",
  //   //   text: "text1"
  //   // },
  //   // {
  //   //   key: "2",
  //   //   id: "2",
  //   //   author: "author2",
  //   //   text: "text2"
  //   // }
  // ];
  const content =
    quotes.length > 0 ? <QuoteList quotes={quotes} /> : <NoQuotesFound />;

  return content;
};

export default AllQuotes;