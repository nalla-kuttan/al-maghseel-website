import type { Locale } from "./i18n";

export type ServiceSection = { title: string; text?: string; items?: readonly string[]; note?: string };
export type ServiceFaq = { question: string; answer: string };
export type ServiceContent = {
  slug: string;
  /** Short label used for links to this page (anchor text). */
  label: string;
  /** schema.org serviceType. */
  serviceType: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: readonly ServiceSection[];
  faqs: readonly ServiceFaq[];
};

// Dedicated landing pages for the searches customers make ("AC repair Al Ain", "صيانة مكيفات العين" …).
// Every statement here mirrors what the business already says about itself on the home page:
// no prices, opening hours, brands or guarantees are claimed.
const en: readonly ServiceContent[] = [
  {
    slug: "ac-repair-al-ain",
    label: "AC repair in Al Ain",
    serviceType: "Air conditioning repair",
    title: "AC Repair in Al Ain – Not Cooling, Leaks & Faults | Al Maghseel",
    description: "AC repair in Al Ain for units that are not cooling, leaking water, noisy or tripping. Al Maghseel has repaired split and central A/C since 2006. Call 050 673 4821.",
    h1: "AC Repair in Al Ain",
    intro: "When an air conditioner stops cooling, leaks water or keeps tripping, the cause is rarely obvious from the outside. Al Maghseel Central Air Conditioner Est. has diagnosed and repaired split and central A/C systems from its Al Ain base since 2006, for homes, villas, shops and workplaces.",
    sections: [
      {
        title: "What A/C problems does Al Maghseel repair?",
        text: "Al Maghseel repairs split and central air conditioners that are not cooling, leaking water, noisy, tripping the breaker or losing refrigerant.",
        items: [
          "A/C not cooling or cooling weakly: airflow, refrigerant, thermostat and compressor checks.",
          "Water leaking from the indoor unit: blocked drain line, drain tray, hoses and seals.",
          "Unusual noise or vibration: fan blade, fan motor and blower inspection.",
          "A/C not starting or tripping the breaker: capacitor, contactor, wiring and control-board (PCB) faults.",
          "Refrigerant (gas) leaks: leak testing, repair and refill.",
          "Thermostat and sensor faults: wrong temperature readings or the unit switching on and off.",
        ],
      },
      {
        title: "Which A/C parts can be repaired or replaced?",
        text: "The team works on the compressor, control board, capacitor, contactor, fan motor, thermostat, coils and piping.",
        items: [
          "Compressor inspection and repair",
          "PCB and control boards",
          "Capacitors and magnetic contactors",
          "Electrical connections and wiring",
          "Copper and drainage piping",
          "Fan blades, fan motors and blowers",
          "Thermostats and sensors",
          "Condenser coils",
          "Filters, trays, switches and internal components",
        ],
      },
      {
        title: "How does an A/C repair visit work?",
        text: "You describe the fault, the team confirms a visit window, and the technician diagnoses the unit before any major repair.",
        items: [
          "Share the symptom: send your location, building type and what the A/C is doing.",
          "Confirm availability: we confirm the visit window and whether any known parts may be needed.",
          "Inspect before repair: the technician diagnoses the fault and explains the next step before major work.",
        ],
      },
      {
        title: "Where is AC repair available?",
        text: "AC repair is available in Al Ain, where the team is based at 32 Al Wakalat 7 St in the Industrial Area. Requests from other emirates are also accepted; visit availability is confirmed for your location before a technician is dispatched.",
      },
    ],
    faqs: [
      { question: "Why is my A/C running but not cooling?", answer: "The usual causes are a blocked filter or coil restricting airflow, low refrigerant from a leak, a faulty thermostat or sensor, or a failing capacitor or compressor. A technician needs to inspect the unit to confirm which one applies before a repair is recommended." },
      { question: "Why is water dripping from my indoor A/C unit?", answer: "Most often the condensate drain line is blocked, or the drain tray is damaged or out of position, so water backs up into the room. Clearing the drain and checking the tray, hoses and seals normally resolves it." },
      { question: "How do I book an AC repair in Al Ain?", answer: "Call 050 673 4821 or send a WhatsApp message with your area, building type, A/C type and what the unit is doing. The team confirms availability and a visit window for your location." },
      { question: "Will I know what the repair is before work starts?", answer: "Yes. The technician diagnoses the fault first and explains the recommended repair before any major work or parts replacement goes ahead." },
      { question: "Can I get help with an urgent A/C breakdown?", answer: "Call 050 673 4821 for urgent issues. The team will confirm the earliest available visit for your location." },
    ],
  },
  {
    slug: "ac-maintenance-al-ain",
    label: "AC maintenance in Al Ain",
    serviceType: "Air conditioning maintenance",
    title: "AC Maintenance & Cleaning in Al Ain | Al Maghseel",
    description: "Planned AC maintenance and cleaning in Al Ain for homes and commercial properties: filters, coils, drains, fans and electrical checks. Serving Al Ain since 2006.",
    h1: "AC Maintenance & Cleaning in Al Ain",
    intro: "Regular maintenance keeps an air conditioner cooling properly through the Al Ain summer and catches small faults before they become breakdowns. Al Maghseel provides cleaning, inspection and scheduled support for split and central A/C in homes, villas and commercial properties.",
    sections: [
      {
        title: "What does an A/C maintenance visit cover?",
        text: "A maintenance visit covers cleaning and inspection of the filters, coil, drain, fans and electrical parts.",
        items: [
          "Filter cleaning",
          "Condenser coil cleaning",
          "Drain line and drain tray cleaning",
          "Fan blade, fan motor and blower inspection",
          "Thermostat and sensor check",
          "Electrical connections, capacitor and contactor inspection",
          "Refrigerant leak check when cooling is weak",
        ],
        note: "The exact work depends on the type and condition of the unit.",
      },
      {
        title: "How do I know my A/C needs a service?",
        text: "An A/C is due for a service when it cools more slowly, blows weakly, drips water or gets louder.",
        items: [
          "The room takes longer to cool than it used to.",
          "Airflow from the indoor unit is weak.",
          "Water is dripping from the indoor unit.",
          "The unit is noisier than usual.",
          "The A/C has not been cleaned since last summer.",
        ],
      },
      {
        title: "Is maintenance available for homes and commercial properties?",
        text: "Yes. Maintenance is available for homes and villas as well as shops and workplaces, including scheduled support for commercial properties with several units. Tell us how many units you have and what type they are so the visit can be planned properly.",
      },
      {
        title: "How do I arrange AC maintenance in Al Ain?",
        text: "Call or send a WhatsApp message with your property and unit details, and the team confirms a visit window.",
        items: [
          "Send your area, building type, and the number and type of A/C units.",
          "We confirm availability and a visit window for your location.",
          "If the inspection finds a fault, the technician explains the recommended repair before major work.",
        ],
      },
    ],
    faqs: [
      { question: "How often should an A/C be serviced in the UAE?", answer: "Because air conditioners in the UAE run for most of the year, a service at least once a year is generally recommended, ideally before summer. Units in dusty locations or in continuous commercial use often benefit from more frequent cleaning." },
      { question: "Is AC maintenance available outside Al Ain?", answer: "The team is based in Al Ain and accepts requests from other emirates. Availability and the visit window are confirmed for your location before a technician is dispatched." },
    ],
  },
  {
    slug: "ac-installation-al-ain",
    label: "AC supply & installation in Al Ain",
    serviceType: "Air conditioning supply and installation",
    title: "AC Supply & Installation in Al Ain | Al Maghseel",
    description: "Supply and installation of split and central A/C systems in Al Ain: unit selection, mounting, copper piping, wiring, testing and commissioning. Since 2006.",
    h1: "AC Supply & Installation in Al Ain",
    intro: "Al Maghseel supplies and installs new split and central air conditioning systems for homes, villas, shops and workplaces. One team supplies a suitable unit, installs it and commissions it, working from its Al Ain base since 2006.",
    sections: [
      {
        title: "What does A/C installation include?",
        text: "Installation includes supplying the unit, mounting it, running the piping and wiring, and testing it before handover.",
        items: [
          "Supply of a unit suited to the space",
          "Mounting of the indoor and outdoor units",
          "Copper refrigerant piping and drainage piping",
          "Electrical wiring and connections",
          "Testing and commissioning before handover",
        ],
      },
      {
        title: "Do you install both split and central A/C?",
        text: "Yes. The team installs split units for individual rooms and central air conditioning for larger homes, villas and commercial spaces. Tell us about the property and the team will discuss the system that fits it.",
      },
      {
        title: "What should I send to get an installation quote?",
        text: "Send your area, building type, room count and sizes, and whether an existing A/C is being replaced.",
        items: [
          "Your area and building type (apartment, villa, shop, workplace).",
          "The number of rooms and their approximate sizes.",
          "Whether this is a new installation or replaces an existing A/C.",
          "Photos of the rooms and the outdoor-unit location, if available.",
        ],
        note: "The scope, price, parts and timing are confirmed with you directly before any work is agreed.",
      },
      {
        title: "Who services the A/C after installation?",
        text: "The same team handles maintenance and repair, so the system can be serviced by the people who installed it.",
      },
    ],
    faqs: [
      { question: "Do you supply the A/C unit as well as install it?", answer: "Yes. Al Maghseel supplies a suitable unit and carries out the mounting, piping, wiring, testing and commissioning." },
      { question: "How do I know what size A/C I need?", answer: "The right capacity depends on the room size, sun exposure, insulation and how the space is used. Share the number of rooms and their approximate sizes and the team will recommend a suitable unit." },
      { question: "Do you install A/C for shops and offices?", answer: "Yes. Supply and installation is available for homes and villas as well as shops and workplaces." },
    ],
  },
];

