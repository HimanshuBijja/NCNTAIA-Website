import ConferenceLayout from "@/components/ui/layout/conf-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Award, Users, Globe, Quote } from "lucide-react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"

type Objective = {
  label: string
  description: string
  bgColor: "blue" | "green" | "orange" | "purple"
  logo: keyof typeof iconMap
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Building,
  Users,
  Award,
}

const colorMap: Record<Objective["bgColor"], string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
}

const bgMap: Record<Objective["bgColor"], string> = {
  blue: "from-blue-500/10 to-blue-500/5 border-blue-500/20",
  green: "from-green-500/10 to-green-500/5 border-green-500/20",
  orange: "from-orange-500/10 to-orange-500/5 border-orange-500/20",
  purple: "from-purple-500/10 to-purple-500/5 border-purple-500/20",
}

export default function AboutPage() {
  return (
    <ConferenceLayout
      title="About NCNTAIA 2025"
      subtitle="Exploring cutting-edge research and innovations in Artificial Intelligence, Big Data Analytics, and Smart Computing for a digital tomorrow"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Conference Overview */}
        <section>
          <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#1D4ED8] to-[#1D4ED8]/80 text-white p-8">
              <CardTitle className="text-3xl font-bold flex items-center gap-3">
                <Globe className="w-8 h-8" />
                Conference Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <ConferenceOverview />
            </CardContent>
          </Card>
        </section>

        {/* Conference Objectives */}
        <section>
          <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#F97316] to-[#F97316]/80 text-white p-8">
              <CardTitle className="text-3xl font-bold flex items-center gap-3">
                <Award className="w-8 h-8" />
                Conference Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <ConferenceObjectivesCard />
              <div className="text-center p-8 bg-gradient-to-r from-[#F9FAFB] to-[#1D4ED8]/5 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Our Vision</h3>
                <p className="text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed">
                  To create a transformative platform where cutting-edge research meets practical innovation, fostering
                  a collaborative ecosystem that drives technological advancement and addresses real-world challenges
                  through AI and data science.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <AboutSnist />
        <Testimonials />
        <ConferenceObjectives2 />
      </div>
    </ConferenceLayout>
  )
}

function ConferenceOverview() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#1E293B]">NCNTAIA 2025</h3>
        <p className="text-lg text-[#475569] leading-relaxed">
          The National Conference on Next-Gen Technologies in AI Applications is a premier academic event that brings
          together researchers, academicians, industry professionals, and students from around the world to share their
          latest findings and innovations.
        </p>
        <p className="text-[#475569] leading-relaxed">
          This conference serves as a global forum to advance academic research and innovation, fostering collaboration
          between academia and industry. Participants will have the opportunity to present their research, learn about
          cutting-edge developments, and network with peers in the field.
        </p>
      </div>
      <ConferenceOverviewStats />
    </div>
  )
}

interface Stat {
  label: string
  description: string
  color: Objective["bgColor"]
}

const textColorMap: Record<Objective["bgColor"], string> = {
  blue: "text-blue-600",
  green: "text-green-600",
  orange: "text-orange-500",
  purple: "text-purple-600",
}

