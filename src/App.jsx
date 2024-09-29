import "./App.css";
import Homepage from "./Pages/Homepage";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetching data of the 15 pokemons
  useEffect(function () {
    async function fetchData() {
      try {
        setLoading(() => true);
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15`);
        if (!resp.ok) throw new Error("Response not fetched");
        const data = await resp.json();
        const { results } = data; //destructuring data array
        setData(results);
        console.log(results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(() => false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="size">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage data={data} loading={loading} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
