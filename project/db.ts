import { UrlObject } from "expo-router/build/LocationProvider";

const db: Db = {
  organic: [
    {
      title: "Oszczędzaj podróżując ",
      link: "https://www.trustedhousesitters.com/",
      snippet:
        "Co to takiego? jest to globalna zweryfikowana strona, gdzie ludzie z całego świata dodają ogłoszenia, że wyjeżdzają na jakiś czas i potrzebują kogoś kto zaopiekuję się ich domem i zwierzętami. W zamian możesz mieszkać w ich domu całkowicie za darmo. Przez ile? Od wypadu na weekend, tydzień po miesiąc lub więcej. Tak się właśnie znalazłam na Malcie, mieszkam za darmo a w zamian opiekuje się cudownymi psiakami i kotkami.",
      date: "15 września 2023",
      position: 1,
    },
    {
      title: "Marketing w social mediach",
      link: "https://joankastefaniak.pl/newsletter/",
      snippet:
        "Social media kreują rzeczywistość nie tylko  w Internecie. Wyznaczają trendy, ukierunkowują reklamy, tworzą standardy zachowań i swoim zasięgiem budują zaangażowane społeczności. Dzięki nim możesz zaistnieć w przestrzeni marketingowej w świadomości swoich odbiorców i zbudować z nimi trwałe i wartościowe relacje.",
      position: 2,
    },
    {
      title: "Zarabiaj jako grafik",
      link: "https://www.fiverr.com/",
      snippet:
        "Fiverr to serwis ze zleceniami dla freelancerów z całego świata. Jego idea opiera się na ofertach (gigs), które freelancer opracowuje dla potencjalnych zleceniodawców. Może to być np. przygotowanie loga.",
      position: 3,
    },
    {
      title: "Poradnik dla początkujących: jak zarabiać na Spotify",
      link: "https://playlistpush.com/",
      snippet:
        "Playlist Push jest legalny i płaci swoim użytkownikom. Otrzymasz wynagrodzenie za recenzowanie utworów i dodawanie ich do swojej listy odtwarzania i możesz zarobić do $12 za recenzję. Strona płaci tylko za pośrednictwem przelewu bankowego.",
      position: 4,
    },
  ],
  peopleAlsoAsk: [
    {
      index: 1,
      question: "Jak zarobić 1000 zł w jeden dzień?",
      snippet:
        "Żeby zarobić 1000 złotych w jeden dzień, najlepszą opcją jest inwestycja w akcje, opcje, kontrakty terminowe, ETF-y lub waluty. Jednak należy wziąć pod uwagę, że wymaga to wiedzy i odpowiedniej analizy rynku.",
      title: "Jak zarobić szybko pieniądze? 100 zł 1000 zł - przez internet?",
      link: "https://bif24.pl/pomysly-na-biznes/jak-zarobic-szybko-pieniadze/",
    },
    {
      index: 2,
      question: "Jak zarobić 100zł w jeden dzień?",
      snippet:
        "JAK ZAROBIĆ 100 ZŁ DZIENNIE PRZEZ INTERNET? Freelancing. Freelancing to popularny sposób na zarabianie pieniędzy przez internet, wykonując zlecenia dla klientów. Sprzedawaj przedmioty online. Copywriting. Wypełniaj ankiety online. Stwórz własnego bloga. Udzielaj lekcji online. Kryptowaluty.",
      title: "Jak zarobić 100 zł dziennie przez internet w 2023 roku?",
      link: "https://klubprzedsiebiorczychmam.pl/jak-zarobic-100-zl-dziennie-przez-internet/",
    },
    {
      index: 3,
      question: "Na czym najłatwiej zarobić pieniądze?",
      snippet:
        "OTO KILKA PROPOZYCJI: copywriting, redakcja, korekta i tłumaczenie tekstów. Prowadzenie podcastów, kanałów na YouTube i w social mediach. Montaż i edycja filmów. Przepisywanie tekstów książek i nagrań. Sprzedawanie przez internet. Wypełnianie płatnych ankiet online. Programy partnerskie. Prowadzenie bloga.",
      title: "Jak zarobić pieniądze? 10+ szybkich i sprawdzonych sposobów",
      link: "https://www.livecareer.pl/porady-zawodowe/jak-zarobic-pieniadze",
    },
    {
      index: 4,
      question: "Czego warto się uczyć aby dobrze zarabiać?",
      snippet:
        "Czego warto się uczyć, by dobrze zarabiać? Jedną z najważniejszych umiejętności, która wpływa na zarobki, są zdolności komunikacyjne. Bez względu na to, czy pracujesz w obszarze sprzedaży, marketingu czy zarządzania, umiejętność skutecznej komunikacji jest kluczowa.",
      title:
        "Samorozwój – umiejętności które warto posiadać. Jak dobrze zarabiać?",
      link: "https://grupaprogres.pl/samorozwoj-jakie-umiejetnosci-warto-zdobyc-by-zarabiac-wiecej/",
    },
  ],
  Category: [
    {
      index: 1,
      logo: "https://europe1.discourse-cdn.com/business20/uploads/trustedhousesitters/original/2X/6/60bcbd843fd6de38bc5fce4be0d8a3c597a2d8ee.png",
      name: "TrustedHousesitter",
      query: "Zarabiaj podróżójąc.",
    },
    {
      index: 2,
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      name: "Promój i zarabiaj!",
      query: "social-media marketing",
    },
    {
      index: 3,
      logo: "https://seeklogo.com/images/F/fiverr-new-2020-logo-354E8A08FD-seeklogo.com.png",
      name: "Fiverr",
      query: "Grafik designer",
    },
    {
      index: 4,
      logo: "https://playlistpush.com/blog/content/images/2023/02/playlistpush-icon-red-2.png",
      name: "Playlistpush",
      query: "Podziel się muzyką!",
    },
  ],
};

type Db = {
  organic: Organic[];
  peopleAlsoAsk: PeopleAlsoAsk[];
  Category: Category[];
};

export type Organic = {
  title: string;
  link: string;
  snippet: string;
  date?: string;
  position: number;
};

export type PeopleAlsoAsk = {
  index: number;
  question: string;
  snippet: string;
  title: string;
  link: string;
};

export type Category = {
  index: number;
  logo: string;
  name: string;
  query: string;
};

export function getCategoryById(id: number) {
  const response = db.Category.find((element) => element.index === id);
  return Promise.resolve(response);
}

export function getCategory() {
  return Promise.resolve(db.Category);
}

export function getOrganic() {
  return Promise.resolve(db.organic);
}

export function getPeopleAlsoAsk() {
  return Promise.resolve(db.peopleAlsoAsk);
}

getCategoryById(1).then((dane) => {
  console.log(dane);
});
