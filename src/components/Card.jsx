export function Card({ img, rating, reviewCount, country, title, price }) {
  return (
    <div className="card">
      <img src={`./${img}`} className="card-image" />
      <div className="card-line">
        <img src="./star.png" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) •</span>
        <span className="gray">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        <strong>From ${price}</strong>/ person
      </p>
    </div>
  );
}
