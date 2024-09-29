import styles from "./Homepage.module.css";
import Card from "../Components/Card";
import { useState } from "react";
import Header from "../Components/Header";
import Modal from "../Components/Modal";

export default function Homepage({ data, loading, twoCards, setTwoCards }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [clicks, setClicks] = useState(0);

  function handleClick(para) {
    setTwoCards((prevCards) => {
      if (prevCards.some((card) => card.name === para.name)) {
        return prevCards;
      }

      if (prevCards.length >= 2) {
        return [prevCards[1], para];
      }

      return [...prevCards, para];
    });

    // Update the number of clicks and check if 2 cards are selected
    setClicks((prevClicks) => {
      const newClicks = prevClicks + 1;

      if (newClicks >= 2) {
        setSelectedCard(para); // Set the currently clicked card as the selected card
        setModalOpen(true); // Open the modal
        setClicks(0); // Reset the click count for the next interaction
      }

      return newClicks;
    });
  }
  console.log(twoCards);

  return (
    <>
      <Header />
      <h1 className={`${modalOpen ? styles.blur : styles.home}`}>
        {data.map((obj) => (
          <Card
            obj={obj}
            key={obj.name}
            onClick={() => handleClick(obj)}
            className={
              twoCards.some((card) => card.name === obj.name)
                ? `${styles.card} ${styles.active}` // Apply active class if selected
                : styles.card
            }
          />
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
