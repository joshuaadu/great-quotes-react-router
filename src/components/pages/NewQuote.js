import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = (props) => {
  const navigation = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      navigation("/quotes");
    }
  }, [status, navigation]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
