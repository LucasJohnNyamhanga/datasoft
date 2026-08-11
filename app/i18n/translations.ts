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
  // Optional richer hero content — populated for Software, Hosting and
  // Graphics, whose pages get a home-page-style hero (a live device/studio
  // mockup) instead of the shared image-backed ServiceHero. Networking
  // sources its equivalent content from its own dictionary (i18n/networking.ts).
  headlineLines?: [string, string];
  ideCaption?: string;
  secondaryCtaLabel?: string;
  capabilitiesEyebrow?: string;
  capabilitiesHeading?: [string, string];
  capabilitiesIntro?: string;
  capabilities?: { key: string; title: string; description: string }[];
  // Hosting-only: labels for the ServerCloudFlow mockup (server/cloud
  // node names and the live status pills in its window chrome).
  flowLabels?: {
    windowTitle: string;
    serverLabel: string;
    serverSub: string;
    cloudLabel: string;
    cloudSub: string;
    outLabel: string;
    inLabel: string;
    statusOnline: string;
    statusSecure: string;
    statusBackup: string;
  };
  // Software, Hosting and Graphics only — Networking sources the equivalent
  // content from its own dictionary (i18n/networking.ts). Brings these three
  // pages up to the same depth: a stat strip, a numbered process, a fuller
  // "why" section (whyHeading/why above double as its eyebrow/quote), and a
  // page-specific FAQ instead of the generic homepage one.
  stats?: { value: string; label: string }[];
  process?: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: { title: string; description: string }[];
    closing: string;
  };
  whySectionHeading?: string;
  whyIntro?: string;
  whyPoints?: string[];
  faq?: {
    eyebrow: string;
    heading: string;
    intro: string;
    contactPrompt: string;
    items: { question: string; answer: string }[];
  };
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
    capabilities: "Uwezo Wetu",
    contact: "Wasiliana Nasi",
    callUs: "Piga Simu",
    fillForm: "Jaza Fomu",
    or: "au",
    languageLabel: "Lugha",
  },
  hero: {
    eyebrow: "DataSoft Tanzania",
    headlineLines: ["Teknolojia moja.", "Uwezekano usio na kikomo."],

    subheadline: [
      "Kutoka wazo hadi utekelezaji, tunajenga suluhisho za kidigitali zinazorahisisha kazi na kuharakisha ukuaji wa biashara.",
    ],
    ctaPrimary: "Anzisha Mradi Wako",
    ctaSecondary: "Ona Huduma Zetu",
    mapCaption: "Biashara yako, ikijengwa mstari kwa mstari na DataSoft",
  },
  whatWeDo: {
    eyebrow: "Tunachofanya Bora Zaidi",
    headingLines: [
      "Kasi, urahisi na ukuaji,",
      "bila maumivu ya kichwa ya kiteknolojia",
    ],
    intro:
      "Tunakupa tekinolojia inayorahisisha kazi zako kwa kuzifanya zijikamilishe zenyewe. Tunaondoa ugumu wa kiufundi ili uweke nguvu kwenye kukuza biashara yako, si kusimamia teknolojia.",
    hub: {
      title: "DataSoft",
      tag: "Kiini cha Teknolojia",
    },
    services: [
      {
        key: "software",
        header: "Ukuzaji wa Programu",
        tag: "Thabiti",
        description:
          "Tunabuni na kujenga mifumo thabiti ya kiprogramu, iliyoundwa mahususi kukidhi mahitaji ya kiutendaji ya shirika lako.",
        link: "/Software",
      },
      {
        key: "hosting",
        header: "Tovuti na Uwekaji Mtandaoni",
        tag: "Haraka",
        description:
          "Tunatengeneza tovuti za kifahari na kuziweka mtandaoni kwa uthabiti, kasi na usalama unaostahili chapa yako.",
        link: "/Hosting",
      },
      {
        key: "networking",
        header: "Mitandao ya Kompyuta",
        tag: "Salama",
        description:
          "Tunaunganisha kompyuta za ofisini kushirikiana rasilimali kama printa na skana, tukifanya ofisi yako kujitegemea kikamilifu.",
        link: "/Networking",
      },
      {
        key: "graphics",
        header: "Ubunifu wa Michoro",
        tag: "Ubunifu",
        description:
          "Tunaunda kazi za kisanii za michoro zinazowasilisha ujumbe na malengo yako kwa usahihi na mvuto.",
        link: "/Graphics",
      },
    ],
    learnMore: "Soma Zaidi",
  },
  included: {
    eyebrow: "Kila Kitu Kimejumuishwa",
    headingLines: [
      "Pumzika — kila kitu unachohitaji",
      "kiko kwenye ncha ya kidole chako.",
    ],
    intro:
      "Kila mradi tunaoujenga huja na vipengele hivi vyote tayari vimewekwa, bila malipo ya ziada yaliyofichika — wewe zingatia biashara, sisi tunashughulikia teknolojia.",
    items: [
      {
        key: "automation",
        title: "Otomatiki",
        description:
          "Mfumo unaoweza kujiendesha wenyewe huku ukikupa taarifa, ripoti na hatua za kila siku na kuifanya timu yako ipate muda zaidi kufanya mambo muhimu zaidi ya uendeshaji na kutoa fursa ya kukua bila mipaka.",
      },
      {
        key: "metrics",
        title: "Ufuatiliaji na Takwimu",
        description:
          "Dashibodi na ripoti za wakati halisi zinazokuonyesha jinsi biashara yako inavyofanya kazi, kila siku.",
      },
      {
        key: "payments",
        title: "Malipo kwa Njia ya Mtandaoni",
        description:
          "Muunganiko wa njia za malipo za simu na benki, ili wateja wako walipe kwa urahisi popote walipo.",
      },
      {
        key: "security",
        title: "Usalama na Kasi",
        description:
          "Vyeti vya SSL, ulinzi dhidi ya matatizo ya kawaida ya mtandao, na miundombinu ya kasi ya hali ya juu bila kuathiri kazi zako.",
      },
      {
        key: "support",
        title: "Msaada Endelevu",
        description:
          "Timu yetu ya Mwanza inabaki karibu nawe baada ya uzinduzi, tayari kusaidia pindi unapohitaji.",
      },
      {
        key: "backups",
        title: "Taarifa Zinahifadhiwa",
        description:
          "Taarifa zako muhimu huhifadhiwa moja kwa moja ili usipate tabu kuzitafuta wakati wa kazi hata kama tatizo likitokea.",
      },
      {
        key: "scale",
        title: "Ukuaji Endelevu",
        description:
          "Mifumo yetu huundwa kukua sambamba na biashara yako, kutoka mtumiaji mmoja hadi maelfu bila kuanza upya.",
      },
      {
        key: "uptime",
        title: "Upatikanaji wa Uhakika",
        description:
          "Ufuatiliaji wa muda wote wa mtandao, ili tovuti na mfumo wako ubaki hai bila usumbufu pale unapouhitaji.",
      },
    ],
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
      "Majibu machache tu yanatusaidia kukupa ushauri sahihi mara ya kwanza — sio fomu ya kawaida, ni mwanzo wa mradi wako.",
    quoteFormula: {
      terms: ["Wazo Bora", "Timu Bora", "Mfumo Bunifu"],
      result: "Ushindi Wako",
    },
    trust: {
      consultation: "Ushauri wa Kwanza — Bure",
      prototype: "Mfano wa Kwanza (Prototype) Ndani ya Masaa 48",
      support: "Msaada Baada ya Uzinduzi",
      transparency: "Usalama Kamili kwenye utendaji wa mfumo",
    },
    progress: { step: "Hatua", of: "kati ya" },
    back: "Rudi Nyuma",
    steps: [
      {
        key: "projectType",
        question: "Mradi wako ni mpya au unaboresha uliopo?",
        reason:
          "Hii hutusaidia kujua tuanzie wapi — kutoka mwanzo kabisa au kuboresha kilichopo.",
        options: [
          { value: "new", label: "Mradi Mpya Kabisa" },
          { value: "upgrade", label: "Ninaboresha Uliopo" },
          { value: "unsure", label: "Sina Uhakika Bado" },
        ],
      },
      {
        key: "serviceInterest",
        question: "Unahitaji huduma gani hasa?",
        reason: "Tunataka kukuunganisha na wataalamu sahihi mara moja.",
        options: [
          { value: "software", label: "Programu au Mfumo" },
          { value: "website", label: "Tovuti" },
          { value: "networking", label: "Mitandao ya Kompyuta" },
          { value: "graphics", label: "Ubunifu wa Michoro" },
          { value: "mixed", label: "Zaidi ya Moja / Sijui Bado" },
        ],
      },
      {
        key: "layoutStatus",
        question: "Je, una muundo (design) tayari kwa mradi wako?",
        reason:
          "Hii hutusaidia kupanga muda na gharama sahihi, bila kukukisia.",
        options: [
          { value: "ready", label: "Ndiyo, Ninao Tayari" },
          { value: "idea", label: "Nina Wazo, Nahitaji Ushauri" },
          { value: "none", label: "Hapana, DataSoft Initoe Chaguo" },
        ],
      },
      {
        key: "budget",
        question: "Bajeti yako inakadiriwa kiasi gani?",
        reason:
          "Hakuna jibu 'baya' hapa wala sio kukubana, ni kutusaidia tusipendekeze kitu nje ya uwezo wako, au kidogo mno kwa lengo lako.",
        options: [
          { value: "under-500k", label: "Chini ya TZS 500,000" },
          { value: "500k-2m", label: "TZS 500,000 – 2,000,000" },
          { value: "2m-5m", label: "TZS 2,000,000 – 5,000,000" },
          { value: "above-5m", label: "Zaidi ya TZS 5,000,000" },
          { value: "unsure", label: "Sijui Bado, Nahitaji Ushauri" },
        ],
      },
      {
        key: "timeline",
        question: "Unahitaji mradi ukamilike lini?",
        reason:
          "Tunaweza kuanza kutengeneza mfano wa kwanza (prototype) ndani ya masaa 48 baada ya mazungumzo yetu.",
        options: [
          { value: "urgent", label: "Haraka Iwezekanavyo (Wiki 2)" },
          { value: "1month", label: "Ndani ya Mwezi 1" },
          { value: "1to3months", label: "Miezi 1 – 3" },
          { value: "flexible", label: "Sina Haraka, Ubora Kwanza" },
        ],
      },
    ],
    finalStep: {
      title: "Hatua ya Mwisho — Taarifa Zako",
      reason:
        "Ushauri wa kwanza ni bure. Timu yetu itawasiliana nawe ndani ya saa chache.",
    },
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
    quickLinks: "VIUNGO",
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
  graphicsStudio: {
    eyebrow: "Ndani ya Studio Yetu",
    heading: "Chapa Yako, Ikijengwa Tabaka Kwa Tabaka",
    subheadline:
      "Kutoka wazo la kwanza hadi bango tayari kuchapishwa — angalia jinsi kila tabaka la muundo wako linavyowekwa kwa umakini wa kitaalamu, si kwa violezo vya kawaida.",
    caption: "Bango la kampeni, likijengwa tabaka kwa tabaka na DataSoft",
  },
  testimonials: {
    eyebrow: "Wanachosema Wateja",
    heading: "Tunaaminiwa na Biashara, Mashirika na Taasisi",
    intro:
      "Kutoka Kigoma hadi Mbeya, hawa ni baadhi ya wamiliki wa biashara na taasisi tunaowahudumia kila siku — hii ndiyo sababu wanaendelea kuchagua DataSoft.",
    items: [
      {
        name: "Godwin Marko Shauri",
        role: "Mfanyabiashara",
        location: "Kasulu, Kigoma",
        quote:
          "Tangu DataSoft wanijengee mfumo wa duka langu, nimeacha kuandika mauzo kwa mkono. Sasa naona kila kitu — bidhaa zilizouzwa, faida ya siku — kwa dakika moja tu. Kazi nzuri ya kweli!",
      },
      {
        name: "Benson Godfrey",
        role: "Mmiliki, Kuafit Gym",
        location: "Njiro, Arusha",
        quote:
          "Tovuti waliyotujengea ya Kuafit Gym ni ya kisasa na inavutia sana. Wanachama wanajisajili mtandaoni, wanalipa, na wanaona ratiba za mazoezi bila kupiga simu ofisini. DataSoft wamebadilisha jinsi tunavyofanya kazi!",
      },
      {
        name: "Neema Isaya",
        role: "Mkurugenzi, Shule ya Awali Tumaini",
        location: "Mwanza",
        quote:
          "Mtandao wetu wa shule sasa unafanya kazi bila kukwama, na walimu wanatumia mfumo mmoja kuweka alama za wanafunzi. Timu ya DataSoft ilituelewa kwa haraka na kufanya kazi kwa uaminifu mkubwa.",
      },
      {
        name: "Hamisi Ally Juma",
        role: "Meneja, Hoteli ya Baobab",
        location: "Dodoma",
        quote:
          "Tovuti mpya ya hoteli yetu inapokea wageni kutoka nje ya nchi kila wiki. Ni ya haraka, nzuri kuangalia, na haijawahi kuzimika hata siku moja tangu izinduliwe.",
      },
      {
        name: "Grace Mrema",
        role: "Mwanzilishi, Chic Boutique",
        location: "Arusha",
        quote:
          "Nembo na vifaa vya chapa walivyonitengenezea DataSoft vimenipa taswira ya kitaalamu ambayo wateja wanaiona mara moja. Naona tofauti kubwa katika mauzo yangu ya mtandaoni.",
      },
      {
        name: "Elias Mushi",
        role: "Mkurugenzi Mtendaji, Mbeya Fresh Produce Ltd",
        location: "Mbeya",
        quote:
          "Mfumo wa kusimamia hisa na wasambazaji umetuokoa saa nyingi kila wiki. Kila idara sasa inaona taarifa zile zile, wakati ule ule. Hii ndiyo tija tuliyoihitaji.",
      },
    ],
  },
  faq: {
    eyebrow: "Maswali Yanayoulizwa Mara kwa Mara",
    heading: "Una Swali? Tuko Hapa",
    intro:
      "Majibu ya haraka kwa mambo ambayo wateja wetu huuliza mara kwa mara kabla ya kuanza mradi.",
    contactPrompt: "Bado una swali? Wasiliana nasi",
    items: [
      {
        question: "Ni huduma gani hasa mnazotoa?",
        answer:
          "Tunatoa huduma nne kuu: ukuzaji wa programu maalumu, ubunifu wa tovuti pamoja na uwekaji mtandaoni, usanifu wa mitandao ya kompyuta ya ofisini, na ubunifu wa michoro ya chapa. Kila huduma inaweza kusimama peke yake au kuunganishwa katika mradi mmoja.",
      },
      {
        question: "Mradi wangu utachukua muda gani kukamilika?",
        answer:
          "Inategemea ukubwa wa mradi, lakini tunaweza kuanza kukujengea mfano wa kwanza (prototype) ndani ya masaa 48 baada ya mazungumzo yetu ya kwanza. Kila mradi hupitia hatua nne — Wazo, Muundo, Ujenzi na Uzinduzi — na tutakupa muda kamili baada ya kuelewa mahitaji yako.",
      },
      {
        question: "Gharama ya mradi ni kiasi gani?",
        answer:
          "Kila mradi ni wa kipekee, hivyo bei hutegemea ukubwa na mahitaji yake. Fomu yetu ya mawasiliano hukuuliza wigo wa bajeti yako ili tuweze kukushauri kifurushi kinachokufaa — na ushauri wa kwanza ni bure kabisa.",
      },
      {
        question: "Je, mnafanya kazi na wateja walio nje ya Mwanza?",
        answer:
          "Ndiyo. Ingawa timu yetu ipo Mwanza, tunahudumia wateja kote Tanzania — kutoka Kigoma na Arusha hadi Dodoma na Mbeya — kupitia mawasiliano ya mtandaoni na simu, na tunasafiri panapohitajika kwa miradi ya mitandao ya ofisini.",
      },
      {
        question:
          "Sina muundo (design) yeyote tayari — je, mnaweza kunisaidia?",
        answer:
          "Kabisa. Wakati wa kujaza fomu ya mawasiliano unaweza kutuambia kama huna muundo bado, na timu yetu itakushauri na kukubunia chaguo kutoka mwanzo — hauhitaji kuja na kila kitu tayari.",
      },
      {
        question: "Je, mtanisaidia baada ya tovuti au mfumo wangu kuzinduliwa?",
        answer:
          "Ndiyo. Kila mradi tunaoujenga unakuja na msaada endelevu, ufuatiliaji wa upatikanaji (uptime), na nakala za akiba za mara kwa mara — timu yetu ya Mwanza inabaki karibu nawe kwa msaada wowote unaohitajika baada ya uzinduzi.",
      },
      {
        question: "Je, tovuti au mfumo wangu utakuwa salama?",
        answer:
          "Ndiyo. Miradi yetu yanajumuisha vyeti vya usalama (SSL), ulinzi dhidi ya matatizo ya kawaida ya mtandao, na nakala za akiba za taarifa zako, ili biashara yako ibaki salama na ifanye kazi bila wasiwasi.",
      },
      {
        question: "Nitaanzaje mradi wangu na DataSoft?",
        answer:
          "Jaza fomu yetu fupi ya mawasiliano hapo chini, au tupigie simu moja kwa moja. Maswali machache tu yanatosha kutusaidia kuelewa mradi wako, na timu yetu itawasiliana nawe ndani ya saa chache kuanza mazungumzo — bila malipo.",
      },
    ],
  },
  services: {
    software: {
      key: "software",
      eyebrow: "Ukuzaji wa Programu",
      title: "Programu Zilizoundwa Kwa Usahihi",
      subtitle:
        "Tazama tukiijenga: maombi ya mkopo, alama za kikopo, ratiba za malipo — mfumo halisi tunaoujenga kwa wateja, ukiandikwa mstari kwa mstari mbele yako.",
      headlineLines: [
        "Kutoka fomu za karatasi",
        "hadi mfumo unaojiendesha wenyewe.",
      ],
      intro:
        "Kila biashara ina mtiririko wake wa kazi. Badala ya kukubandika mfumo wa kawaida, tunajenga programu inayofuata jinsi shirika lako linavyofanya kazi kwa uhalisia — iwe ni mfumo wa uendeshaji wa ndani, jukwaa la wateja, au programu ya simu.",
      includesHeading: "Tunachojenga",
      includes: [
        "Mifumo maalumu ya uendeshaji wa biashara (ERP, usimamizi wa hisa, uhasibu)",
        "Mifumo ya mikopo na fedha ndogo — maombi, alama za kikopo na ratiba za malipo",
        "Majukwaa ya wavuti na programu za simu zenye data hai",
        "Uunganishaji na mifumo ya malipo na huduma za nje",
        "Matengenezo, uboreshaji na msaada wa kiufundi baada ya uzinduzi",
      ],
      whyHeading: "Kwa Nini DataSoft",
      why: "Uzoefu wetu upo Mwanza — tunaelewa muktadha wa kibiashara wa Tanzania, changamoto za mitandao ya ndani, na jinsi mifumo inavyopaswa kufanya kazi kwa uhakika katika mazingira haya.",
      ctaLabel: "Anza Mradi wa Programu",
      secondaryCtaLabel: "Angalia Tunachojenga",
      ideCaption:
        "Mfumo halisi wa mkopo na fedha ndogo, ukijengwa mstari kwa mstari na DataSoft",
      capabilitiesEyebrow: "Uwezo Wetu",
      capabilitiesHeading: [
        "Mifumo inayobeba biashara yako,",
        "si tu skrini nzuri",
      ],
      capabilitiesIntro:
        "Mfano ulioko juu — mfumo wa mkopo na fedha ndogo — ni sampuli tu. Uwezo huohuo unatumika kwenye kila mfumo tunaoujenga.",
      capabilities: [
        {
          key: "credit",
          title: "Mifumo ya Mkopo na Alama za Kikopo",
          description:
            "Maombi ya mkopo, uhakiki wa dhamana na uamuzi wa kuidhinisha — vyote vikifanya kazi kiotomatiki, kama ulivyoona kwenye programu hapo juu.",
        },
        {
          key: "dashboards",
          title: "Dashibodi za Wakati Halisi",
          description:
            "Ona malipo, mapato na hatari zinapotokea, si mwishoni mwa mwezi — maamuzi yanafanywa kwa taarifa za sasa, si za zamani.",
        },
        {
          key: "payments",
          title: "Malipo na Vikumbusho vya Kiotomatiki",
          description:
            "Ratiba za malipo, vikumbusho vya SMS na muunganiko na fedha za simu — wateja wanakumbushwa kabla ya tarehe, si baada.",
        },
        {
          key: "scale",
          title: "Imejengwa Kukua Nawe",
          description:
            "Kutoka wateja mia moja wa kwanza hadi laki moja, mfumo unakua bila kuhitaji kujengwa upya kutoka mwanzo.",
        },
      ],
      stats: [
        {
          value: "Masaa 48",
          label:
            "kutoka mazungumzo yetu ya kwanza hadi mfano wa kwanza unaobofya",
        },
        {
          value: "Hatua 4",
          label:
            "zilizopangwa — Wazo, Muundo, Ujenzi, Uzinduzi — kila mradi unapitia",
        },
        {
          value: "100%",
          label:
            "mfumo maalumu ulioundwa kwa ajili ya biashara yako tu kwa kuangalia mahitaji yako na nini biashara yako inachokihitaji",
        },
      ],
      process: {
        eyebrow: "Jinsi Tunavyojenga",
        heading: "Kutoka Wazo Hadi Mfumo Unaofanya Kazi",
        intro:
          "Kila mfumo tunaoujenga unapitia hatua nne zilizopangwa, ili matokeo yaendane na jinsi biashara yako inavyofanya kazi kwa uhalisia.",
        steps: [
          {
            title: "Wazo",
            description:
              "Tunazungumza kuhusu mtiririko halisi wa kazi yako, changamoto zilizopo, na matokeo unayotarajia — kabla ya kuandika msimbo wowote.",
          },
          {
            title: "Muundo",
            description:
              "Tunachora ramani ya mfumo — skrini, data na uhusiano kati yake — ili uone jinsi kitakavyofanya kazi kabla ya ujenzi kuanza.",
          },
          {
            title: "Ujenzi",
            description:
              "Tunaandika mfumo hatua kwa hatua, tukikuonyesha maendeleo mara kwa mara badala ya kukupa mshangao mwishoni.",
          },
          {
            title: "Uzinduzi",
            description:
              "Tunazindua, tunafundisha timu yako, na tunabaki karibu kwa matengenezo na uboreshaji unaoendelea.",
          },
        ],
        closing:
          "Hakuna hatua inayorukwa — ndiyo maana mfumo wako unafanya kazi tangu siku ya kwanza.",
      },
      whySectionHeading: "Mfumo Mbovu ni Gharama Iliyofichika",
      whyIntro:
        "Kila saa inayotumika kuingiza data mara mbili, kila ripoti inayotengenezwa kwa mkono, kila uamuzi unaosubiri mtu aliye likizo — vyote ni gharama halisi ya mfumo usiofaa kazi yako.",
      whyPoints: [
        "Excel zinazopotea, zenye toleo tofauti kwa kila mfanyakazi",
        "Ripoti zinazochukua siku kutengeneza kwa mkono kila mwezi",
        "Mfumo unaokwama pindi biashara yako inapokua zaidi ya ulivyopangwa",
      ],
      faq: {
        eyebrow: "Maswali Kuhusu Programu",
        heading: "Maswali Yanayoulizwa Kuhusu Ukuzaji wa Programu",
        intro: "Majibu ya haraka kabla ya kuanza mradi wako wa mfumo.",
        contactPrompt: "Bado una swali kuhusu mfumo wako? Wasiliana nasi",
        items: [
          {
            question: "Mfumo wangu utachukua muda gani kujengwa?",
            answer:
              "Tunaweza kukujengea mfano wa kwanza unaobofya (prototype) ndani ya masaa 48 baada ya mazungumzo yetu ya kwanza. Muda kamili wa mradi unategemea ukubwa wake, na tutakupa ratiba kamili baada ya kuelewa mahitaji yako.",
          },
          {
            question: "Je, mnaweza kuboresha mfumo niliokuwa nao tayari?",
            answer:
              "Ndiyo. Tunaweza kuongeza vipengele vipya, kuboresha kasi, au kuunganisha mfumo wako uliopo na huduma nyingine badala ya kuanza kutoka mwanzo.",
          },
          {
            question: "Nani anamiliki msimbo wa mfumo baada ya kukamilika?",
            answer:
              "Wewe. Mfumo unaojengwa kwa ajili yako ni mali yako kamili, ikiwa ni pamoja na msimbo wake wa chanzo.",
          },
          {
            question: "Je, mtanisaidia baada ya uzinduzi?",
            answer:
              "Ndiyo, kila mfumo unakuja na matengenezo na msaada endelevu — timu yetu ya Mwanza inabaki karibu nawe.",
          },
        ],
      },
    },
    hosting: {
      key: "hosting",
      eyebrow: "Tovuti na Uwekaji Mtandaoni",
      title: "Tovuti Zenye Hadhi, Zinazopatikana Muda Wote",
      subtitle:
        "Tovuti nzuri, za kasi na salama, zikiwa tayari kukua sambamba na biashara yako, siku zote.",
      headlineLines: ["Tovuti Yako Haipumziki.", "Sisi Pia Hatupumziki."],
      intro:
        "Tovuti yako mara nyingi ndiyo mahali pa kwanza mteja anapokutana na chapa yako. Tunaunda tovuti zenye muundo wa kifahari, kasi ya hali ya juu, na msingi thabiti wa kiufundi, kisha tunazihudumia ili zibaki mtandaoni bila usumbufu.",
      includesHeading: "Huduma Zinazojumuishwa",
      includes: [
        "Ubunifu na ujenzi wa tovuti za biashara, taasisi na maduka ya mtandaoni",
        "Uwekaji mtandaoni (hosting) wenye ufuatiliaji na uhifadhi wa nakala",
        "Vyeti vya usalama (SSL) na ulinzi dhidi ya matatizo ya kawaida ya mtandao",
        "Usimamizi endelevu wa kikoa (domain) na sasisho za mfumo",
      ],
      whyHeading: "Timu Iliyo Hapa, Si Kituo cha Mbali",
      why: "Tovuti tunazozijenga zinahudumiwa na timu iliyo hapa hapa Mwanza, Tanzania. Haupo peke yako pindi tovuti yako inapohitaji msaada wa haraka, na hatuachi kufanya kazi baada ya uzinduzi.",
      ctaLabel: "Anza Mradi wa Tovuti",
      secondaryCtaLabel: "Ona Miundombinu Yetu",
      ideCaption:
        "Trafiki halisi ya tovuti, ikifuatiliwa saa kwa saa na DataSoft Cloud",
      capabilitiesEyebrow: "Kila Kitu Tovuti Yako Inahitaji",
      capabilitiesHeading: [
        "Miundombinu Inayofanya Kazi,",
        "Hata Wewe Ukiwa Umelala.",
      ],
      capabilitiesIntro:
        "Uwekaji mtandaoni si kununua nafasi tu kwenye seva, bali ni mfumo mzima unaohakikisha tovuti yako inapatikana, ni salama, na iko tayari kukua. Haya ndiyo tunayoyashughulikia kwa niaba yako, kila siku.",
      capabilities: [
        {
          key: "uptime",
          title: "Ufuatiliaji wa Muda Wote",
          description:
            "Mfumo wetu unaangalia tovuti yako dakika kwa dakika, ukigundua na kutatua tatizo kabla halijamfikia mteja wako.",
        },
        {
          key: "security",
          title: "Ulinzi na Vyeti vya SSL",
          description:
            "Kila tovuti inapata cheti cha usalama (SSL) na ulinzi dhidi ya mashambulizi yote ya mtandaoni, data ya wateja wako zinabaki siri na salama wakati wote.",
        },
        {
          key: "backups",
          title: "Nakala za Chelezo za Kila Siku",
          description:
            "Taarifa na maudhui ya tovuti yako yanahifadhiwa mara kwa mara, hivyo hata likitokea tatizo, unarudi kazini ndani ya dakika.",
        },
        {
          key: "speed",
          title: "Kasi Inayouza",
          description:
            "Tovuti ya kasi hubadilisha watazamaji kuwa wateja. Tunaboresha picha, misimbo na miundombinu ili ukurasa wako ufunguke haraka kila wakati.",
        },
        {
          key: "scale",
          title: "Inayokua Pamoja na Wewe",
          description:
            "Trafiki ikiongezeka, miundombinu yako inaongezeka pia, wala huna haja ya kuanza upya kila biashara yako inapokua.",
        },
        {
          key: "support",
          title: "Msaada wa Kweli, Ndani ya Tanzania",
          description:
            "Tovuti ikihitaji msaada, unazungumza na timu yetu inayokusikiliza kwa muda wote. Kituo chako cha huduma kwa wateja kinachofahamu muktadha wako.",
        },
        {
          key: "domain",
          title: "Usimamizi wa Kikoa (Domain)",
          description:
            "Tunasimamia usajili na uhuishaji wa jina la tovuti yako, ili umiliki wake usiende nje ya muda bila wewe kujua na kuathiri biashara yako.",
        },
        {
          key: "migration",
          title: "Uhamishaji Bure",
          description:
            "Una tovuti tayari mahali pengine? Tunaihamishia kwenye miundombinu yetu bila malipo ya ziada na bila muda wa kutoonekana mtandaoni.",
        },
      ],
      flowLabels: {
        windowTitle: "seva.datasoft.co.tz — hali ya mtandao",
        serverLabel: "Seva Yako",
        serverSub: "Tovuti + Data",
        cloudLabel: "DataSoft Cloud",
        cloudSub: "Ufuatiliaji Saa 24",
        outLabel: "Data Inayotoka",
        inLabel: "Data Inayoingia",
        statusOnline: "Mtandaoni",
        statusSecure: "SSL Imewashwa",
        statusBackup: "Nakala Mpya",
      },
      stats: [
        {
          value: "Saa 24 za Siku 7",
          label:
            "ufuatiliaji wa upatikanaji wa tovuti, ukigundua tatizo kabla ya mteja wako",
        },
        {
          value: "Chini ya Saa Moja",
          label:
            "wastani wa muda wa kujibu pindi tovuti inapohitaji msaada wa haraka",
        },
        {
          value: "0 Tsh",
          label:
            "gharama ya ziada ya kuhamisha tovuti yako iliyopo kwenye miundombinu yetu",
        },
      ],
      process: {
        eyebrow: "Jinsi Tunavyofanya Kazi",
        heading: "Kila Tovuti Inapitia Njia Ile Ile ya Uhakika",
        intro:
          "Kila mradi wa tovuti unapitia hatua nne zilizopangwa, ili tovuti yako iwe imara tangu siku ya kwanza ya kuzinduliwa.",
        steps: [
          {
            title: "Tathmini",
            description:
              "Tunaangalia tovuti yako ya sasa (kama ipo) na mahitaji yako, kisha tunapendekeza muundo na miundombinu inayofaa.",
          },
          {
            title: "Ubunifu",
            description:
              "Tunaunda tovuti yenye muonekano wa kifahari na kasi ya hali ya juu, ikijengwa kwenye msingi thabiti wa kiufundi.",
          },
          {
            title: "Uzinduzi",
            description:
              "Tunahamisha au kuanzisha tovuti yako kwenye miundombinu yetu bila muda wa kutoonekana mtandaoni.",
          },
          {
            title: "Ufuatiliaji",
            description:
              "Tunaendelea kuiangalia saa 24, tukichukua nakala za akiba na kutatua matatizo kabla hujayagundua.",
          },
        ],
        closing:
          "Tovuti yako haikai kimya baada ya uzinduzi — tunabaki tukiiangalia kila siku.",
      },
      whySectionHeading:
        "Tovuti Iliyokufa kwa Dakika Tano ni Wateja Waliopotea",
      whyIntro:
        "Kila sekunde tovuti yako inachukua kufunguka, kila 'tovuti haipatikani' — ni fursa ya mauzo inayopotea kwenda kwa mshindani wako.",
      whyPoints: [
        "Tovuti inayoshuka usiku bila mtu kugundua mpaka asubuhi",
        "Cheti cha SSL kinachoisha bila kuonya mtu yeyote",
        "Hakuna nakala ya akiba pindi kosa dogo linapofuta maudhui yote",
      ],
      faq: {
        eyebrow: "Maswali Kuhusu Tovuti na Uwekaji Mtandaoni",
        heading: "Maswali Yanayoulizwa Kuhusu Hosting",
        intro: "Majibu ya haraka kabla ya kuanza mradi wa tovuti yako.",
        contactPrompt: "Bado una swali kuhusu tovuti yako? Wasiliana nasi",
        items: [
          {
            question: "Tovuti yangu itakuwa na kasi kiasi gani?",
            answer:
              "Tunaboresha picha, misimbo na miundombinu ili ukurasa wako ufunguke haraka kila wakati — kasi ni sehemu ya muundo, si jambo la kuongezwa baadaye.",
          },
          {
            question: "Nini kitatokea tovuti yangu ikishuka?",
            answer:
              "Mfumo wetu unaangalia tovuti yako dakika kwa dakika. Tatizo likitokea, timu yetu ya Mwanza inaanza kulitatua mara moja, mara nyingi kabla hujaligundua.",
          },
          {
            question:
              "Je, mnaweza kuhamisha tovuti yangu iliyopo kwa DataSoft?",
            answer:
              "Ndiyo, bila malipo ya ziada na bila muda wa kutoonekana mtandaoni. Tunashughulikia uhamishaji mzima kwa niaba yako.",
          },
          {
            question: "Je, mnasimamia kikoa (domain) changu pia?",
            answer:
              "Ndiyo. Tunasimamia usajili na uhuishaji wa jina la tovuti yako, ili lisiisha bila wewe kujua.",
          },
        ],
      },
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
      title: "Sekunde Tatu Kuvutia. Tunazitumia Vizuri.",
      subtitle:
        "Huu ndiyo muda mteja anaotumia kuamua kama chapa yako inaaminika, kutoka nembo hadi bango la kampeni, kila tabaka la michoro yetu inalenga sekunde hizo tatu.",
      headlineLines: ["Sekunde Tatu Kuvutia.", "Tunazitumia Vizuri."],
      intro:
        "Muonekano wa chapa yako huzungumza kabla hata hujafungua mdomo. Tunaunda kazi za kisanii zenye mshikamano — nembo, vitambulisho vya chapa, na vifaa vya masoko — ambazo si tu nzuri kuangalia, bali zinauza, zinakumbukwa, na zinaendana na malengo yako ya kibiashara.",
      includesHeading: "Tunachobuni",
      includes: [
        "Nembo na vitambulisho kamili vya chapa (brand identity)",
        "Mabango na vifaa vya masoko vya kuchapisha na vya kidijitali",
        "Muundo wa mitandao ya kijamii unaoendana na chapa yako",
        "Vifungashio na miundo ya bidhaa",
      ],
      whyHeading: "Kwa Nini DataSoft",
      why: "Kila kazi ya ubunifu tunayoifanya inaanzia kwenye lengo lako la kibiashara, si kwenye mtindo wa mwaka huu tu — matokeo yanabaki na maana miaka mingi ijayo.",
      ctaLabel: "Anza Mradi wa Ubunifu",
      secondaryCtaLabel: "Ona Uwezo Wetu",
      capabilitiesEyebrow: "Uwezo Wetu",
      capabilitiesHeading: ["Muundo Unaouza,", "Si Tu Mzuri Kuangalia"],
      capabilitiesIntro:
        "Bango ulilolioona likijengwa hapo juu ni mfano mmoja tu. Uwezo huohuo wa kubuni unatumika kwenye kila kazi tunayoifanya kwa chapa yako.",
      capabilities: [
        {
          key: "branding",
          title: "Nembo na Vitambulisho vya Chapa",
          description:
            "Tunaunda nembo na mfumo kamili wa chapa — rangi, fonti na miongozo — ili kila kinachotoka kwa jina lako kionekane kimoja na cha kuaminika.",
        },
        {
          key: "print",
          title: "Mabango na Vifaa vya Masoko",
          description:
            "Kutoka mabango ya kuchapisha hadi matangazo ya kidijitali, kila kipande kinaundwa kuvutia macho ndani ya sekunde tatu za kwanza.",
        },
        {
          key: "social",
          title: "Muundo wa Mitandao ya Kijamii",
          description:
            "Machapisho na vielelezo vinavyoendana na chapa yako, vilivyotengenezwa kuongeza mwonekano na mwingiliano wa wafuasi wako.",
        },
        {
          key: "packaging",
          title: "Vifungashio na Miundo ya Bidhaa",
          description:
            "Tunabuni vifungashio vinavyouza, michoro inayobakia dukani na kubaki akilini mwa mteja baada ya ununuzi.",
        },
      ],
      stats: [
        {
          value: "Sekunde 3",
          label:
            "muda ambao hisia ya kwanza inatakiwa ifike kwa walengwa wa mchoro, kila tabaka la muundo wetu linalenga hilo",
        },
        {
          value: "100%",
          label:
            "dhana za kipekee iliyo maalumukwa ajili yako, hakuna kikolezo cha jumla kinachotumika kwa wateja wote",
        },
        {
          value: "Mfumo Pekee",
          label:
            "mfumo mmoja wa chapa unaotumika kwenye kuchapisha, kidijitali na vifungashio",
        },
      ],
      process: {
        eyebrow: "Jinsi Tunavyobuni",
        heading: "Kutoka Mazungumzo Hadi Muundo Uliokamilika",
        intro:
          "Kila kazi ya ubunifu tunayoifanya inapitia hatua nne zilizopangwa, ili matokeo yaendane na chapa yako, si tu mtindo wa siku hiyo.",
        steps: [
          {
            title: "Ugunduzi",
            description:
              "Tunaelewa chapa yako, hadhira yako na malengo ya kibiashara kabla ya kuchora chochote.",
          },
          {
            title: "Dhana",
            description:
              "Tunachora dhana kadhaa tofauti, ili uone mielekeo mbalimbali kabla ya kuchagua moja ya kuiendeleza.",
          },
          {
            title: "Uboreshaji",
            description:
              "Tunaboresha dhana uliyoichagua kwa maoni yako, hatua kwa hatua, mpaka ifikie kiwango unachokitaka.",
          },
          {
            title: "Ukabidhi",
            description:
              "Unapokea faili zote za mwisho, ukiwa tayari kwa uchapishaji, mtandao au vyote viwili.",
          },
        ],
        closing:
          "Kila kazi inatokana na mazungumzo, si nadhani — ndiyo maana matokeo yanaendana na chapa yako.",
      },
      whySectionHeading: "Muundo Usioendana ni Chapa Isiyoaminika",
      whyIntro:
        "Nembo moja kwenye tovuti, nyingine kwenye vipeperushi, rangi tofauti kila mfanyakazi anapotengeneza slaidi — mteja anaona hilo kabla hajasoma neno lolote.",
      whyPoints: [
        "Nembo zenye ubora tofauti zikitumika mahali tofauti",
        "Hakuna mwongozo wa chapa, hivyo kila mfanyakazi anabuni kwa mtindo wake",
        "Vifaa vya masoko vinavyoonekana kutoka makampuni tofauti, si kimoja",
      ],
      faq: {
        eyebrow: "Maswali Kuhusu Ubunifu",
        heading: "Maswali Yanayoulizwa Kuhusu Ubunifu wa Michoro",
        intro: "Majibu ya haraka kabla ya kuanza mradi wako wa chapa.",
        contactPrompt: "Bado una swali kuhusu muundo wako? Wasiliana nasi",
        items: [
          {
            question: "Nitapata dhana ngapi za kuchagua?",
            answer:
              "Tunakuletea dhana kadhaa tofauti mwanzoni, ili uchague kutoka mielekeo halisi tofauti, si toleo moja lililobadilishwa rangi.",
          },
          {
            question: "Ni marudio mangapi ya maoni yanayojumuishwa?",
            answer:
              "Baada ya kuchagua dhana, tunaiboresha kwa maoni yako hatua kwa hatua mpaka ifikie kiwango unachokitaka — si toleo moja tu la mwisho.",
          },
          {
            question: "Je, nitapata faili za chanzo za muundo?",
            answer:
              "Ndiyo. Unapokea faili zote za mwisho, tayari kwa uchapishaji au matumizi ya kidijitali, ukiwa na uwezo kamili wa kuzitumia.",
          },
          {
            question:
              "Je, mnaweza kubuni kwa ajili ya kuchapisha na kidijitali kutoka chapa moja?",
            answer:
              "Ndiyo. Mfumo mmoja wa chapa — rangi, fonti na miongozo — unatumika kwenye kila kipande, kutoka mabango ya kuchapisha hadi machapisho ya mitandao ya kijamii.",
          },
        ],
      },
    },
  } satisfies Record<string, ServiceContent>,
};

