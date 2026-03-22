import type { AppLocale } from "@/i18n/routing";

type LocalizedString = Record<AppLocale, string>;

type OnTheDayCard = {
  id: "intimate" | "standard" | "royal";
  name: string;
  price: string;
  summary: string;
  crewLabel: string;
  paxLabel: string;
  durationLabel: string;
  imageLabel: string;
  imageSrc: string;
  features: string[];
  featured?: boolean;
};

type PlannerFeatureGroup = {
  title: string;
  items: string[];
};

type InclusiveCategory = {
  id: "decoration" | "muaAttire" | "entertainment" | "photoVideo" | "masterOfCeremony";
  title: string;
  imageLabel: string;
  imageSrc: string;
  details: string[];
  note?: string;
};

type ServiceSummary = {
  id: "weddingOrganizer" | "weddingPlanner" | "allInExclusive" | "additionalCatering";
  badge: string;
  title: string;
  summary: string;
  detail: string;
  highlights: string[];
};

type PackagePreview = {
  id: "onTheDay" | "planner" | "exclusive";
  badge: string;
  title: string;
  price: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
};

type WeddingOfferings = {
  images: {
    hero: string;
  };
  packagePreviews: PackagePreview[];
  serviceSummaries: ServiceSummary[];
  onTheDay: {
    eyebrow: string;
    title: string;
    description: string;
    cards: OnTheDayCard[];
  };
  planner: {
    eyebrow: string;
    title: string;
    price: string;
    supportWindow: string;
    description: string;
    personalizedNote: string;
    imageSrc: string;
    featureGroups: PlannerFeatureGroup[];
    timelineNotes: string[];
  };
  exclusive: {
    eyebrow: string;
    title: string;
    price: string;
    description: string;
    imageSrc: string;
    categoryLabels: string[];
    sections: InclusiveCategory[];
    organizerInclusion: string;
  };
  catering: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    ctaLabel: string;
    imageSrc: string;
  };
  contactHighlights: string[];
  faq: Array<{ question: string; answer: string }>;
  placeholderLabels: {
    hero: string;
    package: string;
    decoration: string;
    portfolio: string;
    couple: string;
    planner: string;
    exclusive: string;
  };
};

function t(locale: AppLocale, value: LocalizedString) {
  return value[locale];
}

