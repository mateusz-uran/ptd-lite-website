import { IoIosArrowDown } from "react-icons/io";

export const routes = [
  {
    title: "Funkcje",
    href: "/funkcje",
    Icon: IoIosArrowDown,
    functions: [
      {
        subtitle: "Ładunek",
        href: "ladunek",
      },
      {
        subtitle: "Faktura",
        href: "faktura",
      },
      {
        subtitle: "Statystyki",
        href: "statystyki",
      },
      {
        subtitle: "Archiwum",
        href: "archiwum",
      },
      {
        subtitle: "Aktualizacje",
        href: "aktualizacje",
      },
    ],
  },
  {
    title: "Jak to działa",
    href: "/instrukcje",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
];
