import { Navigate, Redirect, Route, Routes } from "react-router-dom";
import classes from "./Layout.module.css";
import AllQuotes from "../pages/AllQuotes";
import NewQuote from "../pages/NewQuote";
import QuoteDetail from "../pages/QuoteDetail";
import PageNotFound from "../pages/PageNotFound";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="quotes" element={<AllQuotes />} />
        <Route path="quotes/:quoteId" element={<QuoteDetail />} />
        <Route path="new-quotes" element={<NewQuote />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
