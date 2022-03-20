import { useReducer } from "react";
const initialSate = {
  quotes: [],
  addQuote: () => {},
  removeQuote: () => {},
  addComment: () => {}
};

const quoteReducer = (state, action) => {
  if (action.type === "ADD") {
    state.quotes = [action.data, ...state.quotes];
  }
  if (action.type === "REMOVE") {
    state.quotes = state.quotes.filter((entry) => entry.id !== action.data.id);
  }
  if (action.type === "COMMENT") {
    const quoteIndex = state.quotes.findIndex(
      (entry) => entry.id !== action.data.id
    );
    let currentQuoteComments = state.quotes[quoteIndex]?.comments;
    currentQuoteComments
      ? (currentQuoteComments = [action.comment, ...currentQuoteComments])
      : (currentQuoteComments = [action.comment]);
  }

  return state;
};
const useQuote = () => {
  const [state, dispatch] = useReducer(quoteReducer, initialSate);
  state.addQuote = (data) => {
    dispatch({ type: "ADD", data });
  };
  state.removeQuote = (id) => {
    dispatch({ type: "REMOVE", id });
  };
  state.addComment = (id, comment) => {
    dispatch({ type: "COMMENT", id, comment });
  };
  return state;
};

export default useQuote;
