import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

import type { Review } from "../models/Reviews";

import Card from "../components/Card";

function Home() {
  // REST
  // const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:1337";
  // const { data, error, loading } = useFetch<Review[]>(`${baseUrl}/api/reviews`);

  //GraphQL
  const query = gql`
    query getReviews {
      reviews {
        documentId
        title
        description
        rating
      }
    }
  `;

  const { data, loading, error } = useQuery<Review[]>(query);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error}</div>;

  return (
    <div>
      {data?.reviews?.map((review: Review) => {
        return <Card key={review.documentId} data={review}></Card>;
      })}
    </div>
  );
}

export default Home;
