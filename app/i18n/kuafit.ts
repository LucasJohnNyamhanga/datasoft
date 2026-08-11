// Standalone content module for KuaFit's Privacy Policy and Terms of
// Service pages (Applications/KuaFit/*). Kept separate from translations.ts
// for the same reason as i18n/networking.ts — this content is long, edited
// on its own schedule, and has no business colliding with unrelated copy
// changes elsewhere on the site.
//
// Source of truth: the KuaFit mobile app's own in-app Settings > Privacy
// Policy / Terms of Service screens (lib/pages/settings/*.dart in the
// kuafit-mobile-app repo). Every clause is carried over — this is a
// republish for the web, not a rewrite — only the "tap a section" app
// framing is adapted to a scrollable document, and the Kiswahili text is a
// faithful translation for this site's Kiswahili-first audience. Contact
// details point to DataSoft's own line (constants/contact.ts) rather than
// the app's original in-app support number, so every "call us" affordance
// site-wide — nav, footer, emails, and these KuaFit pages — rings the same
// number, kept in exactly one place.

import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "../constants/contact";

export type LegalSection = {
  title: string;
  body: string;
};

export type LegalDocContent = {
  docLabel: string;
  eyebrow: string;
  headlineLines: [string, string];
  subheadline: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  tocLabel: string;
  switchLabel: string;
  switchHref: string;
  supportLabel: string;
  intro: string;
  sections: LegalSection[];
  contact: {
    heading: string;
    body: string;
    phoneLabel: string;
  };
};

export type KuaFitContent = {
  appName: string;
  phone: string;
  phoneHref: string;
  privacyPolicy: LegalDocContent;
  termsOfService: LegalDocContent;
};

