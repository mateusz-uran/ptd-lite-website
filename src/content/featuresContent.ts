import { FaFileInvoiceDollar } from "react-icons/fa6";

import { ImStatsDots } from "react-icons/im";

import { BiSolidFileArchive } from "react-icons/bi";

import { MdOutlineNewReleases } from "react-icons/md";

import { GrDocumentText } from "react-icons/gr";

export const features = [
  {
    header: "Dodawaj punkty trasy z tym samym ładunkiem do jednej grupy.",
    text: "Tworzenie ładunku pozwala połączyć odwiedzone punkty na podstawie przewożonego towaru, ustaw nazwę, tonaż oraz temepraturę - opcjonalnie dodaj notatki.",
    Icon: FaFileInvoiceDollar,
    darkColor: "#EC0868",
    lightColor: "#fde6f0",
    moreInfoLink: "ladunek",
    featureImage: "/images/features/cargo/cargo_small.webp",
  },
  {
    header: "Wygeneruj dane do faktury z przejechanej trasy.",
    text: "Wybierz punkty trasy z karty i stwórz fakturę na podstawie przejechanych kilometrów i dat z poszczególnych przystanków, dostosuj kurs walutowy, stawkę godzinową i skopiuj gotową templatkę do schowka.",
    Icon: ImStatsDots,
    darkColor: "#FFA400",
    lightColor: "#fff6e6",
    moreInfoLink: "faktura",
    featureImage: "/images/features/invoice/invoice_small.webp",
  },
  {
    header: "Stwórz dokument przewozowy czyli CMRkę z poziomu aplikacji.",
    text: "Wygodny formularz w aplikacji pozwala na utworzenie CMR'ki kierowcy, wypełnij odpowiednie pola z danymi czyli nazwiska, adresy i daty, rodzaj i ilości towaru. Po zapisaniu informacji wygeneruj plik PDF gotowy do wydruku.",
    Icon: GrDocumentText,
    darkColor: "#a080a0",
    lightColor: "#faf1fa",
    moreInfoLink: "cmr",
    featureImage: "/images/features/cmr/cmr_small.webp",
  },
  {
    header: "Śledź statystyki ze swoich przejazdów.",
    text: "Dodając nowe karty i trasy w tle działa mechanizm statystyk, sumuję przejechane kilometry i pozwala śledzić na przestrzeni każdego miesiąca. Daje to wgląd na przejrzystych wykresach w aplikacji.",
    Icon: ImStatsDots,
    darkColor: "#595ca8",
    lightColor: "#d4d5f2",
    moreInfoLink: "statystyki",
    featureImage: "/images/features/stats/stats_small.webp",
  },
  {
    header: "Wracaj do starych kart drogowych.",
    text: "Wszystkie dodane przez Ciebie karty drogowe są dostępne w aplikacji, wybierz zakres dat, w których były utworzone i przeglądaj, edytuj, dodawaj czy usuwaj dane.",
    Icon: BiSolidFileArchive,
    darkColor: "#5FAD41",
    lightColor: "#eff7ec",
    moreInfoLink: "archiwum",
    featureImage: "/images/features/arch/arch_small.webp",
  },
  {
    header: "Dostęp do listy z nowymi funkcjami i aktualizacjami poprawek.",
    text: "Każda aplikacja internetowa wymaga aktualizowania, dzięki wbudowanemu systemowi informowania o aktualizacjach jesteś na bierząco co się zmieniło, pomoż nam ulepszać PTD udzielając porad co usprawnić i kontroluj zmiany.",
    Icon: MdOutlineNewReleases,
    darkColor: "#4BC6B9",
    lightColor: "#edf9f8",
    moreInfoLink: "aktualizacje",
    featureImage: "/images/features/update/update_small.webp",
  },
];

