"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, Bed, MessageCircle, Phone } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Hospitality"
          description="Discover unparalleled comfort and elegance at Grand Vista Hotel, where every detail is crafted for your perfect stay."
          tag="5-Star Hotel"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/34428372/pexels-photo-34428372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Vista Hotel luxury exterior"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "For over three decades, Grand Vista Hotel has been the epitome of luxury hospitality, welcoming distinguished guests from around the world.",
            "Our commitment to exceptional service and attention to detail has earned us recognition as one of the finest hotels in the region."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Premium Accommodations"
          description="Choose from our selection of beautifully appointed rooms and suites, each designed for ultimate comfort and luxury."
          tag="Rooms & Suites"
          tagIcon={Bed}
          features={[
            {
              title: "Deluxe Suite",
              description: "Spacious suite with separate living area, premium amenities, and city views",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe hotel suite interior",
              button: {
                text: "Book Suite",
                href: "contact"
              }
            },
            {
              title: "Ocean View Room",
              description: "Elegant room featuring panoramic ocean views and private balcony",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ocean view hotel room",
              button: {
                text: "Reserve Now",
                href: "contact"
              }
            },
            {
              title: "Executive Suite",
              description: "Luxurious suite with executive lounge access and personalized concierge service",
              imageSrc: "https://images.pexels.com/photos/8089070/pexels-photo-8089070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive hotel suite",
              button: {
                text: "Book Executive",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Reviews"
          description="Hear what our valued guests have to say about their exceptional experiences"
          tag="5-Star Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson",
              content: "Exceptional service and luxurious accommodations. The attention to detail was remarkable."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Consultant",
              company: "Elite Travel Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen",
              content: "Outstanding hospitality and world-class amenities. Truly a five-star experience."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              company: "Luxury Events Co",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez",
              content: "Perfect venue for our corporate events. The staff went above and beyond expectations."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Corporate Director",
              company: "International Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim",
              content: "Impeccable service and stunning facilities. We'll definitely be returning soon."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Phone}
          title="Book Your Perfect Stay"
          description="Experience the ultimate in luxury hospitality. Contact our reservations team to plan your unforgettable visit."
          imageSrc="https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge at reception desk"
          inputPlaceholder="Your email address"
          buttonText="Request Booking"
          termsText="By submitting your information, you agree to our privacy policy and booking terms."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "feature"
                },
                {
                  label: "Amenities",
                  href: "about"
                },
                {
                  label: "Dining",
                  href: "about"
                },
                {
                  label: "Spa & Wellness",
                  href: "about"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Concierge",
                  href: "contact"
                },
                {
                  label: "Events",
                  href: "contact"
                },
                {
                  label: "Business Center",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Book Now",
                  href: "contact"
                },
                {
                  label: "Guest Services",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Vista Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}