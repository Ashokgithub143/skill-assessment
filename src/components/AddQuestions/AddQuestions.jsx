import React, { useEffect, useState } from "react";
import Card from "./Card";
import SettingsForm from "./DepartmentDropdown";
import { AssessmentCard } from "./Import";
import { Buttons } from "./Buttons";
import "./mainsection.css";

const AddQuestions = () => {
  // Callback function to delete a card by ID
  const deleteCard = (cardId) => {
    const updatedQuestionCards = questionCards.filter((card) => card.id !== cardId);
    setQuestionCards(updatedQuestionCards);
  };

  const [addCard, setAddCard] = useState(false);
  const [questionCards, setQuestionCards] = useState([
    {
      id: 0,
      card: <Card key={0} setAddCard={setAddCard} onDeleteCard={deleteCard} />,
    },
  ]);

  useEffect(() => {
    if (addCard) {
      const newCardId = questionCards.length;
      const newCard = {
        id: newCardId,
        card: <Card key={newCardId} setAddCard={setAddCard} onDeleteCard={() => deleteCard(newCardId)} />,
      };
      setQuestionCards([...questionCards, newCard]);
      setAddCard(false);
    }
  }, [addCard, questionCards]);

  return (
    <div className="main-container">
      <div className="top-form-section">
        <div className="select-dropdown">
          <SettingsForm />
        </div>
        <div className="select-dropdown">
          <AssessmentCard />
        </div>
      </div>

      <div className="select-dropdown">
        {questionCards.map((cardInfo) => cardInfo.card)}
      </div>
      <div className="select-dropdown">
      <Buttons setAddCard={setAddCard} />
      </div>
    </div>
  );
};

export { AddQuestions };