export type Dict = typeof sw;

// Software, Hosting and Graphics are the three service pages whose stats /
// process / why / faq sections live in this file (Networking sources its
// equivalent content from i18n/networking.ts instead, via its own
// Network*-prefixed components). Narrowing to this union — rather than
// `keyof Dict["services"]`, which also includes "networking" — lets
// ServiceStats/ServiceProcess/ServiceWhy/FAQ index `t.services[key]` and get
// back a type that's guaranteed to carry those fields.
export type ExtendedServiceKey = "software" | "hosting" | "graphics";

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
    capabilities: "Capabilities",
    contact: "Contact Us",
    callUs: "Call Us",
    fillForm: "Fill the Form",
    or: "or",
    languageLabel: "Language",
  },
  hero: {
    eyebrow: "DataSoft Tanzania",
    headlineLines: ["One technology.", "Limitless possibilities."],

    subheadline: [
      "From idea to implementation, we build digital solutions that simplify work and accelerate business growth.",
    ],
    ctaPrimary: "Start Your Project",
    ctaSecondary: "See Our Services",
    mapCaption: "Your business, built line by line by DataSoft",
  },
  whatWeDo: {
    eyebrow: "What We Do Best",
    headingLines: [
      "Speed, simplicity, and growth,",
      "without the tech headaches",
    ],
    intro:
      "We provide technology that automates your workflow and eliminates technical hurdles, allowing you to focus on growing your business and not managing technology.",
    hub: {
      title: "DataSoft",
      tag: "Technology Core",
    },
    services: [
      {
        key: "software",
        header: "Software Development",
        tag: "Robust",
        description:
          "We design and build robust software systems, customized to meet your organization's operational needs.",
        link: "/Software",
      },
      {
        key: "hosting",
        header: "Web Design & Hosting",
        tag: "Fast",
        description:
          "We build refined websites and keep them online with reliability, speed and security worthy of your brand.",
        link: "/Hosting",
      },
      {
        key: "networking",
        header: "Computer Networking",
        tag: "Secure",
        description:
          "We connect office computers to share resources like printers and scanners, making your office fully self-sufficient.",
        link: "/Networking",
      },
      {
        key: "graphics",
        header: "Graphics Design",
        tag: "Creative",
        description:
          "We create artistic graphic work that communicates your intended message and objectives with precision.",
        link: "/Graphics",
      },
    ],
    learnMore: "Learn More",
  },
  included: {
    eyebrow: "Everything Included",
    headingLines: ["Relax — everything you need,", "right at your fingertips."],
    intro:
      "Every project we build comes with all of this already included, with no hidden extra costs — you focus on your business, we handle the technology.",
    items: [
      {
        key: "automation",
        title: "Automation",
        description:
          "Workflows that run themselves — alerts, reports and everyday tasks — so your team spends time on what matters most.",
      },
      {
        key: "metrics",
        title: "Metrics & Monitoring",
        description:
          "Real-time dashboards and reporting that show you exactly how your business is performing, every day.",
      },
      {
        key: "payments",
        title: "Online Payments",
        description:
          "Mobile money and bank payment integrations, so your customers can pay easily wherever they are.",
      },
      {
        key: "security",
        title: "Security & Speed",
        description:
          "SSL certificates, protection against common threats, and high-performance infrastructure — without trade-offs.",
      },
      {
        key: "support",
        title: "Ongoing Support",
        description:
          "Our Mwanza-based team stays close after launch, ready to help whenever you need us.",
      },
      {
        key: "backups",
        title: "Automatic Backups",
        description:
          "Your important data is backed up automatically and regularly, so nothing is lost if something goes wrong.",
      },
      {
        key: "scale",
        title: "Built to Scale",
        description:
          "Our systems are built to grow alongside your business — from one user to thousands, without starting over.",
      },
      {
        key: "uptime",
        title: "Reliable Uptime",
        description:
          "Monitored, dependable hosting that keeps your website and systems running without disruption.",
      },
    ],
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
      "A few quick answers help us give you the right advice from the start — this isn't just a form, it's the beginning of your project.",
    quoteFormula: {
      terms: ["Great Idea", "Great Team", "Innovative System"],
      result: "Your Victory",
    },
    trust: {
      consultation: "First Consultation — Free",
      prototype: "First Prototype Ready Within 48 Hours",
      support: "Support After Launch",
      transparency: "Full Transparency — No Surprises",
    },
    progress: { step: "Step", of: "of" },
    back: "Back",
    steps: [
      {
        key: "projectType",
        question:
          "Is your project brand new, or an upgrade to an existing one?",
        reason:
          "This helps us know where to start — from scratch, or improving what you already have.",
        options: [
          { value: "new", label: "Brand New Project" },
          { value: "upgrade", label: "Upgrading an Existing One" },
          { value: "unsure", label: "Not Sure Yet" },
        ],
      },
      {
        key: "serviceInterest",
        question: "What service do you need exactly?",
        reason: "So we can connect you with the right specialists right away.",
        options: [
          { value: "software", label: "Software or a System" },
          { value: "website", label: "Website" },
          { value: "networking", label: "Computer Networking" },
          { value: "graphics", label: "Graphics Design" },
          { value: "mixed", label: "More Than One / Not Sure Yet" },
        ],
      },
      {
        key: "layoutStatus",
        question: "Do you already have a design or layout ready?",
        reason:
          "This helps us plan the right timeline and cost, without guessing.",
        options: [
          { value: "ready", label: "Yes, It's Ready" },
          { value: "idea", label: "I Have an Idea, Need Guidance" },
          { value: "none", label: "No, DataSoft Should Give Me Options" },
        ],
      },
      {
        key: "budget",
        question: "What's your estimated budget?",
        reason:
          "There are no 'wrong' answers here, and we aren't trying to corner you. We just want to make sure we don't propose something outside your budget or too small for your goals.",
        options: [
          { value: "under-500k", label: "Under TZS 500,000" },
          { value: "500k-2m", label: "TZS 500,000 – 2,000,000" },
          { value: "2m-5m", label: "TZS 2,000,000 – 5,000,000" },
          { value: "above-5m", label: "Above TZS 5,000,000" },
          { value: "unsure", label: "Not Sure Yet, Need Advice" },
        ],
      },
      {
        key: "timeline",
        question: "When do you need the project completed?",
        reason:
          "We can start on a first prototype within 48 hours of our first conversation.",
        options: [
          { value: "urgent", label: "As Soon as Possible (2 Weeks)" },
          { value: "1month", label: "Within 1 Month" },
          { value: "1to3months", label: "1 – 3 Months" },
          { value: "flexible", label: "No Rush, Quality First" },
        ],
      },
    ],
    finalStep: {
      title: "Final Step — Your Details",
      reason:
        "The first consultation is free. Our team will reach out within a few hours.",
    },
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
    quickLinks: "QUICK LINKS",
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
  graphicsStudio: {
    eyebrow: "Inside Our Studio",
    heading: "Your Brand, Built Layer by Layer",
    subheadline:
      "From first sketch to a print-ready poster — watch how every layer of your design comes together with real craft, not stock templates.",
    caption: "A campaign poster, being built layer by layer by DataSoft",
  },
  testimonials: {
    eyebrow: "What Clients Say",
    heading: "Trusted by Businesses, Organizations and Institutions",
    intro:
      "From Kigoma to Mbeya, these are some of the business owners and institutions we serve every day — this is why they keep choosing DataSoft.",
    items: [
      {
        name: "Godwin Marko Shauri",
        role: "Business Owner",
        location: "Kasulu, Kigoma",
        quote:
          "Since DataSoft built my shop's system, I've stopped writing sales by hand. Now I see everything — items sold, the day's profit — in a single glance. Truly excellent work!",
      },
      {
        name: "Benson Godfrey",
        role: "Owner, Kuafit Gym",
        location: "Njiro, Arusha",
        quote:
          "The website DataSoft built for Kuafit Gym is modern and eye-catching. Members sign up online, pay, and check workout schedules without ever calling the office. DataSoft has changed how we operate!",
      },
      {
        name: "Neema Isaya",
        role: "Director, Tumaini Preschool",
        location: "Mwanza",
        quote:
          "Our school's network no longer stalls, and teachers now use one system to record student grades. DataSoft's team understood us quickly and worked with real integrity.",
      },
      {
        name: "Hamisi Ally Juma",
        role: "Manager, Baobab Hotel",
        location: "Dodoma",
        quote:
          "Our hotel's new website brings in guests from abroad every week. It's fast, beautiful, and hasn't gone down a single day since launch.",
      },
      {
        name: "Grace Mrema",
        role: "Founder, Chic Boutique",
        location: "Arusha",
        quote:
          "The logo and brand materials DataSoft designed gave me a professional look customers notice instantly. I've seen a real jump in my online sales.",
      },
      {
        name: "Elias Mushi",
        role: "Managing Director, Mbeya Fresh Produce Ltd",
        location: "Mbeya",
        quote:
          "The inventory and supplier management system has saved us hours every week. Every department now sees the same information, at the same time. This is exactly the efficiency we needed.",
      },
    ],
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Got a Question? We're Here",
    intro:
      "Quick answers to what clients most often ask before starting a project.",
    contactPrompt: "Still have questions? Contact us",
    items: [
      {
        question: "What services do you actually offer?",
        answer:
          "We offer four core services: custom software development, website design and hosting, office computer networking, and brand/graphics design. Each one can stand alone or be combined into a single project.",
      },
      {
        question: "How long does a project take to complete?",
        answer:
          "It depends on the size of the project, but we can start building your first prototype within 48 hours of our first conversation. Every project moves through four stages — Idea, Design, Build and Launch — and we'll give you a firm timeline once we understand your needs.",
      },
      {
        question: "How much does a project cost?",
        answer:
          "Every project is unique, so pricing depends on its size and requirements. Our contact form asks about your budget range so we can recommend the right package for you — and the first consultation is completely free.",
      },
      {
        question: "Do you work with clients outside Mwanza?",
        answer:
          "Yes. While our team is based in Mwanza, we serve clients across Tanzania — from Kigoma and Arusha to Dodoma and Mbeya — through online and phone communication, and we travel on-site when a networking project requires it.",
      },
      {
        question: "I don't have a design ready yet — can you still help?",
        answer:
          "Absolutely. Our contact form lets you tell us you don't have a design yet, and our team will guide you and put together options from scratch — you don't need to arrive with everything figured out.",
      },
      {
        question: "Will you support my website or system after launch?",
        answer:
          "Yes. Every project we build comes with ongoing support, uptime monitoring and regular backups — our Mwanza-based team stays close by for whatever help you need after launch.",
      },
      {
        question: "Will my website or system be secure?",
        answer:
          "Yes. Our projects include SSL security certificates, protection against common network threats, and regular backups of your data, so your business stays safe and runs without worry.",
      },
      {
        question: "How do I start a project with DataSoft?",
        answer:
          "Fill out our short contact form below, or call us directly. A handful of quick questions is all we need to understand your project, and our team will reach out within a few hours to start the conversation — at no cost.",
      },
    ],
  },
  services: {
    software: {
      key: "software",
      eyebrow: "Software Development",
      title: "Software Built With Precision",
      subtitle:
        "Watch us build it: loan approvals, credit scoring, repayment schedules — a real system we ship for clients, typed out line by line in front of you.",
      headlineLines: [
        "From paperwork and spreadsheets",
        "to a system that runs itself.",
      ],
      intro:
        "Every business has its own workflow. Rather than fitting you into an off-the-shelf system, we build software that follows how your organization truly operates — whether that's an internal operations system, a customer platform, or a mobile app.",
      includesHeading: "What We Build",
      includes: [
        "Custom business operations systems (ERP, inventory, accounting)",
        "Loan and microfinance systems — applications, credit scoring and repayment schedules",
        "Web platforms and mobile apps backed by live data",
        "Integrations with payment systems and third-party services",
        "Maintenance, upgrades and technical support after launch",
      ],
      whyHeading: "Why DataSoft",
      why: "Our experience is rooted in Mwanza — we understand Tanzania's business context, local network realities, and what it takes for a system to run reliably in this environment.",
      ctaLabel: "Start a Software Project",
      secondaryCtaLabel: "See What We Build",
      ideCaption:
        "A real loan & microfinance system, built line by line by DataSoft",
      capabilitiesEyebrow: "What We're Capable Of",
      capabilitiesHeading: [
        "Systems that carry your business,",
        "not just a pretty screen",
      ],
      capabilitiesIntro:
        "The example above — a loan and microfinance system — is just one sample. The same capability goes into every system we build.",
      capabilities: [
        {
          key: "credit",
          title: "Loan & Credit Scoring Engines",
          description:
            "Loan applications, collateral checks and approval decisions — all running automatically, exactly like the code you just watched build itself.",
        },
        {
          key: "dashboards",
          title: "Real-Time Dashboards",
          description:
            "See repayments, revenue and risk the moment they happen, not at month-end — decisions run on current data, not last week's.",
        },
        {
          key: "payments",
          title: "Automated Payments & Reminders",
          description:
            "Repayment schedules, SMS reminders and mobile money integrations — clients get reminded before the due date, not after.",
        },
        {
          key: "scale",
          title: "Built to Scale With You",
          description:
            "From your first hundred clients to your first hundred thousand, the system grows without a rebuild from scratch.",
        },
      ],
      stats: [
        { value: "48h", label: "from our first call to a clickable prototype" },
        {
          value: "4",
          label:
            "structured stages — Idea, Design, Build, Launch — every project follows",
        },
        {
          value: "100%",
          label:
            "custom-built — no template stretched to fit a workflow it wasn't made for",
        },
      ],
      process: {
        eyebrow: "How We Build",
        heading: "From Idea to a System That Works",
        intro:
          "Every system we build moves through four structured stages, so the result matches how your business actually operates.",
        steps: [
          {
            title: "Idea",
            description:
              "We talk through your actual workflow, the friction you're dealing with, and the outcome you need — before a single line of code gets written.",
          },
          {
            title: "Design",
            description:
              "We map the system — screens, data and how they connect — so you can see how it will work before we start building.",
          },
          {
            title: "Build",
            description:
              "We write the system in stages, showing you progress along the way instead of disappearing until launch day.",
          },
          {
            title: "Launch",
            description:
              "We ship it, train your team, and stay close for ongoing maintenance and improvements.",
          },
        ],
        closing:
          "No stage gets skipped — that's why what you get on day one actually works.",
      },
      whySectionHeading: "Bad Software Is a Cost You Don't See on the Invoice",
      whyIntro:
        "Every hour spent re-entering the same data, every report built by hand, every decision waiting on the one person who knows where the file is — that's the real cost of software that doesn't fit how you work.",
      whyPoints: [
        "Spreadsheets that go missing, with a different version on everyone's laptop",
        "Reports that take days to assemble by hand every month",
        "A system that buckles the moment your business outgrows what it was built for",
      ],
      faq: {
        eyebrow: "Software Questions",
        heading: "Questions We Get About Software Development",
        intro: "Quick answers before you start your system's project.",
        contactPrompt: "Still have a question about your system? Get in touch",
        items: [
          {
            question: "How long will my system take to build?",
            answer:
              "We can have a clickable first prototype ready within 48 hours of our first conversation. Full project timelines depend on scope, and we'll give you a complete schedule once we understand your requirements.",
          },
          {
            question: "Can you improve a system I already have?",
            answer:
              "Yes. We can add new features, improve performance, or connect your existing system to other services instead of starting from scratch.",
          },
          {
            question: "Who owns the code once the system is finished?",
            answer:
              "You do. A system built for you is entirely your property, including its source code.",
          },
          {
            question: "Will you support the system after launch?",
            answer:
              "Yes — every system comes with ongoing maintenance and support, and our Mwanza-based team stays close by.",
          },
        ],
      },
    },
    hosting: {
      key: "hosting",
      eyebrow: "Web Design & Hosting",
      title: "Websites With Standing, Always Online",
      subtitle:
        "Beautiful, fast and secure websites — ready to grow alongside your business, every day.",
      headlineLines: ["Your Website Never Sleeps.", "Neither Do We."],
      intro:
        "Your website is often the first place a customer meets your brand. We design refined, fast websites on a solid technical foundation, then keep them running online without disruption.",
      includesHeading: "What's Included",
      includes: [
        "Design and development for business, institutional and e-commerce sites",
        "Hosting with monitoring and backups",
        "SSL security certificates and protection against common threats",
        "Ongoing domain management and platform updates",
      ],
      whyHeading: "A Team That's Here, Not a Distant Call Center",
      why: "The websites we build are supported by a team based right here in Mwanza, Tanzania — you're never on your own when your site needs urgent help, and we don't disappear after launch.",
      ctaLabel: "Start a Website Project",
      secondaryCtaLabel: "See Our Infrastructure",
      ideCaption:
        "Real website traffic, monitored around the clock by DataSoft Cloud",
      capabilitiesEyebrow: "Everything Your Website Needs",
      capabilitiesHeading: [
        "Infrastructure That Works,",
        "Even While You Sleep.",
      ],
      capabilitiesIntro:
        "Hosting isn't just buying space on a server — it's the whole system that keeps your website available, secure, and ready to grow. Here's everything we handle on your behalf, every day.",
      capabilities: [
        {
          key: "uptime",
          title: "Round-the-Clock Uptime Monitoring",
          description:
            "Our systems watch your website minute by minute, catching and resolving issues before they ever reach your customers.",
        },
        {
          key: "security",
          title: "SSL & Security Protection",
          description:
            "Every website gets an SSL certificate and protection against common online threats — your customers' data stays private.",
        },
        {
          key: "backups",
          title: "Daily Backups",
          description:
            "Your website's content and data are backed up regularly, so even if something goes wrong, you're back to work within minutes.",
        },
        {
          key: "speed",
          title: "Speed That Sells",
          description:
            "A fast website turns visitors into customers. We optimize images, code and infrastructure so your pages load quickly, every time.",
        },
        {
          key: "scale",
          title: "Grows Alongside You",
          description:
            "As your traffic grows, your infrastructure grows with it — no need to start over every time your business expands.",
        },
        {
          key: "support",
          title: "Real Support, Based in Tanzania",
          description:
            "When your website needs help, you talk to a team based in Mwanza — not an overseas call center that doesn't know your context.",
        },
        {
          key: "domain",
          title: "Domain Management",
          description:
            "We manage your domain's registration and renewal, so it never lapses without your knowledge and puts your business at risk.",
        },
        {
          key: "migration",
          title: "Free Migration",
          description:
            "Already have a website elsewhere? We move it to our infrastructure at no extra cost, with no downtime.",
        },
      ],
      flowLabels: {
        windowTitle: "server.datasoft.co.tz — network status",
        serverLabel: "Your Server",
        serverSub: "Website + Data",
        cloudLabel: "DataSoft Cloud",
        cloudSub: "Monitored 24/7",
        outLabel: "Outgoing Data",
        inLabel: "Incoming Data",
        statusOnline: "Online",
        statusSecure: "SSL Active",
        statusBackup: "Fresh Backup",
      },
      stats: [
        {
          value: "24/7",
          label: "uptime monitoring, catching trouble before your customers do",
        },
        {
          value: "<1hr",
          label: "average response time when a site needs urgent help",
        },
        {
          value: "0 Tsh",
          label:
            "extra cost to migrate your existing website onto our infrastructure",
        },
      ],
      process: {
        eyebrow: "How We Work",
        heading: "Every Website Follows the Same Reliable Path",
        intro:
          "Every website project moves through four structured stages, so your site is solid from the day it launches.",
        steps: [
          {
            title: "Audit",
            description:
              "We review your current site (if you have one) and your needs, then recommend the right design and infrastructure.",
          },
          {
            title: "Design",
            description:
              "We build a refined, fast website on a solid technical foundation.",
          },
          {
            title: "Launch",
            description:
              "We migrate or stand up your site on our infrastructure with zero downtime.",
          },
          {
            title: "Monitor",
            description:
              "We keep watching around the clock — backups, uptime checks, and issues resolved before you notice them.",
          },
        ],
        closing:
          "Your website doesn't go quiet after launch — we keep watching it every day.",
      },
      whySectionHeading: "Five Minutes of Downtime Is Customers Lost",
      whyIntro:
        "Every extra second your site takes to load, every 'this site can't be reached' — is a sale that happens somewhere else instead.",
      whyPoints: [
        "A site that goes down overnight with nobody noticing until morning",
        "An SSL certificate that quietly expires with no one warned",
        "No backup on hand the one time a small mistake wipes out your content",
      ],
      faq: {
        eyebrow: "Hosting Questions",
        heading: "Questions We Get About Hosting",
        intro: "Quick answers before you start your website's project.",
        contactPrompt: "Still have a question about your website? Get in touch",
        items: [
          {
            question: "How fast will my website be?",
            answer:
              "We optimize images, code and infrastructure so your pages load quickly, every time — speed is part of the build, not an afterthought.",
          },
          {
            question: "What happens if my site goes down?",
            answer:
              "Our systems watch your site minute by minute. If something goes wrong, our Mwanza-based team starts fixing it immediately, often before you notice.",
          },
          {
            question: "Can you migrate my existing website to DataSoft?",
            answer:
              "Yes, at no extra cost and with zero downtime. We handle the entire migration on your behalf.",
          },
          {
            question: "Do you manage my domain too?",
            answer:
              "Yes. We manage your domain's registration and renewal, so it never lapses without your knowledge.",
          },
        ],
      },
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
      title: "Three Seconds to Impress. We Design for Them.",
      subtitle:
        "That's how long a customer takes to judge whether your brand is trustworthy — from your logo to a campaign poster, every layer we design is built for that window.",
      headlineLines: ["Three Seconds to Impress.", "We Design for Them."],
      intro:
        "How your brand looks speaks before you ever open your mouth. We create cohesive artistic work — logos, brand identities, and marketing materials — that isn't just beautiful to look at, but sells, sticks in memory, and stays aligned with your business goals.",
      includesHeading: "What We Design",
      includes: [
        "Logos and complete brand identity systems",
        "Posters and marketing materials, print and digital",
        "Social media design aligned with your brand",
        "Packaging and product design",
      ],
      whyHeading: "Why DataSoft",
      why: "Every design project starts from your business goal, not this year's trend — the result still holds up years from now.",
      ctaLabel: "Start a Design Project",
      secondaryCtaLabel: "See Our Capabilities",
      capabilitiesEyebrow: "Our Capabilities",
      capabilitiesHeading: ["Design That Sells,", "Not Just Looks Good"],
      capabilitiesIntro:
        "The poster you saw being built above is just one example. The same design capability goes into every piece of work we create for your brand.",
      capabilities: [
        {
          key: "branding",
          title: "Logos & Brand Identity",
          description:
            "We design logos and a full brand system — color, type and guidelines — so everything carrying your name reads as one consistent, trustworthy brand.",
        },
        {
          key: "print",
          title: "Posters & Marketing Materials",
          description:
            "From print posters to digital ads, every piece is built to catch the eye within those first three seconds.",
        },
        {
          key: "social",
          title: "Social Media Design",
          description:
            "Posts and visuals aligned with your brand, built to boost visibility and engagement with your followers.",
        },
        {
          key: "packaging",
          title: "Packaging & Product Design",
          description:
            "We design packaging that sells — eye-catching on the shelf and memorable after the purchase.",
        },
      ],
      stats: [
        {
          value: "3s",
          label:
            "the window a first impression has to land — every layer we design targets it",
        },
        {
          value: "100%",
          label:
            "original concepts — no stock template recycled across different clients",
        },
        {
          value: "1",
          label: "brand system carried across print, digital and packaging",
        },
      ],
      process: {
        eyebrow: "How We Design",
        heading: "From Conversation to Finished Design",
        intro:
          "Every design project moves through four structured stages, so the result fits your brand, not just the trend of the moment.",
        steps: [
          {
            title: "Discover",
            description:
              "We learn your brand, your audience and your business goals before a single concept is sketched.",
          },
          {
            title: "Concept",
            description:
              "We sketch a few distinct directions, so you're choosing between real options, not one idea dressed differently.",
          },
          {
            title: "Refine",
            description:
              "We refine the direction you pick against your feedback, round by round, until it's right.",
          },
          {
            title: "Deliver",
            description:
              "You receive final files ready for print, digital, or both.",
          },
        ],
        closing:
          "Every piece starts from a conversation, not a guess — that's why the result actually fits your brand.",
      },
      whySectionHeading: "Inconsistent Design Reads as an Unreliable Brand",
      whyIntro:
        "One logo on the website, a slightly different one on the flyers, a new color every time someone builds a slide deck — customers notice before they read a single word.",
      whyPoints: [
        "Logo files of inconsistent quality scattered across different folders",
        "No brand guide, so every employee designs slides their own way",
        "Marketing materials that look like they came from three different companies",
      ],
      faq: {
        eyebrow: "Design Questions",
        heading: "Questions We Get About Graphics Design",
        intro: "Quick answers before you start your brand's project.",
        contactPrompt: "Still have a question about your design? Get in touch",
        items: [
          {
            question: "How many concepts do I get to choose from?",
            answer:
              "We bring you a few genuinely distinct concepts up front, so you're picking between real directions, not one design recolored.",
          },
          {
            question: "How many rounds of revisions are included?",
            answer:
              "Once you pick a direction, we refine it against your feedback round by round until it's right — not just a single final pass.",
          },
          {
            question: "Will I get the source design files?",
            answer:
              "Yes. You receive all final files, ready for print or digital use, with full rights to use them.",
          },
          {
            question:
              "Can you design for both print and digital from one brand?",
            answer:
              "Yes. One brand system — color, type and guidelines — carries across every piece, from print posters to social media posts.",
          },
        ],
      },
    },
  },
};

export const dictionaries: Record<"sw" | "en", Dict> = { sw, en };
export type Locale = keyof typeof dictionaries;
