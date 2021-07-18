import { useState, useEffect } from "react";
import "./style.css";
function App() {
  useEffect(() => {
    FetchData();
  }, []);
  const [isData, SetData] = useState([]);
  const FetchData = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    const random = Math.floor(Math.random() * data.length);
    console.log(data[random]);
    console.log(random);
    SetData(data[random]);
  };

  return (
    <div className="App">
      <h3>"{isData.text}"</h3>
      <p>"{isData.author ? isData.author : ""}"</p>
    </div>
  );
}

export default App;
