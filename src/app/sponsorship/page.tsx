"use client"

import ConferenceLayout from "@/components/ui/layout/conf-layout"
import { Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import {
  Users,
  Target,
  Globe,
  Award,
  Building,
  Mail,
  Phone,
  
  TrendingUp,
  Network,
  Handshake,
  Eye,
 
  
  Zap,
 
  MapPin,
  Calendar,

  Gift,
  Heart,
} from "lucide-react"

export default function SponsorsPage() {
  const currentSponsors = [
    {
      name: "Smart Interviews",
      logo: "/IMG/imgs/smart interviews.jpeg",
      alt: "Smart Interview Logo",
    },
    {
      name: "Being Zero",
      logo: "/IMG/imgs/being0.jpeg",
      alt: "Being Zero Logo",
    },
    {
      name: "Sripadha Group",
      logo: "/IMG/imgs/1744450777215.jpeg",
      alt: "Sripadha Group Logo",
    },
  ]

  const whySponsorReasons = [
    {
      icon: Target,
      title: "Targeted Audience",
      description:
        "Connect with 500+ researchers, academics, and industry professionals in AI and emerging technologies",
      color: "from-[#1D4ED8] to-[#1D4ED8]/80",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Showcase your brand to an international audience with both in-person and virtual attendees",
      color: "from-[#F97316] to-[#F97316]/80",
    },
    {
      icon: Network,
      title: "Networking Opportunities",
      description: "Build valuable connections with leading researchers, startups, and established companies",
      color: "from-purple-600 to-purple-600/80",
    },
    {
      icon: TrendingUp,
      title: "Brand Visibility",
      description: "Gain prominent exposure through conference materials, website, and social media channels",
      color: "from-green-600 to-green-600/80",
    },
    {
      icon: Award,
      title: "Thought Leadership",
      description: "Position your organization as an industry leader in AI and next-generation technologies",
      color: "from-teal-600 to-teal-600/80",
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Explore collaboration opportunities with academic institutions and research organizations",
      color: "from-indigo-600 to-indigo-600/80",
    },
  ]

  

  
  const stallFeatures = [
    {
      feature: "Prime Location",
      description: "High-traffic areas near registration and main conference halls",
      icon: MapPin,
    },
    {
      feature: "Setup Support",
      description: "Technical support for booth setup and electrical connections",
      icon: Zap,
    },
    {
      feature: "Promotional Materials",
      description: "Space for banners, brochures, and interactive demonstrations",
      icon: Gift,
    },
    {
      feature: "Networking Access",
      description: "Direct access to conference attendees during breaks and meals",
      icon: Users,
    },
  ]

  return (
    <ConferenceLayout
      title="Our Sponsors & Partners"
      subtitle="Celebrating our valued sponsors and inviting new partners to join NCNTAIA 2025"
    >
      <div className="max-w-7xl mx-auto space-y-20 py-12">
        {/* Current Sponsors Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-6 flex items-center justify-center gap-3">
              <Heart className="w-10 h-10 text-red-500 animate-pulse" />
              Our Valued Sponsors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              We are grateful to our sponsors who make NCNTAIA 2025 possible through their generous support
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
                {currentSponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="text-center">
                      <div className="relative mb-4">
                        
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#1D4ED8]/20 to-[#F97316]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                      </div>
                      <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1D4ED8] transition-colors duration-300">
                        {sponsor.name}
                      </h3>
                      <Badge className="mt-2 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white border-0 px-3 py-1">
                        Official Sponsor
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-[#1D4ED8]/10 to-[#F97316]/10 rounded-2xl p-8 border border-[#1D4ED8]/20">
                  <p className="text-lg text-[#475569] font-medium mb-4">
                    Thank you to our sponsors for their continued support and partnership
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[#1D4ED8]">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="font-semibold">Proudly Sponsored</span>
                    <Heart className="w-5 h-5 text-red-500" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Become a Sponsor Hero Section */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-[#1D4ED8]/10 via-white to-[#F97316]/10 rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] rounded-2xl flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#1E293B]">Become a Sponsor</h1>
              </div>

              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Join our esteemed sponsors and partner with NCNTAIA 2025 to connect with innovative minds, showcase your
                solutions, and drive meaningful collaborations in AI and next-generation technologies.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-[#1D4ED8]" />
                    <span className="text-2xl font-bold text-[#1E293B]">500+</span>
                  </div>
                  <p className="text-[#475569] font-medium">Expected Attendees</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-[#F97316]" />
                    <span className="text-2xl font-bold text-[#1E293B]">2</span>
                  </div>
                  <p className="text-[#475569] font-medium">Conference Days</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-green-600" />
                    <span className="text-2xl font-bold text-[#1E293B]">Global</span>
                  </div>
                  <p className="text-[#475569] font-medium">Reach & Impact</p>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        {/* Why Sponsor Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-6 flex items-center justify-center gap-3">
              <Eye className="w-10 h-10 text-[#1D4ED8]" />
              Why Sponsor NCNTAIA 2025?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              Maximize your brand exposure and connect with the brightest minds in AI and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whySponsorReasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <Card
                  key={index}
                  className="group shadow-xl border-0 bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1E293B] mb-4 group-hover:text-[#1D4ED8] transition-colors duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-[#475569] leading-relaxed">{reason.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        

        

        {/* Stalls & Exhibition */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-6 flex items-center justify-center gap-3">
              <Building className="w-10 h-10 text-[#F97316]" />
              Exhibition Stalls
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#F97316] to-[#1D4ED8] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              Showcase your products and services in our dedicated exhibition area
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="shadow-xl border-0 bg-gradient-to-br from-[#F97316]/10 via-white to-[#1D4ED8]/10 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-6">Exhibition Features</h3>
                  <div className="space-y-6">
                    {stallFeatures.map((feature, index) => {
                      const IconComponent = feature.icon
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-[#1E293B] mb-2">{feature.feature}</h4>
                            <p className="text-[#475569]">{feature.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-xl border-0 bg-white rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-6">Stall Specifications</h3>
                  <div className="space-y-4">
                    <div className="bg-[#F9FAFB] p-4 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#1E293B]">Premium Stall (6m x 6m)</span>
                        <Badge className="bg-yellow-500 text-white">Platinum</Badge>
                      </div>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#1E293B]">Standard Stall (4m x 4m)</span>
                        <Badge className="bg-[#F97316] text-white">Gold</Badge>
                      </div>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#1E293B]">Compact Stall (3m x 3m)</span>
                        <Badge className="bg-[#1D4ED8] text-white">Silver</Badge>
                      </div>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 rounded-xl hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#1E293B]">Basic Space (2m x 2m)</span>
                        <Badge className="bg-green-600 text-white">Bronze</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#1D4ED8]/10 to-[#F97316]/10 rounded-xl">
                    <p className="text-sm text-[#475569] font-medium">
                      All stalls include basic furniture, electrical connections, and Wi-Fi access
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <Card className="shadow-3xl border-0 bg-gradient-to-r from-[#1D4ED8] via-[#1D4ED8]/90 to-[#F97316] text-white rounded-3xl overflow-hidden">
            <CardContent className="p-16 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                <div>
                  <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-4">
                    <Mail className="w-10 h-10 animate-pulse" />
                    Ready to Partner with Us?
                  </h2>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Contact our sponsorship team to discuss customized packages and partnership opportunities
                  </p>
                </div>

                <div className="bg-white/15 backdrop-blur-sm p-8 rounded-3xl border border-white/20 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4 text-lg">
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-6 h-6" />
                      <span className="font-mono font-bold">ncntaia-2025@sreenidhi.edu.in</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-6 h-6" />
                      <span>+91 99126 67488</span>
                    </div>
                  </div>
                </div>

              

                <p className="text-sm opacity-80 max-w-xl mx-auto">
                  We typically respond to sponsorship inquiries within 24 hours. Our team is ready to create a
                  customized partnership package that meets your specific marketing objectives.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </ConferenceLayout>
  )
}
