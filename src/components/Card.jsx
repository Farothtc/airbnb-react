export function Card() {
  return (
    <div className="card">
      <img src="./katie.png" className="card-image" />
      <div className="card-line">
        <img src="./star.png" />
        <span>5.0</span>
        <span className="gray">(6) •</span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong>/ person
      </p>
    </div>
  );
}
