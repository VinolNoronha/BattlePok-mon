import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

export default function Modal({ selectedCard, onClick }) {
  const [detailedInfo, setDetailedInfo] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      if (selectedCard && selectedCard.url) {
        try {
          const resp = await fetch(selectedCard.url);
          if (!resp.ok) throw new Error("Response not fetched");
          const data = await resp.json();
          setDetailedInfo(data);
        } catch (err) {
          console.log(err);
        }
      }
    }
    fetchDetails();
  }, [selectedCard]);

  // Check if detailedInfo is still null
  if (!detailedInfo) return <div>Loading...</div>;

  // Check if selectedCard is defined
  if (!selectedCard) return null;

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.first}>
          <div className={styles.name}>Name: {detailedInfo.name}</div>
          <div className={styles.height}>Height: {detailedInfo.height}</div>
          <div className={styles.weight}>Weight: {detailedInfo.weight}</div>
          <div className={styles.baseStats}>
            <h3>Base Stats:</h3>
            {detailedInfo.stats.map((stat, index) => (
              <div key={index}>
                {stat.stat.name}: {stat.base_stat}
              </div>
            ))}
          </div>
          <div className={styles.abilities}>
            <h3>Abilities:</h3>
            {detailedInfo.abilities.map((ability, index) => (
              <div key={index}>{ability.ability.name}</div>
            ))}
          </div>
          <div className={styles.location}>
            Location: {detailedInfo.location_area_encounters}
          </div>
        </div>

        <div className={styles.second}>
          <div className={styles.cross} onClick={onClick}>
            &times;
          </div>
          <div className={styles.color}>Color: {detailedInfo.color}</div>
          <div className={styles.shape}>Shape: {detailedInfo.shape}</div>
          <div className={styles.moves}>
            <h3>Moves:</h3>
            {detailedInfo.moves.slice(0, 5).map((move, index) => (
              <div key={index}>{move.move.name}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
