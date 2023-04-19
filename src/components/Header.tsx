import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-center items-center bg-blue-400 text-white p-2">
      <ul className="flex space-x-5">
        <li>
          <Link to={"/"} className="underline">
            Главная страница
          </Link>
        </li>
        <li>
          <Link to={"/user_rating"} className="underline">
            История результатов пользователя
          </Link>
        </li>
        <li>
          <Link to={"/global_rating"} className="underline">
            Общий рейтинг
          </Link>
        </li>
      </ul>
    </header>
  );
};