const sw: KuaFitContent = {
  appName: "KuaFit",
  phone: CONTACT_PHONE_DISPLAY,
  phoneHref: CONTACT_PHONE_HREF,
  privacyPolicy: {
    docLabel: "Sera ya Faragha",
    eyebrow: "KuaFit · Programu ya Simu",
    headlineLines: ["Sera ya Faragha", "ya Programu ya KuaFit"],
    subheadline:
      "Jinsi KuaFit inavyokusanya, kutumia na kulinda taarifa zako binafsi na za kiafya — kwa lugha rahisi.",
    lastUpdatedLabel: "Imeanza Kutumika",
    lastUpdated: "Agosti 2026",
    tocLabel: "Katika Ukurasa Huu",
    switchLabel: "Soma Masharti ya Huduma",
    switchHref: "/Applications/KuaFit/TermsOfService",
    supportLabel: "Wasiliana na Usaidizi",
    intro:
      "Sera hii inaeleza taarifa gani KuaFit inakusanya, zinatumikaje, na chaguo ulizonazo. Tafadhali soma kila sehemu kabla ya kuendelea kutumia programu.",
    sections: [
      {
        title: "Taarifa Tunazokusanya",
        body: "Unapofungua akaunti, tunakusanya jina lako, barua pepe, namba ya simu na neno la siri. Wakati wa usajili wa awali, tunakuuliza taarifa kama umri, jinsia, uzito, urefu na malengo yako ya mazoezi ili mpango wako uweze kuundwa mahususi kwa ajili yako. Pia tunahifadhi kumbukumbu ya mazoezi, milo na maendeleo unayoyaingiza, pamoja na taarifa za msingi za kifaa (aina ya kifaa, toleo la mfumo wa uendeshaji, na push token) zinazotumika kuhakikisha programu inafanya kazi kwa uthabiti.",
      },
      {
        title: "Jinsi Tunavyotumia Taarifa Zako",
        body: "Taarifa zako ndizo zinazowezesha ubinafsishaji ndani ya programu ya KuaFit: kuunda mipango yako ya mazoezi na milo, kufuatilia maendeleo kuelekea uzito unaolenga, na kuchakata malipo ya mipango ya premium au vipindi vya mkufunzi. Pia tunazitumia kutuma vikumbusho vya mazoezi, taarifa za maendeleo na arifa za akaunti, na kubaini hitilafu na kuboresha programu.",
      },
      {
        title: "Taarifa za Kiafya na Mazoezi",
        body: "Vipimo vya mwili, hali za kiafya na malengo ya mazoezi ni taarifa nyeti kwa asili, na tunazishughulikia ipasavyo. Taarifa hizi hutumika tu kubinafsisha mpango wako na kufuatilia maendeleo — haziuzwi kamwe wala kutumika kwa matangazo, na hushirikishwa na mkufunzi tu pale unapounganishwa naye.",
      },
      {
        title: "Ushirikishaji na Wakufunzi",
        body: "Ukiunganishwa na mkufunzi kupitia programu ya KuaFit, ataweza kuona taarifa za wasifu na maendeleo zinazohitajika kukuongoza — kama malengo yako, historia ya shughuli na maelezo ya kiafya. Unaweza kupitia au kusitisha uunganisho huu wakati wowote kupitia wasifu wako.",
      },
      {
        title: "Huduma za Wahusika Wengine",
        body: "Tunategemea watoa huduma wachache wa kuaminika kuiendesha programu: Firebase kwa ajili ya kuingia, arifa za push na taarifa za hitilafu, mtoa huduma wa malipo kwa ununuzi wa premium (hatuoni wala kuhifadhi taarifa kamili za kadi yako), na hifadhi ya wingu kwa ajili ya maudhui ya mazoezi. Kila mmoja amefungwa kulinda taarifa zako kupitia mkataba wake na sisi.",
      },
      {
        title: "Usalama na Uhifadhi wa Taarifa",
        body: "Taarifa husimbwa (encrypted) zinaposafirishwa, na upatikanaji wake umezuiliwa kulingana na mahitaji ya kila sehemu ya programu. Tunahifadhi taarifa zako kwa muda akaunti yako inapokuwa hai; ukifuta akaunti yako, taarifa binafsi huondolewa ndani ya muda unaofaa, isipokuwa pale kumbukumbu zinapohitajika kutunzwa kwa sababu za kisheria au za malipo.",
      },
      {
        title: "Haki na Chaguo Zako",
        body: "Unaweza kupitia na kusasisha sehemu kubwa ya wasifu wako moja kwa moja ndani ya programu. Kuomba nakala ya taarifa zako, kusahihisha kitu, au kufuta akaunti yako kabisa, wasiliana na timu yetu ya usaidizi na tutashughulikia moja kwa moja.",
      },
      {
        title: "Faragha ya Watoto",
        body: "Programu ya KuaFit imeundwa kwa ajili ya watu wazima na haikusudiwi kwa watoto walio chini ya miaka 16. Hatukusanyi kwa makusudi taarifa za watoto, na tutaondoa taarifa zozote za aina hiyo pindi tutakapogundua.",
      },
      {
        title: "Mabadiliko ya Sera Hii",
        body: "KuaFit inapokua, tunaweza kusasisha sera hii ili kuendana na vipengele au mahitaji mapya. Endapo mabadiliko yatakuwa ya msingi, tutakujulisha ndani ya programu kabla ya kuanza kutumika.",
      },
    ],
    contact: {
      heading: "Una Maswali Kuhusu Taarifa Zako?",
      body: "Wasiliana na timu yetu ya usaidizi na tutafurahi kukusaidia.",
      phoneLabel: "Piga Simu Usaidizi",
    },
  },
  termsOfService: {
    docLabel: "Masharti ya Huduma",
    eyebrow: "KuaFit · Programu ya Simu",
    headlineLines: ["Masharti ya Huduma", "ya Programu ya KuaFit"],
    subheadline:
      "Makubaliano kamili kati yako na KuaFit — yameelezwa kwa uwazi, sehemu kwa sehemu.",
    lastUpdatedLabel: "Imeanza Kutumika",
    lastUpdated: "Agosti 11, 2026",
    tocLabel: "Katika Ukurasa Huu",
    switchLabel: "Soma Sera ya Faragha",
    switchHref: "/Applications/KuaFit/PrivacyPolicy",
    supportLabel: "Wasiliana na Usaidizi",
    intro:
      "Haya ndiyo makubaliano kamili kati yako na programu ya KuaFit. Soma sehemu zilizo hapa chini kwa maelezo kamili.",
    sections: [
      {
        title: "Kukubali Masharti",
        body: "Kwa kufungua akaunti au kutumia programu ya KuaFit, unakubali kufungwa na Masharti haya ya Huduma na Sera yetu ya Faragha. Kama hukubaliani, tafadhali usitumie programu hii.",
      },
      {
        title: "Sifa za Kustahili",
        body: "Ni lazima uwe na umri wa angalau miaka 16 ili kutumia programu ya KuaFit. Kwa kujisajili, unathibitisha kuwa taarifa unazotoa ni sahihi na kwamba unakidhi kigezo hiki cha umri.",
      },
      {
        title: "Akaunti Yako",
        body: "Unawajibika kulinda taarifa zako za kuingia na shughuli zote zinazofanyika kwenye akaunti yako. Tujulishe mara moja endapo unahisi kuna uingiaji usioidhinishwa.",
      },
      {
        title: "Tahadhari ya Kiafya na Mazoezi",
        body: "Mipango ya mazoezi, ushauri wa lishe na ufuatiliaji wa maendeleo ndani ya KuaFit ni kwa ajili ya mazoezi ya jumla pekee na si ushauri wa kitabibu. Wasiliana na daktari kabla ya kuanza mpango wowote mpya wa mazoezi au lishe, hasa kama una hali ya kiafya iliyokuwepo tayari.",
      },
      {
        title: "Usajili na Malipo",
        body: "Vifurushi vinavyolipiwa, vipindi vya mkufunzi na vipengele vya premium hutozwa kama ilivyoelezwa wakati wa ununuzi. Malipo hayarudishwi isipokuwa pale sheria inapohitaji au imeelezwa vinginevyo wakati wa malipo.",
      },
      {
        title: "Wakufunzi na Soko la Huduma",
        body: "Wakufunzi walio ndani ya programu ya KuaFit hufanya kazi kama watoa huduma huru wa vifurushi na huduma zao wenyewe. Sisi tunarahisisha upatikanaji na malipo, lakini si sehemu ya uhusiano wa mafunzo na hatuhakikishii matokeo.",
      },
      {
        title: "Matumizi Yanayokubalika",
        body: "Unakubali kutoitumia vibaya programu hii — ikiwemo unyanyasaji, kupakia maudhui yasiyo halali au yanayokiuka haki za wengine, kujaribu kuvunja usalama, au kuathiri matumizi ya watumiaji wengine.",
      },
      {
        title: "Haki Miliki",
        body: "Maudhui yote, chapa na programu ndani ya KuaFit yanabaki mali ya KuaFit au wenye leseni wake. Huruhusiwi kunakili, kuuza tena, au kusambaza sehemu yoyote ya programu bila idhini.",
      },
      {
        title: "Huduma za Wahusika Wengine",
        body: "Programu ya KuaFit inaunganisha huduma kama vile Google Sign-In na Firebase kwa ajili ya uthibitishaji, uhifadhi na arifa. Matumizi yako ya vipengele hivyo pia yanafuata masharti ya watoa huduma hao.",
      },
      {
        title: "Ukomo wa Dhima",
        body: 'Programu ya KuaFit inatolewa "kama ilivyo." Kwa kiwango kinachoruhusiwa na sheria, hatuwajibiki kwa hasara zisizo za moja kwa moja, za bahati mbaya, au zinazotokana na matumizi yako ya programu.',
      },
      {
        title: "Usitishaji",
        body: "Tunaweza kusitisha au kufuta akaunti zinazokiuka Masharti haya. Unaweza kuacha kutumia programu ya KuaFit na kuomba ufutaji wa akaunti wakati wowote kupitia Mipangilio.",
      },
      {
        title: "Mabadiliko ya Masharti Haya",
        body: "Tunaweza kusasisha Masharti haya mara kwa mara. Kuendelea kutumia programu ya KuaFit baada ya mabadiliko kuanza kutumika kunamaanisha kukubali Masharti yaliyorekebishwa.",
      },
    ],
    contact: {
      heading: "Una Maswali Kuhusu Masharti Haya?",
      body: "Wasiliana na timu yetu ya usaidizi na tutafurahi kukusaidia.",
      phoneLabel: "Piga Simu Usaidizi",
    },
  },
};

