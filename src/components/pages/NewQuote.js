import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuoteForm from "../quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = (props) => {
  const navigate = useNavigate();
  const { sendRequest, status, error } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed" && !error) {
      navigate("/quotes");
    }
  }, [status, navigate, error]);

  const addQuoteHandler = (quote) => {
    sendRequest(quote);
  };

  return (
    <>
      {error && (
        <p
          style={{
            color: "#262c2c",
            fontSize: "3rem",
            fontWeight: "bold"
          }}
        >
          {error}
        </p>
      )}
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </>
  );
};

export default NewQuote;
