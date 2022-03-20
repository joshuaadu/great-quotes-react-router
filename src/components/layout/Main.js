import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./Layout.module.css";
import AllQuotes from "../pages/AllQuotes";
import NewQuote from "../pages/NewQuote";
import QuoteDetail from "../pages/QuoteDetail";
import PageNotFound from "../pages/PageNotFound";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quotes">
          <NewQuote />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
