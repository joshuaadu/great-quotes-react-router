import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./Layout.module.css";
import AllQuotes from "../pages/AllQuotes";
import NewQuote from "../pages/NewQuote";
import QuoteDetail from "../pages/QuoteDetail";
import QuoteDataProvider from "../store/quotes-data";

const Main = (props) => {
  return (
    <QuoteDataProvider>
      <main className={classes.main}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all-quotes" />
          </Route>
          <Route path="/all-quotes">
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quotes">
            <NewQuote />
          </Route>
        </Switch>
      </main>
    </QuoteDataProvider>
  );
};

export default Main;
