export function Card(props) {
  let badgeText;
  if (props.e.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.e.location === "Online") {
    badgeText = "ONLINE";
  }

  console.log(props.e.img);

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`./${props.e.coverImg}`} className="card-image" />
      <div className="card-line">
        <img src="./star.png" />
        <span>{props.e.stats.rating}</span>
        <span className="gray">({props.e.stats.reviewCount}) •</span>
        <span className="gray">{props.e.location}</span>
      </div>
      <p className="card-title">{props.e.title}</p>
      <p className="card-price">
        <strong>From ${props.e.price}</strong>/ person
      </p>
    </div>
  );
}