const en: KuaFitContent = {
  appName: "KuaFit",
  phone: CONTACT_PHONE_DISPLAY,
  phoneHref: CONTACT_PHONE_HREF,
  privacyPolicy: {
    docLabel: "Privacy Policy",
    eyebrow: "KuaFit · Mobile App",
    headlineLines: ["Privacy Policy", "for the KuaFit App"],
    subheadline:
      "How KuaFit collects, uses and protects your personal and health data — in plain language.",
    lastUpdatedLabel: "Last updated",
    lastUpdated: "August 2026",
    tocLabel: "On This Page",
    switchLabel: "Read Terms of Service",
    switchHref: "/Applications/KuaFit/TermsOfService",
    supportLabel: "Contact Support",
    intro:
      "This explains what information KuaFit collects, how it is used, and the choices you have. Please read every section before continuing to use the app.",
    sections: [
      {
        title: "Information We Collect",
        body: "When you create an account we collect your name, email, mobile number and password. During onboarding we ask for details like your age, gender, weight, height and fitness goals so your plan can be built around you. We also keep a record of the workouts, meals and progress you log, along with basic device data (device type, OS version, push token) used to keep the app running reliably.",
      },
      {
        title: "How We Use Your Information",
        body: "Your data drives the personalization in KuaFit: building your workout and meal plans, tracking progress toward your target weight, and processing payments for premium plans or trainer sessions. We also use it to send workout reminders, progress updates and account notifications, and to diagnose bugs and improve the app.",
      },
      {
        title: "Health & Fitness Data",
        body: "Body metrics, health conditions and fitness goals are sensitive by nature, and we treat them that way. This information is used only to personalize your plan and progress tracking — it is never sold or used for advertising, and it is shared with a trainer only when you are paired with one.",
      },
      {
        title: "Sharing With Trainers",
        body: "If you connect with a trainer through KuaFit, they can see the profile and progress details needed to guide your plan — things like your goals, activity history and health notes. You can review or end this pairing at any time from your profile.",
      },
      {
        title: "Third-Party Services",
        body: "We rely on a small set of trusted providers to run the app: Firebase for sign-in, push notifications and crash reporting, a payment processor for premium purchases (we never see or store your full card details), and cloud storage for workout media. Each is bound to protect your data under its own agreement with us.",
      },
      {
        title: "Data Security & Retention",
        body: "Data is encrypted in transit and access to it is restricted to what each part of the app needs. We keep your information for as long as your account is active; if you delete your account, personal data is removed within a reasonable period, except where records must be kept for legal or payment reasons.",
      },
      {
        title: "Your Rights & Choices",
        body: "You can review and update most of your profile directly in the app. To request a copy of your data, correct something, or delete your account entirely, reach out to support and we will handle it directly.",
      },
      {
        title: "Children's Privacy",
        body: "KuaFit is built for adults and is not directed at children under 16. We do not knowingly collect information from children, and will remove any such data if we become aware of it.",
      },
      {
        title: "Changes to This Policy",
        body: "As KuaFit grows we may update this policy to reflect new features or requirements. If a change is material, we will let you know in the app before it takes effect.",
      },
    ],
    contact: {
      heading: "Questions About Your Data?",
      body: "Reach our support team and we'll be glad to help.",
      phoneLabel: "Call Support",
    },
  },
  termsOfService: {
    docLabel: "Terms of Service",
    eyebrow: "KuaFit · Mobile App",
    headlineLines: ["Terms of Service", "for the KuaFit App"],
    subheadline:
      "The full agreement between you and KuaFit — plainly explained, section by section.",
    lastUpdatedLabel: "Last updated",
    lastUpdated: "August 11, 2026",
    tocLabel: "On This Page",
    switchLabel: "Read Privacy Policy",
    switchHref: "/Applications/KuaFit/PrivacyPolicy",
    supportLabel: "Contact Support",
    intro:
      "This is the full agreement between you and KuaFit. Read the sections below for the full details.",
    sections: [
      {
        title: "Acceptance of Terms",
        body: "By creating an account or using KuaFit, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the app.",
      },
      {
        title: "Eligibility",
        body: "You must be at least 16 years old to use KuaFit. By registering, you confirm that the information you provide is accurate and that you meet this age requirement.",
      },
      {
        title: "Your Account",
        body: "You are responsible for safeguarding your login credentials and for all activity under your account. Notify us immediately if you suspect unauthorized access.",
      },
      {
        title: "Health & Fitness Disclaimer",
        body: "Workout plans, nutrition guidance and progress tracking in KuaFit are for general fitness purposes only and are not medical advice. Consult a physician before starting any new exercise or diet program, especially if you have a pre-existing condition.",
      },
      {
        title: "Subscriptions & Payments",
        body: "Paid packages, trainer sessions and premium features are billed as described at the time of purchase. Fees are non-refundable except where required by law or stated otherwise at checkout.",
      },
      {
        title: "Trainers & Marketplace",
        body: "Trainers on KuaFit operate as independent providers of their own packages and services. We facilitate discovery and payment but are not a party to the training relationship and do not guarantee outcomes.",
      },
      {
        title: "Acceptable Use",
        body: "You agree not to misuse the app — including harassment, uploading unlawful or infringing content, attempting to breach security, or interfering with other users' experience.",
      },
      {
        title: "Intellectual Property",
        body: "All content, branding and software in KuaFit remain the property of KuaFit or its licensors. You may not copy, resell, or redistribute any part of the app without permission.",
      },
      {
        title: "Third-Party Services",
        body: "KuaFit integrates services such as Google Sign-In and Firebase for authentication, storage and notifications. Your use of those features is also subject to their respective terms.",
      },
      {
        title: "Limitation of Liability",
        body: 'KuaFit is provided "as is." To the fullest extent permitted by law, we are not liable for indirect, incidental or consequential damages arising from your use of the app.',
      },
      {
        title: "Termination",
        body: "We may suspend or terminate accounts that violate these Terms. You may stop using KuaFit and request account deletion at any time from Settings.",
      },
      {
        title: "Changes to These Terms",
        body: "We may update these Terms from time to time. Continued use of KuaFit after changes take effect constitutes acceptance of the revised Terms.",
      },
    ],
    contact: {
      heading: "Questions About These Terms?",
      body: "Reach our support team and we'll be glad to help.",
      phoneLabel: "Call Support",
    },
  },
};

export const kuafitDictionaries = { sw, en };
