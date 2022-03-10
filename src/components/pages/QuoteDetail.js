import { useParams } from "react-router-dom";

const QuoteDetail = (props) => {
  const { quoteId } = useParams();

  return <p>{quoteId}</p>;
};

export default QuoteDetail;
