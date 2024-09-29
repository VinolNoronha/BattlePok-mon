import { useState, useEffect } from "react";
import Header from "../Components/Header";
import styles from "./BattleInit.module.css";

export default function BattleInit({ twoCards }) {
  const [obj1, obj2] = twoCards;
  const [info1, setInfo1] = useState(null);
  const [info2, setInfo2] = useState(null);
  const [selectedMove1, setSelectedMove1] = useState(""); // State to store move for Pokemon 1
  const [selectedMove2, setSelectedMove2] = useState(""); // State to store move for Pokemon 2
  const [battleResult, setBattleResult] = useState("");

  // Fetch Pokemon details for both selected Pokemon
  useEffect(() => {
    async function fetchDetails(obj, setInfo) {
      try {
        const resp = await fetch(obj.url);
        if (!resp.ok) throw new Error("Response not fetched");
        const data = await resp.json();
        setInfo(data); // Set the fetched data to the respective Pokemon
      } catch (err) {
        console.log(err);
      }
    }

    if (obj1) fetchDetails(obj1, setInfo1); // Fetch for Pokemon 1
    if (obj2) fetchDetails(obj2, setInfo2); // Fetch for Pokemon 2
  }, [obj1, obj2]);

  // Handle move selection from the dropdown
  const handleMoveSelection = (pokemonNumber, move) => {
    if (pokemonNumber === 1) {
      setSelectedMove1(move); // Set selected move for Pokemon 1
    } else {
      setSelectedMove2(move); // Set selected move for Pokemon 2
    }
  };

  // Function to render the dropdown for available moves
  const renderMoveOptions = (pokemon, setSelectedMove) => (
    <select
      onChange={(e) => handleMoveSelection(setSelectedMove, e.target.value)}
      className={styles.moveSelect}
    >
      <option value="">Select Move</option>
      {pokemon?.moves?.slice(0, 4).map((move, index) => (
        <option key={index} value={move.move.name}>
          {move.move.name}
        </option>
      ))}
    </select>
  );

  // Dummy battle logic for illustration
  const handleBattle = () => {
    if (selectedMove1 && selectedMove2) {
      const result = `${obj1.name}'s ${selectedMove1} vs ${obj2.name}'s ${selectedMove2}`;
      setBattleResult(result);
    } else {
      setBattleResult("Please select moves for both Pokémon!");
    }
  };

  return (
    <>
      <Header />
      <div className={styles.modal}>
        {/* Pokémon 1 Section */}
        <div className={styles.first}>
          {info1 ? (
            <>
              <h3>{info1.name}</h3>
              <img src={info1.sprites.front_default} alt={info1.name} />
              {renderMoveOptions(info1, 1)} {/* Dropdown for Pokémon 1 moves */}
            </>
          ) : (
            <div>Loading Pokémon 1...</div>
          )}
        </div>

        {/* Pokémon 2 Section */}
        <div className={styles.second}>
          {info2 ? (
            <>
              <h3>{info2.name}</h3>
              <img src={info2.sprites.front_default} alt={info2.name} />
              {renderMoveOptions(info2, 2)} {/* Dropdown for Pokémon 2 moves */}
            </>
          ) : (
            <div>Loading Pokémon 2...</div>
          )}
        </div>
      </div>

      {/* Battle Button */}
      <button onClick={handleBattle} className={styles.battleButton}>
        Start Battle
      </button>

      {/* Display Battle Result */}
      {battleResult && (
        <div className={styles.battleResult}>{battleResult}</div>
      )}
    </>
  );
}
