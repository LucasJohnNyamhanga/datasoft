// Standalone content module for the Networking service page redesign.
// Kept separate from translations.ts (a shared, actively-edited file) so this
// page's copy has its own space and can't collide with unrelated edits there.

export type NetworkingContent = {
  hero: {
    breadcrumb: string;
    eyebrow: string;
    headlineLines: [string, string];
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    panelTitle: string;
    panelCaption: string;
    statusNetwork: string;
    statusDevices: string;
    statusLink: string;
  };
  stats: { value: string; label: string }[];
  capabilities: {
    eyebrow: string;
    headingLines: [string, string];
    intro: string;
    items: {
      key: "design" | "sharing" | "security" | "monitoring";
      title: string;
      description: string;
    }[];
  };
  why: {
    eyebrow: string;
    heading: string;
    intro: string;
    points: string[];
    quote: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: { title: string; description: string }[];
    closing: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
    contactPrompt: string;
    items: { question: string; answer: string }[];
  };
};

const sw: NetworkingContent = {
  hero: {
    breadcrumb: "Mitandao ya Kompyuta",
    eyebrow: "Mitandao ya Kompyuta",
    headlineLines: ["Kila Kifaa.", "Mtandao Mmoja wa Uhakika."],
    subheadline:
      "Kutoka mapokezi hadi ofisi ya nyuma, tunabuni na kusimika mitandao ya LAN na WiFi inayounganisha kila kompyuta, printa na seva kwa mawasiliano ya papo hapo, kwa usalama, na bila simu za 'mtandao haupo'.",
    ctaPrimary: "Anza Mradi wa Mtandao",
    ctaSecondary: "Ona Jinsi Inavyofanya Kazi",
    panelTitle: "ramani-ya-mtandao — datasoft",
    panelCaption:
      "Uigaji wa moja kwa moja: jinsi data inavyosafiri ofisini kwako, kifaa hadi kifaa",
    statusNetwork: "OFISI-LAN · 192.168.1.0/24",
    statusDevices: "vifaa 7 mtandaoni",
    statusLink: "Muunganiko: Thabiti",
  },
  stats: [
    {
      value: "Vifaa 7 na Zaidi",
      label:
        "aina za vifaa vilivyounganishwa — kompyuta, printa, skana, hifadhi",
    },
    {
      value: "Chini ya Milisekunde 5",
      label: "wastani wa muda wa mawasiliano ndani ya mtandao",
    },
    {
      value: "Saa 24 za Siku 7",
      label:
        "ufuatiliaji wa mfumo, ili tatizo ligundulike kabla hujaligundua wewe",
    },
  ],
  capabilities: {
    eyebrow: "Tunachofanya",
    headingLines: ["Mtandao Uliobuniwa Kufuata", "Muundo Halisi wa Ofisi Yako"],
    intro:
      "Kila mtandao tunaousimika unaanzia kwenye uhalisia wa ofisi yako — si suluhisho la jumla linalobandikwa kila mahali.",
    items: [
      {
        key: "design",
        title: "Mtandao Unaofuata Ramani ya Ofisi Yako",
        description:
          "Tunapima mpangilio wa ofisi yako kwanza — madawati, umbali, kuta — kisha tunabuni mtandao wa LAN na WiFi unaofika kila kona bila maeneo yasiyofikika.",
      },
      {
        key: "sharing",
        title: "Printa Moja. Kila Dawati.",
        description:
          "Printa, skana na hifadhi za pamoja zinasimikwa mara moja, ili asiwepo mtu anayejitumia barua pepe faili au kusubiri foleni kwenye mashine moja.",
      },
      {
        key: "security",
        title: "Mlango Uliofungwa kwa Taarifa Zako",
        description:
          "Udhibiti wa ufikiaji, mgawanyo wa mawasiliano na taratibu za ulinzi zinazohakikisha faili nyeti zinafikiwa na watu sahihi tu — na hazionekani kwa wengine.",
      },
      {
        key: "monitoring",
        title: "Tunaona Tatizo Kabla Hujaligundua",
        description:
          "Ufuatiliaji endelevu unagundua switch inayoshindwa kufanya kazi au njia iliyojaa mapema, ili timu yako isiwe ndiyo inayogundua kwanza kuwa mtandao umekufa.",
      },
    ],
  },
  why: {
    eyebrow: "Kwa Nini Ina Maana",
    heading: "Mtandao Dhaifu ni Kodi Isiyopangwa Bajeti",
    intro:
      "Kila muunganiko unaokatika, kila 'ngoja niwashe upya router', kila dakika printa inayoshikilia foleni — vyote vinajumlika kuwa masaa ya kazi yaliyopotea ambayo ofisi haioni kwenye karatasi.",
    points: [
      "Faili zinazochukua dakika kufunguka kwenye hifadhi ya pamoja",
      "Eneo moja lisilofikiwa na WiFi linalogeuka kuwa mzunguko wa kila siku",
      "Hakuna anayegundua switch inashindwa kufanya kazi mpaka ghorofa nzima inyamaze",
    ],
    quote:
      "Tunajenga mitandao inayoendana na ukubwa halisi wa ofisi yako — si zaidi ya inavyohitajika, wala si dhaifu kiasi cha kukuzuia kukua.",
  },
  process: {
    eyebrow: "Jinsi Tunavyosimika",
    heading: "Kutoka Ukaguzi Hadi Mtandao Unaofanya Kazi Wenyewe",
    intro:
      "Kila usimikaji wa mtandao unapitia hatua nne zilizopangwa, ili matokeo yawe imara na yanayoendana na uhalisia wa ofisi yako.",
    steps: [
      {
        title: "Ukaguzi",
        description:
          "Tunatembelea ofisi yako sakafu kwa sakafu, tukipima vifaa, umbali na rasilimali ambazo timu yako tayari inazitegemea.",
      },
      {
        title: "Ubunifu",
        description:
          "Tunachora muundo kamili wa mtandao — vifaa, njia za waya au WiFi, na maeneo ya usalama — kabla ya kununua kifaa chochote.",
      },
      {
        title: "Usimikaji",
        description:
          "Timu yetu inasimika na kusanidi kila kifaa, ikijaribu kila muunganiko kabla ya kukikabidhi.",
      },
      {
        title: "Ukabidhi",
        description:
          "Tunajaribu mtandao chini ya matumizi halisi, tunafundisha timu yako, na tunabaki karibu kwa ufuatiliaji unaoendelea.",
      },
    ],
    closing:
      "Uwazi kamili katika kila hatua — unajua vifaa vyako viko wapi, na kwa nini.",
  },
  faq: {
    eyebrow: "Maswali Kuhusu Mitandao",
    heading: "Maswali Yanayoulizwa Kuhusu Mitandao ya Kompyuta",
    intro: "Majibu ya haraka kabla ya kuanza mradi wa mtandao wa ofisi yako.",
    contactPrompt: "Bado una swali kuhusu mtandao wako? Wasiliana nasi",
    items: [
      {
        question: "Usimikaji wa mtandao huchukua muda gani?",
        answer:
          "Ofisi ndogo huchukua siku chache tu, kutoka ukaguzi hadi ukabidhi. Ofisi kubwa zenye ghorofa nyingi zinaweza kuchukua wiki moja au mbili — tutakupa muda kamili baada ya ukaguzi wa kwanza.",
      },
      {
        question: "Je, mtafanya kazi bila kuvuruga shughuli za ofisi yangu?",
        answer:
          "Ndiyo. Tunapanga usimikaji kuzunguka ratiba yako ya kazi, mara nyingi nje ya saa za kazi au sehemu kwa sehemu, ili timu yako iendelee kufanya kazi bila usumbufu.",
      },
      {
        question:
          "Nina vifaa vichache tu — mtandao huu ni mkubwa kupita kiasi?",
        answer:
          "Hapana. Tunabuni mtandao kufuatana na ukubwa halisi wa ofisi yako sasa, huku tukiacha nafasi ya kukua — hulipii uwezo usiouhitaji.",
      },
      {
        question: "Je, mtaendelea kunisaidia baada ya usimikaji?",
        answer:
          "Ndiyo. Kila mtandao tunaousimika unakuja na ufuatiliaji endelevu, hivyo tatizo linagunduliwa na kutatuliwa kabla halijaathiri timu yako.",
      },
    ],
  },
};

