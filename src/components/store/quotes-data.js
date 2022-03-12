import { createContext } from "react";
import useQuote from "../hooks/use-quotes";
const initialValue = {
  quotes: []
};
const QuoteContext = createContext(initialValue);

const QuoteDataProvider = (props) => {
  const quoteData = useQuote();
  const { children } = props;

  return (
    <QuoteContext.Provider value={quoteData}>{children}</QuoteContext.Provider>
  );
};
export { QuoteContext };
export default QuoteDataProvider;
