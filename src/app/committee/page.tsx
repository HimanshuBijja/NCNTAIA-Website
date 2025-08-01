"use client"

import ConferenceLayout from "@/components/ui/layout/conf-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Award,
  Building,
  Mail,
  Phone,
  Crown,
  Star,
  Shield,
  UserCheck,
  Briefcase,
  GraduationCap,
} from "lucide-react"

export default function CommitteePage() {
  const nationalAdvisoryCommittee = [
    {
      name: "Dr. S. Mohan Mahalakshmi Naidu",
      title: "Professor",
      organization: "International Institute of Information Technology (IIIT), Pune",
      department: "Electronics and Communication Engineering",
      expertise: ["Electronics", "Communication Systems", "Signal Processing"],
    },
    {
      name: "Dr. Raees A Khan",
      title: "Professor",
      organization: "Babasaheb Bhimrao Ambedkar University, Lucknow",
      department: "Information Technology",
      expertise: ["Information Technology", "Computer Systems", "Database Management"],
    },
    {
      name: "Dr. E. Chandra",
      title: "Professor and Head",
      organization: "Bharathiyar University, Coimbatore, Tamil Nadu",
      department: "Computer Science",
      expertise: ["Computer Science", "AI Applications", "Research Management"],
    },
    {
      name: "Dr. S.U. Ghumbre",
      title: "Professor & Head",
      organization: "Government College of Engineering & Research, Pune",
      department: "Computer Science & Engineering",
      expertise: ["Computer Science", "Software Engineering", "AI Research"],
    },
    {
      name: "Dr. E. Suresh Babu",
      title: "Assistant Professor",
      organization: "NIT, Warangal, Telangana",
      department: "Computer Science & Engineering",
      expertise: ["Machine Learning", "Data Analytics", "Computer Vision"],
    },
    {
      name: "Dr. C. Shoba Bindu",
      title: "Professor",
      organization: "JNTUA, Anantapur, Andhra Pradesh",
      department: "Computer Science & Engineering",
      expertise: ["AI Applications", "Deep Learning", "Pattern Recognition"],
    },
    {
      name: "Dr. S. Vasundra",
      title: "Vice-Principal, Professor",
      organization: "JNTUA, Anantapur, Andhra Pradesh",
      department: "Computer Science & Engineering",
      expertise: ["Academic Leadership", "Computer Science", "Research Management"],
    },
    {
      name: "Dr. Kiran Kumar Reddy",
      title: "Professor",
      organization: "Krishna University, Machilipatnam, Andhra Pradesh",
      department: "Computer Science",
      expertise: ["Computer Science", "AI Research", "Data Science"],
    },
    {
      name: "Dr. V. Kiran Kumar",
      title: "Professor",
      organization: "Dravidian University, Andhra Pradesh",
      department: "Computer Science",
      expertise: ["Computer Science", "Software Systems", "AI Applications"],
    },
    {
      name: "Dr. N. Geethanjali",
      title: "Professor",
      organization: "S K University, Anantapur, Andhra Pradesh",
      department: "Computer Science and Technology",
      expertise: ["Computer Technology", "AI Systems", "Research Innovation"],
    },
  ]
  const chiefPatrons = [
    {
      name: "Dr. K.T. Mahee",
      title: "Chairman",
      organization: "Sreenidhi Educational Group, Hyderabad",
      level: "chief-patron",
      imageUrl: "/IMG/imgs/Dr.mahee.jpeg?height=120&width=120&text=Dr.+Mahee",
    },
    {
      name: "Mr. K. Abhijit Rao",
      title: "CEO",
      organization: "Sreenidhi Educational Group, Hyderabad",
      level: "chief-patron",
      imageUrl: "/IMG/imgs/Dr.abhi.jpeg?height=120&width=120&text=Mr.+Rao",
    },
  ]
  const patron = {
    name: "Dr. T. Ch. Siva Reddy",
    title: "Principal",
    organization: "SNIST, Hyderabad",
    level: "patron",
    imageUrl: "/IMG/imgs/Dr.shivareddy.jpeg?height=120&width=120&text=Dr.+Reddy",
  }
  const eventpatron = {
    name: "Dr. K Shirisha",
    title: "Head of Department CSE",
    organization: "SNIST, Hyderabad",
    level: "eventpatron",
    imageUrl: "/IMG/imgs/Dr.sirisha.jpeg?height=100&width=100&text=Dr.+Shirisha", // Adjusted to w-24 h-24
  }
  const conveners = [
    {
      name: "Dr. Aruna Varanasi",
      title: "Head – CSE Department",
      organization: "SNIST, Hyderabad",
      level: "convener",
      imageUrl: "/IMG/imgs/Dr.aruna.jpeg?height=80&width=80&text=Dr.+Varanasi", // Adjusted to w-20 h-20
    },
    {
      name: "Dr. Mamatha Talakoti",
      title: "Associate Professor",
      organization: "SNIST, Hyderabad",
      department: "CSE Department",
      level: "convener",
      imageUrl: "/IMG/imgs/Dr.mamatha.jpeg?height=80&width=80&text=Dr.+Talakoti", // Adjusted to w-20 h-20
      phone: "+91 99126 67488",
    },
  ]
  const coConvener = {
    name: "Dr. H Balaji",
    title: "Professor",
    organization: "SNIST, Hyderabad",
    department: "CSE Department",
    level: "co-convener",
    imageUrl: "/IMG/imgs/WhatsApp Image 2025-07-23 at 22.56.01.jpeg?height=80&width=80&text=Dr.+Balaji",
    phone: "+91 96664 44100", // Correcting the phone number format
  }
  const localAdvisoryMembers = [
    { name: "Dr. Ali Hussain", title: "Dean (R&D)", organization: "SNIST, Hyderabad" },
    { name: "Dr. Sibghatullah Khan", title: "Associate Dean (R&D)", organization: "SNIST, Hyderabad" },
    { name: "Dr. Sunil Bhutada", title: "Head of IT Department", organization: "SNIST, Hyderabad" },
    {
      name: "Dr. T Venkata Narayana Rao",
      title: "Head, Internet of Things & AI & ML",
      organization: "SNIST, Hyderabad",
    },
    { name: "Dr. Sowmya Devi ", title: "Head, Cyber Security", organization: "SNIST, Hyderabad" },
    { name: "Dr. Md. Jaffer Sadiq", title: "Head, Data Science", organization: "SNIST, Hyderabad" },
  ]
  const organizingCommittee = [
    { name: "Dr. Sreedhar Bhukya", title: "Professor", department: "CSE Department", organization: "SNIST, Hyderabad" },
    {
      name: "Dr. Koppula Anup Kumar",
      title: "Professor",
      department: "CSE Department",
      organization: "SNIST, Hyderabad",
    },
    {
      name: "Dr. Ellendula Madhukar",
      title: "Professor",
      department: "CSE Department",
      organization: "SNIST, Hyderabad",
    },
    {
      name: "Dr. Kandula Damodhar Rao",
      title: "Professor",
      department: "CSE Department",
      organization: "SNIST, Hyderabad",
    },
    {
      name: "Dr. Sundaragiri Dheeraj",
      title: "Associate Professor",
      department: "CSE Department",
      organization: "SNIST, Hyderabad",
    },
    {
      name: "Dr. Mummadi Rama Chandra",
      title: "Associate Professor",
      department: "CSE Department",
      organization: "SNIST, Hyderabad",
    },
    {
      name: "Dr. V Sowmya Devi",
      title: "Associate Professor",
      department: "CSE Department",
      organization: "SNIST, Hyderabad",
    },
    {
      name: "Mr. N Venkata Subba Reddy",
      title: "Assistant Professor",
      department: "CSE Department",
      organization: "SNIST, Hyderabad",
    },
  ]
  const committees = [
    {
      title: "Technical Program Committee",
      icon: Shield,
      color: "from-[#1D4ED8] to-[#1D4ED8]/80",
      members: [
        { name: "Dr. G Venkanna", title: "Associate Professor", department: "CSE Department" },
        { name: "Dr. D Sreenivasa Rao", title: "Associate Professor", department: "CSE Department" },
        { name: "D. Ram Babu", title: "Assistant Professor", department: "CSE Department" },
        { name: "Dr. Shaik Khasim Saheb", title: "Associate Professor", department: "CSE Department" },
      ],
    },
    {
      title: "Publication Committee",
      icon: Award,
      color: "from-[#F97316] to-[#F97316]/80",
      members: [
        { name: "Dr. B. Malathi", title: "Associate Professor", department: "CSE Department" },
        { name: "Dr. M. Praveen", title: "Associate Professor", department: "CSE Department" },
        { name: "Mrs. P Deepa", title: "Assistant Professor", department: "CSE Department" },
      ],
    },
    {
      title: "Finance Committee",
      icon: Briefcase,
      color: "from-green-600 to-green-600/80",
      members: [
        { name: "Dr. Preethi Jeevan", title: "Associate Professor", department: "CSE Department" },
        { name: "Dr. G Vani", title: "Associate Professor", department: "CSE Department" },
        { name: "Mrs. Archana Nagelli", title: "Assistant Professor", department: "CSE Department" },
      ],
    },
    {
      title: "Marketing Committee",
      icon: Users,
      color: "from-purple-600 to-purple-600/80",
      members: [
        { name: "Mr. C. Srinath Reddy", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mr. M Rama Krishna", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mr. S Chandra Sekhar", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mr. Meeravali Shaik", title: "Assistant Professor", department: "CSE Department" },
      ],
    },
    {
      title: "Transport Committee",
      icon: Building,
      color: "from-indigo-600 to-indigo-600/80",
      members: [
        { name: "Mr. K Karunakar", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mr. Mohammed Irshad", title: "Assistant Professor", department: "CSE Department" },
      ],
    },
    {
      title: "Hospitality Committee",
      icon: UserCheck,
      color: "from-teal-600 to-teal-600/80",
      members: [
        { name: "Mr. K Nagendra Chary", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mr. Mastan Vali", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mr. Abdul Khalander", title: "Assistant Professor", department: "CSE Department" },
      ],
    },
    {
      title: "Registration Committee",
      icon: Star,
      color: "from-pink-600 to-pink-600/80",
      members: [
        { name: "Mrs. B Vasundhara Devi", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mrs. Padmini K", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mr. P Ramu", title: "Assistant Professor", department: "CSE Department" },
      ],
    },
    {
      title: "Stage Committee",
      icon: Award,
      color: "from-orange-600 to-orange-600/80",
      members: [
        { name: "P. Haritha", title: "Assistant Professor", department: "CSE Department" },
        { name: "B. Pavani", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mrs. K Swathi", title: "Assistant Professor", department: "CSE Department" },
        { name: "Mrs. K Spandana", title: "Assistant Professor", department: "CSE Department" },
      ],
    },
  ]
  const studentCommittee = [
    

    {
      name: "Vaman Akhil",
      department: "CSE-III",
      role: "Student Co-ordinator",
      imageUrl: "/placeholder.svg?height=60&width=60&text=Vaman",
      phone: "+91-8008151542",
    },
    {
      name: "Nikhil Anand",
      department: "DS",
      role: "Student Co-ordinator",
      imageUrl: "/placeholder.svg?height=60&width=60&text=Nikhil",
    },
    {
      name: "Himanshu B",
      department: "CSE-III",
      role: "Student Co-ordinator",
      imageUrl: "/placeholder.svg?height=60&width=60&text=Himanshu",
    },
    { name: "K. Sreeram", department: "CSE-III" },
    { name: "K. Srinish", department: "CSE-III" },
    { name: "I. Sai Phanindra", department: "CSE-III" },
    { name: "S. Charitha", department: "CSE-III" },
    { name: "G Abhiram", department: "CSE-III" },
    { name: "K. Sathvika", department: "CSE-III" },
    { name: "M. Chandana", department: "CSE-III" },
    { name: "V. Varshith", department: "CSE-III" },
    { name: "M. Sanjay", department: "CSE-III" },
    { name: "P. Lalith", department: "CSE-III" },
    { name: "A. Surya", department: "CSE-III" },
    { name: "R. Srihas", department: "CSE-III" },
    { name: "P. Aishwarya", department: "CSE-III" },
    { name: "A. Sohan", department: "CSE-III" },
    { name: "K. Veda Varshini", department: "CSE-III" },
    { name: "P. Manoj", department: "CSE-III" },
    { name: "P. Aashrith", department: "CSE-III" },
    { name: "S. Aravind", department: "CSE-III" },
  ]

  // Find specific members for contact info
  const mamatha = conveners.find((c) => c.name === "Dr. Mamatha Talakoti")
  const vamanAkhil = studentCommittee.find((s) => s.name === "Vaman Akhil")
  
  const coConvenerWithPhone = {
    ...coConvener,
    // Add phone number here if it was missing, otherwise use the existing one
    phone: coConvener.phone || "+91 96664 44100",
  }

  return (
    <ConferenceLayout title="NCNTAIA" subtitle="Meet the dedicated team of experts organizing NCNTAIA 2025">
      <div className="max-w-7xl mx-auto space-y-16 py-12">
        {/* Chief Patrons */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4 flex items-center justify-center gap-3">
              <Crown className="w-10 h-10 text-[#F97316]" />
              Chief Patrons
            </h2>
            <p className="text-xl text-[#475569]">Leadership and vision for the conference</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {chiefPatrons.map((member, index) => (
              <Card
                key={index}
                className="shadow-xl border-0 bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <img
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-[#F97316] shadow-md" // Largest size
                  />
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-2">{member.name}</h3>
                  <Badge className="bg-[#F97316] text-white mb-4 px-4 py-2">{member.title}</Badge>
                  <p className="text-[#475569] font-medium">{member.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Patron */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Patron</h2>
          </div>
          <Card className="shadow-lg border-0 bg-gradient-to-br from-[#1D4ED8]/10 to-[#1D4ED8]/5 rounded-2xl overflow-hidden max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <img
                src={patron.imageUrl || "/placeholder.svg"}
                alt={patron.name}
                className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-4 border-[#1D4ED8] shadow-md" // Largest size
              />
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">{patron.name}</h3>
              <Badge className="bg-[#1D4ED8] text-white mb-3">{patron.title}</Badge>
              <p className="text-[#475569]">{patron.organization}</p>
            </CardContent>
          </Card>
        </section>
        {/* Event Co-ordinator */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Organising Chair</h2>
          </div>
          <Card className="shadow-lg border-0 bg-gradient-to-br from-[#1D4ED8]/10 to-[#1D4ED8]/5 rounded-2xl overflow-hidden max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <img
                src={eventpatron.imageUrl || "/placeholder.svg"}
                alt={eventpatron.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-[#1D4ED8] shadow-md" // Second largest size
              />
              <h3 className="text-xl font-bold text-[#1E293B] mb-2">{eventpatron.name}</h3>
              <Badge className="bg-[#1D4ED8] text-white mb-3">{eventpatron.title}</Badge>
              <p className="text-[#475569]">{eventpatron.organization}</p>
            </CardContent>
          </Card>
        </section>
        {/* Conveners */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Conveners</h2>
            <p className="text-lg text-[#475569]">Conference coordination and management</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {conveners.map((member, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <img
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-[#1D4ED8] shadow-sm" // Third largest size
                  />
                  <h3 className="text-lg font-bold text-[#1E293B] mb-2">{member.name}</h3>
                  <Badge className="bg-[#1D4ED8] text-white mb-3">{member.title}</Badge>
                  <p className="text-[#475569] text-sm">{member.organization}</p>
                  {member.department && <p className="text-[#475569] text-sm">{member.department}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="shadow-lg border-0 bg-gradient-to-br from-[#F97316]/10 to-[#F97316]/5 rounded-2xl overflow-hidden max-w-md mx-auto mt-8">
            <CardContent className="p-6 text-center">
              <img
                src={coConvenerWithPhone.imageUrl || "/placeholder.svg"}
                alt={coConvenerWithPhone.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-[#F97316] shadow-sm" // Third largest size
              />
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">{coConvenerWithPhone.name}</h3>
              <Badge className="bg-[#F97316] text-white mb-3">Co-Convener</Badge>
              <p className="text-[#475569] text-sm">{coConvenerWithPhone.organization}</p>
              <p className="text-[#475569] text-sm">{coConvenerWithPhone.department}</p>
            </CardContent>
          </Card>
        </section>
        {/* National Advisory Committee */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4 flex items-center justify-center gap-3">
              <Shield className="w-10 h-10 text-[#1D4ED8]" />
              National Advisory Committee
            </h2>
            <p className="text-xl text-[#475569]">Distinguished experts providing strategic guidance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalAdvisoryCommittee.map((member, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1D4ED8] to-[#F97316] rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1E293B] leading-tight">{member.name}</h3>
                        <Badge className="bg-[#1D4ED8]/10 text-[#1D4ED8] text-xs">{member.title}</Badge>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2 text-[#475569]">
                        <Building className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{member.organization}</span>
                      </div>
                      <div className="flex items-start gap-2 text-[#475569]">
                        <GraduationCap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{member.department}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-[#1D4ED8]/30 text-[#475569]"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Local Advisory Members */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Local Advisory Members</h2>
            <p className="text-lg text-[#475569]">SNIST leadership providing local guidance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localAdvisoryMembers.map((member, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 bg-gradient-to-br from-[#F9FAFB] to-[#1D4ED8]/5 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#F97316]/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1E293B] mb-2">{member.name}</h3>
                  <Badge className="bg-[#F97316]/10 text-[#F97316] mb-3 text-xs">{member.title}</Badge>
                  <p className="text-[#475569] text-sm">{member.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Organizing Committee */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Organizing Committee</h2>
            <p className="text-lg text-[#475569]">Core team managing conference operations</p>
          </div>
          <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {organizingCommittee.map((member, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-[#F9FAFB] to-[#1D4ED8]/5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-[#1D4ED8]/10"
                  >
                    <div className="text-center space-y-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#1D4ED8] to-[#F97316] rounded-lg flex items-center justify-center mx-auto">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E293B] text-sm leading-tight">{member.name}</h4>
                        <p className="text-xs text-[#475569] mt-1">{member.title}</p>
                        <p className="text-xs text-[#1D4ED8]">{member.department}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Specialized Committees */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Specialized Committees</h2>
            <p className="text-lg text-[#475569]">Dedicated teams for specific conference functions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => {
              const IconComponent = committee.icon
              return (
                <Card
                  key={index}
                  className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className={`bg-gradient-to-r ${committee.color} text-white p-6`}>
                    <CardTitle className="text-lg font-bold flex items-center gap-3">
                      <IconComponent className="w-6 h-6" />
                      {committee.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {committee.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="p-3 bg-[#F9FAFB] rounded-lg">
                          <h4 className="font-semibold text-[#1E293B] text-sm">{member.name}</h4>
                          <p className="text-xs text-[#475569]">{member.title}</p>
                          <p className="text-xs text-[#1D4ED8]">{member.department}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
        {/* Student Committee */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#F97316]" />
              Student Committee
            </h2>
            <p className="text-lg text-[#475569]">III Year CSE Department students supporting the conference</p>
          </div>
          <Card className="shadow-lg border-0 bg-gradient-to-br from-[#F97316]/10 to-[#1D4ED8]/10 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {studentCommittee.map((student, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-center"
                  >
                    {student.imageUrl ? (
                      <img
                        src={student.imageUrl || "/placeholder.svg"}
                        alt={student.name}
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-2 border-2 border-[#1D4ED8] shadow-sm" // Smallest size
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-br from-[#1D4ED8] to-[#F97316] rounded-lg flex items-center justify-center mx-auto mb-2">
                        <GraduationCap className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <h4 className="font-semibold text-[#1E293B] text-sm">{student.name}</h4>
                    <p className="text-xs text-[#475569]">{student.department}</p>
                    {student.role && (
                      <Badge className="bg-blue-100 text-blue-700 text-xs mt-1 px-2 py-0.5">{student.role}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        {/* Contact Information */}
        <section>
          <Card className="shadow-xl border-0 bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                    <Mail className="w-8 h-8" />
                    Contact the Committee
                  </h2>
                  <p className="text-xl opacity-90">
                    For any queries related to the conference organization, please reach out to us
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-6 h-6" />
                      <span className="font-mono text-xl font-bold">ncntaia-2025@sreenidhi.edu.in</span>
                    </div>
                   
                    {mamatha?.phone && (
                      <div className="flex items-center justify-center gap-3">
                        <Phone className="w-6 h-6" />
                        <span className="text-lg">Dr. Mamatha Talakoti: {mamatha.phone}</span>
                      </div>
                    )}
                    {coConvenerWithPhone?.phone && (
                      <div className="flex items-center justify-center gap-3">
                        <Phone className="w-6 h-6" />
                        <span className="text-lg">Dr. H Balaji: {coConvenerWithPhone.phone}</span>
                      </div>
                    )}
                  
                    {vamanAkhil?.phone && (
                      <div className="flex items-center justify-center gap-3">
                        <Phone className="w-6 h-6" />
                        <span className="text-lg">Vaman Akhil (Student Co-ordinator): {vamanAkhil.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm opacity-80">
                  We typically respond to inquiries within 24-48 hours during business days
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ConferenceLayout>
  )
}