import { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";
import { QuoteContext } from "../store/quotes-data";

const NewQuote = (props) => {
  const { addQuote } = useContext(QuoteContext);
  const [quoteAdded, setQuoteAdded] = useState(false);

  const quoteAddedHandler = (state) => {
    setQuoteAdded(state);
  };

  const addQuoteHandler = (quote) => {
    addQuote(quote);
  };

  return (
    // <Switch>
    //   <Route path="/new-quotes">
    //     <QuoteForm onAddQuote={addQuoteHandler} onAdd={quoteAddedHandler} />;
    //   </Route>
    // </Switch>
    <>
      {!quoteAdded && (
        <QuoteForm onAddQuote={addQuoteHandler} onAdded={quoteAddedHandler} />
      )}
      {quoteAdded && (
        <Route>
          <Redirect to="/all-quotes" />
        </Route>
      )}
    </>
  );
};

export default NewQuote;
