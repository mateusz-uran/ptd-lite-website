export const howItWorkSteps = {
  stepContent: [
    {
      header: "Wpisz numer karty",
      desc: "Numer identyfikuje każdą kartę tzn. musi być unikalny, może się składać z cyfr i liter.",
      explanation: [
        "Przy wpisywaniu numeru karty należy pamiętać o dwóch rzeczach - musi się składać z co najmniej trzech znaków oraz nie może się powtarzać. Innymi słowy, jeśli karta o takim numerze już istnieje, nowa karta nie zostanie utworzona.",
        "Po dodaniu karty użytkownik może zacząć wypełniać ją trasami, tankowaniami i wszystkim, co do niej dodaje. Wszystkie informacje wprowadzane są przypisywane do tej konkretnej karty, co pozwala na łatwe śledzenie wszystkich danych z nią związanych.",
      ],
      image: "/images/howitworks/addcard1_2.png",
    },
    {
      header: "Dodaj punkty trasy i tankowania",
      desc: "Wpisz wszystkie przejechany punkty trasy w formularzu oraz wykonanie tankowania pojazdu, aplikacja podsumuje wszystkie dane.",

      explanation: [
        "Formularz dodawania punktów trasy został zaprojektowany tak, aby przenosił informacje, które zazwyczaj się powtarzają, czyli przenosi wybrane pola z punktu A do punktu B.",
        "Dodatkowo, użytkownik jest informowany, jeśli któreś pole nie zostało przez niego wypełnione lub zostało wypełnione niepoprawnie. Dzięki temu zapobiega się błędom w różnych obliczeniach i działaniu aplikacji. Formularz jest także responsywny, co oznacza, że można dodawać trasy za pomocą smartfona.",
      ],
      image: "/images/howitworks/addtrip1_2.png",
    },
    {
      header: "Generuj plik PDF",
      desc: "Karta drogowa w formie pliku PDF z wszystkimi informacjami, które dodałeś. Dodatkowo zawiera dane pojazdu czy dane z tachografu",
      explanation: [
        "Po wypełnieniu karty w aplikacji, użytkownik ma do wyboru trzy opcje. Może wygenerować obie strony, gdzie zamieszczone są informacje o kierowcy, tankowaniach i wszystkie trasy. Zazwyczaj taki plik składa się z co najmniej dwóch stron.",
        "Dwie dodatkowe opcje to generowanie pojedynczych stron, tj. pierwszej lub drugiej. Pozwala to skrócić czas generowania karty, jeśli kierowca potrzebuje tylko jednej strony. Finalnie plik jest gotowy do druku.",
      ],
      image: "/images/howitworks/generate2_3.png",
    },
  ],

  gifs: [
    "/images/howitworks/addcardv3.gif",
    "/images/howitworks/addtripsv2.gif",
    "/images/howitworks/generatev2.gif",
  ],

  summary: {
    header:
      "To wszystko, proces tworzenia karty drogowej z PTD Lite jest znacznie szybszy.",
    paraf:
      "Wszystkie te informacje w jednym miejscu znacznie przyspieszają i automatyzują cały proces. Dodatkowo, statystyki z przejechanych tras oraz archiwizowanie starych kart drogowych pozwalają na szybki dostęp i edycję. Wszystko to ma na celu usprawnienie pracy kierowcy zawodowego.",
    list: [
      "Możliwość przenoszenia powtarzających się informacji",
      "Automatyczne obliczanie przebiegu czy sumowanie zatankowanego paliwa",
      "Przypisanie danych kierowcy, takich jak nazwisko oraz dane o pojeździe (ciągnik i naczepa)",
      "Wprowadzanie danych dotyczących spalania silnika dostępnych np. z tachografu",
    ],
  },
};
