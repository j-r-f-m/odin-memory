import React, { useEffect, useState } from "react";
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

  // keep track of current score and display best scoure since last refresh
  const [score, setScore] = useState({
    currScore: 0,
    bestScore: 0,
  });
  // add the id of the clicked character to an array
  // check length of array to see if player clicked all characters one time
  const [alreadyClicked, setAlreadyClicked] = useState([]);
  // show if player won or lost
  const [gameStatus, setGameStatus] = useState({ gameWon: false });
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

  /**
   * shuffle a given array using the fisher-yates-algorithm
   * @param {array} array that needs to be shuffled
   */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const resetState = () => {
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
    shuffleArray(defaultState);
    setCards([...defaultState]);
  };

  /**
   * update array with already clicked char
   * @param {string} id of clicked char
   */
  const updateAlreadyClicked = (id) => {
    setAlreadyClicked([...alreadyClicked, `${id}`]);
  };

  const emptyAlreadyClicked = () => {
    setAlreadyClicked([]);
  };

  const onClickCard = (e) => {
    // get clicked card by id
    const cardId = e.target.id;
    const card = cards.find((card) => card.id === `${cardId}`);
    console.log(card);
    // check if card has already been clicked
    if (card.clicked) {
      console.log("restart game");
      // restart game by resetting state
      resetState();
      // empty already clicked array
      emptyAlreadyClicked();
    } else {
      // update clicked-state for object
      clickedState(cardId);
      // push id to alreadyClicked-array
      updateAlreadyClicked(cardId);
    }
  };

  // useEffect(() => {
  //   // winning condition
  //   if (alreadyClicked.length === 12) {
  //     console.log("you win");
  //   }
  // }, [alreadyClicked, gameStatus]);

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
      <div id="current--score">Score: {score.currScore}</div>
      <div id="best--score">Best Score: {score.bestScore}</div>

      {alreadyClicked.length === 12 && <div className="win">You Won</div>}
      {alreadyClicked.length === 12 && (
        <button id="btn--restart">Restart</button>
      )}
    </div>
  );
};

export default Card;
