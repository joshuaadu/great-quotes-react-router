import { Link, useRouteMatch } from "react-router-dom";
import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  const { id, author, text } = props;
  const match = useRouteMatch();
  console.log("id", id);
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link className="btn" to={`${match.path}/${id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
