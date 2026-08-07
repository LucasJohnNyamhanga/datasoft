export type ServiceContent = {
  key: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  includesHeading: string;
  includes: string[];
  whyHeading: string;
  why: string;
  ctaLabel: string;
};

const sw = {
  meta: {
    title: "DataSoft Tanzania — Suluhisho la Teknolojia",
    description:
      "DataSoft ni kitovu cha kiteknolojia ambapo uendeshaji wa biashara hugeuzwa kuwa programu, tovuti, mitandao au mfumo unaofanya kazi kwa ustadi na umakini wa hali ya juu.",
  },
  nav: {
    home: "Nyumbani",
    services: "Huduma",
    process: "Kazi Zetu",
    contact: "Wasiliana Nasi",
    callUs: "Piga Simu",
    fillForm: "Jaza Fomu",
    or: "au",
    languageLabel: "Lugha",
  },
  hero: {
    eyebrow: "DataSoft Tanzania",
    headlineLines: ["Teknolojia Moja.", "Uwezekano Usio na Kikomo."],

    subheadline: [
      "Kutoka wazo hadi utekelezaji, tunajenga suluhisho za kidigitali zinazorahisisha kazi na kuharakisha ukuaji wa biashara.",
      "Teknolojia iliyobuniwa kulingana na mahitaji yako ili ufanye zaidi kwa muda mfupi na kwa ufanisi.",
      "Unganisha teknolojia na ubunifu, ufungue uwezo mpya wa ukuaji.",
    ],
    ctaPrimary: "Anzisha Mradi Wako",
    ctaSecondary: "Ona Huduma Zetu",
  },
  whatWeDo: {
    eyebrow: "Huduma Zetu",
    heading: "Nguzo Nne za Kazi Yetu",
    intro:
      "Kampuni moja, uwezo kamili. Kutoka wazo la kwanza hadi mfumo unaofanya kazi, tovuti inayokuwezesha, mtandao unaoutegemea au mfumo unaouza.",
    services: [
      {
        key: "software",
        header: "Ukuzaji wa Programu",
        description:
          "Tunabuni na kujenga mifumo thabiti ya kiprogramu, iliyoundwa mahususi kukidhi mahitaji ya kiutendaji ya shirika lako.",
        link: "/Software",
      },
      {
        key: "hosting",
        header: "Tovuti na Uwekaji Mtandaoni",
        description:
          "Tunatengeneza tovuti za kifahari na kuziweka mtandaoni kwa uthabiti, kasi na usalama unaostahili chapa yako.",
        link: "/Hosting",
      },
      {
        key: "networking",
        header: "Mitandao ya Kompyuta",
        description:
          "Tunaunganisha kompyuta za ofisini kushirikiana rasilimali kama printa na skana, tukifanya ofisi yako kujitegemea kikamilifu.",
        link: "/Networking",
      },
      {
        key: "graphics",
        header: "Ubunifu wa Michoro",
        description:
          "Tunaunda kazi za kisanii za michoro zinazowasilisha ujumbe na malengo yako kwa usahihi na mvuto.",
        link: "/Graphics",
      },
    ],
    learnMore: "Soma Zaidi",
  },
  process: {
    eyebrow: "Jinsi Tunavyofanya Kazi",
    heading: "Kutoka Wazo Hadi Uzinduzi",
    intro:
      "Kila mradi unapitia hatua nne zilizopangwa vizuri, ili matokeo yawe sahihi, thabiti na yanayoendana na uhalisia wa biashara yako.",
    steps: [
      {
        title: "Wazo",
        description:
          "Tunakusikiliza kwa makini, tunaelewa lengo la biashara yako, na tunaandaa mpango kazi wenye uwazi wa kile kitakachojengwa.",
      },
      {
        title: "Muundo",
        description:
          "Tunabuni muundo na muonekano wa suluhisho lako kabla ya ujenzi kuanza, ili uweze kuona na kuidhinisha mwelekeo mapema.",
      },
      {
        title: "Ujenzi",
        description:
          "Timu yetu inajenga na kupima suluhisho hatua kwa hatua, tukikupa taarifa kila mara mradi unavyoendelea.",
      },
      {
        title: "Uzinduzi",
        description:
          "Tunazindua, tunafundisha timu yako kutumia mfumo, na tunabaki karibu kwa msaada na uboreshaji unapohitajika.",
      },
    ],
    closing:
      "Uwazi kamili katika kila hatua, hakuna cha kukupa mshangao, hakuna maswali yasiyojibiwa.",
  },
  contact: {
    eyebrow: "Wasiliana Nasi",
    heading: "Tuambie Kuhusu Mradi Wako",
    intro:
      "Tunaweza kuanza kulifanyia kazi wazo lako ndani ya masaa machache. Jaza taarifa zako chache na tutawasiliana nawe haraka iwezekanavyo.",
    quote: "Wazo Sahihi + Bidhaa Sahihi + Soko Sahihi = Mafanikio",
    fields: {
      fullName: "Jina Kamili",
      contact: "Namba ya Simu au Barua Pepe",
      orgName: "Jina la lako au Shirika",
      project: "Maelezo ya Mradi",
    },
    submit: "Tuma Ujumbe",
    sending: "Inatuma Ujumbe",
    successMessage: "Ujumbe wako umetumwa. Tutawasiliana nawe hivi karibuni.",
    errorMessage: "Imeshindikana kutuma ujumbe. Tafadhali jaribu tena baadaye.",
  },
  footer: {
    visitUs: "TUTEMBELEE",
    addressLines: [
      "Nyumba Na. 640,",
      "Barabara ya Medical Research,",
      "Kitangiri, Ilemela,",
      "Mwanza, Tanzania.",
    ],
    briefUs: "TUAMBIE",
    talkBusiness: "Tuzungumze Kibiashara",
    socialMedia: "MITANDAO YA KIJAMII",
    rights: "Haki Zote Zimehifadhiwa.",
  },
  goToTop: {
    label: "Rudi Juu",
    whatsapp: "Wasiliana kupitia WhatsApp",
  },
  common: {
    letsWork: "Wasiliana Nasi",
  },
  notFound: {
    eyebrow: "Hitilafu 404",
    headlineLines: ["Ooo, Umepotea Njia.", "Tupo Hapa Kukusaidia."],
    message:
      "Ukurasa unaoutafuta haupo, au huenda kiungo kimebadilika kidogo. Usijali maana hata mifumo bora zaidi huwa na njia panda kama hii mara moja moja.",
    subMessage:
      "Bofya kitufe hapa chini nasi tutakurudisha mahali ambapo teknolojia na ubunifu hukutana.",
    ctaHome: "Rudi Nyumbani",
  },
  portfolio: {
    eyebrow: "Uwezo Wetu",
    heading: "Haya Ndiyo Tunayoyajenga",
    intro:
      "Kila biashara ni ya kipekee, na kila suluhisho tunalolijenga huundwa mahususi kwa ajili yake. Hii si historia ya miradi ila ni uthibitisho wa tunachokijua kufanya vizuri.",
    items: [
      {
        title: "Mifumo ya Uendeshaji wa Biashara",
        description:
          "Mifumo ya kusimamia biashara, mauzo na taarifa za wateja, ulioundwa kufuata mtiririko wa kazi wa shirika lako.",
        tags: ["Mfumo hai wa data", "Ripoti za wakati halisi"],
      },
      {
        title: "Majukwaa ya Simu na Wavuti",
        description:
          "Programu za simu na tovuti zenye uwezo wa matumizi kamili, kutoka usajili wa mtumiaji hadi malipo ya mtandaoni.",
        tags: ["iOS na Android", "Muunganiko wa malipo"],
      },
      {
        title: "Tovuti za Biashara na Taasisi",
        description:
          "Tovuti za kifahari zenye muundo unaoendana na chapa yako, kasi ya hali ya juu, na msingi thabiti wa SEO.",
        tags: ["Muundo wa kipekee", "Uwekaji mtandaoni thabiti"],
      },
      {
        title: "Chapa na Vifaa vya Masoko",
        description:
          "Nembo, vitambulisho vya chapa na vifaa vya masoko vinavyowasilisha ujumbe wako kwa usahihi.",
        tags: ["Vitambulisho vya chapa", "Vifaa vya kuchapisha na kidijitali"],
      },
    ],
  },
  services: {
    software: {
      key: "software",
      eyebrow: "Ukuzaji wa Programu",
      title: "Programu Zilizoundwa Kwa Usahihi",
      subtitle:
        "Mifumo inayojengwa kulingana na mahitaji halisi ya biashara yako — kutoka wazo la kwanza hadi matumizi kamili ya kila siku.",
      intro:
        "Kila biashara ina mtiririko wake wa kazi. Badala ya kukubandika mfumo wa kawaida, tunajenga programu inayofuata jinsi shirika lako linavyofanya kazi kwa uhalisia — iwe ni mfumo wa uendeshaji wa ndani, jukwaa la wateja, au programu ya simu.",
      includesHeading: "Tunachojenga",
      includes: [
        "Mifumo maalumu ya uendeshaji wa biashara (ERP, usimamizi wa hisa, uhasibu)",
        "Majukwaa ya wavuti na programu za simu zenye data hai",
        "Uunganishaji na mifumo ya malipo na huduma za nje",
        "Matengenezo, uboreshaji na msaada wa kiufundi baada ya uzinduzi",
      ],
      whyHeading: "Kwa Nini DataSoft",
      why: "Uzoefu wetu upo Mwanza — tunaelewa muktadha wa kibiashara wa Tanzania, changamoto za mitandao ya ndani, na jinsi mifumo inavyopaswa kufanya kazi kwa uhakika katika mazingira haya.",
      ctaLabel: "Anza Mradi wa Programu",
    },
    hosting: {
      key: "hosting",
      eyebrow: "Tovuti na Uwekaji Mtandaoni",
      title: "Tovuti Zenye Hadhi, Zinazopatikana Muda Wote",
      subtitle:
        "Tovuti nzuri, za kasi na salama, zikiwa tayari kukua sambamba na biashara yako, siku zote.",
      intro:
        "Tovuti yako mara nyingi ndiyo mahali pa kwanza mteja anapokutana na chapa yako. Tunaunda tovuti zenye muundo wa kifahari, kasi ya hali ya juu, na msingi thabiti wa kiufundi, kisha tunazihudumia ili zibaki mtandaoni bila usumbufu.",
      includesHeading: "Huduma Zinazojumuishwa",
      includes: [
        "Ubunifu na ujenzi wa tovuti za biashara, taasisi na maduka ya mtandaoni",
        "Uwekaji mtandaoni (hosting) wenye ufuatiliaji na uhifadhi wa nakala",
        "Vyeti vya usalama (SSL) na ulinzi dhidi ya matatizo ya kawaida ya mtandao",
        "Usimamizi endelevu wa kikoa (domain) na sasisho za mfumo",
      ],
      whyHeading: "Kwa Nini DataSoft",
      why: "Tovuti tunazozijenga zinahudumiwa na timu iliyo hapa hapa Tanzania — hujakuwa peke yako pindi tovuti yako inapohitaji msaada wa haraka.",
      ctaLabel: "Anza Mradi wa Tovuti",
    },
    networking: {
      key: "networking",
      eyebrow: "Mitandao ya Kompyuta",
      title: "Ofisi Moja, Mfumo Mmoja Madhubuti",
      subtitle:
        "Tunaunganisha kompyuta, printa na data ya ofisi yako kuwa mfumo mmoja unaotegemewa.",
      intro:
        "Mtandao dhaifu unapunguza ufanisi wa timu nzima. Tunabuni na kusimamisha miundombinu ya mtandao inayowezesha ofisi yako kushirikiana rasilimali kwa urahisi, kwa usalama na bila kukatika mara kwa mara.",
      includesHeading: "Tunachofanya",
      includes: [
        "Usanifu na usimikaji wa mitandao ya ofisi (LAN/WLAN)",
        "Uunganishaji wa printa, skana na hifadhi za pamoja",
        "Ulinzi wa mtandao na udhibiti wa ufikiaji wa data",
        "Ufuatiliaji na matengenezo endelevu ya miundombinu",
      ],
      whyHeading: "Kwa Nini DataSoft",
      why: "Tunajenga mitandao inayoendana na ukubwa halisi wa ofisi yako — si zaidi ya inavyohitajika, wala si dhaifu kiasi cha kukuzuia kukua.",
      ctaLabel: "Anza Mradi wa Mtandao",
    },
    graphics: {
      key: "graphics",
      eyebrow: "Ubunifu wa Michoro",
      title: "Muundo Unaozungumza Kwa Niaba ya Chapa Yako",
      subtitle:
        "Kutoka nembo hadi vifaa kamili vya masoko — ubunifu unaowasilisha ujumbe wako kwa usahihi na mvuto.",
      intro:
        "Muonekano wa chapa yako huamua jinsi wateja wanavyoikisia kabla hata ya kuzungumza na wewe. Tunaunda kazi za kisanii zenye mshikamano — nembo, vitambulisho vya chapa, na vifaa vya masoko vinavyoendana na malengo yako ya kibiashara.",
      includesHeading: "Tunachobuni",
      includes: [
        "Nembo na vitambulisho kamili vya chapa (brand identity)",
        "Vifaa vya masoko vya kuchapisha na vya kidijitali",
        "Muundo wa mitandao ya kijamii unaoendana na chapa yako",
        "Vifungashio na miundo ya bidhaa",
      ],
      whyHeading: "Kwa Nini DataSoft",
      why: "Kila kazi ya ubunifu tunayoifanya inaanzia kwenye lengo lako la kibiashara, si kwenye mtindo wa mwaka huu tu — matokeo yanabaki na maana miaka mingi ijayo.",
      ctaLabel: "Anza Mradi wa Ubunifu",
    },
  } satisfies Record<string, ServiceContent>,
};

