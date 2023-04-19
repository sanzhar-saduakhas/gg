import { GameField } from "./components/GameField";
import { Header } from "./components/Header";

const App = () => {
  const refresh = () => window.location.reload();

  return (
    <div>
      <Header />
      <div className="mt-20 flex justify-center items-center">
        <div className="text-center">
          <h1 className="font-bold text-4xl mb-8">От А до Я</h1>
          <p>Нажимайте на буквы настолько быстро, насколько вы сможете!</p>
          <p className="mb-8">Таймер будет запущен автоматически.</p>
          <button className="mb-8 underline" onClick={refresh}>
            обновить
          </button>
          <GameField />
        </div>
      </div>
    </div>
  );
};

export default App;
