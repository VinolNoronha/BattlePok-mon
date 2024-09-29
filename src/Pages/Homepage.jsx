import styles from "./Homepage.module.css";
import Card from "../Components/Card";
import { useState } from "react";
import Header from "../Components/Header";
import Modal from "../Components/Modal";

export default function Homepage({ data, loading }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [twoCards, setTwoCards] = useState([]);

  function handleClick(para) {
    setClicks(() => 1);
    if (clicks == 1) {
      if (twoCards.includes) setTwoCards((para) => [...prevCards, para]);
    }
    setClicks(() => 2);

    if (clicks >= 2) {
      setSelectedCard(() => para);
      setModalOpen(() => true);
      setClicks(() => 0);
    }
  }
  console.log(twoCards);

  return (
    <>
      <Header />
      <h1 className={`${modalOpen ? styles.blur : styles.home}`}>
        {data.map((obj) => (
          <Card obj={obj} key={obj.name} onClick={() => handleClick(obj)} />
        ))}
        {modalOpen ? (
          <Modal
            selectedCard={selectedCard}
            onClick={() => setModalOpen(false)}
          />
        ) : (
          " "
        )}
      </h1>
      <div className="mod"></div>
    </>
  );
}
