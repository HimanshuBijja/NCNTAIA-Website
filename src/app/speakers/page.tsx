"use client"

import ConferenceLayout from "@/components/ui/layout/conf-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Award, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function SpeakersPage() {
  // Fix typo in array name and ensure all image fields are strings
  const keynoteSpeakers = [
    {
      name: "Dr. Raees A. Khan",
      title: "Professor & Head, Department of Information Technology",
      organization: "Babasaheb Bhimrao Ambedkar University, Lucknow",
      image: "/IMG/imgs/Prof-Raees-Khan.jpg",
      expertise: ["Software Engineering", "Software Quality", "Software Security", "Software Reliability"],
      bio: "Dr. Raees A. Khan is a distinguished professor with over 24 years of teaching and research experience. He has led significant research projects, developed validated metrics frameworks for software quality, and serves as the Director of the University Institute of Engineering and Technology at BBAU.",
      talk: "Quantification and Estimation in Software Quality: Insights and Innovations"
    },
    {
      name: "Dr. Kumar Eswaran",
      title: "CEO",
      organization: "Altech Power and Energy Systems, Hyderabad",
      image: "/IMG/imgs/eshwaran.jpg",
      expertise: ["Mathematical Physics", "Computational Engineering", "Power Systems", "Machine Learning"],
      bio: "Dr. Kumar Eswaran is known for his pivotal contributions in mathematical physics, including work on the Riemann Hypothesis. He has held roles in R&D at BHEL and academia, and is currently CEO at Altech Power and Energy Systems, focusing on advanced computing in power and energy industries.",
      talk: "Interdisciplinary Problem Solving: From Mathematical Physics to Applied Engineering"
    },
    {
      name: "Dr. Rajiv Misra",
      title: "Professor, Department of Computer Science and Engineering",
      organization: "Indian Institute of Technology (IIT) Patna",
      image: "/IMG/imgs/Rajiv-Misra.jpg",
      expertise: ["Wireless Networks", "Distributed Algorithms", "Cloud Computing", "Sensor Networks"],
      bio: "Dr. Rajiv Misra has published over 70 papers in top journals and conferences on topics related to wireless networks, distributed systems, and cloud computing. He is a mentor to multiple PhD students and has significant academic contributions, including book chapters and editorial roles in leading publications.",
      talk: "Distributed Intelligence: Advances in Sensor Networks and Cloud Computing"
    },
    {
      name: "Dr. Saroj Kumar Biswas",
      title: "Associate Professor, Computer Science and Engineering",
      organization: "National Institute of Technology (NIT) Silchar",
      image: "/IMG/imgs/saroj-kumar-biswas.jpg",
      expertise: ["Artificial Intelligence", "Machine Learning", "Image Processing", "Deep Learning", "Data Science"],
      bio: "Dr. Saroj Kumar Biswas has guided more than 19 doctoral students and completed significant sponsored R&D projects. With over 180 publications, his research spans AI, machine learning, and data science, emphasizing practical solutions and explainable AI.",
      talk: "Explainable Artificial Intelligence: Bridging Trust and Technology in Smart Systems"
    },
    {
      name: "Dr. Raju Bhukya",
      title: "Associate Professor, Computer Science and Engineering",
      organization: "National Institute of Technology (NIT) Warangal",
      image: "/IMG/imgs/Raju-Bhukya.jpg",
      expertise: ["Data Mining", "Machine Learning", "Big Data Analytics"],
      bio: "Dr. Raju Bhukya serves as Associate Professor and In-charge of the Center for Continuing Education at NIT Warangal. His research focuses on the integration of data mining, big data analytics, and machine learning for cutting-edge technology solutions.",
      talk: "Harnessing Big Data Analytics for Societal Transformation"
    },
    {
      name: "Dr. Lalit Kumar Awasthi",
      title: "Professor, CSE & Director (on deputation)",
      organization: "National Institute of Technology, Hamirpur / Dr. B. R. Ambedkar NIT Jalandhar",
      image: "/IMG/imgs/Lalith-kumar-awasthi.jpg", // Fixed: use string, ensure file is in public/IMG/imgs/
      expertise: ["Computer Science", "Academic Administration", "Network Security"],
      bio: "Dr. Lalit Kumar Awasthi is a senior academician and administrator with over three decades of experience. He has played a foundational role in setting up computer science departments, infrastructure, and laboratories at major Indian institutions, and is a noted expert in network security.",
      talk: "Evolution of Computer Science Education in India: Challenges and Opportunities"
    },
    {
      name: "Dr. Chandra Sekhar Jatoth",
      title: "Assistant Professor, Information Technology",
      organization: "National Institute of Technology (NIT) Raipur",
      image: "/IMG/imgs/Chandra-Sekhar-jatoth.jpg", // Fixed: use a relative path from /public/imgs/
      expertise: ["Artificial Intelligence", "Image Processing"],
      bio: "Dr. Chandra Sekhar Jatoth is noted among the top 2% scientists worldwide, focusing on artificial intelligence and image processing. He has contributed to national projects and advanced technical education through research and committee leadership.",
      talk: "AI for Transformative Societal Impact: Opportunities in Image Processing"
    }
  ];

  

  return (
    <ConferenceLayout
      title="Speakers"
      subtitle="Meet our distinguished speakers who are leading experts in AI and emerging technologies"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Keynote Speakers */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Keynote Speakers</h2>
            <p className="text-lg text-slate-600">Renowned experts who will deliver inspiring keynote presentations</p>
          </div>

          <div className="space-y-8">
            {keynoteSpeakers.map((speaker,) => (
              <Card key={speaker.name} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {speaker.expertise &&
                          speaker.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                      </div>
                    </div>
                    <div className="md:col-span-3 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{speaker.name}</h3>
                        <div className="flex items-center gap-2 text-slate-600 mb-1">
                          <Award className="w-4 h-4" />
                          <span className="font-medium">{speaker.title}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Building className="w-4 h-4" />
                          <span>{speaker.organization}</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">Keynote Talk:</h4>
                        <p className="text-slate-700 font-medium">{speaker.talk}</p>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{speaker.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Invited Speakers */}
       
        {/* Call for Speakers */}
        <section>
          <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 text-center flex items-center justify-center gap-3">
                <ExternalLink className="w-6 h-6 text-blue-600" />
                Become a Speaker
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-slate-600">
                Are you an expert in AI or related technologies? We welcome proposals for technical talks and presentations.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-800 mb-2">Technical Talks</h4>
                  <p className="text-sm text-slate-600">Share your research findings and technical innovations</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-800 mb-2">Industry Insights</h4>
                  <p className="text-sm text-slate-600">Present real-world applications and case studies</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-slate-800 mb-2">Panel Discussions</h4>
                  <p className="text-sm text-slate-600">Participate in expert panels on emerging topics</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-slate-600 mb-4">
                  <strong>Interested in speaking?</strong> Send your proposal including topic, abstract, and brief bio to:
                </p>
                <p className="font-mono text-blue-600 text-lg">ncntaia-2025@sreenidhi.edu.in</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ConferenceLayout>
  );
}
