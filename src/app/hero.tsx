import { Button } from "@/components/ui/button"
import React from 'react'; // Import React

export default function HeroSection() {
  // Sponsors data moved inside the component function
  const sponsors = [
    {
      name: "Smart Interviews",
      logo: "/IMG/imgs/smart interviews.jpeg?height=60&width=120&text=Smart Interviews",
      alt: "Smart Interview Logo",
    },
    {
      name: "Being Zero",
      logo: "/IMG/imgs/being0.jpeg?height=60&width=120&text=Being Zero",
      alt: "Being Zero Logo",
    },
    {
      name: "Sripadha Group",
      logo: "/IMG/imgs/1744450777215.jpeg?height=60&width=140&text=Sripadha Group",
      alt: "Sripadha Group Logo",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-24 lg:py-40 overflow-hidden">
      {/* Background Decorative Elements */}
      {/* Using subtle, animated shapes for a "feel good" vibe */}
      <div className="absolute top-1/4 left-5 w-24 h-24 bg-blue-300 rounded-full opacity-15 animate-pulse-slow md:block hidden"></div>
      <div className="absolute bottom-1/4 right-5 w-36 h-36 bg-orange-300 rounded-full opacity-15 animate-pulse-slow delay-200 md:block hidden"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-200 rounded-full opacity-10 animate-pulse-slow delay-400 md:block hidden"></div>


      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            National Conference
            <span className="block text-blue-700 mt-3">on Next-Gen Technologies in AI Applications</span>
          </h1>

          {/* Conference Details */}
          <div className="text-xl lg:text-2xl text-slate-700 mb-10 space-y-3 font-light">
            <div className="font-semibold">September 11–12, 2025</div>
            <div>SNIST Hyderabad, India, and Online</div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            onClick={() => { /* Add navigation logic here, e.g., router.push('/registration') */ }}
          >
            Get Registration Details
          </Button>

          {/* Subtitle */}
          <p className="text-lg text-slate-600 mt-12 font-medium">
            A Global Forum to Advance Academic Research and Innovation
          </p>
        </div>

        {/* Collaborative Sponsors Section */}
        <div className="mt-24 py-12">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Our Collaborative Sponsors</h3>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Sponsors Grid */}
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/30">
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 border border-gray-200"
                >
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.alt}
                    className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out opacity-80 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
