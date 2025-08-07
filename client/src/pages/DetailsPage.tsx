import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

function DetailsPage() {
  const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:1337/api";
  const { reviewId } = useParams();

  const { data, error, loading } = useFetch(`${baseUrl}/reviews/${reviewId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error}</div>;

  return (
    <article>
      <h2>
        <span>{data.title}</span> <span>{data.rating}</span>
      </h2>

      <p>{data.description}</p>
    </article>
  );
}

export default DetailsPage;
