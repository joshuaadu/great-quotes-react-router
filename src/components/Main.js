import { Redirect, Route, Switch } from "react-router-dom";
import classes from "./layout/Layout.module.css";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

const Main = (props) => {
  return (
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
  );
};

export default Main;
