import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Cards image="https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-31.jpg">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#1" className="btn btn-primary">
          Go somewhere
        </a>
      </Cards>
      <Cards>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content
        </p>
        <a href="#1" className="btn btn-primary">
          Go somewhere
        </a>
      </Cards>
    </div>
  );
}

export default App;
