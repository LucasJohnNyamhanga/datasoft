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
    headlineLines: ["Teknolojia moja.", "Uwezekano usio na kikomo."],

    subheadline: [
      "Kutoka wazo hadi utekelezaji, tunajenga suluhisho za kidigitali zinazorahisisha kazi na kuharakisha ukuaji wa biashara.",
    ],
    ctaPrimary: "Anzisha Mradi Wako",
    ctaSecondary: "Ona Huduma Zetu",
    mapCaption: "Biashara yako, ikijengwa mstari kwa mstari na DataSoft",
  },
  whatWeDo: {
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
          "Taratibu za kazi zinazojiendesha zenyewe — arifa, ripoti na hatua za kila siku — ili timu yako itumie muda kwenye mambo muhimu zaidi.",
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
          "Vyeti vya SSL, ulinzi dhidi ya matatizo ya kawaida ya mtandao, na miundombinu ya kasi ya hali ya juu — bila kuathiriana.",
      },
      {
        key: "support",
        title: "Msaada Endelevu",
        description:
          "Timu yetu ya Mwanza inabaki karibu nawe baada ya uzinduzi, tayari kusaidia pindi unapohitaji.",
      },
      {
        key: "backups",
        title: "Nakala za Akiba",
        description:
          "Taarifa zako muhimu huhifadhiwa kiotomatiki mara kwa mara, ili usipoteze kazi hata tatizo likitokea.",
      },
      {
        key: "scale",
        title: "Ukuaji Endelevu",
        description:
          "Mifumo yetu huundwa kukua sambamba na biashara yako — kutoka mtumiaji mmoja hadi maelfu, bila kuanza upya.",
      },
      {
        key: "uptime",
        title: "Upatikanaji wa Uhakika",
        description:
          "Uwekaji mtandaoni unaofuatiliwa muda wote, ili tovuti na mfumo wako ubaki hai bila usumbufu.",
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
      terms: ["Wazo Sahihi", "Bidhaa Sahihi", "Soko Sahihi"],
      result: "Mafanikio",
    },
    trust: {
      consultation: "Ushauri wa Kwanza — Bure",
      prototype: "Mfano wa Kwanza (Prototype) Ndani ya Masaa 48",
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
          { value: "ready", label: "Ndiyo, Nina Tayari" },
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
          "Tovuti waliyotujengea Kuafit Gym ni ya kisasa na inavutia sana. Wanachama wanajisajili mtandaoni, wanalipa, na wanaona ratiba za mazoezi bila kupiga simu ofisini. DataSoft wamebadilisha jinsi tunavyofanya kazi!",
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
          "Sina muundo (design) wowote tayari — je, mnaweza kunisaidia?",
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
        question: "Nianzeje mradi wangu na DataSoft?",
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
    headlineLines: ["One technology.", "Limitless possibilities."],

    subheadline: [
      "From idea to implementation, we build digital solutions that simplify work and accelerate business growth.",
    ],
    ctaPrimary: "Start Your Project",
    ctaSecondary: "See Our Services",
    mapCaption: "Your business, built line by line by DataSoft",
  },
  whatWeDo: {
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
      terms: ["The Right Idea", "The Right Product", "The Right Market"],
      result: "Success",
    },
    trust: {
      consultation: "First Consultation — Free",
      prototype: "First Prototype Ready Within 48 Hours",
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
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Have a Question? We're Here",
    intro:
      "Quick answers to the questions our clients ask most often before starting a project.",
    contactPrompt: "Still have a question? Contact us",
    items: [
      {
        question: "What exactly do you offer?",
        answer:
          "We provide four main services: custom software development, web design and hosting, office computer networking, and graphics design. Each service can stand alone or be combined in one project.",
      },
      {
        question: "How long will my project take to complete?",
        answer:
          "It depends on the project's size, but we can start building your first prototype within 48 hours of our first conversation. Every project follows four stages — Idea, Design, Build and Launch — and we will give you a full timeline once we understand your needs.",
      },
      {
        question: "How much does a project cost?",
        answer:
          "Every project is unique, so the price depends on its scope and requirements. Our contact form asks about your budget range so we can recommend the right package — and the first consultation is completely free.",
      },
      {
        question: "Do you work with clients outside Mwanza?",
        answer:
          "Yes. Although our team is based in Mwanza, we serve clients across Tanzania — from Kigoma and Arusha to Dodoma and Mbeya — through online communication and phone, and we travel when office networking projects require it.",
      },
      {
        question: "I don't have any design ready yet — can you help me?",
        answer:
          "Absolutely. When you fill out the contact form, you can let us know that you don't have a design yet, and our team will advise you and propose options from the start — you don't need to bring everything ready.",
      },
      {
        question: "Will you support me after my website or system launches?",
        answer:
          "Yes. Every project we build comes with ongoing support, uptime monitoring, and regular backups — our Mwanza team stays close to help with any needs after launch.",
      },
      {
        question: "Will my website or system be secure?",
        answer:
          "Yes. Our projects include security certificates (SSL), protection against common web threats, and regular backups of your data, so your business remains safe and reliable.",
      },
      {
        question: "How do I start my project with DataSoft?",
        answer:
          "Fill our short contact form below, or call us directly. A few questions are enough for us to understand your project, and our team will reach out within a few hours to start the conversation — free of charge.",
      },
    ],
  },
};

export const dictionaries: Record<"sw" | "en", Dict> = { sw, en };
export type Locale = keyof typeof dictionaries;
