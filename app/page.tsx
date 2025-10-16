import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { services } from "@/lib/services";
import { Phone, Calendar, Award, Users, Clock, Shield } from "lucide-react";

export default function Home() {
  const featuredServices = services.slice(0, 6);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      text: "The team at Your Smile Clinic transformed my smile beyond my expectations. Professional, caring, and absolutely worth it!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Best dental experience I've ever had. They made me feel comfortable throughout the entire implant process.",
      rating: 5,
    },
    {
      name: "Emma Johnson",
      text: "Emergency dental care when I needed it most. Fast, professional service that saved my tooth!",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Highly qualified dentists with years of experience",
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise treatments",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Extended hours and weekend appointments available",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Comprehensive care for patients of all ages",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-burgundy to-brand-slate text-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Your Perfect Smile Starts Here
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Experience exceptional dental care with a personal touch. From
                routine check-ups to complete smile makeovers, we&apos;re here to
                help you achieve the healthy, beautiful smile you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-burgundy hover:bg-gray-100"
                >
                  <Link href="/contact" className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-96 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-8xl">😁</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="text-center p-6 bg-white rounded-lg shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-brand-burgundy/10 rounded-full">
                    <Icon className="h-8 w-8 text-brand-burgundy" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-brand-slate">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-slate mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care tailored to your needs. From preventive
              care to advanced treatments, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
                featured={index < 2}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-brand-burgundy hover:bg-brand-burgundy/90"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-slate mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don&apos;t just take our word for it - hear from our satisfied patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-burgundy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards a
            healthier, more confident smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-burgundy hover:bg-gray-100"
            >
              <Link href="/contact" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call (02) 1234 5678
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Book Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
