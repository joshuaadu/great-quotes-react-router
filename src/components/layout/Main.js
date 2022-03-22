import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./Layout.module.css";

const AllQuotes = lazy(() => import("../pages/AllQuotes"));
const NewQuote = lazy(() => import("../pages/NewQuote"));
const QuoteDetail = lazy(() => import("../pages/QuoteDetail"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const Main = (props) => {
  const loading = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );
  return (
    <main className={classes.main}>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route path="quotes" element={<AllQuotes />} />
          <Route path="quotes/:quoteId/*" element={<QuoteDetail />} />
          <Route path="new-quotes/*" element={<NewQuote />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default Main;