export type Dict = typeof sw;

const en: Dict = {
  meta: {
    title: "DataSoft Tanzania — Technology Solutions",
    description:
      "DataSoft is a technological center turning business into working software, websites, networks or systems that are built with craft and precision.",
  },
  nav: {
    home: "Home",
    services: "Services",
    process: "How We Work",
    contact: "Contact Us",
    callUs: "Call Us",
    fillForm: "Fill the Form",
    or: "or",
    languageLabel: "Language",
  },
  hero: {
    eyebrow: "DataSoft Tanzania",
    headlineLines: ["One Technology.", "Limitless Possibilities."],

    subheadline: [
      "We build intelligent systems that empower businesses to perform better, scale faster, and stay competitive.",
      "Software, websites, and digital infrastructure, connected solutions designed around your business needs.",
      "Built with precision. Connected with trust. Designed for sustainable growth.",
    ],
    ctaPrimary: "Start Your Project",
    ctaSecondary: "See Our Services",
  },
  whatWeDo: {
    eyebrow: "Our Services",
    heading: "Four Pillars of Our Work",
    intro:
      "One company, full capability. From the first idea to a working system, the website that presents it, the network that runs it, and the design that sells it.",
    services: [
      {
        key: "software",
        header: "Software Development",
        description:
          "We design and build robust software systems, customized to meet your organization's operational needs.",
        link: "/Software",
      },
      {
        key: "hosting",
        header: "Web Design & Hosting",
        description:
          "We build refined websites and keep them online with reliability, speed and security worthy of your brand.",
        link: "/Hosting",
      },
      {
        key: "networking",
        header: "Computer Networking",
        description:
          "We connect office computers to share resources like printers and scanners, making your office fully self-sufficient.",
        link: "/Networking",
      },
      {
        key: "graphics",
        header: "Graphics Design",
        description:
          "We create artistic graphic work that communicates your intended message and objectives with precision.",
        link: "/Graphics",
      },
    ],
    learnMore: "Learn More",
  },
  process: {
    eyebrow: "How We Work",
    heading: "From Idea to Launch",
    intro:
      "Every project moves through four well structured stages, so the outcome is accurate, durable, and grounded in your business's reality.",
    steps: [
      {
        title: "Idea",
        description:
          "We listen closely, understand your business goal, and prepare a clear plan for what will be built.",
      },
      {
        title: "Design",
        description:
          "We design the look and structure of your solution before building begins, so you can see and approve the direction early.",
      },
      {
        title: "Build",
        description:
          "Our team builds and tests the solution step by step, keeping you informed as the project progresses.",
      },
      {
        title: "Launch",
        description:
          "We launch, train your team to use the system, and stay close for support and improvements when needed.",
      },
    ],
    closing:
      "Full transparency at every stage. No surprises, no unanswered questions.",
  },
  contact: {
    eyebrow: "Contact Us",
    heading: "Tell Us About Your Project",
    intro:
      "We can start working on your idea within hours. Share a few details and we'll be in touch quickly.",
    quote: "The Right Idea + The Right Product + The Right Market = Success",
    fields: {
      fullName: "Full Name",
      contact: "Phone Number or Email",
      orgName: "Organisation Name",
      project: "Project Details",
    },
    submit: "Send Message",
    sending: "Sending Message",
    successMessage: "Your message has been sent. We'll be in touch soon.",
    errorMessage: "Failed to send message. Please try again later.",
  },
  footer: {
    visitUs: "VISIT US",
    addressLines: [
      "House No 640,",
      "Medical Research Road,",
      "Kitangiri, Ilemela,",
      "Mwanza, Tanzania.",
    ],
    briefUs: "BRIEF US",
    talkBusiness: "Let's Talk Business",
    socialMedia: "SOCIAL MEDIA",
    rights: "All Rights Reserved.",
  },
  goToTop: {
    label: "Back to Top",
    whatsapp: "Chat with us on WhatsApp",
  },
  common: {
    letsWork: "Contact Us",
  },
  notFound: {
    eyebrow: "Error 404",
    headlineLines: ["Oops, You've Drifted.", "We're Here to Help."],
    message:
      "The page you're looking for isn't here, or the link may have shifted slightly. Even the best-built systems hit an unexpected junction once in a while.",
    subMessage:
      "Tap below and we'll guide you back to where technology and craft meet.",
    ctaHome: "Back to Home",
  },
  portfolio: {
    eyebrow: "Our Capability",
    heading: "This Is What We Build",
    intro:
      "Every business is unique, and every solution we build is shaped specifically for it. This isn't a project history — it's proof of what we know how to do well.",
    items: [
      {
        title: "Business Operations Systems",
        description:
          "Systems for managing business, sales and customer records which is built to follow your organization's own workflow.",
        tags: ["Live data system", "Real-time reporting"],
      },
      {
        title: "Mobile & Web Platforms",
        description:
          "Mobile apps and websites with full usage capability, from user registration through to online payment.",
        tags: ["iOS & Android", "Payment integration"],
      },
      {
        title: "Business & Institutional Websites",
        description:
          "Refined websites styled to match your brand, built for speed, with a solid SEO foundation.",
        tags: ["Bespoke design", "Reliable hosting"],
      },
      {
        title: "Brand & Marketing Materials",
        description:
          "Logos, brand identities and marketing materials that carry your message with precision.",
        tags: ["Brand identity", "Print & digital materials"],
      },
    ],
  },
  services: {
    software: {
      key: "software",
      eyebrow: "Software Development",
      title: "Software Built With Precision",
      subtitle:
        "Systems built around how your business actually works — from first idea to full daily use.",
      intro:
        "Every business has its own workflow. Rather than fitting you into an off-the-shelf system, we build software that follows how your organization truly operates — whether that's an internal operations system, a customer platform, or a mobile app.",
      includesHeading: "What We Build",
      includes: [
        "Custom business operations systems (ERP, inventory, accounting)",
        "Web platforms and mobile apps backed by live data",
        "Integrations with payment systems and third-party services",
        "Maintenance, upgrades and technical support after launch",
      ],
      whyHeading: "Why DataSoft",
      why: "Our experience is rooted in Mwanza — we understand Tanzania's business context, local network realities, and what it takes for a system to run reliably in this environment.",
      ctaLabel: "Start a Software Project",
    },
    hosting: {
      key: "hosting",
      eyebrow: "Web Design & Hosting",
      title: "Websites With Standing, Always Online",
      subtitle:
        "Beautiful, fast and secure websites — ready to grow alongside your business, every day.",
      intro:
        "Your website is often the first place a customer meets your brand. We design refined, fast websites on a solid technical foundation, then keep them running online without disruption.",
      includesHeading: "What's Included",
      includes: [
        "Design and development for business, institutional and e-commerce sites",
        "Hosting with monitoring and backups",
        "SSL security certificates and protection against common threats",
        "Ongoing domain management and platform updates",
      ],
      whyHeading: "Why DataSoft",
      why: "The websites we build are supported by a team based right here in Tanzania — you're never on your own when your site needs urgent help.",
      ctaLabel: "Start a Website Project",
    },
    networking: {
      key: "networking",
      eyebrow: "Computer Networking",
      title: "One Office, One Dependable System",
      subtitle:
        "We connect your office's computers, printers and data into one reliable system.",
      intro:
        "A weak network slows down an entire team. We design and install network infrastructure that lets your office share resources easily, securely, and without frequent downtime.",
      includesHeading: "What We Do",
      includes: [
        "Design and installation of office networks (LAN/WLAN)",
        "Connecting printers, scanners and shared storage",
        "Network security and data access control",
        "Ongoing monitoring and infrastructure maintenance",
      ],
      whyHeading: "Why DataSoft",
      why: "We build networks sized to your office's actual scale — never more than you need, and never too weak to let you grow.",
      ctaLabel: "Start a Networking Project",
    },
    graphics: {
      key: "graphics",
      eyebrow: "Graphics Design",
      title: "Design That Speaks for Your Brand",
      subtitle:
        "From logo to a complete marketing toolkit — design that carries your message with precision and appeal.",
      intro:
        "How your brand looks shapes how customers judge it before they ever speak to you. We create cohesive artistic work — logos, brand identities, and marketing materials aligned with your business goals.",
      includesHeading: "What We Design",
      includes: [
        "Logos and complete brand identity systems",
        "Print and digital marketing materials",
        "Social media design aligned with your brand",
        "Packaging and product design",
      ],
      whyHeading: "Why DataSoft",
      why: "Every design project starts from your business goal, not this year's trend — the result still holds up years from now.",
      ctaLabel: "Start a Design Project",
    },
  },
};

export const dictionaries: Record<"sw" | "en", Dict> = { sw, en };
export type Locale = keyof typeof dictionaries;
