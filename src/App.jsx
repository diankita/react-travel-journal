import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";

// DESIGN FILE: https://www.figma.com/file/OpmF1nEUcsYzUINHOmrhYa/Travel-Journal-(Copy)?node-id=2%3A2&t=PIvbyrKO27SWWFBh-0

function App() {
  const cardData = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div>
      <Navbar />
      {cardData}
    </div>
  );
}

export default App;
