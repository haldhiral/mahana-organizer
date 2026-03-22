export type CityAreaKey = "jakarta" | "bogor" | "depok" | "tangerang" | "bekasi";

export type CityLandingSlug =
  | "wedding-organizer-jakarta"
  | "wedding-organizer-bogor"
  | "wedding-organizer-depok"
  | "wedding-organizer-tangerang"
  | "wedding-organizer-bekasi";

export type CityLandingContent = {
  metadataDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    snapshotLabel: string;
    snapshotTitle: string;
    snapshotBody: string;
    highlights: string[];
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; body: string }>;
  };
  coverage: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  venueContext: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; body: string }>;
  };
  resources: {
    eyebrow: string;
    title: string;
    description: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export type CityLandingPage = {
  key: CityAreaKey;
  slug: CityLandingSlug;
  city: string;
  metadataTitle: string;
  content: CityLandingContent;
};

function makePage(
  page: Omit<CityLandingPage, "metadataTitle">,
): CityLandingPage {
  return {
    ...page,
    metadataTitle: `Wedding Organizer ${page.city} | Mahana Organizer`,
  };
}

export const cityLandingPages: CityLandingPage[] = [
  makePage({
    key: "jakarta",
    slug: "wedding-organizer-jakarta",
    city: "Jakarta",
    content: {
      metadataDescription:
        "Wedding Organizer Jakarta dari Mahana Organizer untuk pasangan yang membutuhkan planning rapi, koordinasi vendor disiplin, dan pengalaman tamu yang tetap hangat di venue hotel, ballroom, maupun intimate space di Jakarta.",
      hero: {
        eyebrow: "Wedding Organizer Jakarta",
        title:
          "Wedding Organizer Jakarta untuk pernikahan yang rapi, elegan, dan tetap terasa hangat.",
        description:
          "Mahana Organizer membantu pasangan di Jakarta menata planning, vendor coordination, guest flow, dan tempo acara agar venue kota yang serba cepat tetap terasa tenang saat dijalani.",
        snapshotLabel: "Fokus pendampingan",
        snapshotTitle: "Ritme Jakarta butuh organizer yang sigap dan detail.",
        snapshotBody:
          "Venue hotel, ballroom, dan city venue di Jakarta biasanya memiliki jam akses, aturan loading, serta perpindahan tamu yang harus dikontrol sejak awal.",
        highlights: [
          "Timeline vendor dibuat realistis untuk kondisi lalu lintas dan aturan akses venue.",
          "Flow tamu, keluarga inti, dan pergantian segmen acara dikawal lebih disiplin.",
          "Konsultasi diarahkan agar keputusan vendor dan prioritas acara lebih cepat terbaca.",
        ],
      },
      whyChoose: {
        eyebrow: "Kenapa Mahana di Jakarta",
        title:
          "Pendampingan yang relevan untuk pernikahan di kota dengan tempo cepat.",
        description:
          "Jakarta sering menuntut keputusan yang cepat, vendor yang banyak, dan venue rules yang ketat. Mahana Organizer membantu menjaga semuanya tetap selaras.",
        items: [
          {
            title: "Koordinasi vendor lebih disiplin",
            body:
              "Vendor dekor, dokumentasi, entertainment, catering, dan keluarga inti dibawa ke ritme kerja yang sama agar tidak saling menunggu di venue.",
          },
          {
            title: "Flow tamu tetap nyaman",
            body:
              "Kami membantu mengatur alur kedatangan, holding area keluarga, perpindahan akad ke resepsi, hingga momen pulang tamu supaya acara tetap terasa halus.",
          },
          {
            title: "Keputusan terasa lebih ringan",
            body:
              "Mahana Organizer menyusun prioritas, timeline, dan briefing agar pasangan tidak kewalahan menghadapi banyak pilihan vendor dan detail teknis Jakarta.",
          },
        ],
      },
      coverage: {
        eyebrow: "Cakupan layanan Jakarta",
        title: "Support planning dan koordinasi untuk berbagai format venue di Jakarta.",
        description:
          "Pendekatan kami menyesuaikan karakter venue dan keramaian kota, bukan hanya daftar tugas organizer semata.",
        points: [
          "Mendampingi acara di Jakarta Pusat, Selatan, Barat, Timur, dan Utara dengan penyesuaian site visit mengikuti kebutuhan venue.",
          "Cocok untuk hotel, ballroom, private dining venue, gedung resepsi, dan perayaan keluarga yang diadakan di rumah.",
          "Fokus pada briefing vendor, kontrol loading, perpindahan akad ke resepsi, dan sinkronisasi cue acara.",
          "Konsultasi awal membantu memetakan jam kedatangan vendor, akses tamu, dan kebutuhan keluarga inti sejak jauh hari.",
        ],
      },
      venueContext: {
        eyebrow: "Konteks venue Jakarta",
        title:
          "Gaya wedding dan koordinasi venue yang paling sering dibutuhkan di Jakarta.",
        description:
          "Setiap format acara punya tantangan yang berbeda. Mahana Organizer menyesuaikan ritme kerja agar detail teknis tidak mengganggu suasana perayaan.",
        items: [
          {
            title: "Ballroom hotel",
            body:
              "Ideal untuk pernikahan formal yang membutuhkan kontrol rundown, vendor loading, transisi lighting, dan alur tamu dari lobby ke ballroom.",
          },
          {
            title: "Intimate city wedding",
            body:
              "Cocok untuk restoran privat atau venue kecil yang menuntut flow acara tetap rapi walau durasi lebih singkat dan ruang gerak lebih terbatas.",
          },
          {
            title: "Akad dan resepsi di lokasi berbeda",
            body:
              "Kami membantu menjaga transisi transportasi, kesiapan keluarga, dan kesinambungan dokumentasi agar dua lokasi tetap terasa satu cerita.",
          },
        ],
      },
      resources: {
        eyebrow: "Langkah berikutnya",
        title: "Lihat halaman penting lain untuk merencanakan wedding di Jakarta.",
        description:
          "Gunakan halaman berikut untuk membandingkan layanan, melihat referensi pernikahan, dan memulai konsultasi bersama Mahana Organizer.",
      },
      faq: {
        eyebrow: "FAQ Wedding Organizer Jakarta",
        title:
          "Pertanyaan yang sering muncul saat merencanakan pernikahan di Jakarta.",
        description:
          "Jawaban ini kami susun untuk pasangan yang sedang mempertimbangkan venue kota, ballroom hotel, atau intimate wedding di Jakarta.",
        items: [
          {
            question:
              "Apakah Mahana Organizer bisa membantu wedding di hotel atau ballroom Jakarta?",
            answer:
              "Bisa. Kami terbiasa membantu pernikahan yang membutuhkan koordinasi dengan aturan venue hotel, loading vendor, alur keluarga inti, serta kontrol waktu yang lebih ketat.",
          },
          {
            question:
              "Bagaimana koordinasi vendor untuk wedding Jakarta yang jadwal venue-nya ketat?",
            answer:
              "Kami biasanya memecah timeline berdasarkan jam akses venue, kebutuhan loading, final check tiap vendor, dan cue acara agar semua pihak datang dengan ekspektasi yang sama.",
          },
          {
            question:
              "Apakah Mahana Organizer cocok untuk intimate wedding di Jakarta?",
            answer:
              "Ya. Acara yang lebih intim tetap memerlukan alur tamu, transisi acara, dan koordinasi vendor yang rapi, terutama bila venue kecil memiliki waktu pakai yang terbatas.",
          },
          {
            question:
              "Kapan sebaiknya mulai konsultasi untuk wedding di Jakarta?",
            answer:
              "Semakin awal semakin baik, terutama jika venue dan vendor utama Anda berada di area dengan jadwal padat. Konsultasi awal membantu menyusun prioritas sebelum detail teknis menumpuk.",
          },
        ],
      },
      cta: {
        eyebrow: "Konsultasi wedding Jakarta",
        title:
          "Diskusikan rencana pernikahan Anda di Jakarta bersama Mahana Organizer.",
        description:
          "Ceritakan tanggal, area venue, dan gambaran acara Anda. Kami akan membantu memetakan support yang paling relevan untuk planning dan hari-H.",
      },
    },
  }),
  makePage({
    key: "bogor",
    slug: "wedding-organizer-bogor",
    city: "Bogor",
    content: {
      metadataDescription:
        "Wedding Organizer Bogor dari Mahana Organizer untuk pernikahan garden, villa, resort, atau ballroom yang membutuhkan kontrol timeline, koordinasi vendor, dan rencana cuaca yang matang.",
      hero: {
        eyebrow: "Wedding Organizer Bogor",
        title:
          "Wedding Organizer Bogor untuk pernikahan outdoor, resort, dan ballroom yang tetap terasa tenang.",
        description:
          "Mahana Organizer membantu pasangan di Bogor menyusun planning yang fleksibel namun tetap presisi, terutama untuk venue garden, villa, resort, dan acara dengan perpindahan area.",
        snapshotLabel: "Fokus pendampingan",
        snapshotTitle: "Bogor membutuhkan planning yang lentur, tapi tetap disiplin.",
        snapshotBody:
          "Acara di Bogor sering dipengaruhi cuaca, transportasi tamu dari Jakarta, dan venue outdoor yang membutuhkan skenario cadangan tanpa membuat rundown berantakan.",
        highlights: [
          "Backup plan cuaca dibahas sejak awal, termasuk transisi ceremony dan reception.",
          "Guest flow diperhitungkan untuk venue yang memiliki area terpisah atau akses menanjak.",
          "Koordinasi vendor dibuat lebih detail agar setup outdoor dan timing acara tetap aman.",
        ],
      },
      whyChoose: {
        eyebrow: "Kenapa Mahana di Bogor",
        title:
          "Pendampingan yang kuat untuk pernikahan dengan konteks outdoor dan destination dekat kota.",
        description:
          "Bogor memberi suasana yang hangat dan segar, tetapi juga menuntut organizer yang peka terhadap cuaca, mobilitas vendor, dan kenyamanan tamu.",
        items: [
          {
            title: "Antisipasi cuaca lebih matang",
            body:
              "Mahana Organizer membantu merapikan opsi cadangan, jam setup, dan prioritas vendor agar wedding outdoor tetap terasa siap meski kondisi berubah.",
          },
          {
            title: "Transisi area lebih tertata",
            body:
              "Venue Bogor sering memiliki ceremony area, reception area, dan akses tamu yang terpisah. Kami mengawal perpindahannya agar tetap nyaman.",
          },
          {
            title: "Tamu dari luar kota tetap terakomodasi",
            body:
              "Untuk tamu yang datang dari Jakarta atau area lain, flow kedatangan, parkir, dan waktu kumpul bisa dipetakan lebih realistis.",
          },
        ],
      },
      coverage: {
        eyebrow: "Cakupan layanan Bogor",
        title:
          "Support planning untuk venue garden, resort, villa, dan ballroom di kawasan Bogor.",
        description:
          "Pendekatan kami berfokus pada logistik, tempo acara, dan kenyamanan tamu saat venue memiliki ruang terbuka atau area yang menyebar.",
        points: [
          "Cocok untuk venue garden, resort, villa, ballroom hotel, dan private venue di kawasan Bogor.",
          "Membantu menyusun vendor loading, area persiapan keluarga, serta jalur perpindahan dari akad ke resepsi.",
          "Menjaga timeline tetap realistis untuk tamu yang datang dari luar kota atau venue dengan akses kendaraan yang lebih terbatas.",
          "Konsultasi dapat digunakan untuk memetakan kebutuhan cadangan cuaca, transportasi, dan pengaturan jam kedatangan vendor.",
        ],
      },
      venueContext: {
        eyebrow: "Konteks venue Bogor",
        title:
          "Format pernikahan di Bogor yang paling terbantu oleh koordinasi yang detail.",
        description:
          "Bogor sering dipilih karena suasana dan lanskapnya, sehingga detail operasional harus diatur agar keindahan venue tetap terasa nyaman bagi tamu.",
        items: [
          {
            title: "Garden wedding",
            body:
              "Perlu perhatian khusus pada plan B cuaca, kesiapan lantai kerja vendor, perpindahan tamu, dan durasi acara menjelang sore atau malam.",
          },
          {
            title: "Villa atau resort celebration",
            body:
              "Cocok untuk acara dengan keluarga menginap, venue luas, dan banyak titik aktivitas yang membutuhkan kontrol komunikasi lebih rapat.",
          },
          {
            title: "Ballroom dengan sesi foto outdoor",
            body:
              "Perlu pengaturan waktu yang presisi agar sesi foto, akad, resepsi, dan makeup touch-up tetap berjalan tanpa mengorbankan flow tamu.",
          },
        ],
      },
      resources: {
        eyebrow: "Langkah berikutnya",
        title: "Halaman penting untuk membantu planning wedding di Bogor.",
        description:
          "Bandingkan layanan, lihat referensi venue style, dan lanjutkan ke konsultasi bila Anda sedang menyiapkan wedding di Bogor bersama Mahana Organizer.",
      },
      faq: {
        eyebrow: "FAQ Wedding Organizer Bogor",
        title:
          "Pertanyaan yang sering diajukan pasangan sebelum menikah di Bogor.",
        description:
          "FAQ ini relevan untuk pasangan yang sedang mempertimbangkan venue garden, resort, atau villa di kawasan Bogor.",
        items: [
          {
            question:
              "Apakah Mahana Organizer cocok untuk garden wedding di Bogor?",
            answer:
              "Ya. Kami membantu menyiapkan timeline, koordinasi vendor outdoor, kebutuhan transisi area, dan plan cadangan cuaca agar garden wedding tetap terasa tertata.",
          },
          {
            question:
              "Bagaimana jika venue Bogor memiliki area akad dan resepsi yang terpisah?",
            answer:
              "Kami akan memetakan flow tamu, jalur keluarga inti, cue MC, dan perpindahan vendor supaya transisinya mulus serta tidak membuat acara terasa putus.",
          },
          {
            question:
              "Bisakah Mahana Organizer membantu tamu yang datang dari Jakarta ke Bogor?",
            answer:
              "Kami bisa membantu memikirkan ritme kedatangan, waktu mulai acara yang realistis, serta detail koordinasi yang berpengaruh pada kenyamanan tamu dari luar kota.",
          },
          {
            question:
              "Kapan sebaiknya mulai konsultasi untuk wedding Bogor yang outdoor?",
            answer:
              "Semakin cepat semakin baik, karena acara outdoor biasanya membutuhkan pembahasan lebih rinci untuk cuaca, layout, vendor setup, dan backup scenario.",
          },
        ],
      },
      cta: {
        eyebrow: "Konsultasi wedding Bogor",
        title:
          "Rencanakan wedding Bogor Anda bersama Mahana Organizer dengan alur yang lebih jelas.",
        description:
          "Sampaikan tanggal, jenis venue, dan bentuk acara yang Anda inginkan. Kami akan membantu memetakan support yang paling efisien sejak tahap awal.",
      },
    },
  }),
  makePage({
    key: "depok",
    slug: "wedding-organizer-depok",
    city: "Depok",
    content: {
      metadataDescription:
        "Wedding Organizer Depok dari Mahana Organizer untuk pasangan yang ingin acara keluarga tetap hangat, timeline terkendali, dan koordinasi vendor berjalan rapi di venue Depok.",
      hero: {
        eyebrow: "Wedding Organizer Depok",
        title:
          "Wedding Organizer Depok untuk acara keluarga yang personal, tertata, dan nyaman dijalani.",
        description:
          "Mahana Organizer membantu pasangan di Depok merapikan planning, vendor coordination, family flow, dan timeline acara agar pernikahan terasa dekat tanpa kehilangan struktur.",
        snapshotLabel: "Fokus pendampingan",
        snapshotTitle: "Depok sering menuntut organizer yang halus dalam komunikasi keluarga.",
        snapshotBody:
          "Banyak wedding di Depok berlangsung dalam format yang lebih personal, sehingga koordinasi dengan keluarga inti, vendor pilihan sendiri, dan perpindahan acara perlu dijaga dengan tenang.",
        highlights: [
          "Rundown disusun agar keluarga inti memahami ritme acara tanpa merasa diburu.",
          "Vendor coordination membantu menyatukan vendor lama, vendor keluarga, dan kebutuhan tambahan.",
          "Flow tamu dijaga tetap nyaman untuk venue rumah, gedung serbaguna, atau ballroom terdekat.",
        ],
      },
      whyChoose: {
        eyebrow: "Kenapa Mahana di Depok",
        title:
          "Pendampingan yang cocok untuk wedding Depok yang berpusat pada keluarga dan kenyamanan tamu.",
        description:
          "Acara di Depok sering memiliki suasana yang lebih personal. Karena itu, organizer perlu rapi secara operasional tetapi tetap lembut dalam cara mengarahkan.",
        items: [
          {
            title: "Komunikasi keluarga lebih tenang",
            body:
              "Mahana Organizer membantu menyelaraskan kebutuhan keluarga inti, susunan acara, dan vendor tanpa membuat proses terasa kaku atau berjarak.",
          },
          {
            title: "Acara tetap tertata walau formatnya fleksibel",
            body:
              "Baik untuk akad di rumah, resepsi di hall, maupun acara satu lokasi, kami menjaga alur supaya setiap momen tetap punya penanggung jawab yang jelas.",
          },
          {
            title: "Vendor yang sudah dipilih tetap bisa dibawa rapi",
            body:
              "Banyak pasangan Depok sudah memiliki vendor rekomendasi keluarga. Kami membantu menyatukan komunikasi dan timing agar hasilnya tetap terkoordinasi.",
          },
        ],
      },
      coverage: {
        eyebrow: "Cakupan layanan Depok",
        title:
          "Support wedding organizer untuk venue keluarga, gedung, dan ballroom sekitar Depok.",
        description:
          "Fokus kami adalah membuat planning yang realistis untuk acara yang terasa personal namun tetap perlu kontrol teknis yang jelas.",
        points: [
          "Cocok untuk akad di rumah, gedung serbaguna, venue keluarga, ballroom hotel terdekat, dan acara dengan dua sesi yang berdekatan.",
          "Membantu menyusun timeline keluarga, koordinasi vendor inti, dan penempatan tim agar flow acara tetap ringan diikuti.",
          "Relevan untuk acara dengan banyak keterlibatan keluarga besar, sesi tradisi, atau kebutuhan briefing yang lebih personal.",
          "Konsultasi awal dapat digunakan untuk menilai apakah acara membutuhkan full planning, wedding day coordination, atau support yang lebih spesifik.",
        ],
      },
      venueContext: {
        eyebrow: "Konteks venue Depok",
        title:
          "Format wedding Depok yang membutuhkan organizer dengan rasa dan struktur kerja yang seimbang.",
        description:
          "Depok sering menjadi pilihan untuk acara yang hangat dan dekat dengan keluarga. Koordinasi yang baik membuat nuansa personal tetap terasa tertib.",
        items: [
          {
            title: "Akad rumah dan resepsi hall",
            body:
              "Format ini membutuhkan kendali pada perpindahan keluarga, kesiapan vendor, dan sinkronisasi dokumentasi agar dua sesi tetap terasa sambung.",
          },
          {
            title: "Acara keluarga satu lokasi",
            body:
              "Cocok untuk pernikahan yang lebih intim tetapi tetap memerlukan kontrol waktu, pengaturan tamu, dan briefing vendor yang jelas.",
          },
          {
            title: "Pernikahan dengan unsur tradisi",
            body:
              "Saat ada prosesi adat atau rangkaian keluarga, kami membantu menata cue acara agar tradisi tetap terhormat dan operasional tetap tertib.",
          },
        ],
      },
      resources: {
        eyebrow: "Langkah berikutnya",
        title: "Halaman pendukung untuk membantu wedding planning di Depok.",
        description:
          "Pelajari layanan, lihat portofolio, baca testimoni, dan lanjutkan ke konsultasi bila Anda sedang menyiapkan pernikahan di Depok bersama Mahana Organizer.",
      },
      faq: {
        eyebrow: "FAQ Wedding Organizer Depok",
        title:
          "Pertanyaan yang sering ditanyakan pasangan untuk acara pernikahan di Depok.",
        description:
          "FAQ ini membantu menjawab kebutuhan pasangan yang menyiapkan wedding keluarga, venue rumah, atau gedung di area Depok.",
        items: [
          {
            question:
              "Apakah Mahana Organizer bisa membantu akad di rumah dan resepsi di tempat lain di Depok?",
            answer:
              "Bisa. Kami dapat membantu merapikan timeline, perpindahan keluarga, koordinasi vendor, dan flow dokumentasi agar dua sesi tetap berjalan dalam satu ritme.",
          },
          {
            question:
              "Bagaimana jika sebagian vendor saya sudah dipilih keluarga?",
            answer:
              "Tidak masalah. Mahana Organizer dapat bekerja dengan vendor pilihan keluarga sambil membantu menyelaraskan briefing teknis, rundown, dan koordinasi hari acara.",
          },
          {
            question:
              "Apakah wedding organizer tetap penting untuk acara keluarga yang tidak terlalu besar di Depok?",
            answer:
              "Tetap penting jika Anda ingin keluarga bisa fokus pada momen utama tanpa harus memegang detail teknis, alur tamu, dan cue vendor selama acara berlangsung.",
          },
          {
            question:
              "Konsultasi awal biasanya membahas apa untuk wedding Depok?",
            answer:
              "Biasanya kami membahas format acara, lokasi, jumlah tamu, vendor yang sudah ada, peran keluarga inti, dan level pendampingan yang paling efisien untuk acara Anda.",
          },
        ],
      },
      cta: {
        eyebrow: "Konsultasi wedding Depok",
        title:
          "Jika Anda menyiapkan wedding Depok yang hangat dan tertata, mari mulai dari konsultasi.",
        description:
          "Ceritakan venue, rangkaian acara, dan vendor yang sudah Anda miliki. Mahana Organizer akan membantu memetakan langkah yang paling relevan.",
      },
    },
  }),
  makePage({
    key: "tangerang",
    slug: "wedding-organizer-tangerang",
    city: "Tangerang",
    content: {
      metadataDescription:
        "Wedding Organizer Tangerang dari Mahana Organizer untuk pasangan yang membutuhkan koordinasi vendor rapi, timeline terkontrol, dan guest flow nyaman di ballroom, hotel, club house, atau venue keluarga di Tangerang.",
      hero: {
        eyebrow: "Wedding Organizer Tangerang",
        title:
          "Wedding Organizer Tangerang untuk pernikahan yang rapi di venue hotel, ballroom, dan kawasan residensial.",
        description:
          "Mahana Organizer membantu pasangan di Tangerang mengatur planning, vendor coordination, guest arrival, dan ritme acara agar venue yang menyebar tetap berjalan dalam satu kontrol.",
        snapshotLabel: "Fokus pendampingan",
        snapshotTitle: "Tangerang membutuhkan koordinasi yang kuat antar vendor dan venue rules.",
        snapshotBody:
          "Pernikahan di Tangerang sering berada di hotel, ballroom, club house, atau hall keluarga yang memiliki aturan akses dan kebutuhan loading berbeda-beda.",
        highlights: [
          "Vendor timeline disusun agar mobilitas dari Jakarta atau area sekitarnya tetap aman.",
          "Guest flow diperhatikan untuk venue yang mengandalkan kendaraan pribadi dan area parkir.",
          "Briefing venue rules, loading, dan transisi acara dibuat lebih tegas agar pelaksanaan tetap halus.",
        ],
      },
      whyChoose: {
        eyebrow: "Kenapa Mahana di Tangerang",
        title:
          "Pendampingan yang relevan untuk wedding Tangerang dengan venue dan mobilitas yang beragam.",
        description:
          "Tangerang memiliki banyak pilihan venue modern dan kawasan residensial. Mahana Organizer membantu menyatukan kebutuhan vendor, tamu, dan keluarga agar tidak tercerai-berai.",
        items: [
          {
            title: "Logistik vendor lebih terkontrol",
            body:
              "Kami membantu mengatur jam kedatangan, loading, dan briefing vendor agar venue rules di Tangerang tetap terpenuhi tanpa mengganggu mood acara.",
          },
          {
            title: "Tamu lebih nyaman sejak datang",
            body:
              "Untuk venue dengan akses parkir, drop-off, atau area masuk yang khusus, flow tamu dan keluarga bisa dipetakan lebih jelas sejak awal.",
          },
          {
            title: "Acara terasa lebih solid",
            body:
              "Venue yang tersebar dan vendor dari beberapa area membutuhkan organizer yang menjaga semua pihak bergerak dalam satu tempo kerja yang sama.",
          },
        ],
      },
      coverage: {
        eyebrow: "Cakupan layanan Tangerang",
        title:
          "Support wedding organizer untuk hotel, ballroom, club house, dan venue keluarga di Tangerang.",
        description:
          "Pendekatan kami difokuskan pada venue rules, mobilitas vendor, dan pengaturan tamu agar wedding di Tangerang terasa lebih tenang.",
        points: [
          "Cocok untuk hotel, ballroom, club house, hall keluarga, dan venue di kawasan residensial maupun komersial Tangerang.",
          "Membantu mengatur akses vendor, titik kumpul keluarga, guest flow, dan cue acara pada venue yang memiliki aturan operasional khusus.",
          "Relevan untuk pasangan dengan vendor lintas area, keluarga besar, dan kebutuhan koordinasi tamu yang datang menggunakan kendaraan pribadi.",
          "Konsultasi awal bisa dipakai untuk membaca kompleksitas venue, rundown, dan support tim yang paling sesuai dengan skala acara.",
        ],
      },
      venueContext: {
        eyebrow: "Konteks venue Tangerang",
        title:
          "Format wedding Tangerang yang paling terbantu oleh organizer dengan kontrol operasional kuat.",
        description:
          "Venue di Tangerang sering modern dan tertata, tetapi tetap memerlukan organizer yang bisa mengawal transisi, akses, dan ritme vendor dengan rapi.",
        items: [
          {
            title: "Ballroom hotel",
            body:
              "Membutuhkan kendali pada rundown, loading vendor, transisi lighting, serta alur tamu yang bergerak dari lobby ke area acara.",
          },
          {
            title: "Club house atau venue residensial",
            body:
              "Perlu perhatian khusus pada akses kendaraan, aturan kawasan, jam setup, dan pengelolaan tamu agar lingkungan tetap nyaman.",
          },
          {
            title: "Acara keluarga dengan vendor lintas area",
            body:
              "Cocok untuk pernikahan yang menggunakan vendor dari Jakarta dan Tangerang sekaligus, sehingga briefing dan timing harus dibuat sangat jelas.",
          },
        ],
      },
      resources: {
        eyebrow: "Langkah berikutnya",
        title: "Halaman yang membantu Anda melanjutkan planning wedding di Tangerang.",
        description:
          "Lihat detail layanan, paket, portofolio, testimoni, dan kanal konsultasi bila Anda sedang merencanakan wedding Tangerang bersama Mahana Organizer.",
      },
      faq: {
        eyebrow: "FAQ Wedding Organizer Tangerang",
        title:
          "Pertanyaan yang sering muncul saat menyiapkan wedding di Tangerang.",
        description:
          "FAQ ini dibuat untuk pasangan yang sedang mempertimbangkan ballroom hotel, club house, atau venue keluarga di Tangerang.",
        items: [
          {
            question:
              "Apakah Mahana Organizer bisa membantu wedding di ballroom hotel Tangerang?",
            answer:
              "Bisa. Kami membantu mengatur rundown, vendor loading, family flow, dan kebutuhan teknis venue agar acara tetap rapi dan terasa nyaman.",
          },
          {
            question:
              "Bagaimana jika venue Tangerang memiliki aturan akses atau kawasan yang cukup ketat?",
            answer:
              "Kami biasanya memetakan aturan venue sejak awal lalu menyesuaikan timeline vendor, titik masuk, dan skenario setup agar pelaksanaan tetap lancar.",
          },
          {
            question:
              "Apakah Mahana Organizer relevan untuk acara di club house atau venue residensial?",
            answer:
              "Ya. Venue seperti ini justru membutuhkan pengaturan tamu, kendaraan, vendor, dan waktu setup yang teliti agar acara tidak mengganggu ritme kawasan sekitar.",
          },
          {
            question:
              "Kapan waktu terbaik untuk konsultasi wedding Tangerang?",
            answer:
              "Idealnya segera setelah venue atau rentang tanggal mulai dipertimbangkan, supaya kebutuhan akses, vendor, dan support tim bisa dihitung lebih realistis.",
          },
        ],
      },
      cta: {
        eyebrow: "Konsultasi wedding Tangerang",
        title:
          "Mulai planning wedding Tangerang Anda dengan alur yang lebih terarah bersama Mahana Organizer.",
        description:
          "Bagikan tanggal, jenis venue, dan gambaran vendor Anda. Kami akan membantu menyesuaikan support yang paling relevan untuk acara tersebut.",
      },
    },
  }),
  makePage({
    key: "bekasi",
    slug: "wedding-organizer-bekasi",
    city: "Bekasi",
    content: {
      metadataDescription:
        "Wedding Organizer Bekasi dari Mahana Organizer untuk pasangan yang membutuhkan planning rapi, vendor coordination teliti, dan alur tamu nyaman di venue hotel, convention hall, atau acara keluarga di Bekasi.",
      hero: {
        eyebrow: "Wedding Organizer Bekasi",
        title:
          "Wedding Organizer Bekasi untuk pernikahan yang terstruktur, nyaman, dan siap menghadapi acara skala keluarga besar.",
        description:
          "Mahana Organizer membantu pasangan di Bekasi menata planning, flow tamu, koordinasi vendor, dan kontrol timeline agar pernikahan terasa tertib tanpa kehilangan kehangatan keluarga.",
        snapshotLabel: "Fokus pendampingan",
        snapshotTitle: "Bekasi sering membutuhkan kontrol guest flow dan ritme vendor yang rapi.",
        snapshotBody:
          "Banyak wedding di Bekasi melibatkan tamu dalam jumlah besar, keluarga besar, serta venue yang membutuhkan pengaturan parkir, kedatangan, dan perpindahan acara yang jelas.",
        highlights: [
          "Rundown dibuat realistis untuk tamu dan vendor yang datang dari berbagai arah.",
          "Guest flow dan family flow diatur agar area masuk, akad, dan resepsi tidak saling menumpuk.",
          "Koordinasi vendor membantu menjaga tempo acara tetap stabil walau skalanya besar.",
        ],
      },
      whyChoose: {
        eyebrow: "Kenapa Mahana di Bekasi",
        title:
          "Pendampingan yang cocok untuk wedding Bekasi dengan tamu besar dan agenda yang padat.",
        description:
          "Acara di Bekasi sering menuntut organizer yang mampu menjaga banyak stakeholder tetap bergerak teratur, dari keluarga hingga vendor utama.",
        items: [
          {
            title: "Flow tamu lebih terkendali",
            body:
              "Kami membantu menata kedatangan tamu, area keluarga, perpindahan sesi, dan cue acara agar venue tidak terasa penuh atau membingungkan.",
          },
          {
            title: "Koordinasi keluarga besar lebih jelas",
            body:
              "Untuk acara yang melibatkan banyak anggota keluarga, Mahana Organizer membantu menyusun peran dan briefing agar komunikasi tidak tercecer.",
          },
          {
            title: "Tempo acara tetap stabil",
            body:
              "Vendor yang banyak, rundown panjang, dan venue besar memerlukan pengawalan yang disiplin supaya momen penting tidak terlambat atau tumpang tindih.",
          },
        ],
      },
      coverage: {
        eyebrow: "Cakupan layanan Bekasi",
        title:
          "Support wedding organizer untuk hotel, convention hall, gedung, dan venue keluarga di Bekasi.",
        description:
          "Fokus kami adalah menjaga pernikahan di Bekasi tetap rapi secara operasional, terutama saat tamu dan rangkaian acara cukup besar.",
        points: [
          "Cocok untuk hotel, convention hall, gedung serbaguna, venue keluarga, dan acara dengan tamu yang cukup banyak di area Bekasi.",
          "Membantu memetakan titik masuk tamu, family holding area, cue prosesi, dan koordinasi vendor pada venue yang lebih besar.",
          "Relevan untuk akad dan resepsi satu lokasi maupun format dua sesi yang membutuhkan transisi lebih disiplin.",
          "Konsultasi awal membantu membaca skala acara, kebutuhan crew, dan struktur rundown yang paling realistis untuk venue Bekasi.",
        ],
      },
      venueContext: {
        eyebrow: "Konteks venue Bekasi",
        title:
          "Format wedding Bekasi yang paling terbantu oleh organizer dengan kontrol detail yang kuat.",
        description:
          "Venue di Bekasi kerap digunakan untuk acara keluarga besar dan flow tamu yang padat. Mahana Organizer membantu merapikannya agar perayaan tetap nyaman.",
        items: [
          {
            title: "Convention hall atau ballroom besar",
            body:
              "Membutuhkan pengaturan kedatangan tamu, cue prosesi, vendor positioning, dan koordinasi lintas area agar acara tidak terasa berat.",
          },
          {
            title: "Akad dan resepsi satu venue",
            body:
              "Perlu transisi yang rapi antara sesi religius, foto keluarga, dan resepsi supaya waktu tidak banyak terbuang di tengah acara.",
          },
          {
            title: "Acara keluarga dengan tamu besar",
            body:
              "Cocok untuk pernikahan yang ramai dan melibatkan banyak pihak, sehingga briefing keluarga inti serta pembagian peran menjadi sangat penting.",
          },
        ],
      },
      resources: {
        eyebrow: "Langkah berikutnya",
        title: "Halaman lanjutan untuk membantu Anda menyiapkan wedding di Bekasi.",
        description:
          "Pelajari layanan dan paket, lihat portofolio, baca testimoni, lalu lanjutkan ke konsultasi bila Anda sedang menyiapkan wedding Bekasi bersama Mahana Organizer.",
      },
      faq: {
        eyebrow: "FAQ Wedding Organizer Bekasi",
        title:
          "Pertanyaan yang sering diajukan pasangan sebelum menikah di Bekasi.",
        description:
          "FAQ ini relevan untuk pasangan yang menyiapkan wedding di hotel, gedung, convention hall, atau venue keluarga di Bekasi.",
        items: [
          {
            question:
              "Apakah Mahana Organizer cocok untuk wedding Bekasi dengan jumlah tamu besar?",
            answer:
              "Ya. Kami membantu mengatur guest flow, family flow, vendor coordination, dan timeline agar acara berskala besar tetap terarah serta nyaman dijalani.",
          },
          {
            question:
              "Bisakah Mahana Organizer membantu akad dan resepsi di venue yang sama di Bekasi?",
            answer:
              "Bisa. Kami membantu menyusun transisi antar sesi, cue prosesi, positioning vendor, dan flow keluarga agar pergantian segmen terasa rapi.",
          },
          {
            question:
              "Bagaimana jika venue Bekasi saya cukup besar dan melibatkan banyak vendor?",
            answer:
              "Kami akan memetakan rundown, pembagian area kerja, titik briefing vendor, serta timing tiap segmen agar venue besar tetap terasa terkendali.",
          },
          {
            question:
              "Kapan sebaiknya saya menghubungi wedding organizer untuk acara di Bekasi?",
            answer:
              "Idealnya sebelum detail vendor dan rundown terkunci penuh, sehingga Mahana Organizer dapat membantu menyusun ritme acara dan kebutuhan support secara lebih efisien.",
          },
        ],
      },
      cta: {
        eyebrow: "Konsultasi wedding Bekasi",
        title:
          "Bila Anda ingin wedding Bekasi yang rapi dan nyaman untuk tamu, mari mulai dari konsultasi.",
        description:
          "Sampaikan venue, skala tamu, dan rangkaian acara Anda. Mahana Organizer akan membantu menyiapkan arah support yang paling relevan.",
      },
    },
  }),
];

export const cityLandingPathnames = cityLandingPages.map(
  (page) => `/${page.slug}` as const,
);

export function getCityLandingPage(slug: string) {
  return cityLandingPages.find((page) => page.slug === slug);
}
