import { useParams } from "react-router";

function DetailsPage() {
  const { reviewId } = useParams();

  return <>DetailsPage for {reviewId}</>;
}

export default DetailsPage;
