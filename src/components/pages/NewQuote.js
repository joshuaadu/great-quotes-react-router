import { useContext } from "react";
import QuoteForm from "../quotes/QuoteForm";
import { QuoteContext } from "../store/quotes-data";

const NewQuote = (props) => {
  const { addQuote } = useContext(QuoteContext);

  const addQuoteHandler = (quote) => {
    addQuote(quote);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