const en: NetworkingContent = {
  hero: {
    breadcrumb: "Computer Networking",
    eyebrow: "Computer Networking",
    headlineLines: ["Every Device.", "One Reliable Network."],
    subheadline:
      "From the front desk to the back office, we design and install LAN and WiFi networks that keep every computer, printer and server talking to each other — instantly, securely, and without the dreaded ‘the network is down’ call.",
    ctaPrimary: "Start a Networking Project",
    ctaSecondary: "See How It Works",
    panelTitle: "office-lan.map — datasoft",
    panelCaption:
      "Live simulation: how data moves through your office, device by device",
    statusNetwork: "OFFICE-LAN · 192.168.1.0/24",
    statusDevices: "7 devices online",
    statusLink: "Link: Stable",
  },
  stats: [
    {
      value: "7+",
      label: "device types unified — PCs, printers, scanners, storage",
    },
    { value: "<5ms", label: "average local network latency" },
    {
      value: "24/7",
      label: "monitoring, so problems get caught before you notice them",
    },
  ],
  capabilities: {
    eyebrow: "What We Do",
    headingLines: ["A Network Built Around", "Your Actual Floor Plan"],
    intro:
      "Every network we install starts with the reality of your office — not a one-size-fits-all setup dropped in and left to chance.",
    items: [
      {
        key: "design",
        title: "Networks Built Around Your Floor Plan",
        description:
          "We map your office layout first — desks, distance, walls — then design LAN and WiFi coverage that reaches every corner without dead zones.",
      },
      {
        key: "sharing",
        title: "One Printer. Every Desk.",
        description:
          "Shared printers, scanners and storage set up once, so nobody's emailing files to themselves or queuing at a single machine.",
      },
      {
        key: "security",
        title: "A Locked Door for Your Data",
        description:
          "Access control, segmented traffic and firewall rules that keep sensitive files reachable to the right people only — and invisible to everyone else.",
      },
      {
        key: "monitoring",
        title: "We See Problems Before You Do",
        description:
          "Ongoing monitoring flags a failing switch or a saturated line early, so your team is never the one who discovers the network is down.",
      },
    ],
  },
  why: {
    eyebrow: "Why It Matters",
    heading: "A Slow Network Is a Tax Nobody Budgeted For",
    intro:
      "Every dropped connection, every 'let me restart the router', every minute a printer keeps a queue waiting — it adds up to hours of lost work an office never sees on paper.",
    points: [
      "Files that take minutes to open over a shared drive",
      "One WiFi dead zone that turns into a daily workaround",
      "No one notices a switch is failing until the whole floor goes quiet",
    ],
    quote:
      "We build networks sized to your office's actual scale — never more than you need, and never too weak to let you grow.",
  },
  process: {
    eyebrow: "How We Roll It Out",
    heading: "From Walkthrough to a Network That Runs Itself",
    intro:
      "Every installation moves through four structured stages, so the result is durable and grounded in how your office actually works.",
    steps: [
      {
        title: "Survey",
        description:
          "We walk your office floor by floor, mapping devices, distances and the resources your team already relies on.",
      },
      {
        title: "Design",
        description:
          "We draw the full network plan — hardware, cabled or wireless paths, and security zones — before a single device is purchased.",
      },
      {
        title: "Install",
        description:
          "Our team installs and configures every device, testing each connection before it's handed over.",
      },
      {
        title: "Handover",
        description:
          "We test the network under real use, train your team, and stay close for ongoing monitoring.",
      },
    ],
    closing:
      "Full transparency at every stage — you know exactly where your equipment is, and why.",
  },
  faq: {
    eyebrow: "Networking Questions",
    heading: "Questions We Get About Computer Networking",
    intro: "Quick answers before you start your office network project.",
    contactPrompt: "Still have a question about your network? Get in touch",
    items: [
      {
        question: "How long does a network installation take?",
        answer:
          "A small office takes just a few days, start to handover. Larger, multi-floor offices can take one to two weeks — we'll give you an exact timeline after the initial survey.",
      },
      {
        question: "Will the work disrupt my office?",
        answer:
          "No. We schedule installation around your working hours, often outside business hours or floor by floor, so your team keeps working without interruption.",
      },
      {
        question: "I only have a few devices — isn't this overkill?",
        answer:
          "No. We size the network to your office's actual scale today, while leaving room to grow — you never pay for capacity you don't need.",
      },
      {
        question: "Do you keep supporting the network after installation?",
        answer:
          "Yes. Every network we install comes with ongoing monitoring, so issues get caught and resolved before they affect your team.",
      },
    ],
  },
};

export const networkingDictionaries = { sw, en };
