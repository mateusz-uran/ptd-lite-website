import { IoIosCreate } from "react-icons/io";
import { FaRoad } from "react-icons/fa6";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa6";
import { FaHourglassStart } from "react-icons/fa";

export const howItWorkSteps = {
  text: [
    {
      header: "Wpisz numer karty",
      desc: "Numer identyfikuje każdą kartę tzn. musi być unikalny, może się składać z cyfr i liter.",
    },
    {
      header: "Dodaj punkty trasy i tankowania",
      desc: "Wpisz wszystkie przejechany punkty trasy w formularzu oraz wykonanie tankowania pojazdu, aplikacja podsumuje wszystkie dane.",
    },
    {
      header: "Generuj plik PDF",
      desc: "Karta drogowa w formie pliku PDF z wszystkimi informacjami, które dodałeś. Dodatkowo zawiera dane pojazdu czy dane z tachografu",
    },
  ],
  images: [
    "/images/howitworks/addcard_form.png",
    "/images/howitworks/addcard_form.png",
    "/images/howitworks/addcard_form.png",
  ],
};

export const smallSteps = [
  {
    Icon: IoIosCreate,
    explanation: "Wpisz nazwę karty w polu. ",
    image: "./images/add_card3.png",
  },
  {
    Icon: FaRoad,
    explanation:
      "Dodaj trasy, aplikacja przenosi powtarzalne informacje co przyspiesza cały proces.",
    image: "./images/add_trip4.png",
  },
  {
    Icon: BsFillFuelPumpDieselFill,
    explanation: "Dodaj informację o tankowaniach tj. ropa/benzyna/adBlue.",
    image: "./images/add_fuels3.png",
  },
  {
    Icon: FaHourglassStart,
    explanation: "Generuj plik PDF gotowy do pobrania.",
    image: "./images/generate_pdf2.png",
  },
  {
    Icon: FaFilePdf,
    explanation: "Pobierz sformatowany plik PDF.",
    image: "./images/pdf_ready3.png",
  },
];

export const steps = [
  {
    Icon: IoIosCreate,
    explanation:
      "Wpisz nazwę karty w polu. Numer może się składać z cyfr i liter, ale musi być unikatowy.",
    image: "./images/add_card3.png",
  },
  {
    Icon: FaRoad,
    explanation:
      "Dodaj trasy, aplikacja przenosi powtarzalne informacji (miejsce i kilometry przyjazdu zazwyczaj są takie sam w kolejnym punkcie trasy) co przyspiesza cały proces.",
    image: "./images/add_trip4.png",
  },
  {
    Icon: BsFillFuelPumpDieselFill,
    explanation:
      "Dodaj informację o tankowaniach tzn. ilośc tankowanej ropy/benzyny oraz adBlue.",
    image: "./images/add_fuels3.png",
  },
  {
    Icon: FaHourglassStart,
    explanation:
      "Po dodaniu wszystkich potrzebnych informacji generuj plik PDF gotowy do pobrania.",
    image: "./images/generate_pdf2.png",
  },
  {
    Icon: FaFilePdf,
    explanation:
      "Aplikacja formatuje dodane informację o trasach, ładunkach i tanowaniach w gotowy plik PDF, który można pobrać i wydrukować.",
    image: "./images/pdf_ready3.png",
  },
];
