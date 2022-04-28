// массив карт-ошибок

const beaverFirst = new URL("../../images/beaver-1.png", import.meta.url);
const beaverSecond = new URL("../../images/beaver-2.png", import.meta.url);
const beaverThird = new URL("../../images/beaver-3.png", import.meta.url);

export const errorCards = [
  {
    name: "Бобер здоровый",
    link: beaverFirst,
    likes: [1, 1, 1, 1, 1],
    _id: 1,
    deletable: false,
    owner: { _id: 2 },
  },
  {
    name: "Бобер сильный",
    link: beaverSecond,
    likes: [1, 1, , 1, 1, 1, 1, 1, 1],
    _id: 1,
    deletable: false,
    owner: { _id: 2 },
  },
  {
    name: "Бобер красивый",
    link: beaverThird,
    likes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    _id: 1,
    deletable: false,
    owner: { _id: 2 },
  },
];
