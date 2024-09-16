import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { Joke } from "./components/Joke";
import jokesData from "../jokesData";
import data from "../data";

function App() {
  const dataElements = data.map((e) => <Card key={e.id} e={e} />);
  // const jokeElements = jokesData.map((joke) => (
  //   <Joke setup={joke.setup} punchline={joke.punchline} />
  // ));

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{dataElements}</section>
    </div>
  );
}

export default App;
