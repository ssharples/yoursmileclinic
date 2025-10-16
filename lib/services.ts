export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    description: "Comprehensive oral health care for the whole family",
    fullDescription:
      "Our general dentistry services provide comprehensive oral health care for patients of all ages. From routine check-ups and cleanings to fillings and preventive care, we ensure your smile stays healthy and bright. Our experienced team uses the latest techniques and technology to deliver comfortable, effective dental care tailored to your individual needs.",
    image: "/images/general-dentistry.jpg",
    icon: "🦷",
    features: [
      "Routine check-ups and cleanings",
      "Dental fillings and restorations",
      "Preventive care and education",
      "Oral health assessments",
      "Digital X-rays",
    ],
    benefits: [
      "Maintain optimal oral health",
      "Early detection of dental issues",
      "Professional cleaning and care",
      "Personalized treatment plans",
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with advanced aesthetic treatments",
    fullDescription:
      "Cosmetic dentistry at Your Smile Clinic combines art and science to create beautiful, natural-looking smiles. Whether you're looking for teeth whitening, veneers, or a complete smile makeover, our skilled cosmetic dentists will work with you to achieve the smile you've always wanted. We use cutting-edge technology and premium materials to deliver stunning, long-lasting results.",
    image: "/images/cosmetic-dentistry.jpg",
    icon: "✨",
    features: [
      "Professional teeth whitening",
      "Porcelain veneers",
      "Smile makeovers",
      "Bonding and contouring",
      "Gum reshaping",
    ],
    benefits: [
      "Enhanced confidence and self-esteem",
      "Natural-looking results",
      "Minimally invasive procedures",
      "Long-lasting smile transformation",
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description: "Permanent solution for missing teeth",
    fullDescription:
      "Dental implants are the gold standard for replacing missing teeth. Our experienced implant specialists use advanced surgical techniques and high-quality materials to provide durable, natural-looking tooth replacements. Dental implants not only restore your smile but also preserve jawbone health and improve overall oral function. Experience the confidence of a complete, permanent smile.",
    image: "/images/dental-implants.jpg",
    icon: "🔩",
    features: [
      "Single tooth replacement",
      "Multiple tooth implants",
      "Full arch restoration",
      "Bone grafting when needed",
      "3D imaging and planning",
    ],
    benefits: [
      "Permanent tooth replacement",
      "Natural look and feel",
      "Preserves jawbone health",
      "No damage to adjacent teeth",
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    description: "Straighten your teeth with modern orthodontic solutions",
    fullDescription:
      "Our orthodontic services offer modern solutions to straighten teeth and correct bite issues. From traditional braces to clear aligners like Invisalign, we provide personalized treatment plans to achieve optimal alignment and a beautiful smile. Our orthodontists combine expertise with the latest technology to make your orthodontic journey comfortable and effective.",
    image: "/images/orthodontics.jpg",
    icon: "😁",
    features: [
      "Traditional metal braces",
      "Clear ceramic braces",
      "Invisalign clear aligners",
      "Retainers and maintenance",
      "Early intervention treatment",
    ],
    benefits: [
      "Improved bite and alignment",
      "Enhanced facial aesthetics",
      "Better oral health",
      "Discreet treatment options available",
    ],
  },
  {
    slug: "emergency-dental-care",
    title: "Emergency Dental Care",
    description: "Immediate care when you need it most",
    fullDescription:
      "Dental emergencies can happen at any time, and we're here to help. Our emergency dental services provide prompt, professional care for urgent dental issues including severe pain, broken teeth, infections, and trauma. We prioritize emergency appointments to ensure you receive the immediate attention you need to relieve pain and protect your oral health.",
    image: "/images/emergency-care.jpg",
    icon: "🚨",
    features: [
      "Same-day emergency appointments",
      "Pain relief treatment",
      "Tooth extractions",
      "Emergency repairs",
      "Infection management",
    ],
    benefits: [
      "Fast pain relief",
      "Prevent further damage",
      "Flexible scheduling",
      "Experienced emergency care",
    ],
  },
  {
    slug: "preventive-care",
    title: "Preventive Care",
    description: "Keep your smile healthy with regular preventive treatments",
    fullDescription:
      "Prevention is the foundation of good oral health. Our preventive care services include regular check-ups, professional cleanings, fluoride treatments, and dental sealants. We educate patients on proper oral hygiene techniques and work with you to develop personalized prevention strategies. By catching potential issues early, we help you maintain a healthy smile for life.",
    image: "/images/preventive-care.jpg",
    icon: "🛡️",
    features: [
      "Regular dental check-ups",
      "Professional teeth cleaning",
      "Fluoride treatments",
      "Dental sealants",
      "Oral cancer screenings",
    ],
    benefits: [
      "Early problem detection",
      "Reduced treatment costs",
      "Maintain optimal oral health",
      "Prevent cavities and gum disease",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
