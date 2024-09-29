import "./App.css";
import BattleInit from "./Pages/BattleInit";
import Homepage from "./Pages/Homepage";
import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [twoCards, setTwoCards] = useState([]);

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
      <HashRouter>
        <Routes>
          <Route
            index
            element={
              <Homepage
                data={data}
                loading={loading}
                twoCards={twoCards}
                setTwoCards={setTwoCards}
              />
            }
          />
          <Route path="/battle" element={<BattleInit twoCards={twoCards} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
