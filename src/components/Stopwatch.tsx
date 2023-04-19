import { useState, useEffect, useRef } from "react";

interface Props {
  isRunning: boolean;
  game: boolean;
  handleClick: (minutes: string, seconds: string, milliseconds: string) => void;
}

export const Stopwatch = ({ isRunning, game, handleClick }: Props) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId: number | undefined;
    if (isRunning) intervalId = setInterval(() => setTime(time + 1), 10);

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  return (
    <div className="flex flex-col">
      <div className="mb-5 flex space-x-2 justify-center items-center">
        <p>Таймер: </p>
        <p className="text-center text-black text-2xl">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </p>
      </div>
      {game ? (
        <>
          <p className="mb-5">Сохранить реультаты?</p>
          <button
            onClick={() =>
              handleClick(
                minutes.toString().padStart(2, "0"),
                seconds.toString().padStart(2, "0"),
                milliseconds.toString().padStart(2, "0")
              )
            }
            className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Да
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
