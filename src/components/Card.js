import React, { useState } from "react";
import imgAmy from "../images/amy.png";
import imgBender from "../images/bender.png";
import imgBrannigan from "../images/brannigan.png";
import imgConrad from "../images/conrad.png";
import imgFry from "../images/fry.png";
import imgLeela from "../images/leela.png";
import imgLuigi from "../images/luigi.png";
import imgMario from "../images/mario.png";
import imgMom from "../images/mom.png";
import imgNibbler from "../images/nibbler.png";
import imgProfessor from "../images/professor.png";
import imgZoidberg from "../images/zoidberg.png";
import uniqid from "uniqid";

const Card = (props) => {
  const [cards, setCards] = useState([
    { urlImg: imgAmy, id: uniqid(), clicked: false },
    { urlImg: imgBender, id: uniqid(), clicked: false },
    { urlImg: imgBrannigan, id: uniqid(), clicked: false },
    { urlImg: imgConrad, id: uniqid(), clicked: false },
    { urlImg: imgFry, id: uniqid(), clicked: false },
    { urlImg: imgLeela, id: uniqid(), clicked: false },
    { urlImg: imgLuigi, id: uniqid(), clicked: false },
    { urlImg: imgMario, id: uniqid(), clicked: false },
    { urlImg: imgMom, id: uniqid(), clicked: false },
    { urlImg: imgNibbler, id: uniqid(), clicked: false },
    { urlImg: imgProfessor, id: uniqid(), clicked: false },
    { urlImg: imgZoidberg, id: uniqid(), clicked: false },
  ]);

  //   const mapCards = () => {
  //     console.log(cards);
  //     // const images = props.cards;
  //     const mappedCards = cards.map((card) => <img src={card.urlImg} />);
  //   };

  /**
   * update state of clicked object
   * updating object in array
   * @param {integer} id of object
   */
  const clickedState = (id) => {
    const cardsArr = cards;
    const idx = cardsArr.findIndex((ele) => ele.id === id);
    console.log(idx);
    const newCardsArr = [...cardsArr];
    newCardsArr[idx] = {
      ...newCardsArr[idx],
      clicked: true,
    };

    setCards([...newCardsArr]);
  };

  const onClickCard = (e) => {
    const cardId = e.target.id;
    const card = cards.find((card) => card.id === `${cardId}`);

    console.log(card);
    if (card.clicked) {
      console.log("restart game");
      // restart game by resetting state
      const defaultState = [
        { urlImg: imgAmy, id: uniqid(), clicked: false },
        { urlImg: imgBender, id: uniqid(), clicked: false },
        { urlImg: imgBrannigan, id: uniqid(), clicked: false },
        { urlImg: imgConrad, id: uniqid(), clicked: false },
        { urlImg: imgFry, id: uniqid(), clicked: false },
        { urlImg: imgLeela, id: uniqid(), clicked: false },
        { urlImg: imgLuigi, id: uniqid(), clicked: false },
        { urlImg: imgMario, id: uniqid(), clicked: false },
        { urlImg: imgMom, id: uniqid(), clicked: false },
        { urlImg: imgNibbler, id: uniqid(), clicked: false },
        { urlImg: imgProfessor, id: uniqid(), clicked: false },
        { urlImg: imgZoidberg, id: uniqid(), clicked: false },
      ];

      setCards([...defaultState]);
    } else {
      // update clicked-state
      clickedState(cardId);
    }
  };

  return (
    <div id="card--container">
      {cards.map((card, index) => {
        // className={`${}`}
        return (
          <img
            src={card.urlImg}
            key={card.id}
            className="card"
            id={card.id}
            // id={`card--${index}`}

            alt="card"
            onClick={onClickCard}
          />
        );
      })}
    </div>
  );
};

export default Card;
