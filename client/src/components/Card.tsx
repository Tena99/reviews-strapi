import { Link } from "react-router";

function Card({ data }) {
  return (
    <article className="card" key={data?.documentId || data?.id}>
      <Link to={`/${data?.documentId || data?.id}`} className="card__link">
        <h2 className="card__title">
          <span>{data?.title}</span> <span>{data?.rating}</span>
        </h2>

        <p className="card__text">{data?.description}</p>
      </Link>
    </article>
  );
}

export default Card;
