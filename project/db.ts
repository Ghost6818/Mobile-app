import { UrlObject } from "expo-router/build/LocationProvider";

const db: Db = {
  organic: [
    {
      title: "29 sposobów na zarobienie dodatkowych pieniędzy - GeekWork",
      link: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      snippet:
        "„Być może dzisiaj nie masz długów, dobrze zarabiasz i myślisz sobie, że nie potrzebujesz oszczędności, ale zastanów się, bo być może od zaciągania kredytów ...",
      position: 1,
    },
    {
      title: "Zarabianie pieniędzy - 4 główne sposoby - KobietaZarabia.com",
      link: "https://kobietazarabia.com/zarabianie-pieniedzy-4-sposoby/",
      snippet:
        "Dla Ciebie to jest łatwe i oczywiste, rozwiązujesz i bierzesz za to rozwiązanie pieniądze. ... Zarabiasz pieniądze nie wkładając w to swojego ...",
      date: "21 paź 2022",
      position: 2,
    },
    {
      title: "JAK ZARABIAĆ W INTERNECIE - 10 NAJLEPSZYCH METOD",
      link: "https://pomysl-na-milion.pl/jak-zarabiac-w-internecie/",
      snippet:
        "Nie każdy musi zarabiać drugą wypłatę i raczej oczywiste, że nie zostaniesz dzięki temu milionerem. ... Zarabianie tym sposobem nie należy do najbardziej ...",
      position: 3,
    },
    {
      title:
        "Poradnik dla początkujących: jak zarabiać na YouTubie, gdy nie masz czasu - YouTube",
      link: "https://youtube.com/watch?v=UvCjxw0ESR4",
      snippet: "... oczywiste sposoby zarabiania 4:13 Programy ...",
      date: "8 wrz 2020",
      position: 4,
    },
    {
      title: "5 sposobów na zarabianie w sieci - EDULIDER.pl",
      link: "https://www.edulider.pl/biznes/5-sposobow-na-zarabianie-w-sieci",
      snippet:
        "1. Zarabianie w sieci jest dla każdego. Wiele osób wychodzi z błędnego założenia, że w pracy przez Internet duże zyski może osiągnąć każdy. Prawda jest jednak ...",
      position: 5,
    },
    {
      title:
        "Jak zarabiać? Primo: Nie bądź jeleniem! To śledztwo pokaże Ci, jak nie dać się oszukać",
      link: "https://bithub.pl/artykuly/jak-zarabiac-primo-nie-badz-jeleniem-to-sledztwo-pokaze-ci-jak-nie-dac-sie-oszukac/",
      snippet:
        "Oczywistą oczywistością jest w tym względzie to, że gdybyś je miał, nie musiałbyś korzystać z żadnych sygnałów. Sygnały mają swój procent ...",
      date: "11 mar 2022",
      position: 6,
    },
    {
      title:
        "6 sposobów na zarabianie w mediach społecznościowych - RekinySukcesu.pl",
      link: "https://www.rekinysukcesu.pl/blog/social-media/6-sposobow-na-zarabianie-w-mediach-spolecznosciowych",
      snippet:
        "Znamy oczywistą istotę mediów ... Jeżeli nigdy wcześniej nie używałeś mediów społecznościowych, nie zniechęcaj się do nauki nowej umiejętności.",
      date: "12 sie 2022",
      position: 7,
    },
    {
      title:
        "Opowieść o trudnej sztuce zarabiania, czyli proste sekrety drogi do dużych pieniędzy",
      link: "https://jakoszczedzacpieniadze.pl/trudna-sztuka-zarabiania",
      snippet:
        "Jak maniak powtarzam, że najlepszym sposobem oszczędzania jest zarabianie pieniędzy. Ale nie uważam pieniędzy za najważniejszy cel pracy.",
      date: "30 mar 2017",
      position: 8,
    },
    {
      title:
        "Jak zarabiać na bankach – kontach bankowych, kartach i innych produktach? Poradnik - Moniaki.pl",
      link: "https://moniaki.pl/co-zrobic-aby-zarabiac-na-bankach-zamiast-one-na-nas/",
      snippet:
        "Nigdy nie pracowałem w banku, ale obserwując od lat rynek bankowy śmiem twierdzić, że banki nie zarabiają na kontach osobistych. ... Oczywistym jest to że nic za ...",
      position: 9,
    },
    {
      title: "Czy zarabianie w internecie jest łatwe? - Get Paid 2.0",
      link: "https://getpaid20.pl/czy-zarabianie-w-internecie-jest-latwe/",
      snippet:
        "Opinia na temat łatwego i szybkiego zarabiania pieniędzy przez internet. Jak zarabiać w internecie i pracować w domu w prosty sposób.",
      position: 10,
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
      logo: "https://images.ctfassets.net/6dczv5fypa6q/39ovXkWsNxXm0OyFJ6uoYw/e02f63d27eeed96f376dec5188ccaf36/world-nomads-travel-insurance.png",
      name: "World Nomads",
      query: "Zarabiaj podróżójąc.",
    },
    {
      index: 2,
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      name: "Zarabiaj poprzez testowanie gier!",
      query: "Gry",
    },
    {
      index: 3,
      logo: "https://i.pngimg.me/thumb/f/720/126da8bbcf.jpg",
      name: "Ucz i zarabiaj!",
      query: "AI",
    },
    {
      index: 4,
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      name: "Podziel się opinią i zarabiaj!",
      query: "Rezenzje",
    },
    {
      index: 5,
      logo: "https://playlistpush.com/blog/content/images/2023/02/playlistpush-icon-red-2.png",
      name: "Playlistpush",
      query: "Podziel się muzyką!",
    },
    {
      index: 6,
      logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      name: "TestApp",
      query: "Testowanie aplikacji",
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
