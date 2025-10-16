/**
 * Your Smile Clinic - Image Configuration
 * Central configuration for all image assets used throughout the website
 */

// Base URL for Your Smile Clinic website
export const IMAGE_BASE_URL = 'https://www.yoursmileclinic.co.uk';

// Image categories
export const IMAGES = {
  // Logo images
  logo: {
    main: `${IMAGE_BASE_URL}/images/logo.png`,
    white: `${IMAGE_BASE_URL}/images/logo-white.png`,
    icon: `${IMAGE_BASE_URL}/images/logo-icon.png`,
  },

  // Hero section images
  hero: {
    main: `${IMAGE_BASE_URL}/images/hero-main.jpg`,
    dental: `${IMAGE_BASE_URL}/images/hero-dental.jpg`,
    smile: `${IMAGE_BASE_URL}/images/hero-smile.jpg`,
  },

  // Service category images
  services: {
    generalDentistry: `${IMAGE_BASE_URL}/images/general-dentistry.jpg`,
    cosmeticDentistry: `${IMAGE_BASE_URL}/images/cosmetic-dentistry.jpg`,
    dentalImplants: `${IMAGE_BASE_URL}/images/dental-implants.jpg`,
    orthodontics: `${IMAGE_BASE_URL}/images/orthodontics.jpg`,
    hygiene: `${IMAGE_BASE_URL}/images/hygiene.jpg`,
    emergency: `${IMAGE_BASE_URL}/images/emergency.jpg`,
  },

  // Team photos
  team: {
    dentist1: `${IMAGE_BASE_URL}/images/team/dentist-1.jpg`,
    dentist2: `${IMAGE_BASE_URL}/images/team/dentist-2.jpg`,
    hygienist: `${IMAGE_BASE_URL}/images/team/hygienist.jpg`,
  },

  // Testimonial/Before-After images
  gallery: {
    beforeAfter1: `${IMAGE_BASE_URL}/images/gallery/before-after-1.jpg`,
    beforeAfter2: `${IMAGE_BASE_URL}/images/gallery/before-after-2.jpg`,
    beforeAfter3: `${IMAGE_BASE_URL}/images/gallery/before-after-3.jpg`,
  },

  // Icon/Badge images
  badges: {
    gdc: `${IMAGE_BASE_URL}/images/badges/gdc.png`,
    cqc: `${IMAGE_BASE_URL}/images/badges/cqc.png`,
    bda: `${IMAGE_BASE_URL}/images/badges/bda.png`,
  },
} as const;

// Image presets for different use cases
export const IMAGE_PRESETS = {
  logo: {
    width: 200,
    height: 80,
    priority: true,
  },
  hero: {
    width: 1920,
    height: 800,
    priority: true,
    quality: 90,
  },
  serviceCard: {
    width: 400,
    height: 300,
    quality: 85,
  },
  teamPhoto: {
    width: 300,
    height: 300,
    quality: 85,
  },
  thumbnail: {
    width: 150,
    height: 150,
    quality: 80,
  },
  gallery: {
    width: 800,
    height: 600,
    quality: 90,
  },
} as const;

// Helper function to get optimized image URL
export function getOptimizedImageUrl(
  imageUrl: string,
  preset: keyof typeof IMAGE_PRESETS
): string {
  const { width, height, quality } = IMAGE_PRESETS[preset];
  return imageUrl;
}
