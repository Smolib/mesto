// массив начальных карточек

const karachaevsk = new URL('../../images/karachaevsk.jpg', import.meta.url);
const elbrus = new URL('../../images/elbrus.jpg', import.meta.url);
const dombay = new URL('../../images/dombay.jpg', import.meta.url);
const ural = new URL('../../images/ural.jpg', import.meta.url);
const kluchevskoi = new URL('../../images/kluchevskoi.jpg', import.meta.url);
const koshtantau = new URL('../../images/koshtantau.jpg', import.meta.url);

export const initialCards = [
  {
    name: "Карачаево-Черкесск",
    link: karachaevsk,
  },
  {
    name: "Гора Эльбрус",
    link: elbrus,
  },
  {
    name: "Домбай",
    link: dombay,
  },
  {
    name: "Уральские горы",
    link: ural,
  },
  {
    name: "Ключевская сопка",
    link: kluchevskoi,
  },
  {
    name: "Коштантау",
    link: koshtantau,
  },
];