function ConferenceOverviewStats() {
  const stats: Stat[] = [
    {
      label: "100+",
      description: "Expected Participants",
      color: "blue",
    },
    {
      label: "5",
      description: "Technical Sessions",
      color: "green",
    },
    {
      label: "2",
      description: "Conference Days",
      color: "orange",
    },
    {
      label: "5+",
      description: "Expert Speakers",
      color: "purple",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-[#F9FAFB] to-[#1D4ED8]/5 p-6 rounded-xl">
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
            <div className={`text-2xl font-bold ${textColorMap[stat.color]}`}>{stat.label}</div>
            <div className="text-sm text-[#475569]">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConferenceObjectivesCard() {
  const ConferenceObjectives: Objective[] = [
    {
      label: "Promote Research and Innovation",
      description:
        "To provide a dynamic platform for sharing innovative research, emerging trends, and practical applications in Artificial Intelligence, Big Data Analytics, and Computer Applications",
      bgColor: "blue",
      logo: "Globe",
    },
    {
      label: "Promote Sustainable Solutions",
      description:
        "To address how AI technologies can be leveraged for sustainable development, solving challenges such as climate change, public health, and economic inequality.",
      bgColor: "green",
      logo: "Building", // Changed from Building
    },
    {
      label: "Foster Collaboration",
      description:
        "To encourage collaboration among researchers, industry experts, and academicians to present cutting-edge research and discuss emerging trends in AI, Big Data, and Smart Computing Applications.",
      bgColor: "orange",
      logo: "Users",
    },
    {
      label: "Address National Challenges",
      description:
        "Bring global perspectives to discuss national challenges and opportunities using AI and big data for innovation, national policy, and technological equity.",
      bgColor: "purple",
      logo: "Award",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {ConferenceObjectives.map((objective, index) => {
        const Icon = iconMap[objective.logo]
        return (
          <div key={index} className={`p-6 bg-gradient-to-br ${bgMap[objective.bgColor]} rounded-2xl border`}>
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 ${
                  colorMap[objective.bgColor]
                } rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{objective.label}</h3>
                <p className="text-[#475569] leading-relaxed">{objective.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function AboutSnist() {
  return (
    <section>
      <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-[#F97316] to-[#F97316]/80 text-white p-8">
          <CardTitle className="text-3xl font-bold flex items-center gap-3">
            <Building className="w-8 h-8" />
            About SNIST
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                  Sreenidhi Institute of Science &amp; Technology
                </h3>
                <p className="text-lg text-[#475569] leading-relaxed mb-4">
                  An autonomous institution affiliated to JNTUH, accredited by NAAC with A grade and NBA. SNIST has
                  established itself as a leading center for technical education and research in India.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#1E293B] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#1D4ED8]" />
                    Accreditations
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
                      <div className="w-2 h-2 bg-[#1D4ED8] rounded-full"></div>
                      <span className="text-[#475569]">NAAC A Grade Accreditation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
                      <div className="w-2 h-2 bg-[#1D4ED8] rounded-full"></div>
                      <span className="text-[#475569]">NBA Accredited Programs</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
                      <div className="w-2 h-2 bg-[#1D4ED8] rounded-full"></div>
                      <span className="text-[#475569]">Autonomous Institution Status</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#1E293B] flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#F97316]" />
                    Research Excellence
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                      <span className="text-[#475569]">Advanced AI Research Labs</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                      <span className="text-[#475569]">Industry Collaboration</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
                      <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
                      <span className="text-[#475569]">Innovation Centers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#1D4ED8]/10 to-[#F97316]/10 p-6 rounded-xl">
                <h4 className="font-semibold text-[#1E293B] mb-4">Mission</h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  To provide quality technical education and foster innovation through cutting-edge research in emerging
                  technologies.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#F97316]/10 to-[#1D4ED8]/10 p-6 rounded-xl">
                <h4 className="font-semibold text-[#1E293B] mb-4">Vision</h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  To be a globally recognized institution for excellence in technical education, research, and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "&quot;Attending NCNTAIA always rekindles my scientific energy and reminds me why I went into AI research. The quality of presentations and networking opportunities are unmatched.&quot;",
      author: "Dr. Mamatha T",
      designation: "Professor of Computer Science",
      organization: "SNIST",
      image: "/user-placeholder.svg",
    },
    {
      quote:
        "&quot;NCNTAIA is the preeminent conference in this area. Excellent relevant science and friendships bring me back every year. It&apos;s where the future of AI is discussed.&quot;",
      author: "Dr. Aruna Varanasi",
      designation: "Dean Tranings & Computers",
      organization: "SNIST",
      image: "/user-placeholder.svg",
    },
    {
      quote:
        "&quot;This conference has been instrumental in shaping my research direction. The collaborative environment and cutting-edge discussions on AI applications provide invaluable insights for emerging researchers.&quot;",
      author: "Dr. Ali Hussain",
      designation: "Dean (R&D)",
      organization: "SNIST",
      image: "/user-placeholder.svg",
    },
    {
      quote:
        "&quot;The conference provides an exceptional platform for researchers to showcase their work and collaborate on cutting-edge AI technologies. Truly inspiring!&quot;",
      author: "Dr. K Shirisha",
      designation: "Head of Department CSE",
      organization: "SNIST",
      image: "/user-placeholder.svg",
    },
  ]

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1E293B] mb-4">What Researchers Say</h2>
        <p className="text-xl text-[#475569] max-w-3xl mx-auto">
          Hear from distinguished researchers who have been part of our conference community
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Quote className="w-8 h-8 text-[#1D4ED8] flex-shrink-0 mt-1" />
                  <p
                    className="text-[#475569] leading-relaxed italic"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.quote,
                    }}
                  />
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[#1D4ED8] to-[#F97316]">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-contain text-white"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E293B]">{testimonial.author}</h4>
                    <p className="text-sm text-[#475569] font-medium">{testimonial.designation}</p>
                    <p className="text-sm text-[#1D4ED8]">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

function ConferenceObjectives2() {
  const data = [
    {
      label: "Research Advancement",
      description: "Promote cutting-edge research in AI, machine learning, and emerging technologies",
    },
    {
      label: "Knowledge Sharing",
      description: "Facilitate exchange of ideas and best practices among researchers",
    },
    {
      label: "Industry Collaboration",
      description: "Bridge the gap between academic research and industry applications",
    },
    {
      label: "Innovation Showcase",
      description: "Provide platform for showcasing innovative solutions and technologies",
    },
    {
      label: "Global Networking",
      description: "Create opportunities for professional networking and collaboration",
    },
    {
      label: "Future Directions",
      description: "Discuss future trends and directions in AI and related technologies",
    },
  ]

  return (
    <section>
      <Card className="shadow-lg border-0 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white rounded-2xl overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Conference Objectives</h2>
            <p className="text-xl opacity-90">Our mission to advance AI research and foster innovation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3">{item.label}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
