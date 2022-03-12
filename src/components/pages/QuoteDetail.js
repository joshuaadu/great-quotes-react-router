import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
const QuoteDetail = (props) => {
  const { quoteId } = useParams();

  return (
    <>
      <p>{quoteId}</p>
      <Route path="/quotes/:quoteId/comment">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