export function getWeddingOfferings(locale: AppLocale): WeddingOfferings {
  const placeholderLabels = {
    hero: t(locale, {
      id: "Mahana Signature",
      en: "Mahana Signature",
    }),
    package: t(locale, {
      id: "Detail Paket",
      en: "Package Detail",
    }),
    decoration: t(locale, {
      id: "Arah Dekorasi",
      en: "Decor Direction",
    }),
    portfolio: t(locale, {
      id: "Cerita Perayaan",
      en: "Celebration Story",
    }),
    couple: t(locale, {
      id: "Cerita Pasangan",
      en: "Couple Story",
    }),
    planner: t(locale, {
      id: "Pendampingan Planner",
      en: "Planner Support",
    }),
    exclusive: t(locale, {
      id: "Paket Eksklusif",
      en: "Exclusive Package",
    }),
  };

  return {
    images: {
      hero: "/images/home/hero.png",
    },
    packagePreviews: [
      {
        id: "onTheDay",
        badge: t(locale, {
          id: "Wedding Organizer",
          en: "Wedding Organizer",
        }),
        title: t(locale, {
          id: "On The Day Package",
          en: "On The Day Package",
        }),
        price: t(locale, {
          id: "Mulai Rp3.500.000,-",
          en: "Starting from Rp3.500.000,-",
        }),
        summary: t(locale, {
          id: "Tiga pilihan pendampingan hari-H untuk pasangan yang membutuhkan koordinasi rapi, briefing vendor yang jelas, dan tim standby profesional di venue.",
          en: "Three wedding-day coordination options for couples who want a polished flow, clear vendor briefing, and a professional standby team at the venue.",
        }),
        highlights: [
          t(locale, {
            id: "5 sampai 10 crew standby profesional",
            en: "5 to 10 standby professional crew",
          }),
          t(locale, {
            id: "8 jam kerja di hari acara",
            en: "8 working hours on the event day",
          }),
          t(locale, {
            id: "Wedding guide book dan final technical meeting",
            en: "Wedding guide book and final technical meeting",
          }),
        ],
      },
      {
        id: "planner",
        badge: t(locale, {
          id: "Wedding Planner Service",
          en: "Wedding Planner Service",
        }),
        title: t(locale, {
          id: "Pendampingan 6 - 3 bulan sebelum acara",
          en: "Support from 6 to 3 months before the event",
        }),
        price: "Rp14.000.000,-",
        summary: t(locale, {
          id: "Layanan high-touch untuk pasangan yang ingin partner aktif dalam budgeting, konsep, vendor coordination, fitting, survey venue, hingga wedding day.",
          en: "A high-touch planning service for couples who want an active partner across budgeting, concept refinement, vendor coordination, fitting sessions, venue surveys, and the wedding day.",
        }),
        highlights: [
          t(locale, {
            id: "Unlimited meeting dan pendampingan",
            en: "Unlimited meetings and guided assistance",
          }),
          t(locale, {
            id: "Unlimited konsultasi online",
            en: "Unlimited online consultation",
          }),
          t(locale, {
            id: "10 crew profesional pada hari acara",
            en: "10 professional crew on the wedding day",
          }),
        ],
        featured: true,
      },
      {
        id: "exclusive",
        badge: t(locale, {
          id: "All in Exclusive Package",
          en: "All-in Exclusive Package",
        }),
        title: t(locale, {
          id: "Paket lengkap untuk pengalaman yang lebih praktis",
          en: "A complete format for a more seamless wedding experience",
        }),
        price: "Rp35.000.000,-",
        summary: t(locale, {
          id: "Paket flagship yang memadukan dekorasi, MUA dan busana, entertainment, photo and video, MC, serta wedding organizer dalam satu presentasi yang terarah.",
          en: "A flagship package that brings together decoration, MUA and attire, entertainment, photo and video, MC, and wedding organizer support in one well-structured presentation.",
        }),
        highlights: [
          t(locale, {
            id: "Dekorasi, MUA dan busana, entertainment",
            en: "Decoration, MUA and attire, entertainment",
          }),
          t(locale, {
            id: "Photo and video, MC, wedding organizer",
            en: "Photo and video, MC, wedding organizer",
          }),
          t(locale, {
            id: "Rapi, lengkap, dan tetap bisa dikonsultasikan",
            en: "Complete, polished, and still open for consultation",
          }),
        ],
      },
    ],
    serviceSummaries: [
      {
        id: "weddingOrganizer",
        badge: t(locale, {
          id: "Hari acara",
          en: "Event day",
        }),
        title: t(locale, {
          id: "Wedding Organizer",
          en: "Wedding Organizer",
        }),
        summary: t(locale, {
          id: "Fokus pada koordinasi hari-H yang rapi melalui pilihan paket Intimate, Standard, dan Royal sesuai skala tamu serta kebutuhan crew.",
          en: "Focused on polished wedding-day coordination through Intimate, Standard, and Royal options matched to guest count and crew needs.",
        }),
        detail: t(locale, {
          id: "Ideal untuk pasangan yang sudah cukup matang dalam persiapan namun tetap membutuhkan wedding guide book, final technical meeting, serta tim lapangan yang sigap saat acara berlangsung.",
          en: "Ideal for couples whose preparations are already moving well but who still want a wedding guide book, a final technical meeting, and a responsive on-site team on the day itself.",
        }),
        highlights: [
          t(locale, {
            id: "Pilihan 5, 7, atau 10 crew standby",
            en: "Options for 5, 7, or 10 standby crew",
          }),
          t(locale, {
            id: "Kapasitas hingga 1.500 tamu",
            en: "Capacity for up to 1,500 guests",
          }),
          t(locale, {
            id: "8 jam kerja pada hari acara",
            en: "8 working hours on the event day",
          }),
        ],
      },
      {
        id: "weddingPlanner",
        badge: t(locale, {
          id: "Pendampingan intensif",
          en: "High-touch support",
        }),
        title: t(locale, {
          id: "Wedding Planner Service",
          en: "Wedding Planner Service",
        }),
        summary: t(locale, {
          id: "Pendampingan dimulai sejak 6 sampai 3 bulan sebelum acara untuk membantu keputusan, koordinasi vendor, serta kesiapan keluarga sampai wedding day.",
          en: "Support begins 6 to 3 months before the event to guide decisions, vendor coordination, and family readiness through the wedding day.",
        }),
        detail: t(locale, {
          id: "Layanan ini menonjolkan unlimited meeting, pendampingan, dan konsultasi online agar pasangan memiliki partner yang selalu siap membaca situasi serta menjaga ritme persiapan.",
          en: "This service is built around unlimited meetings, guided assistance, and online consultation so couples have a planning partner who stays close to the process and keeps the rhythm on track.",
        }),
        highlights: [
          t(locale, {
            id: "Unlimited meeting untuk budgeting, konsep, keluarga, vendor",
            en: "Unlimited meetings for budgeting, concept, family, and vendors",
          }),
          t(locale, {
            id: "Unlimited pendampingan untuk fitting, prewedd, survey venue, dan test food",
            en: "Unlimited guidance for fittings, pre-wedding sessions, venue surveys, and food testing",
          }),
          t(locale, {
            id: "10 crew profesional pada hari acara",
            en: "10 professional crew on the wedding day",
          }),
        ],
      },
      {
        id: "allInExclusive",
        badge: t(locale, {
          id: "Flagship package",
          en: "Flagship package",
        }),
        title: t(locale, {
          id: "All in Exclusive Package",
          en: "All-in Exclusive Package",
        }),
        summary: t(locale, {
          id: "Paket menyeluruh untuk pasangan yang menginginkan eksekusi lebih praktis dengan kategori utama yang sudah dikurasi dalam satu arah presentasi.",
          en: "A comprehensive package for couples who want a more streamlined experience with key wedding categories brought together in one curated direction.",
        }),
        detail: t(locale, {
          id: "Decoration, MUA dan attire, entertainment, photo and video, MC, serta wedding organizer dipresentasikan secara terstruktur sehingga tetap terasa mewah tanpa membingungkan.",
          en: "Decoration, MUA and attire, entertainment, photo and video, MC, and wedding organizer support are presented in a structured way so the package feels complete without becoming overwhelming.",
        }),
        highlights: [
          t(locale, {
            id: "Harga paket Rp35.000.000,-",
            en: "Package price Rp35.000.000,-",
          }),
          t(locale, {
            id: "Kategori layanan lengkap dan tertata",
            en: "Well-organized complete service categories",
          }),
          t(locale, {
            id: "Tetap dapat disesuaikan melalui konsultasi",
            en: "Still adjustable through consultation",
          }),
        ],
      },
      {
        id: "additionalCatering",
        badge: t(locale, {
          id: "Additional service",
          en: "Additional service",
        }),
        title: t(locale, {
          id: "Additional Catering",
          en: "Additional Catering",
        }),
        summary: t(locale, {
          id: "Layanan catering tambahan tersedia untuk kebutuhan yang ingin dibicarakan lebih detail berdasarkan menu, jumlah tamu, dan format penyajian.",
          en: "Additional catering support is available for celebrations that need menu direction, guest-count planning, and service format discussed with more care.",
        }),
        detail: t(locale, {
          id: "Layanan ini dibuka melalui konsultasi agar arah menu, jumlah tamu, dan format penyajian dapat disesuaikan dengan karakter acara Anda secara lebih personal.",
          en: "This service is prepared through consultation so menu direction, guest count, and presentation style can be tailored more personally to your celebration.",
        }),
        highlights: [
          t(locale, {
            id: "Dibahas sesuai kebutuhan acara",
            en: "Discussed around your event needs",
          }),
          t(locale, {
            id: "Bisa diselaraskan dengan paket utama",
            en: "Can be aligned with the main package",
          }),
          t(locale, {
            id: "Disusun melalui konsultasi",
            en: "Shaped through consultation",
          }),
        ],
      },
    ],
    onTheDay: {
      eyebrow: t(locale, {
        id: "Wedding Organizer",
        en: "Wedding Organizer",
      }),
      title: t(locale, {
        id: "On The Day Package untuk pendampingan hari-H yang tenang dan terstruktur.",
        en: "On The Day Package for calm, well-structured wedding-day coordination.",
      }),
      description: t(locale, {
        id: "Setiap pilihan disusun agar jumlah crew, kapasitas tamu, dan cakupan pendampingan mudah dibaca sejak awal.",
        en: "Each option is arranged so crew count, guest capacity, and support scope feel easy to understand from the start.",
      }),
      cards: [
        {
          id: "intimate",
          name: "INTIMATE",
          price: "Rp3.500.000,-",
          summary: t(locale, {
            id: "Pilihan esensial untuk intimate wedding dan resepsi keluarga yang membutuhkan koordinasi lapangan yang rapi namun tetap ringan.",
            en: "An essential option for intimate weddings and family receptions that still need tidy on-site coordination without unnecessary complexity.",
          }),
          crewLabel: t(locale, {
            id: "5 crew standby profesional",
            en: "5 standby professional crew",
          }),
          paxLabel: t(locale, {
            id: "Maks. 600 tamu",
            en: "Up to 600 guests",
          }),
          durationLabel: t(locale, {
            id: "8 jam kerja",
            en: "8 working hours",
          }),
          imageLabel: placeholderLabels.package,
          imageSrc: "/images/packages/on-the-day/intimate.png",
          features: [
            t(locale, {
              id: "Membuat wedding guide book yang detail",
              en: "Create a detailed wedding guide book",
            }),
            t(locale, {
              id: "Mengatur final technical meeting",
              en: "Arrange the final technical meeting",
            }),
            t(locale, {
              id: "Cocok untuk alur acara yang lebih intim dan efisien",
              en: "Well suited to a more intimate and efficient event flow",
            }),
          ],
        },
        {
          id: "standard",
          name: "STANDARD",
          price: "Rp4.500.000,-",
          summary: t(locale, {
            id: "Format seimbang untuk pasangan yang membutuhkan kapasitas tim lebih besar dan kontrol vendor yang lebih luas pada hari acara.",
            en: "A balanced format for couples who want a larger team and broader vendor control on the event day.",
          }),
          crewLabel: t(locale, {
            id: "7 crew standby profesional",
            en: "7 standby professional crew",
          }),
          paxLabel: t(locale, {
            id: "Maks. 1.000 tamu",
            en: "Up to 1,000 guests",
          }),
          durationLabel: t(locale, {
            id: "8 jam kerja",
            en: "8 working hours",
          }),
          imageLabel: placeholderLabels.package,
          imageSrc: "/images/packages/on-the-day/standard.png",
          features: [
            t(locale, {
              id: "Membuat wedding guide book yang detail",
              en: "Create a detailed wedding guide book",
            }),
            t(locale, {
              id: "Mengatur final technical meeting",
              en: "Arrange the final technical meeting",
            }),
            t(locale, {
              id: "Pilihan ideal untuk resepsi dengan flow tamu yang lebih dinamis",
              en: "An ideal choice for receptions with more dynamic guest flow",
            }),
          ],
          featured: true,
        },
        {
          id: "royal",
          name: "ROYAL",
          price: "Rp6.000.000,-",
          summary: t(locale, {
            id: "Pendampingan paling lengkap untuk acara yang melibatkan lebih banyak tamu, stakeholder keluarga, dan kebutuhan kontrol lapangan yang tinggi.",
            en: "The most comprehensive wedding-day option for events with more guests, more family stakeholders, and higher on-site control needs.",
          }),
          crewLabel: t(locale, {
            id: "10 crew standby profesional",
            en: "10 standby professional crew",
          }),
          paxLabel: t(locale, {
            id: "Maks. 1.500 tamu",
            en: "Up to 1,500 guests",
          }),
          durationLabel: t(locale, {
            id: "8 jam kerja",
            en: "8 working hours",
          }),
          imageLabel: placeholderLabels.package,
          imageSrc: "/images/packages/on-the-day/royal.png",
          features: [
            t(locale, {
              id: "Membuat wedding guide book yang detail",
              en: "Create a detailed wedding guide book",
            }),
            t(locale, {
              id: "Mengatur final technical meeting",
              en: "Arrange the final technical meeting",
            }),
            t(locale, {
              id: "Memberi ruang koordinasi lebih kuat untuk acara besar",
              en: "Creates stronger coordination capacity for larger celebrations",
            }),
          ],
        },
      ],
    },
    planner: {
      eyebrow: t(locale, {
        id: "Wedding Planner Service",
        en: "Wedding Planner Service",
      }),
      title: t(locale, {
        id: "Pendampingan personal yang dimulai sebelum hari acara, bukan hanya saat wedding day.",
        en: "A personalized planning partnership that starts before the event day, not only on the wedding day itself.",
      }),
      price: "Rp14.000.000,-",
      supportWindow: t(locale, {
        id: "Bekerja 6 - 3 bulan sebelum acara",
        en: "Support begins 6 to 3 months before the event",
      }),
      description: t(locale, {
        id: "Wedding Planner Service dirancang untuk pasangan yang menginginkan pendampingan lebih dekat sepanjang proses, mulai dari pengambilan keputusan sampai koordinasi seluruh vendor melalui hari acara.",
        en: "Wedding Planner Service is designed for couples who want closer guidance throughout the process, from decision-making through full vendor coordination on the wedding day.",
      }),
      personalizedNote: t(locale, {
        id: "Layanan ini terasa dekat, personal, dan siap mengikuti ritme kebutuhan pasangan maupun keluarga dengan tenang.",
        en: "This service feels close, personal, and calmly responsive to the rhythm of both the couple and the family.",
      }),
      imageSrc: "/images/packages/planner/main.png",
      featureGroups: [
        {
          title: t(locale, {
            id: "Unlimited support",
            en: "Unlimited support",
          }),
          items: [
            t(locale, {
              id: "Unlimited meeting untuk budgeting, konsep, keluarga, vendor, dan kebutuhan terkait lainnya",
              en: "Unlimited meetings for budgeting, concept refinement, family alignment, vendor direction, and related planning needs",
            }),
            t(locale, {
              id: "Unlimited pendampingan untuk fitting, prewedd, survey venue, test food, hotel check-in, dan kebutuhan lapangan lainnya",
              en: "Unlimited guided assistance for fittings, pre-wedding sessions, venue surveys, food testing, hotel check-in, and other key pre-event needs",
            }),
            t(locale, {
              id: "Unlimited online consultation melalui WhatsApp, Google Meet, Zoom Meet, dan kanal sejenis",
              en: "Unlimited online consultation through WhatsApp, Google Meet, Zoom, and similar channels",
            }),
          ],
        },
        {
          title: t(locale, {
            id: "Planning deliverables",
            en: "Planning deliverables",
          }),
          items: [
            t(locale, {
              id: "Membuat wedding guide book yang detail",
              en: "Create a detailed wedding guide book",
            }),
            t(locale, {
              id: "Mengkoordinasikan seluruh vendor sampai dengan hari acara",
              en: "Coordinate all vendors through the wedding day",
            }),
            t(locale, {
              id: "Menyiapkan naskah acara dan wording formal seperti naskah juru bicara, izin nikah, ijab qabul, dan kebutuhan seremonial lain",
              en: "Prepare ceremony scripts and formal event wording such as speaker scripts, marriage permission text, ijab qabul wording, and other ceremonial needs",
            }),
            t(locale, {
              id: "10 crew standby profesional pada hari acara",
              en: "10 standby professional crew on the wedding day",
            }),
          ],
        },
      ],
      timelineNotes: [
        t(locale, {
          id: "Membantu menjaga keputusan tetap tertata sejak beberapa bulan sebelum acara",
          en: "Helps keep decisions organized months before the event",
        }),
        t(locale, {
          id: "Meringankan beban follow-up yang biasanya tersebar di banyak vendor",
          en: "Reduces the follow-up load that usually gets scattered across many vendors",
        }),
        t(locale, {
          id: "Membuat persiapan terasa lebih tenang untuk pasangan dan keluarga inti",
          en: "Makes the planning process feel calmer for both the couple and the immediate family",
        }),
      ],
    },
    exclusive: {
      eyebrow: t(locale, {
        id: "All in Exclusive Package",
        en: "All-in Exclusive Package",
      }),
      title: t(locale, {
        id: "Paket flagship yang lengkap, mewah, dan tertata untuk pasangan yang ingin satu arah presentasi yang lebih praktis.",
        en: "A flagship package that feels complete, elevated, and beautifully organized for couples who want a more seamless presentation.",
      }),
      price: "Rp35.000.000,-",
      description: t(locale, {
        id: "All in Exclusive Package menggabungkan kategori utama pernikahan ke dalam satu format yang tetap mudah dibaca. Presentasinya dibuat rapi agar terasa premium, bukan padat dan membingungkan.",
        en: "All-in Exclusive Package brings together the major wedding categories in one format that still feels easy to read. The presentation is intentionally organized so it feels premium, not crowded.",
      }),
      imageSrc: "/images/packages/exclusive/main.png",
      categoryLabels: [
        t(locale, {
          id: "Decoration",
          en: "Decoration",
        }),
        t(locale, {
          id: "MUA and Attire",
          en: "MUA and Attire",
        }),
        t(locale, {
          id: "Entertainment",
          en: "Entertainment",
        }),
        t(locale, {
          id: "Photo and Video",
          en: "Photo and Video",
        }),
        t(locale, {
          id: "Master of Ceremony",
          en: "Master of Ceremony",
        }),
        t(locale, {
          id: "Wedding Organizer",
          en: "Wedding Organizer",
        }),
      ],
      sections: [
        {
          id: "decoration",
          title: t(locale, {
            id: "Decoration",
            en: "Decoration",
          }),
          imageLabel: placeholderLabels.decoration,
          imageSrc: "/images/packages/exclusive/decoration.png",
          details: [
            t(locale, {
              id: "Pelaminan 10 - 14 meter",
              en: "10 to 14 meter wedding stage backdrop",
            }),
            t(locale, {
              id: "Taman pelaminan",
              en: "Stage garden styling",
            }),
            t(locale, {
              id: "Standing flower",
              en: "Standing flowers",
            }),
            t(locale, {
              id: "Lorong bunga",
              en: "Flower aisle",
            }),
            t(locale, {
              id: "Lobby penerima tamu",
              en: "Guest reception lobby styling",
            }),
            t(locale, {
              id: "Gazebo",
              en: "Gazebo",
            }),
            t(locale, {
              id: "Pergola",
              en: "Pergola",
            }),
            t(locale, {
              id: "Photobooth",
              en: "Photobooth",
            }),
            t(locale, {
              id: "Mini gallery",
              en: "Mini gallery",
            }),
            t(locale, {
              id: "Dekorasi akad nikah",
              en: "Akad ceremony decor",
            }),
            t(locale, {
              id: "Karpet jalan",
              en: "Aisle carpet",
            }),
            t(locale, {
              id: "Janur",
              en: "Janur",
            }),
            t(locale, {
              id: "Kotak uang",
              en: "Gift box",
            }),
            t(locale, {
              id: "Hand bouquet",
              en: "Hand bouquet",
            }),
            t(locale, {
              id: "Kain dinding",
              en: "Wall draping",
            }),
          ],
        },
        {
          id: "muaAttire",
          title: t(locale, {
            id: "MUA and Attire",
            en: "MUA and Attire",
          }),
          imageLabel: placeholderLabels.package,
          imageSrc: "/images/packages/exclusive/mua-attire.png",
          details: [
            t(locale, {
              id: "2 busana dan make up pengantin",
              en: "2 wedding outfits and makeup looks for the couple",
            }),
            t(locale, {
              id: "2 busana dan make up orang tua",
              en: "2 parent outfits and makeup looks",
            }),
            t(locale, {
              id: "4 busana dan make up pagar ayu",
              en: "4 bridesmaid outfits and makeup looks",
            }),
            t(locale, {
              id: "2 busana dan make up among",
              en: "2 among outfits and makeup looks",
            }),
            t(locale, {
              id: "2 busana among tamu laki-laki",
              en: "2 male among outfits",
            }),
            t(locale, {
              id: "Softlens",
              en: "Softlens",
            }),
            t(locale, {
              id: "Rias adat",
              en: "Traditional makeup",
            }),
            t(locale, {
              id: "Henna",
              en: "Henna",
            }),
            t(locale, {
              id: "Melati",
              en: "Jasmine floral details",
            }),
          ],
        },
        {
          id: "entertainment",
          title: t(locale, {
            id: "Entertainment",
            en: "Entertainment",
          }),
          imageLabel: placeholderLabels.package,
          imageSrc: "/images/packages/exclusive/entertainment.png",
          details: [
            t(locale, {
              id: "1 singer",
              en: "1 singer",
            }),
            t(locale, {
              id: "1 keyboardist",
              en: "1 keyboardist",
            }),
            t(locale, {
              id: "Sound system",
              en: "Sound system",
            }),
          ],
        },
        {
          id: "photoVideo",
          title: t(locale, {
            id: "Photo and Video",
            en: "Photo and Video",
          }),
          imageLabel: placeholderLabels.portfolio,
          imageSrc: "/images/packages/exclusive/photo-video.png",
          details: [
            t(locale, {
              id: "Termasuk dalam paket dan disesuaikan lebih lanjut saat konsultasi",
              en: "Included in the package and refined further during consultation",
            }),
          ],
          note: t(locale, {
            id: "Format dokumentasi akan dirapikan saat konsultasi agar hasil foto dan video mengikuti rangkaian acara serta momen yang paling ingin Anda abadikan.",
            en: "The documentation format is refined during consultation so the photo and video deliverables follow your event flow and the moments you most want preserved.",
          }),
        },
        {
          id: "masterOfCeremony",
          title: t(locale, {
            id: "Master of Ceremony",
            en: "Master of Ceremony",
          }),
          imageLabel: placeholderLabels.couple,
          imageSrc: "/images/packages/exclusive/master-of-ceremony.png",
          details: [
            t(locale, {
              id: "MC akad",
              en: "MC for the akad ceremony",
            }),
            t(locale, {
              id: "Upacara adat",
              en: "Traditional ceremony host",
            }),
            t(locale, {
              id: "MC resepsi",
              en: "Reception MC",
            }),
          ],
        },
      ],
      organizerInclusion: t(locale, {
        id: "Kategori Wedding Organizer di dalam paket ini mengikuti pendampingan Mahana Organizer agar seluruh elemen yang termasuk tetap bergerak dalam satu ritme koordinasi.",
        en: "The Wedding Organizer category inside this package follows Mahana Organizer's coordination approach so every included element moves within one clear operational rhythm.",
      }),
    },
    catering: {
      eyebrow: t(locale, {
        id: "Additional Catering",
        en: "Additional Catering",
      }),
      title: t(locale, {
        id: "Layanan tambahan untuk kebutuhan catering yang ingin dibahas lebih personal.",
        en: "An additional service for catering plans that deserve a more personal discussion.",
      }),
      description: t(locale, {
        id: "Additional Catering dibicarakan melalui konsultasi agar arah menu, jumlah tamu, dan format penyajian selaras dengan karakter acara Anda.",
        en: "Additional Catering is discussed through consultation so menu direction, guest count, and serving style stay aligned with the character of your celebration.",
      }),
      note: t(locale, {
        id: "Layanan ini dapat dibicarakan bersamaan dengan paket utama, kebutuhan tamu, atau preferensi keluarga saat sesi konsultasi.",
        en: "This service can be discussed alongside your main package, guest needs, or family preferences during consultation.",
      }),
      ctaLabel: t(locale, {
        id: "Konsultasikan kebutuhan catering Anda",
        en: "Consult us for your catering needs",
      }),
      imageSrc: "/images/packages/catering.png",
    },
    contactHighlights: [
      t(locale, {
        id: "Konsultasi paket tersedia untuk wedding organizer, wedding planner, dan all-in exclusive package",
        en: "Package consultation is available for wedding organizer, wedding planner, and the all-in exclusive package",
      }),
      t(locale, {
        id: "Kebutuhan custom dan penyesuaian vendor dapat dibicarakan bersama",
        en: "Custom needs and vendor adjustments can be discussed together",
      }),
      t(locale, {
        id: "Tambahan catering juga dapat disesuaikan lewat konsultasi",
        en: "Additional catering can also be tailored through consultation",
      }),
    ],
    faq: [
      {
        question: t(locale, {
          id: "Apa perbedaan paket Intimate, Standard, dan Royal?",
          en: "What is the difference between Intimate, Standard, and Royal?",
        }),
        answer: t(locale, {
          id: "Perbedaan utamanya ada pada jumlah crew standby dan kapasitas tamu yang ditangani. Intimate cocok hingga 600 tamu dengan 5 crew, Standard hingga 1.000 tamu dengan 7 crew, dan Royal hingga 1.500 tamu dengan 10 crew. Seluruh paket tetap mencakup 8 jam kerja, wedding guide book, dan final technical meeting.",
          en: "The main difference is the standby crew count and the guest capacity covered. Intimate suits up to 600 guests with 5 crew, Standard handles up to 1,000 guests with 7 crew, and Royal covers up to 1,500 guests with 10 crew. Every option still includes 8 working hours, a wedding guide book, and a final technical meeting.",
        }),
      },
      {
        question: t(locale, {
          id: "Apakah Wedding Planner Service berbeda dengan On The Day Package?",
          en: "Is Wedding Planner Service different from the On The Day Package?",
        }),
        answer: t(locale, {
          id: "Ya. On The Day Package berfokus pada koordinasi hari-H, sedangkan Wedding Planner Service mulai bekerja 6 sampai 3 bulan sebelum acara dengan support yang lebih intensif seperti unlimited meeting, pendampingan, konsultasi online, pembuatan naskah acara, dan koordinasi vendor sampai wedding day.",
          en: "Yes. The On The Day Package focuses on wedding-day coordination, while Wedding Planner Service begins 6 to 3 months before the event with more intensive support such as unlimited meetings, guided assistance, online consultation, ceremony script preparation, and vendor coordination through the wedding day.",
        }),
      },
      {
        question: t(locale, {
          id: "Bisakah Mahana Organizer membantu koordinasi vendor?",
          en: "Can Mahana Organizer help with vendor coordination?",
        }),
        answer: t(locale, {
          id: "Bisa. Koordinasi vendor merupakan bagian penting dari cara kerja kami, baik melalui On The Day Package, Wedding Planner Service, maupun All in Exclusive Package agar seluruh pihak bergerak dalam satu alur yang sama.",
          en: "Yes. Vendor coordination is a key part of how we work, whether through the On The Day Package, Wedding Planner Service, or the All-in Exclusive Package, so every party moves within the same flow.",
        }),
      },
      {
        question: t(locale, {
          id: "Apakah catering tersedia?",
          en: "Is catering available?",
        }),
        answer: t(locale, {
          id: "Ya, Additional Catering tersedia sebagai layanan tambahan. Pembahasannya dilakukan melalui konsultasi agar arah menu, jumlah tamu, dan format penyajian sesuai dengan kebutuhan acara Anda.",
          en: "Yes. Additional Catering is available as an add-on service. We discuss it through consultation so the menu direction, guest count, and serving format match your event needs.",
        }),
      },
      {
        question: t(locale, {
          id: "Bisakah paket disesuaikan dengan kebutuhan kami?",
          en: "Can the package be adjusted to our needs?",
        }),
        answer: t(locale, {
          id: "Bisa. Susunan paket di website ini menjadi acuan awal yang jelas. Setelah konsultasi, Mahana Organizer dapat membantu menyesuaikan detail support, vendor, kategori tambahan, dan kebutuhan keluarga sesuai karakter acara Anda.",
          en: "Yes. The package outline on this website gives you a clear starting point. After consultation, Mahana Organizer can help tailor the support details, vendor scope, extra categories, and family needs to match the character of your event.",
        }),
      },
    ],
    placeholderLabels,
  };
}
