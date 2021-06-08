import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");
  const fetchThoughts = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.slip.advice);
      });
  };
  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div className="App">
      <div className="top_heading">
        <h1>A place to read and calm...</h1>
      </div>
      <div className="quote_box">
        <h2>"{quotes}"</h2>
        <button onClick={fetchThoughts}>Next Quote &#128151; </button>
      </div>
    </div>
  );
}

export default App;
