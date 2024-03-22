import { IoIosCreate } from "react-icons/io";
import { FaRoad } from "react-icons/fa6";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa6";
import { GrFormView } from "react-icons/gr";

export const steps = [
  {
    Icon: IoIosCreate,
    explanation:
      "Wpisz nazwę karty w polu. Numer może się składać z cyfr i liter, ale musi być unikatowy.",
    image: "./images/add_card2.png",
  },
  {
    Icon: FaRoad,
    explanation:
      "Dodaj trasy, aplikacja przenosi powtarzalne informacji (miejsce i kilometry przyjazdu zazwyczaj są takie sam w kolejnym punkcie trasy) co przyspiesza cały proces.",
    image: "./images/add_trip3.png",
  },
  {
    Icon: BsFillFuelPumpDieselFill,
    explanation:
      "Dodaj informację o tankowaniach tzn. ilośc tankowanej ropy/benzyny oraz adBlue.",
    image: "./images/add_fuels2.png",
  },
  {
    Icon: FaFilePdf,
    explanation:
      "Po dodaniu wszystkich potrzebnych informacji generuj plik PDF gotowy do pobrania.",
    image: "./images/generate_pdf.png",
  },
  {
    Icon: GrFormView,
    explanation:
      "Aplikacja formatuje dodane informację o trasach, ładunkach i tanowaniach w gotowy plik PDF, który można pobrać i wydrukować.",
    image: "./images/pdf_ready2.png",
  },
];
