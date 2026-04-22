// ==========================================
// SITE CONFIGURATION
// TickTock Plumbing Services — Doral, FL
// ==========================================

const CONFIG = {
  // ================================
  // BRAND IDENTITY
  // ================================
  brand: {
    name: "TickTock Plumbing Services",
    companySlug: "ticktock-plumbing",
    tagline: "On Time. Every Time. 24/7.",
    phone: "(305) 766-5526",
    phoneRaw: "3057665526",
    email: "info@ticktockplumbingservices.com",
    domain: "ticktockplumbingservices.com",
    trade: "Plumbing",
    tradeType: "Plumbing",
    city: "Doral",
    state: "FL",
    address: "6408 NW 82nd Ave, Miami, FL 33166",
    fullAddress: "6408 NW 82nd Ave, Miami, FL 33166",
    hours: "Open 24 Hours",
    license: "Licensed & Insured",
    logo: "assets/clients/active/logo.svg",
    logoIcon: "clock",
    favicon: "/favicon.svg",
    yearEstablished: "",
    googleBusinessUrl: "",
  },

  // ================================
  // THEME & COLORS
  // ================================
  theme: {
    primaryColor: "#0D1B2A",
    primaryDark: "#081220",
    primaryLight: "#1B2D42",
    accentColor: "#1E88E5",
    accentDark: "#1565C0",
    accentLight: "#42A5F5",
    gold: "#1E88E5",
    green: "#28A745",
    gradientPrimary: "#0D1B2A",
    gradientAccent: "#1E88E5",
    glassBg: "rgba(255, 255, 255, 1)",
    shadowSoft: "0 4px 20px rgba(0, 0, 0, 0.08)",
    shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
    shadowStrong: "0 15px 50px rgba(0, 0, 0, 0.15)",
  },

  // ================================
  // NAVIGATION
  // ================================
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Our Work", href: "our-work.html" },
    { label: "Services", type: "servicesDropdown" },
    { label: "Service Areas", type: "serviceAreasDropdown" },
    { label: "Contact", href: "contact.html" },
  ],

  // ================================
  // TOP BAR
  // ================================
  topBar: {
    emergencyText: "24/7 Plumbing — Residential & Commercial",
    showAddress: true,
    showHours: true,
    phoneLabel: "Call Now - Free Estimate",
  },

  // ==========================================
  // PROMO BANNER
  // ==========================================
  promoBanner: {
    enabled: false,
    text: "",
    linkText: "",
    linkHref: "#quote",
  },

  // ==========================================
  // TRUST LOGOS
  // ==========================================
  trustLogos: {
    enabled: true,
    title: "Trusted & Certified",
    logos: [
      { name: "Google", rating: "5.0" },
      { name: "BBB", rating: "A+" },
      { name: "HomeAdvisor", rating: null },
      { name: "Angi", rating: null },
    ],
  },

  // ==========================================
  // SEO
  // ==========================================
  seo: {
    home: {
      title: "TickTock Plumbing Services | 24/7 Plumber in Doral & Miami-Dade, FL",
      description: "Doral's trusted 24/7 plumber. Fixture installation, drain cleaning, water heaters, pipe repair & more. 5.0★ on Google. Call (305) 766-5526.",
    },
    about: {
      title: "About Us | TickTock Plumbing Services — Doral, FL",
      description: "Meet the TickTock Plumbing team — a full crew serving Doral and Miami-Dade County with reliable 24/7 plumbing. 5.0 stars, 18 Google reviews.",
    },
    services: {
      title: "Services | TickTock Plumbing Services — Doral, FL",
      description: "Complete plumbing services: fixture installation, drain cleaning, water heaters, pipe repair, garbage disposals & more in Doral and Miami-Dade County.",
    },
    contact: {
      title: "Contact | TickTock Plumbing Services — Doral, FL",
      description: "Need a plumber in Doral? Call (305) 766-5526 anytime — we're open 24/7. Free estimates for residential and commercial plumbing.",
    },
    serviceArea: {
      title: "Service Areas | TickTock Plumbing Services — Doral, FL",
      description: "24/7 plumbing services in Doral, Miami, Hialeah, Miami Lakes, Sweetwater, Miami Springs & all of Miami-Dade County.",
    },
    ourWork: {
      title: "Our Work | TickTock Plumbing Services — Doral, FL",
      description: "See our recent plumbing projects in Doral and Miami-Dade County. Fixture installs, bathroom plumbing, kitchen sinks, water heaters & more.",
    },
  },

  // ==========================================
  // IMAGES
  // ==========================================
  images: {
    basePath: "/assets/clients/active/",
    hero: "/assets/clients/active/Kitchen-Sink-Installation-Wide-Angle.webp",
    about: "/assets/clients/active/20201218_164520.webp",
    whyUs: "/assets/clients/active/2025-11-04.webp",
    contact: "/assets/clients/active/unnamed.webp",
    og: "/assets/clients/active/Kitchen-Sink-Installation-Wide-Angle.webp",
    favicon: "/favicon.svg",

    services: {
      "fixture-installation": "/assets/clients/active/Kitchen-Sink-Installation-Wide-Angle.webp",
      "bathroom-plumbing": "/assets/clients/active/2025-11-04.webp",
      "drain-cleaning": "/assets/clients/active/unnamed.webp",
      "water-heater-service": "/assets/clients/active/image1.webp",
      "pipe-repair": "/assets/clients/active/2025-11-04 (2).webp",
      "garbage-disposal-installation": "/assets/clients/active/FullSizeRender (2).webp",
      "shower-installation": "/assets/clients/active/Shower-Installation-Shower-Handle-Shower-Head.webp",
      "emergency-plumbing": "/assets/clients/active/FullSizeRender (3).webp",
    },

    gallery: {
      enabled: true,
      title: "Recent Work",
      subtitle: "Real plumbing projects completed for Miami-Dade County homeowners",
      items: [
        { src: "/assets/clients/active/Kitchen-Sink-Installation-Wide-Angle.webp", alt: "Modern kitchen sink and faucet installation" },
        { src: "/assets/clients/active/Kitchen-Sink-Installation-Close-Up.webp", alt: "Chrome kitchen faucet close-up on stone counter" },
        { src: "/assets/clients/active/2025-11-04.webp", alt: "Complete bathroom with marble shower and vanity" },
        { src: "/assets/clients/active/Bathroom-Sink-Installation-Close.webp", alt: "Modern chrome bathroom faucet on marble counter" },
        { src: "/assets/clients/active/Bathroom-Sink-Installation-Wide.webp", alt: "Full bathroom vanity with modern faucet and tile" },
        { src: "/assets/clients/active/Shower-Installation-Shower-Handle-Close.webp", alt: "Chrome shower valve on penny tile" },
        { src: "/assets/clients/active/Wet-Bar-Sink-Installation-Close-Up.webp", alt: "Wet bar sink with gooseneck faucet" },
        { src: "/assets/clients/active/image1.webp", alt: "Titan tankless water heater with copper piping" },
        { src: "/assets/clients/active/2025-11-04 (1).webp", alt: "White vanity with chrome faucet installation" },
        { src: "/assets/clients/active/FullSizeRender (2).webp", alt: "Garbage disposal installation under kitchen sink" },
        { src: "/assets/clients/active/20201218_164520.webp", alt: "TickTock Plumbing team with service vehicles" },
        { src: "/assets/clients/active/unnamed.webp", alt: "Technician performing drain cleaning on-site" },
      ],
    },
    fallback: "/assets/clients/active/fallback.webp",
  },

  // ==========================================
  // HERO
  // ==========================================
  hero: {
    label: "Doral's 24/7 Plumbing Team",
    badge: "Licensed & Insured",
    headline: "On Time.",
    headlineAccent: "Every Time. Guaranteed.",
    subhead: "Excellent service, fair pricing, and always on schedule — TickTock Plumbing delivers reliable plumbing for homes and businesses across Doral and Miami-Dade County. Available 24/7.",
    features: [
      "Free Estimates",
      "24/7 Emergency Service",
      "Licensed Professionals"
    ],
    trustStrip: {
      enabled: true,
      items: [
        "Licensed & Insured",
        "5.0 ★ Google Rating",
        "18+ Five-Star Reviews",
        "24/7 Emergency Service",
        "Serving All of Miami-Dade",
      ],
    },
    guaranteeBadge: {
      enabled: false,
      text: "",
      subtext: "",
    },
    ctaPrimary: {
      text: "Get a Free Estimate",
      href: "#quote",
    },
  },

  // ==========================================
  // LEAD CAPTURE FORM
  // ==========================================
  form: {
    title: "Get a Free Plumbing Estimate",
    subtitle: "Tell us about your plumbing issue and we'll get back to you fast.",
    formTitle: "Get Your Free Estimate",
    formSubtitle: "No spam, no hassle — just honest pricing",
    responseBadge: "24/7 Availability",
    phoneCtaLabel: "Prefer to talk? Call us now:",
    submitText: "Get My Free Estimate",
    privacyText: "Your information is secure and never shared.",
    messagePlaceholder: "What's the issue? (fixture install, leak, drain, water heater, shower, garbage disposal, etc.)",
    consentText: "I agree to receive text messages and calls about my inquiry.",
    ghlWebhook: "https://services.leadconnectorhq.com/hooks/REPLACE_WITH_YOUR_WEBHOOK",
    successMessage: "Thanks — we got it. We'll be in touch shortly.",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Your Name", required: true },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "(305) 766-5526", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: false },
    ],
    showServiceDropdown: true,
    features: [
      "Free Estimates",
      "24/7 Availability",
      "Quality Workmanship",
      "Licensed & Insured",
    ],
  },

  // ==========================================
  // TRUST BADGES
  // ==========================================
  trustBadges: [
    { icon: "star", text: "5.0 Star Rated" },
    { icon: "shield", text: "Licensed & Insured" },
    { icon: "clock", text: "Always On Time" },
    { icon: "check", text: "Quality Guaranteed" },
  ],

  // ==========================================
  // SERVICES
  // ==========================================
  services: {
    title: "Our Services",
    subtitle: "Professional plumbing services for Doral and Miami-Dade County homes and businesses",
    viewAllText: "View All Services",
    viewAllLink: "services.html",
    learnMoreText: "Learn More",
    items: [
      {
        id: "fixture-installation",
        title: "Fixture Installation",
        shortDesc: "Kitchen faucets, bathroom sinks, toilets, and wet bar setups — professionally installed and leak-free.",
        fullDesc: "TickTock Plumbing installs all types of plumbing fixtures with precision and care. From modern kitchen faucets and undermount sinks to bathroom vanities and wet bar setups, we handle installations for both residential and commercial properties. Every fixture is connected properly with no leaks — guaranteed.",
        icon: "droplet",
        image: "/assets/clients/active/Kitchen-Sink-Installation-Wide-Angle.webp",
        features: [
          "Kitchen & Bar Sinks",
          "Bathroom Vanities",
          "Faucet Installation",
          "Toilet Installation",
        ],
      },
      {
        id: "bathroom-plumbing",
        title: "Bathroom Plumbing",
        shortDesc: "Complete bathroom plumbing — vanities, showers, toilets, and supply lines done right.",
        fullDesc: "Whether you're remodeling a bathroom or fixing a persistent leak, our team handles all bathroom plumbing needs. We install vanities with proper drain and supply connections, set toilets, connect showers, and ensure everything meets Florida plumbing code. From luxury condo bathrooms to standard residential work.",
        icon: "tool",
        image: "/assets/clients/active/2025-11-04.webp",
        features: [
          "Vanity Installation",
          "Shower & Tub Plumbing",
          "Toilet Setting",
          "Supply Line Connections",
        ],
      },
      {
        id: "drain-cleaning",
        title: "Drain Cleaning",
        shortDesc: "Clogged drains cleared fast with professional equipment — kitchens, bathrooms, and main lines.",
        fullDesc: "Slow or clogged drains? TickTock Plumbing responds quickly with professional drain cleaning equipment. We clear blockages in kitchen sinks, bathroom drains, floor drains, and main sewer lines. Our team diagnoses the root cause and fixes it right so the problem doesn't come back.",
        icon: "wrench",
        image: "/assets/clients/active/unnamed.webp",
        features: [
          "Kitchen & Bath Drains",
          "Main Sewer Lines",
          "Professional Equipment",
          "Root Cause Diagnosis",
        ],
      },
      {
        id: "water-heater-service",
        title: "Water Heater Service",
        shortDesc: "Tank and tankless water heater installation, repair, and replacement — fast and reliable.",
        fullDesc: "We install and repair both traditional tank and tankless water heaters. Our team works with Titan, Rheem, A.O. Smith, and other trusted brands. Every installation includes proper copper or CPVC piping, shut-off valves, and code-compliant connections.",
        icon: "fire",
        image: "/assets/clients/active/image1.webp",
        features: [
          "Tank & Tankless Install",
          "Titan, Rheem & More",
          "Copper Piping",
          "Code-Compliant Work",
        ],
      },
      {
        id: "pipe-repair",
        title: "Pipe Repair & Repiping",
        shortDesc: "Leaking, corroded, or broken pipes repaired or replaced with quality materials.",
        fullDesc: "From small leak repairs to whole-house repiping, TickTock Plumbing fixes pipe problems fast. We work with copper, CPVC, and PEX piping to ensure lasting results. Our team handles supply lines, drain lines, and everything in between — all up to Florida building code.",
        icon: "wrench",
        image: "/assets/clients/active/2025-11-04 (2).webp",
        features: [
          "Leak Detection & Repair",
          "Copper & PEX Repiping",
          "Supply & Drain Lines",
          "Code Compliant",
        ],
      },
      {
        id: "garbage-disposal-installation",
        title: "Garbage Disposal Installation",
        shortDesc: "New garbage disposal installs and replacements — quick, clean, and properly wired.",
        fullDesc: "We install and replace garbage disposals for kitchens of all sizes. Our installations include proper electrical connections, drain fittings, and dishwasher connections where needed. We work with all major brands and can recommend the right unit for your household.",
        icon: "settings",
        image: "/assets/clients/active/FullSizeRender (2).webp",
        features: [
          "New Installations",
          "Replacements & Upgrades",
          "Electrical Connections",
          "All Major Brands",
        ],
      },
      {
        id: "shower-installation",
        title: "Shower Installation",
        shortDesc: "Shower valves, rain heads, hand showers, and complete shower plumbing installed to perfection.",
        fullDesc: "TickTock Plumbing installs all types of shower fixtures — from single-handle valves to multi-function rain head and hand shower systems. We work with premium brands and ensure proper pressure balancing, waterproof connections, and code-compliant rough-in for new and existing showers.",
        icon: "droplet",
        image: "/assets/clients/active/Shower-Installation-Shower-Handle-Shower-Head.webp",
        features: [
          "Shower Valve Install",
          "Rain Head Systems",
          "Hand Shower Setup",
          "Pressure Balancing",
        ],
      },
      {
        id: "emergency-plumbing",
        title: "Emergency Plumbing",
        shortDesc: "Plumbing emergencies don't wait — and neither do we. Call now for 24/7 service.",
        fullDesc: "Burst pipe? Major leak? Sewer backup? TickTock Plumbing responds 24/7 to plumbing emergencies throughout Miami-Dade County. Our team arrives with fully stocked vehicles, ready to diagnose, contain, and fix the problem fast so you can get back to normal.",
        icon: "clock",
        image: "/assets/clients/active/FullSizeRender (3).webp",
        features: [
          "24/7 Response",
          "Burst Pipe Repair",
          "Leak Containment",
          "Fully Stocked Trucks",
        ],
      },
    ],
  },

  // ==========================================
  // PROCESS / HOW IT WORKS
  // ==========================================
  process: {
    label: "How It Works",
    title: "Simple & Easy Process",
    steps: [
      {
        number: "1",
        title: "Call or Text Us",
        desc: "Tell us about your plumbing issue. We'll ask a few questions and get a technician scheduled — often the same day.",
      },
      {
        number: "2",
        title: "We Show Up On Time",
        desc: "Our licensed plumber arrives when promised, diagnoses the problem, and gives you a clear upfront price — no surprises.",
      },
      {
        number: "3",
        title: "Problem Solved",
        desc: "We fix it right the first time, clean up after ourselves, and make sure you're 100% satisfied before we leave.",
      },
    ],
  },

  // ==========================================
  // WHY CHOOSE US
  // ==========================================
  whyUs: {
    title: "Why Miami-Dade Trusts TickTock Plumbing",
    subtitle: "Excellent service, fair pricing, and always on time.",
    image: null,
    items: [
      {
        icon: "star",
        title: "Perfect 5.0 Rating",
        description: "18 five-star reviews on Google. Our customers love our reliable service, honest pricing, and quality workmanship.",
      },
      {
        icon: "clock",
        title: "Always On Time",
        description: "It's in our name — we show up when we say we will. Responsible with timing, every single time.",
      },
      {
        icon: "users",
        title: "Full Professional Team",
        description: "Not a one-man operation. We have a full crew of licensed plumbers with fully equipped service vehicles ready to go.",
      },
      {
        icon: "shield",
        title: "24/7 Availability",
        description: "Plumbing problems don't follow a 9-to-5 schedule. Neither do we. Call any time, day or night.",
      },
    ],
  },

  // ==========================================
  // OUR WORK / GALLERY
  // ==========================================
  ourWork: {
    label: "Our Work",
    title: "Recent Projects",
    subtitle: "See the quality and professionalism we bring to every plumbing job.",
  },

  // ==========================================
  // STATISTICS
  // ==========================================
  stats: [
    { value: "18+", label: "5-Star Reviews" },
    { value: "5.0", label: "Google Rating" },
    { value: "24/7", label: "Availability" },
    { value: "10+", label: "Team Members" },
  ],

  // ==========================================
  // REVIEWS
  // ==========================================
  reviews: {
    title: "What Our Customers Say",
    subtitle: "Real reviews from real customers",
    google: {
      enabled: true,
      rating: 5.0,
      reviewCount: 18,
      url: "",
    },
    items: [
      {
        text: "Excellent service and price, very responsible with the timing scheduled. TickTock lives up to their name — on time and professional every single visit.",
        author: "Google Reviewer",
        location: "Doral, FL",
        rating: 5,
        avatar: null,
      },
      {
        text: "They installed a new kitchen faucet and garbage disposal for us. Clean work, fair price, and the plumber explained everything. Will definitely use them again.",
        author: "Google Reviewer",
        location: "Miami, FL",
        rating: 5,
        avatar: null,
      },
      {
        text: "Called them for an emergency leak on a Sunday and they showed up within the hour. Fixed it fast and didn't overcharge for the weekend call. Highly recommend.",
        author: "Google Reviewer",
        location: "Hialeah, FL",
        rating: 5,
        avatar: null,
      },
    ],
  },

  // ==========================================
  // CTA SECTION
  // ==========================================
  cta: {
    title: "Need a Plumber Right Now?",
    subtitle: "Day or night, TickTock Plumbing is ready. Call for a free estimate or 24/7 emergency service.",
    buttonText: "Get a Free Estimate",
    buttonLink: "contact.html",
    showPhone: true,
  },

  // ==========================================
  // FAQ
  // ==========================================
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Got questions? We've got answers.",
    items: [
      {
        question: "What areas do you serve?",
        answer: "We serve all of Miami-Dade County including Doral, Miami, Hialeah, Miami Lakes, Sweetwater, Miami Springs, Medley, Kendall, and surrounding areas.",
      },
      {
        question: "Are you available 24/7?",
        answer: "Yes. TickTock Plumbing Services is available 24 hours a day, 7 days a week for emergency plumbing and scheduled appointments.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes. TickTock Plumbing Services is a fully licensed and insured plumbing company in the state of Florida.",
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes. We provide free estimates for most plumbing work. Call us at (305) 766-5526 or fill out our contact form to get started.",
      },
      {
        question: "Do you handle both residential and commercial plumbing?",
        answer: "Yes. Our team handles all types of residential and commercial plumbing — from condo fixture installs to commercial build-outs and everything in between.",
      },
      {
        question: "How fast can you respond to emergencies?",
        answer: "We respond as quickly as possible — often within the hour for emergencies in the Doral and Miami area. Call (305) 766-5526 any time.",
      },
    ],
  },

  // ==========================================
  // FOOTER
  // ==========================================
  footer: {
    description: "Doral's trusted 24/7 plumber. Fixture installation, drain cleaning, water heaters, pipe repair & more. Serving Doral and all of Miami-Dade County.",
    copyrightYear: new Date().getFullYear(),
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { label: "Home", href: "index.html" },
      { label: "Our Work", href: "our-work.html" },
      { label: "Contact", href: "contact.html" },
    ],
    contactTitle: "Contact Us",
    socialTitle: "Follow Us",
    socialLinks: [
      { platform: "facebook", url: "", icon: "facebook" },
      { platform: "instagram", url: "", icon: "instagram" },
      { platform: "google", url: "", icon: "google" },
    ],
  },

  // ==========================================
  // ABOUT PAGE
  // ==========================================
  about: {
    title: "About TickTock Plumbing",
    subtitle: "24/7 plumbing for Miami-Dade County",
    story: {
      title: "Our Story",
      image: null,
      paragraphs: [
        "TickTock Plumbing Services is a full-service plumbing company based in Doral, serving all of Miami-Dade County. We specialize in fixture installation, bathroom and kitchen plumbing, drain cleaning, water heater service, and emergency plumbing — available 24 hours a day, 7 days a week.",
        "Our name says it all — we believe in being on time, every time. With a full team of licensed plumbers and a fleet of fully equipped service vehicles, we have the manpower and resources to handle any plumbing job, big or small.",
        "With a perfect 5.0-star rating on Google and 18+ reviews, our customers trust us for excellent service, fair pricing, and the kind of reliability that's hard to find. When you call TickTock, you can count on us.",
      ],
    },
    values: {
      title: "Why We're Different",
      subtitle: "What sets TickTock Plumbing apart",
      items: [
        {
          icon: "clock",
          title: "On Time, Every Time",
          description: "We built our name on punctuality. When we give you a time, we're there — no excuses, no waiting around.",
        },
        {
          icon: "users",
          title: "Full Team, Full Fleet",
          description: "A real plumbing company with 10+ team members and fully stocked service vehicles — not a one-man side hustle.",
        },
        {
          icon: "star",
          title: "5-Star Service",
          description: "18 consecutive 5-star reviews. We earn our reputation one job at a time with honest work and fair pricing.",
        },
      ],
    },
    team: {
      title: "Meet Our Team",
      subtitle: "The professionals behind TickTock Plumbing",
      showTeam: false,
      members: [],
    },
  },

  // ==========================================
  // CONTACT PAGE
  // ==========================================
  contact: {
    title: "Contact Us",
    subtitle: "Need a plumber? Call anytime — we're available 24/7.",
    showMap: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57000!2d-80.35!3d25.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7d2a3e8d8f3%3A0x7e8e4f3b2c3d4e5f!2sDoral%2C%20FL!5e0!3m2!1sen!2sus",
    infoTitle: "Get In Touch",
    infoSubtitle: "Have a plumbing issue? We're ready to help — any time, day or night.",
    hoursTitle: "Business Hours",
    hours: [
      { days: "Monday - Sunday", time: "Open 24 Hours" },
    ],
    emergencyNote: "Emergency? Call (305) 766-5526 right now",
    formTitle: "Request an Estimate",
    formSubtitle: "We'll get back to you as soon as possible",
    formFields: [
      { name: "name", type: "text", placeholder: "Your Name", required: true, halfWidth: true },
      { name: "phone", type: "tel", placeholder: "Phone Number", required: true, halfWidth: true },
      { name: "email", type: "email", placeholder: "Email Address", required: false, halfWidth: false },
      { name: "address", type: "text", placeholder: "Service Address", required: false, halfWidth: false },
      { name: "message", type: "textarea", placeholder: "Tell us about your plumbing issue", required: false, halfWidth: false, rows: 4 },
    ],
    formSubmitText: "Request Estimate",
  },

  // ==========================================
  // SERVICE AREA PAGE
  // ==========================================
  serviceArea: {
    title: "Areas We Serve",
    subtitle: "24/7 plumbing services throughout Miami-Dade County",
    description: "We provide professional plumbing services throughout Miami-Dade County and nearby areas. If you don't see your area listed, give us a call — we may still be able to help!",
    showMap: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57000!2d-80.35!3d25.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b7d2a3e8d8f3%3A0x7e8e4f3b2c3d4e5f!2sDoral%2C%20FL!5e0!3m2!1sen!2sus",
    primaryAreas: {
      title: "Primary Service Areas",
      subtitle: "Fast response typically available",
      areas: [
        "Doral",
        "Miami",
        "Hialeah",
        "Miami Lakes",
      ],
    },
    secondaryAreas: {
      title: "Extended Service Areas",
      subtitle: "Service available throughout Miami-Dade County",
      areas: [
        "Sweetwater",
        "Miami Springs",
        "Medley",
        "Kendall",
      ],
    },
    ctaTitle: "Not Sure If We Service Your Area?",
    ctaSubtitle: "Give us a call and we'll let you know!",
  },

  // ==========================================
  // INDIVIDUAL SERVICE AREA PAGES
  // ==========================================
  serviceAreas: [
    {
      id: "doral",
      name: "Doral",
      slug: "doral",
      headline: "24/7 Plumber in Doral, FL",
      description: "TickTock Plumbing serves Doral with professional fixture installation, drain cleaning, water heater service, and 24/7 emergency plumbing.",
      features: [
        "Free estimates",
        "24/7 emergency service",
        "Licensed & insured",
        "On-time guarantee",
      ],
      neighborhoods: [
        "Downtown Doral",
        "Doral Isles",
        "Costa Del Sol",
        "Midtown Doral",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Doral,+FL&output=embed",
    },
    {
      id: "miami",
      name: "Miami",
      slug: "miami",
      headline: "24/7 Plumber in Miami, FL",
      description: "Professional plumbing services in Miami. Fixture installs, drain cleaning, water heaters, pipe repair, and emergency plumbing.",
      features: [
        "Free estimates",
        "24/7 availability",
        "Licensed & insured",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Little Havana",
        "Flagami",
        "Coral Way",
        "Westchester",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Miami,+FL&output=embed",
    },
    {
      id: "hialeah",
      name: "Hialeah",
      slug: "hialeah",
      headline: "24/7 Plumber in Hialeah, FL",
      description: "Reliable plumbing services in Hialeah for residential and commercial properties. Available 24/7.",
      features: [
        "Free estimates",
        "Same-day service",
        "Licensed & insured",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Palm Springs North",
        "Hialeah Gardens",
        "West Hialeah",
        "Opa-locka",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Hialeah,+FL&output=embed",
    },
    {
      id: "miami-lakes",
      name: "Miami Lakes",
      slug: "miami-lakes",
      headline: "24/7 Plumber in Miami Lakes, FL",
      description: "Trusted plumbing services in Miami Lakes. Fixture installation, drain cleaning, and emergency plumbing — on time, every time.",
      features: [
        "Free estimates",
        "24/7 availability",
        "Fast response",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Miami Lakes",
        "Royal Oaks",
        "Lake Patricia",
        "Miami Lakes East",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Miami+Lakes,+FL&output=embed",
    },
    {
      id: "sweetwater",
      name: "Sweetwater",
      slug: "sweetwater",
      headline: "24/7 Plumber in Sweetwater, FL",
      description: "TickTock Plumbing serves Sweetwater with professional plumbing — fixtures, drains, water heaters, and emergency service.",
      features: [
        "Free estimates",
        "Residential & commercial",
        "On-time service",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Sweetwater",
        "Fontainebleau",
        "Tamiami",
        "FIU Area",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Sweetwater,+FL&output=embed",
    },
    {
      id: "miami-springs",
      name: "Miami Springs",
      slug: "miami-springs",
      headline: "24/7 Plumber in Miami Springs, FL",
      description: "Professional plumbing for Miami Springs homes and businesses. Fixture installs, pipe repair, and emergency plumbing.",
      features: [
        "Free estimates",
        "24/7 availability",
        "Licensed & insured",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Miami Springs",
        "Virginia Gardens",
        "Medley",
        "Country Club",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Miami+Springs,+FL&output=embed",
    },
    {
      id: "medley",
      name: "Medley",
      slug: "medley",
      headline: "24/7 Plumber in Medley, FL",
      description: "Commercial and residential plumbing in Medley. Available 24/7 for all your plumbing needs.",
      features: [
        "Free estimates",
        "Commercial service",
        "Fast response",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Medley",
        "Palm Springs",
        "Hialeah Gardens",
        "Doral West",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Medley,+FL&output=embed",
    },
    {
      id: "kendall",
      name: "Kendall",
      slug: "kendall",
      headline: "24/7 Plumber in Kendall, FL",
      description: "Reliable plumbing services in Kendall. Fixture installs, drain cleaning, water heaters, and emergency plumbing.",
      features: [
        "Free estimates",
        "24/7 availability",
        "Quality workmanship",
        "Satisfaction guaranteed",
      ],
      neighborhoods: [
        "Kendall West",
        "The Hammocks",
        "Country Walk",
        "Sunset",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Kendall,+FL&output=embed",
    },
  ],

  // ==========================================
  // UI TEXT
  // ==========================================
  ui: {
    callNow: "Call Now",
    callNowShort: "Call Now",
    freeQuoteShort: "Free Estimate",
    phoneLabel: "Call Now - Free Estimate",
    getQuote: "Get Estimate",
    learnMore: "Learn More",
    viewAll: "View All",
    readMore: "Read More",
    submitForm: "Submit",
    loading: "Loading...",
    success: "Success!",
    error: "Something went wrong. Please try again.",
    required: "Required",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    emergencyService: "24/7 Emergency Plumbing",
    freeEstimate: "Free Estimate",
    satisfactionGuarantee: "Satisfaction Guaranteed",
  },

  // ==========================================
  // TRACKING / ANALYTICS
  // ==========================================
  tracking: {
    gtm: "",
    ga4: "",
    fbPixel: "",
  },
};

// Make CONFIG globally available
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