export const featureSpecification = [
  {
    id: "ladunek",
    header: "Grupowanie",
    subheader: "Trasa i ładunek",
    text: {
      header: "Przewożony towar",
      content:
        "Podczas podróży kierowcy zawodowi często mają do przewiezienia towary do wielu miejsc na trasie. Nasza aplikacja umożliwia wygodne grupowanie punktów trasy na podstawie tego samego ładunku. Dzięki temu użytkownik może efektywniej zarządzać swoimi dostawami, oszczędzając czas i pieniądze.",
    },
    thumbLink: "/images/features/cargo/cargo_thumb.webp",
    videoLink: "https://www.youtube.com/watch?v=SlO58lWobYM",
    images: [
      "/images/features/cargo/cargo1.webp",
      "/images/features/cargo/cargo2.webp",
      "/images/features/cargo/cargo3.webp",
      "/images/features/cargo/cargo4.webp",
    ],
    longText: {
      header: "Tworzenie i przegląd grupy",
      parafs: [
        "Podczas korzystania z naszej aplikacji, użytkownik musi wskazać punkty trasy, które nie posiadają ładunku.",
        "Następnie, przechodząc do nowego okna, należy wprowadzić szczegóły dotyczące transportowanego ładunku, takie jak nazwa, tonar, temperatura (jeśli dotyczy), oraz dodatkowe notatki. Notatki oraz temperatura są opcjonalne - czasami kierowca przewozi towary w chłodni, gdzie informacja o temperaturze jest istotna.",
        "Po wprowadzeniu danych, wcześniej utworzona grupa zostaje wyświetlona w tabeli. Dodane punkty trasy są automatycznie powiązane z utworzonym ładunkiem.",
        "W przypadku, gdy kierowca chce dodać więcej punktów trasy do tej samej grupy, wystarczy zaznaczyć odpowiednie pola wyboru i dodać nowe punkty.",
        "Aplikacja wyświetla informację w prawym górnym rogu, potwierdzając dodanie punktów. Podobnie działa możliwość usuwania punktów z danej grupy.",
        "Dodatkowo, grupa ładunkowa jest w pełni edytowalna - kierowca może zmieniać nazwę ładunku, tonar, a także dodawać lub usuwać dodatkowe informacje.",
      ],
    },
  },
  {
    id: "faktura",
    header: "Faktura",
    subheader: "Podliczanie godzin",
    text: {
      header: "Tworzenie formułki do faktury",
      content:
        "Nasza aplikacja umożliwia użytkownikom stworzenie szablonu faktury, który można łatwo wkleić do dokumentu. Wykorzystując informacje o stawkach według kraju kierowcy oraz przejechanych kilometrach, aplikacja automatycznie oblicza kwotę, którą należy uwzględnić na fakturze. Dzięki temu proces fakturowania staje się szybszy i bardziej efektywny, pozwalając kierowcom skupić się na prowadzeniu biznesu.",
    },
    thumbLink: "/images/features/invoice/invoice_thumb.webp",
    videoLink: "https://youtu.be/zavFWPQtjNs",
    images: [
      "/images/features/invoice/invoice1.webp",
      "/images/features/invoice/invoice2.webp",
      "/images/features/invoice/invoice3.webp",
      "/images/features/invoice/invoice4.webp",
    ],
    longText: {
      header: "Jakis tytul do opisu funkcji",
      parafs: [
        "Użytkownik wybiera punkty trasy na podstawie, których chce obliczyć zysk do faktury.",
        "Następnie, w kolejnym oknie, należy wybrać kurs walutowy na podstawie daty. Aplikacja ogranicza się tylko do kursu euro.",
        "Po wybraniu kursu kierowca zaznacza, z którego kraju stawki chce uwzględnić.",
        "Stawki każdego kierowcy są przechowywane na serwerze w formacie tekstowym, które są pobierane, gdy użytkownik rozpoczyna proces tworzenia danych do faktury.",
        "Aplikacja na podstawie uprzednio zaznaczonych punktów trasy oblicza przejechane kilometry i wylicza ile należy się za przejechany odcinek.",
        "Naciskając przycisk 'kopiuj', szablon faktury jest przechowywany w schowku, gotowy do wklejenia w dowolnym miejscu na fakturze.",
      ],
    },
  },
  {
    id: "cmr",
    header: "CMR",
    subheader: "List przewozowy",
    text: {
      header: "Tworznie CMR'ki",
      content:
        "Nasza aplikacja zawiera wbudowaną funkcję tworzenia listu przewozowego. Po wypełnieniu odpowiednich pól, gotowy szablon może być pobrany w formie pliku PDF. Dzięki temu kierowca ma pod ręką niezbędne narzędzie, z którego często korzysta w codziennej pracy.",
    },
    thumbLink: "/images/features/cmr/cmr_thumb.webp",
    videoLink: "https://youtu.be/_eKX4KwTwKg",
    images: [
      "/images/features/cmr/cmr1.webp",
      "/images/features/cmr/cmr2.webp",
      "/images/features/cmr/cmr3.webp",
      "/images/features/cmr/cmr4.webp",
    ],
    longText: {
      header: "Wypełnianie formularza",
      parafs: [
        "Użytkownik musi wypełnić pola wymagane do listu przewozowego.",
        "Podczas wypełniania odpowiednich pól, użytkownik może zaznaczyć opcję przenoszenia informacji do innych miejsc, co pozwala zaoszczędzić czas.",
        "Przy każdej grupie pól widoczne jest oznaczenie numeryczne, odpowiadające temu, co jest zawarte w szablonie CMR obok. Dzięki temu użytkownik ma pełny podgląd na to, gdzie wpisuje poszczególne informacje.",
        "Jeśli użytkownik zaznaczy, że chce przenieść pewne informacje do kolejnego formularza, zostają one zablokowane, aby uniknąć błędów.",
        "Po dodaniu wszystkich niezbędnych informacji i wygenerowaniu listu przewozowego, użytkownik może go pobrać w formacie pliku PDF.",
        "Dodatkowo, jeśli kierowca musi wypełnić kilka takich listów, może skorzystać z funkcji czyszczenia formularza, aby zacząć od nowa.",
      ],
    },
  },
  {
    id: "statystyki",
    header: "Statystyki",
    subheader: "Monitorowanie kilometrów",
    text: {
      header: "Wbudowany system podliczania kilometrów i nie tylko",
      content:
        "Użytkownik, dodając kolejne karty i trasy, może również śledzić statystyki dotyczące przejechanych kilometrów oraz ilości utworzonych kart. Dzięki temu ma pełny ogląd na swoją aktywność i postępy w korzystaniu z aplikacji.",
    },
    thumbLink: "/images/features/stats/stat_thumb.webp",
    videoLink: "https://youtu.be/DstL1nwgER4",
    images: [
      "/images/features/stats/stat1.webp",
      "/images/features/stats/stat2.webp",
      "/images/features/stats/stat3.webp",
      "/images/features/stats/stat4.webp",
    ],
    longText: {
      header: "Jak działają statystyki",
      parafs: [
        "Głównym celem naszej aplikacji jest ułatwienie tworzenia kart drogowych, co prowadzi do częstego dodawania przez kierowców wielu kart, na przykład w ciągu roku.",
        "Podczas dodawania kart, użytkownik wprowadza również punkty trasy, które odwiedził wraz z danymi ładunkami, a ta funkcja śledzi te informacje.",
        "Aplikacja w tle automatycznie zlicza każdy przejechany kilometr dodany przez kierowcę do każdej karty.",
        "Podobnie działa funkcja monitorowania ilości kart; dostępna jest informacja o liczbie kart utworzonych w ciągu roku.",
        "Użytkownik ma możliwość przeglądania swoich statystyk na podstawie danego roku, zaczynając od 2023 roku.",
        "Dodatkowo, raz w miesiącu aplikacja dokładnie podlicza wszystkie karty i przejechane kilometry, aby zapobiec jakimkolwiek błędom. W planach jest również dodanie funkcji katalogowania ładunków oraz tankowań.",
      ],
    },
  },
  {
    id: "archiwum",
    header: "Archiwum",
    subheader: "Stare karty",
    text: {
      header: "Dostęp do starych kart drogowych",
      content:
        "Użytkownik w archiwum ma dostęp do wszystkich kart drogowych, które dotychczas dodał. W domyślnej wersji aplikacji pobierane są trzy ostatnie karty, jednak dzięki funkcji archiwum można uzyskać dostęp do reszty kart. To zapewnia użytkownikowi pełną kontrolę i możliwość przeglądania historii wszystkich wcześniej dodanych kart drogowych.",
    },
    thumbLink: "/images/features/arch/arch_thumb.webp",
    videoLink: "https://youtu.be/-JJXgcCpJxY",
    images: [
      "/images/features/arch/arch1.webp",
      "/images/features/arch/arch2.webp",
      "/images/features/arch/arch3.webp",
      "/images/features/arch/arch4.webp",
    ],
    longText: {
      header: "Archiwizacja dodanych kart",
      parafs: [
        "Kierowca może dodać kilka kart drogowych w ciągu miesiąca, a ta liczba znacząco rośnie w skali roku. Domyślnie na głównej stronie aplikacji dostępne są jedynie trzy ostatnio dodane przez użytkownika karty.",
        "Ograniczenie do trzech ostatnich kart ma na celu zmniejszenie obciążenia serwera PTD, co wpisuje się w koncepcję archiwum kart drogowych.",
        "Kierowca jest jednak w stanie uzyskać dostęp do każdej karty drogowej, którą dotychczas dodał. Po wybraniu odpowiednich dat, dane są pobierane.",
        "Każda karta drogowa posiada sygnaturę czasową, co umożliwia użytkownikowi wyszukiwanie kart z dokładnością do minut.",
        "Po wybraniu odpowiednich dat, kierowca może przeglądać, edytować lub usuwać wybrane karty. Ta funkcja zapewnia pełny dostęp do każdej karty, którą kierowca zdążył utworzyć.",
      ],
    },
  },
  {
    id: "aktualizacje",
    header: "Aktualizacje",
    subheader: "Kontakt z użytkownikiem",
    text: {
      header: "Informowanie o nowościach i naprawach",
      content:
        "Aplikacja posiada wbudowany system informowania użytkowników o nowościach i naprawach błedów. Odpowiedni przycisk na pasku nawigacyjnym zmienia kolor jeśli administrator wprowadzi jakieś zmiany.",
    },
    thumbLink: "/images/features/update/update_thumb.webp",
    videoLink: "https://youtu.be/cTBaOP6l1XI",
    images: [
      "/images/features/update/update1.webp",
      "/images/features/update/update2.webp",
      "/images/features/update/update3.webp",
      "/images/features/update/update4.webp",
    ],
    longText: {
      header: "Aktualizacje aplikacji",
      parafs: [
        "Aplikacja PTD jest stosunkowo nowa i może posiadać pewne błędy oraz jest otwarta na nowe funkcjonalności.",
        "Użytkownicy nie zawsze czytają dokumentację, dlatego wbudowany system powiadamia ich o jakichkolwiek zmianach w formie nowych funkcji czy naprawionych błędów.",
        "Po zalogowaniu się, aplikacja sprawdza, czy są nowe wiadomości od administratora. Jeśli tak, to na pasku bocznym przycisk aktualizacji ma odpowiedni kolor.",
        "Użytkownik, po wejściu w panel informacji, może odznaczyć już przeczytane nowe informacje, co powoduje zmianę koloru przycisku na taki sam jak reszta panelu.",
        "Ten system pozwala utrzymać komunikację między użytkownikami aplikacji, a jej administratorami.",
      ],
    },
  },
];
