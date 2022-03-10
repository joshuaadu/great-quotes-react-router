import { Route } from "react-router-dom";
import classes from "./layout/Layout.module.css";
import QuoteList from "./quotes/QuoteList";
import QuoteForm from "./quotes/QuoteForm";
import NoQuotesFound from "./quotes/NoQuotesFound";

const Main = (props) => {
  const quotes = [
    {
      key: "1",
      id: "1",
      author: "author1",
      text: "text1"
    },
    {
      key: "2",
      id: "2",
      author: "author2",
      text: "text2"
    }
  ];
  const allQuotesContent =
    quotes.length > 0 ? <QuoteList quotes={quotes} /> : <NoQuotesFound />;
  return (
    <main className={classes.main}>
      <Route path="/all-quotes">{allQuotesContent}</Route>
      <Route path="/add-quotes">
        <QuoteForm />
      </Route>
    </main>
  );
};

export default Main;
