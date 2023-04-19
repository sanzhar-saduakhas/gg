import { Card } from "./Card";
import { cr } from "../cards";
import { useEffect, useState } from "react";
import { CardI } from "../types";
import { Stopwatch } from "./Stopwatch";
import Confetti from "react-confetti";
import axios from "axios";
import { Loading } from "./Loading";

export const GameField = () => {
  const [cards, setCards] = useState<CardI[]>(cr);
  const [isRunning, setIsRunning] = useState(false);
  const [order, setOrder] = useState([
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ъ",
    "Ы",
    "Ь",
    "Э",
    "Ю",
    "Я",
  ]);
  const [game, setGame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = (id: number) => {
    if (!isRunning) setIsRunning(true);

    setCards((prevCards) => {
      const newCards = [...prevCards];

      for (let i = 0; i < newCards.length; i++) {
        if (newCards[i].id === id) {
          if (newCards[i].letter === order[0]) {
            if (newCards[i].letter === "Я") {
              setIsRunning(false);
              setGame(true);
            }
            if (id < 18) {
              const temp = newCards[id + 15].letter;
              newCards[id + 15].letter = newCards[i].letter;
              newCards[i].letter = temp;
              const temp2 = newCards[id + 15].id;
              newCards[id + 15].id = temp2;
              newCards[i].id = temp2;
            } else {
              newCards[i].letter = "";
            }
            const newOrder = [...order];
            newOrder.shift();
            setOrder(newOrder);
          }
        }
      }

      return newCards;
    });
  };

  const handleClick = (
    minutes: string,
    seconds: string,
    milliseconds: string
  ) => {
    const data = {
      finishedAt: minutes + ":" + seconds + ":" + milliseconds,
    };
    setIsLoading(true); 
    axios
      .post("https://643ead4b6c30feced8300213.mockapi.io/user_rating", data)
      .then((res) => setIsLoading(false));
    axios
      .post("https://643ead4b6c30feced8300213.mockapi.io/global_rating", data)
      .then((res) => setIsLoading(false));
  };

  return (
    <>
      <Stopwatch isRunning={isRunning} game={game} handleClick={handleClick} />
      {isLoading ? <Loading /> : ""}
      {game ? (
        <>
          <Confetti
            width={window.innerWidth || 300}
            height={window.innerHeight || 200}
          />
        </>
      ) : (
        ""
      )}
      <div className="grid grid-rows-4 grid-cols-4 gap-x-2 gap-y-2">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            id={card.id}
            letter={card.letter}
            show={card.show}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </>
  );
};
