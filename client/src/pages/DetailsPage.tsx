import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

function DetailsPage() {
  const { reviewId } = useParams();

  // REST
  // const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:1337/api";
  // const { data, error, loading } = useFetch(`${baseUrl}/reviews/${reviewId}`);

  const query = gql`
    query getReviews($id: ID!) {
      review(documentId: $id) {
        documentId
        title
        description
        rating
      }
    }
  `;

  const { data, error, loading } = useQuery(query, {
    variables: { id: reviewId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error}</div>;

  return (
    <article>
      <h2>
        <span>{data?.review?.title}</span> <span>{data?.review?.rating}</span>
      </h2>

      <p>{data?.review?.description}</p>
    </article>
  );
}

export default DetailsPage;
