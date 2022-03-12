import { useReducer } from "react";
const initialSate = {
  quotes: [],
  addQuote: () => {},
  removeQuote: () => {}
};

const quoteReducer = (state, action) => {
  if (action.type === "ADD") {
    state.quotes.push(action.data);
  }
  if (action.type === "REMOVE") {
    state.quotes = state.quotes.filter((entry) => entry.id !== action.data.id);
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
  return state;
};

export default useQuote;
