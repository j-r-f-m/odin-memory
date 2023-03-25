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
    { urlImg: imgAmy, id: uniqid() },
    { urlImg: imgBender, id: uniqid() },
    { urlImg: imgBrannigan, id: uniqid() },
    { urlImg: imgConrad, id: uniqid() },
    { urlImg: imgFry, id: uniqid() },
    { urlImg: imgLeela, id: uniqid() },
    { urlImg: imgLuigi, id: uniqid() },
    { urlImg: imgMario, id: uniqid() },
    { urlImg: imgMom, id: uniqid() },
    { urlImg: imgNibbler, id: uniqid() },
    { urlImg: imgProfessor, id: uniqid() },
    { urlImg: imgZoidberg, id: uniqid() },
  ]);

  //   const mapCards = () => {
  //     console.log(cards);
  //     // const images = props.cards;
  //     const mappedCards = cards.map((card) => <img src={card.urlImg} />);
  //   };

  return (
    <div id="card--container">
      {cards.map((card) => {
        return <img src={card.urlImg} />;
      })}
    </div>
  );
};

export default Card;
