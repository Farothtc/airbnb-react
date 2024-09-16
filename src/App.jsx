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

{
  /* <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because 
they always take things literally."
      />
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke setup="How did the hacker escape the police?" punchline={true} />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      /> */
}