const ar: readonly ServiceContent[] = [
  {
    slug: "ac-repair-al-ain",
    label: "تصليح مكيفات في العين",
    serviceType: "تصليح المكيفات",
    title: "تصليح مكيفات في العين – ضعف التبريد وتسرب المياه | المغسيل",
    description: "تصليح مكيفات في العين: المكيف لا يبرد، تسرب مياه، ضوضاء أو أعطال كهربائية. مؤسسة المغسيل تصلح مكيفات السبليت والمركزي منذ 2006. اتصل على 0506734821.",
    h1: "تصليح مكيفات في العين",
    intro: "عندما يتوقف المكيف عن التبريد أو يسرّب الماء أو يفصل الكهرباء، لا يكون السبب واضحاً من الخارج غالباً. تشخّص مؤسسة المغسيل للمكيفات المركزية أعطال مكيفات السبليت والمركزي وتصلحها من مقرها في العين منذ عام 2006، للمنازل والفلل والمحلات ومواقع العمل.",
    sections: [
      {
        title: "ما أعطال المكيفات التي تصلحها مؤسسة المغسيل؟",
        text: "تصلح مؤسسة المغسيل مكيفات السبليت والمركزي التي لا تبرد أو تسرّب الماء أو تصدر ضوضاء أو تفصل القاطع أو تفقد غاز التبريد.",
        items: [
          "المكيف لا يبرد أو تبريده ضعيف: فحص تدفق الهواء وغاز التبريد والثرموستات والضاغط.",
          "تسرب المياه من الوحدة الداخلية: انسداد مجرى التصريف، وفحص الصينية والخراطيم والعوازل.",
          "ضوضاء أو اهتزاز غير معتاد: فحص ريش المروحة ومحركها والمنفاخ.",
          "المكيف لا يعمل أو يفصل القاطع: أعطال المكثف والكونتاكتور والأسلاك ولوحة التحكم.",
          "تسرب غاز التبريد: فحص التسرب وإصلاحه وإعادة التعبئة.",
          "أعطال الثرموستات والحساسات: قراءة حرارة غير صحيحة أو تشغيل وإيقاف متكرر.",
        ],
      },
      {
        title: "ما قطع المكيف التي يمكن إصلاحها أو استبدالها؟",
        text: "يعمل الفريق على الضاغط ولوحة التحكم والمكثف والكونتاكتور ومحرك المروحة والثرموستات والملفات والأنابيب.",
        items: [
          "فحص الضاغط وإصلاحه",
          "لوحة الدوائر ولوحة التحكم",
          "المكثفات والكونتاكتور المغناطيسي",
          "التوصيلات والأسلاك الكهربائية",
          "أنابيب النحاس والتصريف",
          "ريش المروحة ومحركها والمنفاخ",
          "الثرموستات والحساسات",
          "ملف المكثف",
          "الفلاتر والصواني والمفاتيح والقطع الداخلية",
        ],
      },
      {
        title: "كيف تتم زيارة تصليح المكيف؟",
        text: "تصف العطل، فيؤكد الفريق موعد الزيارة، ثم يشخّص الفني الجهاز قبل أي إصلاح رئيسي.",
        items: [
          "صف المشكلة: أرسل موقعك ونوع المبنى وما يحدث في المكيف.",
          "تأكيد الموعد: نؤكد وقت الزيارة وما إذا كانت هناك قطع معروفة قد تكون مطلوبة.",
          "الفحص قبل الإصلاح: يشخّص الفني العطل ويوضح الخطوة التالية قبل تنفيذ أي عمل رئيسي.",
        ],
      },
      {
        title: "أين تتوفر خدمة تصليح المكيفات؟",
        text: "تتوفر خدمة تصليح المكيفات في مدينة العين، حيث يقع مقر الفريق في المنطقة الصناعية. نستقبل كذلك الطلبات من إمارات الدولة الأخرى، ويتم تأكيد توفر الزيارة حسب موقعك قبل إرسال الفني.",
      },
    ],
    faqs: [
      { question: "لماذا يعمل المكيف ولا يبرد؟", answer: "الأسباب الأكثر شيوعاً هي انسداد الفلتر أو الملف بما يضعف تدفق الهواء، أو نقص غاز التبريد بسبب تسرب، أو عطل في الثرموستات أو الحساس، أو ضعف المكثف أو الضاغط. يحتاج الفني إلى فحص الجهاز لتحديد السبب قبل اقتراح الإصلاح." },
      { question: "لماذا ينزل الماء من الوحدة الداخلية للمكيف؟", answer: "في أغلب الحالات يكون مجرى تصريف الماء مسدوداً، أو تكون صينية التصريف متضررة أو في غير موضعها، فيرتد الماء إلى الغرفة. تنظيف المجرى وفحص الصينية والخراطيم والعوازل يحل المشكلة عادةً." },
      { question: "كيف أطلب فني تصليح مكيفات في العين؟", answer: "اتصل على 0506734821 أو أرسل رسالة واتساب تتضمن منطقتك ونوع المبنى ونوع المكيف ووصف العطل. يؤكد الفريق توفر الخدمة وموعد الزيارة حسب موقعك." },
      { question: "هل أعرف نوع الإصلاح قبل بدء العمل؟", answer: "نعم. يشخّص الفني العطل أولاً ثم يوضح الإصلاح المقترح قبل تنفيذ أي عمل رئيسي أو استبدال للقطع." },
      { question: "هل تتوفر مساعدة لأعطال المكيفات العاجلة؟", answer: "اتصل على 0506734821 في الحالات العاجلة، وسيؤكد لك الفريق أقرب موعد متاح حسب موقعك." },
    ],
  },
  {
    slug: "ac-maintenance-al-ain",
    label: "صيانة وتنظيف مكيفات في العين",
    serviceType: "صيانة المكيفات",
    title: "صيانة وتنظيف مكيفات في العين | مؤسسة المغسيل",
    description: "صيانة دورية وتنظيف مكيفات في العين للمنازل والمنشآت التجارية: الفلاتر والملفات ومجاري التصريف والمراوح والفحص الكهربائي. نخدم العين منذ 2006.",
    h1: "صيانة وتنظيف مكيفات في العين",
    intro: "الصيانة الدورية تحافظ على كفاءة تبريد المكيف طوال صيف العين وتكشف الأعطال الصغيرة قبل أن تتحول إلى توقف كامل. تقدم مؤسسة المغسيل خدمات التنظيف والفحص والصيانة المجدولة لمكيفات السبليت والمركزي في المنازل والفلل والعقارات التجارية.",
    sections: [
      {
        title: "ماذا تشمل زيارة صيانة المكيف؟",
        text: "تشمل زيارة الصيانة تنظيف وفحص الفلاتر والملف ومجرى التصريف والمراوح والأجزاء الكهربائية.",
        items: [
          "تنظيف الفلاتر",
          "تنظيف ملف المكثف",
          "تنظيف مجرى التصريف وصينية الماء",
          "فحص ريش المروحة ومحركها والمنفاخ",
          "فحص الثرموستات والحساسات",
          "فحص التوصيلات الكهربائية والمكثف والكونتاكتور",
          "فحص تسرب غاز التبريد عند ضعف التبريد",
        ],
        note: "يختلف العمل المطلوب حسب نوع الجهاز وحالته.",
      },
      {
        title: "كيف أعرف أن المكيف يحتاج إلى صيانة؟",
        text: "يحتاج المكيف إلى صيانة عندما يبرد ببطء أو يضعف تدفق هوائه أو يسرّب الماء أو يرتفع صوته.",
        items: [
          "الغرفة تحتاج إلى وقت أطول لتبرد.",
          "تدفق الهواء من الوحدة الداخلية ضعيف.",
          "تسرب الماء من الوحدة الداخلية.",
          "صوت المكيف أعلى من المعتاد.",
          "لم يُنظَّف المكيف منذ الصيف الماضي.",
        ],
      },
      {
        title: "هل تتوفر الصيانة للمنازل والمنشآت التجارية؟",
        text: "نعم. تتوفر الصيانة للمنازل والفلل وكذلك للمحلات ومواقع العمل، بما يشمل الصيانة المجدولة للعقارات التجارية التي تضم عدة وحدات. أخبرنا بعدد الوحدات ونوعها لنرتب الزيارة بالشكل المناسب.",
      },
      {
        title: "كيف أطلب صيانة مكيفات في العين؟",
        text: "اتصل أو أرسل رسالة واتساب تتضمن تفاصيل العقار والوحدات، وسيؤكد الفريق موعد الزيارة.",
        items: [
          "أرسل منطقتك ونوع المبنى وعدد وحدات التكييف ونوعها.",
          "نؤكد توفر الخدمة وموعد الزيارة حسب موقعك.",
          "إذا أظهر الفحص عطلاً، يوضح الفني الإصلاح المقترح قبل تنفيذ أي عمل رئيسي.",
        ],
      },
    ],
    faqs: [
      { question: "كم مرة يحتاج المكيف إلى صيانة في الإمارات؟", answer: "لأن المكيفات في الإمارات تعمل معظم أشهر السنة، يُنصح عموماً بالصيانة مرة واحدة على الأقل سنوياً، ويفضّل قبل الصيف. الأجهزة في الأماكن المعرضة للغبار أو التي تعمل باستمرار في المنشآت التجارية قد تحتاج إلى تنظيف أكثر تكراراً." },
      { question: "هل تتوفر صيانة المكيفات خارج مدينة العين؟", answer: "يقع مقر الفريق في العين ويستقبل الطلبات من إمارات الدولة الأخرى. يتم تأكيد توفر الزيارة وموعدها حسب موقعك قبل إرسال الفني." },
    ],
  },
  {
    slug: "ac-installation-al-ain",
    label: "توريد وتركيب مكيفات في العين",
    serviceType: "توريد وتركيب المكيفات",
    title: "توريد وتركيب مكيفات في العين – سبليت ومركزي | المغسيل",
    description: "توريد وتركيب مكيفات السبليت والمركزي في العين: اختيار الوحدة المناسبة والتثبيت وتمديدات النحاس والتوصيلات الكهربائية والاختبار والتشغيل. منذ 2006.",
    h1: "توريد وتركيب مكيفات في العين",
    intro: "تورّد مؤسسة المغسيل أنظمة التكييف الجديدة من نوع السبليت والمركزي وتركّبها للمنازل والفلل والمحلات ومواقع العمل. فريق واحد يورّد الوحدة المناسبة ويركّبها ويشغّلها، من مقره في العين منذ عام 2006.",
    sections: [
      {
        title: "ماذا يشمل تركيب المكيف؟",
        text: "يشمل التركيب توريد الوحدة وتثبيتها وتنفيذ التمديدات والتوصيلات واختبارها قبل التسليم.",
        items: [
          "توريد وحدة مناسبة للمساحة",
          "تثبيت الوحدتين الداخلية والخارجية",
          "تمديدات أنابيب النحاس والتصريف",
          "الأسلاك والتوصيلات الكهربائية",
          "الاختبار والتشغيل قبل التسليم",
        ],
      },
      {
        title: "هل تركّبون مكيفات السبليت والمركزي؟",
        text: "نعم. يركّب الفريق مكيفات السبليت للغرف المنفردة وأنظمة التكييف المركزي للمنازل الكبيرة والفلل والمساحات التجارية. أخبرنا عن العقار وسيناقش الفريق معك النظام المناسب له.",
      },
      {
        title: "ما المعلومات المطلوبة للحصول على عرض سعر التركيب؟",
        text: "أرسل منطقتك ونوع المبنى وعدد الغرف ومساحاتها، وهل ستستبدل مكيفاً قائماً.",
        items: [
          "منطقتك ونوع المبنى (شقة، فيلا، محل، موقع عمل).",
          "عدد الغرف ومساحاتها التقريبية.",
          "هل التركيب جديد أم بديل لمكيف قائم.",
          "صور للغرف ولموقع الوحدة الخارجية إن توفرت.",
        ],
        note: "يتم تأكيد نطاق العمل والسعر والقطع والموعد معك مباشرة قبل الاتفاق على أي عمل.",
      },
      {
        title: "من يتولى صيانة المكيف بعد التركيب؟",
        text: "يتولى الفريق نفسه أعمال الصيانة والتصليح، فيمكن خدمة النظام لدى من قام بتركيبه.",
      },
    ],
    faqs: [
      { question: "هل تورّدون المكيف مع التركيب؟", answer: "نعم. تورّد مؤسسة المغسيل الوحدة المناسبة وتنفذ التثبيت والتمديدات والتوصيلات والاختبار والتشغيل." },
      { question: "كيف أعرف حجم المكيف المناسب؟", answer: "تعتمد القدرة المناسبة على مساحة الغرفة وتعرضها للشمس والعزل وطريقة استخدام المكان. أرسل عدد الغرف ومساحاتها التقريبية وسيقترح الفريق الوحدة المناسبة." },
      { question: "هل تركّبون مكيفات للمحلات والمكاتب؟", answer: "نعم. تتوفر خدمة التوريد والتركيب للمنازل والفلل وكذلك للمحلات ومواقع العمل." },
    ],
  },
];

const services = { en, ar } as const;

export const getServices = (locale: Locale) => services[locale];
export const getService = (locale: Locale, slug: string) => services[locale].find((service) => service.slug === slug);
