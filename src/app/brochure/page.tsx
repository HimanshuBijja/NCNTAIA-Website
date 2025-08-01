import Link from "next/link"
import ConferenceLayout from "@/components/ui/layout/conf-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  FileText,
  Eye,
  Calendar,
  Users,
  Award,
  Star,
  
  Target,

  Mail,
  Phone,
  ExternalLink,
} from "lucide-react"

export default function BrochurePage() {
  const keyThemes = [
    "Scientific Research and Innovation",
    "Interdisciplinary Technologies",
    "Academia-Industry Collaboration",
    "R&D Ecosystem in India",
    "National Research Funding Opportunities",
  ]

  const highlights = [
    {
      icon: Users,
      title: "Keynote Addresses",
      description: "By eminent researchers and policy-makers",
      color: "from-[#1D4ED8] to-[#1D4ED8]/80",
    },
    {
      icon: Award,
      title: "Panel Discussions",
      description: "On Research Funding and the Role of ANRF",
      color: "from-[#F97316] to-[#F97316]/80",
    },
    {
      icon: Target,
      title: "Workshops & Tutorials",
      description: "For Young Researchers (Accelerate Vigyan Workshops)",
      color: "from-purple-600 to-purple-600/80",
    },
    {
      icon: FileText,
      title: "Research Paper Presentations",
      description: "Across diverse domains",
      color: "from-green-600 to-green-600/80",
    },
  ]

  
  return (
    <ConferenceLayout
      title="Conference Brochure"
      subtitle="Complete information about NCNTAIA 2025 - Your gateway to cutting-edge AI research and innovation"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <section>
          <Card className="shadow-xl border-0 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <div>
                  <h1 className="text-5xl font-bold mb-6">Welcome to NCNTAIA 2025</h1>
                  <p className="text-2xl opacity-90 mb-4">
                    National Conference on Next-Gen Technologies in AI Applications
                  </p>
                  <p className="text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
                    We are delighted to invite researchers, academicians, professionals, and students to participate in
                    our upcoming conference, organized in association with the Anusandhan National Research Foundation
                    (ANRF).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="/brochure.pdf" download="NCNTAIA-2025-Brochure.pdf">
                    <Button className="bg-white text-[#1D4ED8] hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Download className="w-6 h-6 mr-3" />
                      Download  Full Brochure PDF
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl bg-transparent"
                  >
                    <Eye className="w-6 h-6 mr-3" />
                    Preview Online
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Conference */}
        <section>
          <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#F9FAFB] to-[#1D4ED8]/5 p-8">
              <CardTitle className="text-3xl font-bold text-[#1E293B] flex items-center gap-3">
                <Star className="w-8 h-8 text-[#F97316]" />
                About the Conference
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-[#475569] leading-relaxed">
                    The conference aims to promote interdisciplinary dialogue and knowledge exchange among experts from
                    academia, industry, and research organizations. It aligns with the mission of the ANRF to advance
                    research and innovation culture across India.
                  </p>
                  <p className="text-lg text-[#475569] leading-relaxed">
                    This event promises to be a vibrant platform for presenting cutting-edge research, fostering
                    collaborations, and catalyzing innovations for national development, empowering participants to take
                    active roles in building a Viksit Bharat.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#1D4ED8]/10 to-[#F97316]/10 p-8 rounded-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#1D4ED8] mb-2">100+</div>
                      <div className="text-sm text-[#475569]">Expected Participants</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#F97316] mb-2">50+</div>
                      <div className="text-sm text-[#475569]">Research Papers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#1D4ED8] mb-2">5+</div>
                      <div className="text-sm text-[#475569]">Keynote Speakers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#F97316] mb-2">5</div>
                      <div className="text-sm text-[#475569]">Technical Sessions</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Themes */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Key Themes</h2>
            <p className="text-xl text-[#475569]">Core research areas and focus topics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyThemes.map((theme, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1D4ED8] to-[#F97316] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E293B] leading-tight">{theme}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Badge className="bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 px-4 py-2 text-sm">
              Refer to the detailed brochure for session topics and tracks!
            </Badge>
          </div>
        </section>

        {/* Special Highlights */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Special Highlights</h2>
            <p className="text-xl text-[#475569]">What makes this conference exceptional</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <Card
                  key={index}
                  className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${highlight.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1E293B] mb-3">{highlight.title}</h3>
                        <p className="text-[#475569] leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl overflow-hidden mt-8">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                Plus: Networking and Collaboration Opportunities
              </h3>
              <p className="text-lg text-[#475569]">
                Connect with peers, establish partnerships, and build lasting professional relationships
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Important Dates */}
        <section>
          <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white p-8">
              <CardTitle className="text-3xl font-bold flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-[#1D4ED8]/10 to-[#1D4ED8]/5 rounded-2xl">
                  <Calendar className="w-8 h-8 text-[#1D4ED8] mx-auto mb-3" />
                  <h4 className="font-bold text-[#1E293B] mb-2">Abstract Submission</h4>
                  <p className="text-[#475569] font-semibold">August 10, 2025</p>
                </div>
                 <div className="text-center p-6 bg-gradient-to-br from-green-600/10 to-green-600/5 rounded-2xl">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-bold text-[#1E293B] mb-2">Acceptance Notification</h4>
                  <p className="text-[#475569] font-semibold">August 14, 2025</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5 rounded-2xl">
                  <FileText className="w-8 h-8 text-[#F97316] mx-auto mb-3" />
                  <h4 className="font-bold text-[#1E293B] mb-2">Full Paper Deadline</h4>
                  <p className="text-[#475569] font-semibold">August 30, 2025</p>
                </div>
               
                <div className="text-center p-6 bg-gradient-to-br from-purple-600/10 to-purple-600/5 rounded-2xl">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-bold text-[#1E293B] mb-2">Conference Dates</h4>
                  <p className="text-[#475569] font-semibold">September 11-12, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
{/* How to Participate */}
<section>
  <Card className="shadow-lg border-0 bg-gradient-to-br from-[#F9FAFB] to-[#1D4ED8]/5 rounded-2xl overflow-hidden">
    <CardContent className="p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-4">How to Participate</h2>
        <p className="text-lg text-[#475569]">Simple steps to join the conference</p>
      </div>

      {/* Sequential Stepper Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
        {/* --- Step 1 --- */}
        <div className="flex-1 text-center flex flex-col items-center px-4">
          <div className="w-12 h-12 bg-[#1D4ED8] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            1
          </div>
          <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Visit Call for Papers</h3>
          <p className="text-sm text-[#475569] mb-4 h-10">Access guidelines and submission information.</p>
          <Link href="/callforpapers">
            <Button
              variant="outline"
              className="border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8]/10 bg-transparent w-40"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit site
            </Button>
          </Link>
        </div>

        {/* --- Separator --- */}
        <div className="flex-1 border-t-2 border-dashed border-gray-300 w-16 rotate-90 md:rotate-0"></div>

        {/* --- Step 2 --- */}
        <div className="flex-1 text-center flex flex-col items-center px-4">
          <div className="w-12 h-12 bg-[#F97316] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            2
          </div>
          <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Submit Abstracts</h3>
          <p className="text-sm text-[#475569] mb-4 h-10">Submit your abstracts via our online portal.</p>
          <Button
            variant="outline"
            className="border-[#F97316] text-[#F97316] hover:bg-[#F97316]/10 bg-transparent w-40"
          >
            <FileText className="w-4 h-4 mr-2" />
            Submit Now
          </Button>
        </div>

        {/* --- Separator --- */}
        <div className="flex-1 border-t-2 border-dashed border-gray-300 w-16 rotate-90 md:rotate-0"></div>

        {/* --- Step 3 --- */}
        <div className="flex-1 text-center flex flex-col items-center px-4">
          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
            3
          </div>
          <h3 className="text-lg font-semibold text-[#1E293B] mb-3">Register for the Conference</h3>
          <p className="text-sm text-[#475569] mb-4 h-10">Participate in sessions and networking events.</p>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-600/10 bg-transparent w-40"
          >
            <Users className="w-4 h-4 mr-2" />
            Register
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</section>

        {/* Contact Information */}
        <section>
          <Card className="shadow-xl border-0 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                  <p className="text-xl opacity-90">Get in touch for any queries or support</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <Mail className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Conference Details</h3>
                    <p className="opacity-90">ncntaia-2025@sreenidhi.edu.in</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <FileText className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Submission Queries</h3>
                    <p className="opacity-90">ncntaia-2025@sreenidhi.edu.in</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <Phone className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
                    <p className="opacity-90">+91 9912667488</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl max-w-2xl mx-auto">
                  <h3 className="text-xl font-semibold mb-2">Organized by</h3>
                  <p className="text-lg opacity-90">Sreenidhi Institute of Science & Technology</p>
                  <p className="opacity-80">In collaboration with ANRF</p>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold mb-2">
                    Join us in shaping the future of research and innovation in India!
                  </p>
                  <a href="/brochure.pdf" download="NCNTAIA-2025-Brochure.pdf">
                    <Button className="bg-white text-[#1D4ED8] hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Download className="w-6 h-6 mr-3" />
                      Download Full Brochure PDF
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ConferenceLayout>
  )
}