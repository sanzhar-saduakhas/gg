interface Props {
  id: number; 
  letter: string;
  show: boolean;
  handleCardClick: (id: number) => void;
}

export const Card = ({ id, letter, show, handleCardClick }: Props) => {

  return (
    <button
      className={`${letter !== "" ? "bg-blue-400" : "bg-white"} text-white py-3 rounded ${show ? "" : "hidden"}`}
			onClick={() => handleCardClick(id)}
    >
      {letter}
    </button>
  );
};
