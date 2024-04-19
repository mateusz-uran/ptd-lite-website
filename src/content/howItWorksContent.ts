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
      extension: [
        {
          expl: "Donec eu felis arcu. Vestibulum ex urna, aliquet quis dui id, vehicula accumsan justo. Vivamus dictum, arcu ac pellentesque pretium, libero lacus faucibus nulla, quis sagittis est velit vel sapien.",
          gif: "/images/howitworks/addcard_form.png",
        },
        {
          expl: "Donec eu felis arcu. Vestibulum ex urna, aliquet quis dui id, vehicula accumsan justo. Vivamus dictum, arcu ac pellentesque pretium, libero lacus faucibus nulla, quis sagittis est velit vel sapien.",
          gif: "/images/howitworks/addcard_form.png",
        },
      ],
    },
    {
      header: "Dodaj punkty trasy i tankowania",
      desc: "Wpisz wszystkie przejechany punkty trasy w formularzu oraz wykonanie tankowania pojazdu, aplikacja podsumuje wszystkie dane.",
      extension: [
        {
          expl: "Donec eu felis arcu. Vestibulum ex urna, aliquet quis dui id, vehicula accumsan justo. Vivamus dictum, arcu ac pellentesque pretium, libero lacus faucibus nulla, quis sagittis est velit vel sapien.",
          gif: "/images/howitworks/addcard_form.png",
        },
        {
          expl: "Donec eu felis arcu. Vestibulum ex urna, aliquet quis dui id, vehicula accumsan justo. Vivamus dictum, arcu ac pellentesque pretium, libero lacus faucibus nulla, quis sagittis est velit vel sapien.",
          gif: "/images/howitworks/addcard_form.png",
        },
      ],
    },
    {
      header: "Generuj plik PDF",
      desc: "Karta drogowa w formie pliku PDF z wszystkimi informacjami, które dodałeś. Dodatkowo zawiera dane pojazdu czy dane z tachografu",
      extension: [
        {
          expl: "Donec eu felis arcu. Vestibulum ex urna, aliquet quis dui id, vehicula accumsan justo. Vivamus dictum, arcu ac pellentesque pretium, libero lacus faucibus nulla, quis sagittis est velit vel sapien.",
          gif: "/images/howitworks/addcard_form.png",
        },
        {
          expl: "Donec eu felis arcu. Vestibulum ex urna, aliquet quis dui id, vehicula accumsan justo. Vivamus dictum, arcu ac pellentesque pretium, libero lacus faucibus nulla, quis sagittis est velit vel sapien.",
          gif: "/images/howitworks/addcard_form.png",
        },
      ],
    },
  ],
  images: [
    "/images/howitworks/addcard_form.png",
    "/images/howitworks/addcard_form.png",
    "/images/howitworks/addcard_form.png",
  ],

  summary: {
    header:
      "To wszystko, proces tworzenia karty drogowej z PTD Lite jest znacznie szybszy.",
    list: [
      "możliwość przenoszenia powtarzalnych informacji",
      "automatyczne obliczanie przebiegu czy sumowanie zatankowanego paliwa",
      "przypisane dane kierowcy takie jak nazwisko, dane o pojeździe",
      "wpisywanie danych o spalaniu silnika",
    ],
    paraf1:
      "Wszystkie te informacje w jednym miejscu co znacznie przyspiesza i automatyzuje cały proces.",
    paraf2:
      "Dodatkowo statystyki z przejechanych tras czy archiwizowanie starych kart drogowych pozwalający na szybki dostęp czy edycję, wszystko to aby usprawnić pracę kierowcy zawodowego.",
  },
};
