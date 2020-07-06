import { Diarioint } from "../Components/Diarios/Diarios";
import { v4 as uuidv4 } from "uuid";

export const entradaDiarios: Diarioint[] = [
  {
    id: uuidv4(),
    titulo: "Sol 1 - O começo",
    corpo: "Foi um dia bem agitado.",
    data: new Date("07/01/2020"),
  },
  {
    id: uuidv4(),
    titulo: "Sol 2 - uma tarde",
    corpo: "Foi um dia bem agitado.",
    data: new Date("07/02/2020"),
  },
  {
    id: uuidv4(),
    titulo: "Sol 3 - uma noite",
    corpo: "Foi um dia bem agitado.",
    data: new Date("07/03/2020"),
  },
];
