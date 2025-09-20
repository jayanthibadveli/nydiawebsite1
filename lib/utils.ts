export type Banner = {
  title: string;          // small pill text
  mainTitle: string;      // BIG title
  subTitle: string;       // subtitle line
  footnote: string;       // line separated by pipes
};

export type Solution = {
  name: "Digital Core" | "Strategic Consulting" | "Talent Augmentation";
  tagline: string;        // e.g., “Reshaping business process and strategies”
  bullets: string[];      // the 4 items under each
};

export type AboutContent = {
  paragraphs: string[];   // the 3 about-us paragraphs
  collaborate: string;
  innovate: string;
  grow: string;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

export type SiteContent = {
  company: "Nydia Tech";
  banners: Banner[];
  solutions: Solution[];
  about: AboutContent;
  journey: string[];      // the 3 Journey paragraphs
  whyChooseUs: string[];  // the 4 numbered reasons
  whatWeDo: string[];     // the 5 bullet items
  howWeWork: string[];    // the 5 steps
  testimonials: Testimonial[];
  contactCta: string[];   // Partner with Nydia Tech Today + closing lines
  contact: { heading: string; sub: string; email: string };
};

export const siteContent: SiteContent = {
  company: "Nydia Tech",

  // === BANNERS (exact text) ===
  banners: [
    {
      title: "Your Digital Transformation Partner",
      mainTitle: "Digital Core",
      subTitle:
        "Accelerate your Digital Transformation journey with our offshore software development services, reducing costs and scale faster",
      footnote:
        "Application Development & Maintenance | Cloud Migration & Management | Data Analytics & Business Intelligence | Managed Services",
    },
    {
      title: "Empowering Your Success - Beyond Code, Strategies that Deliver",
      mainTitle: "Strategic Consulting",
      subTitle:
        "Your partner in Innovation: building your advantage in Digital World",
      footnote:
        "Digital Strategy & Technology Selection | Process Re-engineering & IT Modernization | Change Management & Security | Data Strategy & Performance Analytics",
    },
    {
      title:
        "Global Talent, Local Success - Offshore Hiring Made Seamless",
      mainTitle: "Talent Augmentation",
      subTitle:
        "Maximize efficiency and cost-effectiveness by leveraging skilled global talent for your software development needs",
      footnote:
        "Staff Augmentation | Project-Based Hiring | Dedicated Teams | Recruitment Process Outsourcing",
    },
  ],

  // === SOLUTIONS (sections with 4 bullets each) ===
  solutions: [
    {
      name: "Digital Core",
      tagline: "Reshaping business process and strategies",
      bullets: [
        "Application Development & Maintenance - Build, scale, and sustain applications with reliable end-to-end support",
        "Cloud Migration & Management - Seamlessly transition to the cloud with expert guidance and ongoing optimization",
        "Data Analytics & Business Intelligence - Turn data into actionable insights to drive smarter business decisions",
        "Managed Services - Proactive IT management to keep your operations running smoothly 24/7",
      ],
    },
    {
      name: "Strategic Consulting",
      tagline:
        "Helping companies implement digital transformation, driving innovation and competitiveness.",
      bullets: [
        "Process Reengineering & IT Modernization – Redesigning business processes for efficiency and upgrading legacy systems to modern, scalable solutions.",
        "Data Strategy & Performance Analytics – Optimizing data management for better decision-making and using analytics to measure progress and ROI on digital initiatives.",
      ],
    },
    {
      name: "Talent Augmentation",
      tagline:
        "Focus on core operations leveraging external expertise",
      bullets: [
        "Staff Augmentation - temporary or longterm support by skilled professional",
        "Project-Based Hiring: Full teams for specific projects, handling end-to-end execution",
        "Dedicated Teams - A complete, dedicated team working exclusively for the client",
        "Recruitment Process Outsourcing (RPO) - Managing hiring process for clients",
      ],
    },
  ],

  // === ABOUT ===
  about: {
    paragraphs: [
      "NydiaTech is more than just a software development firm, we pride ourselves on delivering exceptional offshore software consulting services that are tailored to meet the unique needs of your business.",
      "Leveraging our expert offshore resources we unlock the full potential of digital transformation by navigating the complexities of software development.",
      "With a focus on quality, transparency, and efficiency, we offer a seamless experience that not only optimizes performance but also significantly reduces costs.",
    ],
    collaborate:
      "We prioritize building strong, collaborative partnerships with our clients. Our team of experts, based in Hyderabad, India, works closely with you to understand your unique business needs and deliver tailored offshore software consulting services. With a focus on transparency and reliability, we ensure a seamless and efficient collaboration that aligns with your goals.",
    innovate:
      "We are committed to harnessing innovative solutions and cutting-edge technologies to drive your business forward. Our approach leverages the latest advancements to create customized software solutions that optimize performance, streamline processes, and address complex challenges with creativity and expertise.",
    grow:
      "Nydia Tech helps accelerate your team’s growth by providing talent augmentation through offshore resources. Our skilled experts seamlessly integrate with your team, enabling faster development timelines and reducing costs while maintaining high-quality results. We ensure your team is equipped to scale efficiently and achieve long-term success.",
  },

  // === Journey (About Us: Journey) ===
  journey: [
    "Nydia Tech leadership team brings a wealth of experience across the Banking, Telecom, and Retail industries, with a proven track record of managing large-scale projects and diverse teams across onshore and offshore locations. Their deep understanding of industry challenges and opportunities, combined with a talent for fostering collaboration, has earned them recognition for strategic thinking and operational excellence.",
    "Throughout their careers, the team identified recurring challenges, such as a lack of transparency and accountability in project execution, which hindered productivity, strained client relationships, and stifled innovation. Determined to address these issues, they founded Nydia Tech in Hyderabad, India, with a mission to set new standards of integrity, trust, and operational excellence in the IT sector.",
    "Today, Nydia Tech empowers businesses worldwide by delivering innovative, reliable solutions through a culture of collaboration and accountability. With a world-class talent pool from Hyderabad, we are committed to driving success and transforming the way technology services are delivered.",
  ],

  // === Why Choose Nydia Tech? ===
  whyChooseUs: [
    "Access Top Talent: Hyderabad, India is home to some of the brightest minds in software development. With a rich ecosystem of experienced engineers, developers, and tech specialists, we ensure that your projects are powered by the best in the industry.",
    "Cost-Effective Solutions: Offshore development with Nydia Tech allows you to reduce costs without compromising quality, offering competitive pricing for premium services.",
    "Prioritize Your Expertise: Collaborating with us allows you to dedicate your energy to your primary business goals while we manage your software development requirements.",
    "Effortless Collaboration: With a globally oriented team, we ensure clear, consistent communication and seamless coordination, regardless of time zones.",
  ],

  // === What We Do ===
  whatWeDo: [
    "Custom Software Development: Tailored solutions designed to meet your unique business needs.",
    "Application Development: Cutting-edge applications that engage users and drive growth.",
    "Cloud Integration: Scalable and secure cloud solutions to modernize your operations.",
    "AI & Machine Learning Solutions: Leverage the latest in AI to stay ahead of the competition.",
    "Quality Assurance & Testing: Rigorous testing processes to ensure robust and reliable software.",
  ],

  // === How We Work ===
  howWeWork: [
    "Understanding Your Needs: We start by understanding your business challenges, goals, and vision to create a roadmap for success.",
    "Assembling the Right Team: Our agile development teams are curated based on your project requirements, ensuring the right expertise for every task.",
    "Agile Development: Our iterative approach to development ensures faster time-to-market, flexibility, and alignment with your expectations.",
    "Transparent Collaboration: From regular updates to milestone reviews, we keep you in the loop throughout the project lifecycle.",
    "Delivering Excellence: Our commitment doesn’t end at delivery. We provide ongoing support and maintenance to ensure your success.",
  ],

  // === Testimonials (use as placeholders) ===
  testimonials: [
    {
      name: "Imran Mian",
      title: "VP Enterprise AI, mobileLIVE Inc",
      quote:
        "Partnering with Nydia Tech for offshore talent augmentation has been a game-changer for our team. By leveraging their skilled resources in India, we were able to scale our development efforts quickly and efficiently, significantly reducing costs without compromising on quality. Their seamless integration with our team allowed us to meet tight deadlines and accelerate project timelines. Nydia Tech’s expertise and reliability have made them an invaluable partner in our growth",
    },
    {
      name: "Jahan Ali",
      title: "CEO, HachiAI",
      quote:
        "Working with Nydia Tech on the rebranding of our product, HachAI, was a pivotal moment for our company. Their team not only understood our vision but also helped craft a compelling narrative and design that resonated with our target audience. The rebranding story they created played a key role in elevating HachAI’s market presence, driving significant sales, and fueling our overall growth. Nydia Tech’s creativity, strategic insights, and commitment to excellence have been instrumental in our success",
    },
  ],

  // === Closing CTA content to show above the contact form ===
  contactCta: [
    "Partner with Nydia Tech Today",
    "Whether you’re a startup looking to build your first product or an enterprise seeking to scale, Nydia Tech is here to turn your vision into reality. With a passion for technology and a dedication to quality, we’re the offshore development partner you can trust.",
    "Let’s build the future together.",
    "Interested in learning more? Contact Us today to discuss how we can help you achieve your goals!",
  ],

  // Form heading/sub
  contact: {
    heading: "Contact Us",
    sub: "Tell us about your needs — we’ll reply within 24 hours.",
    email: "hr@nydia.tech",
  },
} as const;

export type Plan = { name: string; priceMonthly: number; badge?: string; features: string[] };
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
