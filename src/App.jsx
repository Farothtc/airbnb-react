import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { Joke } from "./components/Joke";
import jokesData from "../jokesData";
import data from "../data";

function App() {
  const dataElements = data.map((e) => (
    <Card
      id={e.id}
      title={e.title}
      img={e.coverImg}
      price={e.price}
      rating={e.stats.rating}
      reviewCount={e.stats.reviewCount}
      location={e.location}
    />
  ));
  // const jokeElements = jokesData.map((joke) => (
  //   <Joke setup={joke.setup} punchline={joke.punchline} />
  // ));

  return (
    <>
      <Navbar />
      <Hero />
      {dataElements}
    </>
  );
}

export default App;
