export function Joke({ setup, punchline }) {
  return (
    <div>
      {/* conditional rendering */}
      {setup && <h2>Setup: {setup}</h2>}
      <h1>Punchline: {punchline}</h1>
      <hr />
    </div>
  );
}
