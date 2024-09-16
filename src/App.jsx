import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { Joke } from "./components/Joke";
import jokesData from "../jokesData";

function App() {
  const jokeElements = jokesData.map((joke) => (
    <Joke setup={joke.setup} punchline={joke.punchline} />
  ));

  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img="katie.png"
        rating="5.0"
        reviewCount={6}
        country="Turkey"
        title="Life Lessons with Katie Zarefes"
        price={136}
      />
      {jokeElements}
    </>
  );
}

export default App;
