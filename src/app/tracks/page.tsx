import ConferenceLayout from "@/components/ui/layout/conf-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Database, Cloud, Shield, Handshake, Bot, BarChart3, Globe, Lock } from "lucide-react";
import Image from "next/image";

export default function TracksPage() {
  const mainTracks = [
    {
      icon: Brain,
      title: "AI & ML",
      description: "Artificial Intelligence and Machine Learning innovations",
      color: "from-[#1D4ED8] to-[#1D4ED8]/80",
      bgColor: "from-[#1D4ED8]/10 to-[#1D4ED8]/5",
      image: "/IMG/imgs/images-4.jpeg",
    },
    {
      icon: Database,
      title: "Big Data Analytics & Data Science Applications",
      description: "Advanced data processing and analytics solutions",
      color: "from-[#F97316] to-[#F97316]/80",
      bgColor: "from-[#F97316]/10 to-[#F97316]/5",
      image: "/IMG/6152_a21_main_image.jpg",
    },
    {
      icon: Cloud,
      title: "Cloud Computing, IoT & Smart Applications",
      description: "Connected systems and intelligent applications",
      color: "from-purple-600 to-purple-600/80",
      bgColor: "from-purple-600/10 to-purple-600/5",
      image: "/IMG/imgs/cloudsec-1024x683.jpeg",
    },
    {
      icon: Shield,
      title: "Cybersecurity, Blockchain & Access Control",
      description: "Security frameworks and decentralized technologies",
      color: "from-red-600 to-red-600/80",
      bgColor: "from-red-600/10 to-red-600/5",
      image: "/IMG/imgs/everything-you-need-to-know-about-blockchain-security-main-1600.jpg",
    },
    {
      icon: Handshake,
      title: "Academia-Industry Interaction",
      description: "Bridging research and practical applications",
      color: "from-green-600 to-green-600/80",
      bgColor: "from-green-600/10 to-green-600/5",
      image: "/IMG/imgs/1709196436961.jpeg",
    },
  ];

  const technicalSessions = [
    {
      session: "Technical Session 1",
      title: "Artificial Intelligence & Machine Learning",
      icon: Bot,
      color: "from-[#1D4ED8] to-[#1D4ED8]/80",
      topics: [
        "Deep Learning & Neural Network Models",
        "Reinforcement Learning & Explainable AI",
        "Generative AI and Large Language Models (LLMs)",
        "AI in Vision, Speech, and Natural Language Processing",
        "AI in Healthcare, Agriculture & Education",
      ],
      image: "/IMG/imgs/images-4.jpeg",
    },
    {
      session: "Technical Session 2",
      title: "Big Data & Data Science",
      icon: BarChart3,
      color: "from-[#F97316] to-[#F97316]/80",
      topics: [
        "Scalable Data Processing Frameworks (Hadoop, Spark)",
        "Data Engineering and Pipeline Automation",
        "Big Data Applications in Business Intelligence & Decision Making",
        "Real-time Data Streaming and Predictive Analytics",
      ],
      image: "/IMG/6152_a21_main_image.jpg",
    },
    {
      session: "Technical Session 3",
      title: "Cloud, IoT & Smart Applications",
      icon: Globe,
      color: "from-purple-600 to-purple-600/80",
      topics: [
        "IoT Architectures and Smart Infrastructure",
        "Edge/Fog Computing in Real-time Systems",
        "Intelligent Embedded Systems & Digital Twins",
        "AI Integration in Healthcare, Education, Agriculture, and Finance",
        "Cloud, Edge & Quantum Computing",
        "IoT, Smart Devices & Embedded Systems",
      ],
      image: "/IMG/imgs/cloudsec-1024x683.jpeg",
    },
    {
      session: "Technical Session 4",
      title: "Cybersecurity, Blockchain & Privacy",
      icon: Lock,
      color: "from-red-600 to-red-600/80",
      topics: [
        "Network Security and Intrusion Detection",
        "Blockchain Protocols and Decentralized Applications",
        "Privacy-Preserving Machine Learning",
        "Trustworthy AI and Secure Data Transactions",
      ],
      image: "/IMG/imgs/everything-you-need-to-know-about-blockchain-security-main-1600.jpg",
    },
    {
      session: "Technical Session 5",
      title: "Academia-Industry Interaction",
      icon: Handshake,
      color: "from-green-600 to-green-600/80",
      topics: [
        "Devoting to industry and startup entrepreneurs",
        "Research commercialization strategies",
        "Industry-academia collaboration models",
        "Technology transfer and innovation ecosystems",
      ],
      image: "/IMG/imgs/1709196436961.jpeg",
    },
  ];

  return (
    <ConferenceLayout
      title="Conference Sessions"
      subtitle="Explore diverse research areas and cutting-edge topics in AI, Data Science, and emerging technologies"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Tracks Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Main Conference Sessions</h2>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              NCNTAIA 2025 features five specialized Sessions covering the latest developments in artificial intelligence,
              data science, and related technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainTracks.map((track) => {
              const IconComponent = track.icon;
              return (
                <Card
                  key={track.title}
                  className={`shadow-xl border-0 bg-gradient-to-br ${track.bgColor} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={track.image}
                      alt={track.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${track.color} rounded-xl flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#1E293B] mb-3 leading-tight">{track.title}</h3>
                    <p className="text-[#475569] leading-relaxed">{track.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Technical Sessions */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Technical Sessions</h2>
            <p className="text-xl text-[#475569] max-w-3xl mx-auto">
              Detailed breakdown of topics and research areas for each technical session
            </p>
          </div>
          <div className="space-y-8">
            {technicalSessions.map((session) => {
              const IconComponent = session.icon;
              return (
                <Card
                  key={session.session}
                  className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-4 gap-0">
                      <div className="lg:col-span-1 relative">
                        <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                          <Image
                            src={session.image}
                            alt={session.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            priority={true}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20"></div>
                          <div className="absolute top-4 left-4">
                            <div
                              className={`w-12 h-12 bg-gradient-to-br ${session.color} rounded-xl flex items-center justify-center`}
                            >
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-3 p-8 space-y-6">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className={`px-3 py-1 bg-gradient-to-r ${session.color} text-white text-sm font-semibold rounded-full`}
                            >
                              {session.session}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-[#1E293B] mb-4">{session.title}</h3>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#1E293B] mb-4">Key Topics:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {session.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-start gap-3 p-3 bg-[#F9FAFB] rounded-lg hover:bg-[#F1F5F9] transition-colors duration-200"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-[#475569] text-sm leading-relaxed">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Submission Guidelines */}
        <section>
          <Card className="shadow-xl border-0 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Talk Submission Guidelines</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Submit your research contributions to the most appropriate track for maximum impact and visibility
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Choose Your Track</h3>
                    <p className="opacity-90">
                      Select the most appropriate track that aligns with your research contribution and methodology
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Prepare Your Paper</h3>
                    <p className="opacity-90">
                      Follow IEEE format guidelines, ensure originality, and maintain less than 10% plagiarism
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Submit & Review</h3>
                    <p className="opacity-90">
                      Submit via email and await comprehensive peer review feedback from domain experts
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Cross-Track Submissions Welcome</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Papers spanning multiple Sessions are encouraged. Our organizing committee will assign your submission
                    to the most suitable Session based on the primary research focus and methodology.
                  </p>
                  <div className="space-y-2 text-sm opacity-80">
                    <p>
                      <strong>Submission Email:</strong> ncntaia-2025@sreenidhi.edu.in
                    </p>
                    <p>
                      <strong>Questions?</strong> Contact us for guidance on Session selection
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ConferenceLayout>
  );
}
