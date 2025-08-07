import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

function Home() {
  const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:1337/api";
  const { data, error, loading } = useFetch(`${baseUrl}/reviews`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error}</div>;

  return (
    <div>
      {data.map((review) => {
        return <Card key={review.documentId} data={review}></Card>;
      })}
    </div>
  );
}

export default Home;
