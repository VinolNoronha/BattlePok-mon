import { useState, useEffect } from "react";
import styles from "./Card.module.css";

export default function Card({ obj, onClick, className }) {
  //console.log(obj);

  const [detailedInfo, setDetailedInfo] = useState([]);

  useEffect(
    function () {
      async function fetchDetails() {
        try {
          const resp = await fetch(`${obj.url}`);
          const data = await resp.json();
          setDetailedInfo([data]);
          //console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchDetails();
    },
    [obj]
  );

  return (
    <div className={`${styles.card} `} onClick={onClick}>
      <div className={styles.image}>
        {detailedInfo && detailedInfo[0] && detailedInfo[0].sprites && (
          <img
            src={detailedInfo[0].sprites.front_default}
            alt={`Image of ${obj.name}`}
          />
        )}
      </div>
      <div className={styles.name}>
        <p>{obj.name}</p>
      </div>
    </div>
  );
}
