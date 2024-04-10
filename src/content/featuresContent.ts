import { PiStackOverflowLogoBold } from "react-icons/pi";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { BiSolidFileArchive } from "react-icons/bi";
import { MdOutlineNewReleases } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";

export const features = [
  {
    header: "Dodawaj punkty trasy z tym samym ładunkiem do jednej grupy.",
    text: "Tworzenie ładunku pozwala połączyć odwiedzone punkty na podstawie przewożonego towaru, ustaw nazwę, tonaż oraz temepraturę - opcjonalnie dodaj notatki.",
    Icon: PiStackOverflowLogoBold,
    darkColor: "#EC0868",
    lightColor: "#fde6f0",
    moreInfoLink: "ladunek",
    featureImage: "/images/features/ladunek.png",
  },
  {
    header: "Wygeneruj dane do faktury z przejechanej trasy.",
    text: "Wybierz punkty trasy z karty i stwórz fakturę na podstawie przejechanych kilometrów i dat z poszczególnych przystanków, dostosuj kurs walutowy, stawkę godzinową i skopiuj gotową templatkę do schowka.",
    Icon: FaFileInvoiceDollar,
    darkColor: "#FFA400",
    lightColor: "#fff6e6",
    moreInfoLink: "faktura",
    featureImage: "/images/features/faktura.png",
  },
  {
    header: "Stwórz dokument przewozowy czyli CMRkę z poziomu aplikacji.",
    text: "Wygodny formularz w aplikacji pozwala na utworzenie CMR'ki kierowcy, wypełnij odpowiednie pola z danymi czyli nazwiska, adresy i daty, rodzaj i ilości towaru. Po zapisaniu informacji wygeneruj plik PDF gotowy do wydruku.",
    Icon: GrDocumentText,
    darkColor: "#a080a0",
    lightColor: "#faf1fa",
    moreInfoLink: "cmr",
    featureImage: "/images/features/cmr.png",
  },
  {
    header: "Śledź statystyki ze swoich przejazdów.",
    text: "Dodając nowe karty i trasy w tle działa mechanizm statystyk, sumuję przejechane kilometry i pozwala śledzić na przestrzeni każdego miesiąca. Daje to wgląd na przejrzystych wykresach w aplikacji.",
    Icon: ImStatsDots,
    darkColor: "#595ca8",
    lightColor: "#d4d5f2",
    moreInfoLink: "statystyki",
    featureImage: "/images/features/stats.png",
  },
  {
    header: "Wracaj do starych kart drogowych.",
    text: "Wszystkie dodane przez Ciebie karty drogowe są dostępne w aplikacji, wybierz zakres dat, w których były utworzone i przeglądaj, edytuj, dodawaj czy usuwaj dane.",
    Icon: BiSolidFileArchive,
    darkColor: "#5FAD41",
    lightColor: "#eff7ec",
    moreInfoLink: "archiwum",
    featureImage: "/images/features/arch.png",
  },
  {
    header: "Dostęp do listy z nowymi funkcjami i aktualizacjami poprawek.",
    text: "Każda aplikacja internetowa wymaga aktualizowania, dzięki wbudowanemu systemowi informowania o aktualizacjach jesteś na bierząco co się zmieniło, pomoż nam ulepszać PTD udzielając porad co usprawnić i kontroluj zmiany.",
    Icon: MdOutlineNewReleases,
    darkColor: "#4BC6B9",
    lightColor: "#edf9f8",
    moreInfoLink: "aktualizacje",
    featureImage: "/images/features/update.png",
  },
];

export const featureSpecification = [
  {
    id: "ladunek",
    header: "Punkty trasy / ładunki",
    text: [
      "Kierowca odbierając i dostarczając dany towar tworzy punkty trasy, są to odcinki ZAŁADUNEK - ROZŁADUNEK, aplikacja posiada funkcję grupowania punktów gdzie ładunek jest ten sam.",

      "Przykładowo rozwożąc truskawki do kilku miejsc można utworzyć grupę z nazwą towaru (truskawki), dodatkowo można dodać tonaż i temperature.",

      "Te dane są opcjonalne, podobnie jak notatki kierowcy do danego ładunku.",
    ],
    imageLinks: [
      {
        link: "/images/features/cargo/add_cargo.png",
        caption: "Użytkownik musi wybrać trasy bez utworzonego ładunku.",
      },
      {
        link: "/images/features/cargo/add_cargo_form.png",
        caption:
          "Wybrane punkty są łączone w jedną grupę, która jest identyfikowana przez nazwę ładunku.",
      },
      {
        link: "/images/features/cargo/add_cargo_ready.png",
        caption:
          "Po dodaniu sformatowana tabela pokazuje, które punkty należą do utworzonej grupy tj. ładunku.",
      },
    ],
    videoLink: "/images/features/cargo/PTD Lite - Cargo.mp4",
    subtext: [
      "Na filmie poglądowym widać, że dodaną grupę / ładunek można dowolnie edytować tzn. zmieniać nazwę czy tonaż.",
      "Pozostawia to użytkownikowi pełną autonomię jak ma to finalnie wyglądać na karcie drogowej.",
    ],
  },
  {
    id: "faktura",
  },
  {
    id: "cmr",
  },
  {
    id: "statystyki",
  },
  {
    id: "archiwum",
  },
  {
    id: "aktualizacje",
  },
];
