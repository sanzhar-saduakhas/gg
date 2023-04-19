import { CardI } from "./types";

let cards = [
  {
    letter: "А",
    show: true,
    id: 1, 
  },
  {
    letter: "Б",
    show: true,
    id: 2, 
  },
  {
    letter: "В",
    show: true,
    id: 3, 
  },
  {
    letter: "Г",
    show: true,
    id: 4, 
  },
  {
    letter: "Д",
    show: true,
    id: 5, 
  },
  {
    letter: "Е",
    show: true,
    id: 6, 
  },
  {
    letter: "Ё",
    show: true,
    id: 7, 
  },
  {
    letter: "Ж",
    show: true,
    id: 8, 
  },
  {
    letter: "З",
    show: true,
    id: 9, 

  },
  {
    letter: "И",
    show: true,
    id: 10, 
  },
  {
    letter: "Й",
    show: true,
    id: 11, 
  },
  {
    letter: "К",
    show: true,
    id: 12, 
  },
  {
    letter: "Л",
    show: true,
    id: 13, 
  },
  {
    letter: "М",
    show: true,
    id: 14, 
  },
  {
    letter: "Н",
    show: true,
    id: 15, 
  },
  {
    letter: "О",
    show: true,
    id: 16, 
  },
  {
    letter: "П",
    show: false,
    id: 17, 
  },
  {
    letter: "Р",
    show: false,
    id: 18, 
  },
  {
    letter: "С",
    show: false,
    id: 19, 
  },
  {
    letter: "Т",
    show: false,
    id: 20, 
  },
  {
    letter: "У",
    show: false,
    id: 21, 
  },
  {
    letter: "Ф",
    show: false,
    id: 22, 
  },
  {
    letter: "Х",
    show: false,
    id: 23, 
  },
  {
    letter: "Ц",
    show: false,
    id: 24, 
  },
  {
    letter: "Ч",
    show: false,
    id: 25, 
  },
  {
    letter: "Ш",
    show: false,
    id: 26, 
  },
  {
    letter: "Щ",
    show: false,
    id: 27, 
  },
  {
    letter: "Ъ",
    show: false,
    id: 28, 
  },
  {
    letter: "Ы",
    show: false,
    id: 29, 
  },
  {
    letter: "Ь",
    show: false,
    id: 30, 
  },
  {
    letter: "Э",
    show: false,
    id: 31, 
  },
  {
    letter: "Ю",
    show: false,
    id: 32, 
  },
  {
    letter: "Я",
    show: false,
    id: 33, 
  },
];

const shuffleArray = (array: CardI[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const arr1 = shuffleArray(cards.slice(0, 16)); 
const arr2 = cards.slice(16, cards.length); 
cards = arr1.concat(arr2);

export const cr = cards; 