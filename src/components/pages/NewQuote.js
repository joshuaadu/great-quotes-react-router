import { useContext } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";
import { QuoteContext } from "../store/quotes-data";

const NewQuote = (props) => {
  const { addQuote } = useContext(QuoteContext);
  const history = useHistory();

  const addQuoteHandler = (quote) => {
    addQuote(quote);
    history.push("/all-quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
