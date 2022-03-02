import { Route } from "react-router-dom";
import classes from "./layout/Layout.module.css";
import QuoteList from "./quotes/QuoteList";
import QuoteForm from "./quotes/QuoteForm";

const Main = (props) => {
  return (
    <main className={classes.main}>
      <Route path="/all-quotes">
        <QuoteList />
      </Route>
      <Route path="/add-quotes">
        <QuoteForm />
      </Route>
    </main>
  );
};

export default Main;
