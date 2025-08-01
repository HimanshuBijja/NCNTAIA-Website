"use client"

import { useState } from "react"
import ConferenceLayout from "@/components/ui/layout/conf-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText,
  Users,
  Bell,
  ChevronDown,
  ChevronUp,
  User,
  Coffee,
  Utensils,
} from "lucide-react"

export default function ImportantDatesPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null)

  const importantDates = [
    {
      event: "Abstract Submission Deadline",
      date: "August 8, 2025",
      time: "11:59 PM IST",
      status: "upcoming",
      icon: FileText,
      description: "Submit your 1-page abstract in PDF format with Times New Roman font",
      category: "submission",
    },
    {
      event: "Acceptance Notification",
      date: "August 14, 2025",
      time: "By 6:00 PM IST",
      status: "upcoming",
      icon: Bell,
      description: "Authors will be notified about paper acceptance via email",
      category: "notification",
    },
    {
      event: "Full Paper Submission Deadline",
      date: "August 30, 2025",
      time: "11:59 PM IST",
      status: "upcoming",
      icon: FileText,
      description: "Submit complete paper in IEEE format (6 pages max + 2 additional pages with extra fee)",
      category: "submission",
    },
    {
      event: "Final Registration Deadline",
      date: "September 5, 2025",
      time: "11:59 PM IST",
      status: "upcoming",
      icon: Users,
      description: "Last date for conference registration and payment",
      category: "registration",
    },
    {
      event: "Conference Day 1",
      date: "September 11, 2025",
      time: "9:00 AM IST",
      status: "conference",
      icon: Calendar,
      description: "Opening ceremony, keynote sessions, and technical presentations",
      category: "conference",
      dayNumber: 1,
    },
    {
      event: "Conference Day 2",
      date: "September 12, 2025",
      time: "9:00 AM IST",
      status: "conference",
      icon: Calendar,
      description: "Technical sessions, panel discussions, and closing ceremony",
      category: "conference",
      dayNumber: 2,
    },
  ]

  const day1Schedule = [
    {
      time: "9:30 AM - 10:00 AM",
      event: "Registration",
      type: "admin",
      icon: Users,
    },
    {
      time: "10:00 AM - 10:45 AM",
      event: "Inauguration",
      type: "ceremony",
      icon: Calendar,
    },
    {
      time: "10:45 AM - 11:00 AM",
      event: "Tea Break",
      type: "break",
      icon: Coffee,
    },
    {
      time: "11:00 AM - 11:30 AM",
      event: "Invited Talk - I",
      speaker:
        "Dr Raees A Khan, Professor, Department of Information Technology, Babasaheb Bhimrao Ambedkar University(A Central University), Lucknow, Uttar Pradesh",
      topic: "Artificial Intelligence and the Evolution of Digital Security",
      type: "keynote",
      icon: User,
    },
    {
      time: "11:30 AM - 12:00 PM",
      event: "Invited Talk - II",
      speaker: "Dr Kumar Eswaran, CEO, Altech Power and Energy Systems, Hyderabad, Telangana",
      topic: "Current Trends in AI and New Techniques required for its Advancement",
      type: "keynote",
      icon: User,
    },
    {
      time: "12:00 PM - 12:15 PM",
      event: "Q & A - Discussions",
      type: "discussion",
      icon: Users,
    },
    {
      time: "12:15 PM - 1:15 PM",
      event: "Lunch Break",
      type: "break",
      icon: Utensils,
    },
    {
      time: "1:15 PM - 2:00 PM",
      event: "Poster Presentation -I",
      type: "presentation",
      icon: FileText,
    },
    {
      time: "2:00 PM - 2:30 PM",
      event: "Invited Talk - III",
      speaker: "Rajiv Misra, Department of Computer Science and Engineering, IIT, Patna",
      topic: "Generative AI",
      type: "keynote",
      icon: User,
    },
    {
      time: "2:30 PM - 3:00 PM",
      event: "Invited Talk - IV",
      speaker: "Dr Saroj Kumar Biswas, CSE Department, NIT, Silchar",
      topic: "Nuts and Bolts of Performance Metrics/Measures for Classification Task",
      type: "keynote",
      icon: User,
    },
    {
      time: "3:00 PM - 3:15 PM",
      event: "Tea Break",
      type: "break",
      icon: Coffee,
    },
    {
      time: "3:15 PM - 4:30 PM",
      event: "Technical Sessions (Parallel)",
      sessions: [
        {
          title: "Artificial Intelligence & Machine Learning",
          chairs: "Dr Saroj Kumar Biswas, CSE department, NIT, Silchar & Dr T V Rajinikanth, MGIT, Hyderabad, TS",
          coChairs:
            "Dr. T V Narayana Rao, AI/ML Dept, SNIST, Hyderabad, TS & Dr. Sreedhar Bhukya, CSE Dept, SNIST, Hyderabad, TS",
        },
        {
          title: "Big Data Analytics & Data Science Applications",
          chairs:
            "Rajiv Misra, Department of Computer Science and Engineering, IIT, Patna & Dr. Kolla Morarjee, CBIT, Hyderabad, TS",
          coChairs:
            "Dr. Sunil Bhutada, IT Dept., SNIST, Hyderabad, TS & Dr. K Anup Kumar, CSE Dept, SNIST, Hyderabad, TS",
        },
        {
          title: "Cloud Computing, IoT & Smart Applications",
          chairs:
            "Dr. Raju Bhukya, CSE department, NIT, Warangal, Telangana & Dr. K Padmavathi, Associate Professor, CBIT, Hyderabad, TS",
          coChairs:
            "Dr. Jaffer Sadiq, Data Science Dept., SNIST, Hyderabad, TS & Dr. E Madhukar, CSE Dept, SNIST, Hyderabad, TS",
        },
        {
          title: "Cybersecurity, Blockchain & Access Control",
          chairs:
            "Dr Kumar Eswaran, CEO, Altech Power and Energy Systems, Hyderabad, Telangana & Dr. C Shoba Bindu, Professor, JNTUA, Anantapur, AP",
          coChairs:
            "Dr. K Shirisha, Cyber Security Dept., SNIST, Hyderabad, TS & Dr. A. Damodhar Rao, CSE Dept, SNIST, Hyderabad, TS",
        },
        {
          title: "Academia-Industry Interaction",
          chairs:
            "Dr Raees A Khan, Department of IT, Babasaheb Bhimrao Ambedkar University(A Central University), Lucknow, Uttar Pradesh & Dr B Rama Subba Reddy, CSE Dept., Mohan Babu University, AP",
          coChairs:
            "Dr. M. Rama Chandra, Assoc Prof, CSE Department, SNIST, Hyderabad, TS & Mr. N.V. Subba Reddy, Asst Professor, CSE Dept, SNIST, Hyderabad, TS",
        },
      ],
      type: "technical",
      icon: FileText,
    },
    {
      time: "7:00 PM - 8:00 PM",
      event: "Conference Dinner",
      type: "social",
      icon: Utensils,
    },
  ]

  const day2Schedule = [
    {
      time: "9:30 AM - 10:00 AM",
      event: "Registration",
      type: "admin",
      icon: Users,
    },
    {
      time: "10:00 AM - 10:30 AM",
      event: "Invited Talk - V",
      speaker:"Lalit Kumar Awasthi, CSE Department Director NITH, Hamirpur, Himachal Pradesh",
      topic: "Applications of Machine learning on Agricultural(Fruits) diseases",
      type: "keynote",
      icon: User,
    },
    {
      time: "10:30 AM - 11:00 AM",
      event: "Invited Talk - VI",
      speaker: "Dr. Raju Bhukya, Dept. of Computer Science and Engineering, NIT Warangal, Hanamkonda, Telangana",
      topic: "Yet to be confirmed",
      type: "keynote",
      icon: User,
    },
    {
      time: "10:30 AM - 11:00 AM",
      event: "Invited Talk - VI",
      speaker: "Dr. Chandra Sekhar Jatoth, Department of Information Technology,NIT, Raipur, Department of Computer Science and Engineering, IIT, Patna",
      topic: "Blockchain and AI: Synergies and Use cases",
      type: "keynote",
      icon: User,
    },
    {
      time: "11:00 AM - 11:15 AM",
      event: "Tea Break",
      type: "break",
      icon: Coffee,
    },
    {
      time: "11:15 AM - 12:30 PM",
      event: "Technical Sessions (Parallel)",
      sessions: [
        {
          title: "Natural Language Processing & Text Analytics",
          chairs: "Dr. E. Chandra & Dr. S Vasundra",
          coChairs: "Dr. G Venkanna & Dr. D Sreenivasa Rao",
        },
        {
          title: "Computer Vision & Image Processing",
          chairs: "Dr. S.U. Ghumbre & Dr. E Suresh Babu",
          coChairs: "Dr. B Malathi & Dr. M Praveen",
        },
        {
          title: "Robotics & Automation",
          chairs: "Dr. C Shoba Bindu & Dr. Kiran Kumar Reddy",
          coChairs: "Dr. Preethi Jeevan & Dr. G Vani",
        },
      ],
      type: "technical",
      icon: FileText,
    },
    {
      time: "12:30 PM - 1:30 PM",
      event: "Lunch Break",
      type: "break",
      icon: Utensils,
    },
    {
      time: "1:30 PM - 2:30 PM",
      event: "Panel Discussion",
      topic: "Future of AI in Industry and Academia",
      type: "discussion",
      icon: Users,
    },
    {
      time: "2:30 PM - 3:00 PM",
      event: "Best Paper Awards & Recognition",
      type: "ceremony",
      icon: Calendar,
    },
    {
      time: "3:00 PM - 3:30 PM",
      event: "Closing Ceremony",
      type: "ceremony",
      icon: Calendar,
    },
  ]

  const getScheduleData = (dayNumber: number) => {
    return dayNumber === 1 ? day1Schedule : day2Schedule
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-[#1D4ED8] text-white"
      case "technical":
        return "bg-[#F97316] text-white"
      case "break":
        return "bg-green-600 text-white"
      case "ceremony":
        return "bg-purple-600 text-white"
      case "discussion":
        return "bg-teal-600 text-white"
      case "presentation":
        return "bg-indigo-600 text-white"
      case "social":
        return "bg-pink-600 text-white"
      case "admin":
        return "bg-gray-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getTypeBg = (type: string) => {
    switch (type) {
      case "keynote":
        return "from-[#1D4ED8]/10 to-[#1D4ED8]/5"
      case "technical":
        return "from-[#F97316]/10 to-[#F97316]/5"
      case "break":
        return "from-green-600/10 to-green-600/5"
      case "ceremony":
        return "from-purple-600/10 to-purple-600/5"
      case "discussion":
        return "from-teal-600/10 to-teal-600/5"
      case "presentation":
        return "from-indigo-600/10 to-indigo-600/5"
      case "social":
        return "from-pink-600/10 to-pink-600/5"
      case "admin":
        return "from-gray-600/10 to-gray-600/5"
      default:
        return "from-gray-600/10 to-gray-600/5"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "submission":
        return "bg-[#1D4ED8] text-white"
      case "notification":
        return "bg-[#F97316] text-white"
      case "registration":
        return "bg-purple-600 text-white"
      case "conference":
        return "bg-green-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "submission":
        return "from-[#1D4ED8]/10 to-[#1D4ED8]/5"
      case "notification":
        return "from-[#F97316]/10 to-[#F97316]/5"
      case "registration":
        return "from-purple-600/10 to-purple-600/5"
      case "conference":
        return "from-green-600/10 to-green-600/5"
      default:
        return "from-gray-600/10 to-gray-600/5"
    }
  }

  const toggleDay = (dayNumber: number) => {
    setExpandedDay(expandedDay === dayNumber ? null : dayNumber)
  }

  return (
    <ConferenceLayout
      title="Important Dates"
      subtitle="Mark your calendar with these crucial deadlines and conference dates for NCNTAIA 2025"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Timeline Overview */}
        <section>
          <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white p-8">
              <CardTitle className="text-3xl font-bold flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                Conference Timeline
              </CardTitle>
              <p className="text-xl opacity-90 mt-2">All times are in Indian Standard Time (IST) - UTC+5:30</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {importantDates.map((item, index) => {
                  const IconComponent = item.icon
                  const isConferenceDay = item.category === "conference" && item.dayNumber

                  return (
                    <div key={index}>
                      <div
                        className={`relative p-6 bg-gradient-to-r ${getCategoryBg(item.category)} rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                          isConferenceDay ? "cursor-pointer" : ""
                        }`}
                        onClick={isConferenceDay ? () => toggleDay(item.dayNumber!) : undefined}
                      >
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div
                              className={`w-16 h-16 ${getCategoryColor(item.category)} rounded-2xl flex items-center justify-center shadow-lg`}
                            >
                              <IconComponent className="w-8 h-8" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                              <h3 className="text-xl font-bold text-[#1E293B] flex items-center gap-2">
                                {item.event}
                                {isConferenceDay && (
                                  <div className="transition-transform duration-300">
                                    {expandedDay === item.dayNumber ? (
                                      <ChevronUp className="w-5 h-5 text-[#1D4ED8]" />
                                    ) : (
                                      <ChevronDown className="w-5 h-5 text-[#1D4ED8]" />
                                    )}
                                  </div>
                                )}
                              </h3>
                              <Badge
                                className={`${getCategoryColor(item.category)} border-0 px-3 py-1 text-sm font-medium`}
                              >
                                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                              </Badge>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-[#1D4ED8]" />
                                <span className="text-lg font-semibold text-[#1E293B]">{item.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[#F97316]" />
                                <span className="text-lg font-semibold text-[#1E293B]">{item.time}</span>
                              </div>
                            </div>
                            <p className="text-[#475569] leading-relaxed">{item.description}</p>
                            {isConferenceDay && (
                              <p className="text-sm text-[#1D4ED8] mt-2 font-medium">
                                Click to view detailed schedule →
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expandable Schedule */}
                      {isConferenceDay && expandedDay === item.dayNumber && (
                        <div className="mt-4 overflow-hidden">
                          <div className="animate-in slide-in-from-top-2 duration-500">
                            <Card className="shadow-xl border-0 bg-white rounded-2xl overflow-hidden">
                              <CardHeader className="bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white p-6">
                                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                  <Calendar className="w-7 h-7" />
                                  Day {item.dayNumber} Detailed Schedule
                                </CardTitle>
                                <p className="text-lg opacity-90">{item.date}</p>
                              </CardHeader>
                              <CardContent className="p-6">
                                <div className="space-y-4">
                                  {getScheduleData(item.dayNumber!).map((scheduleItem, scheduleIndex) => {
                                    const ScheduleIcon = scheduleItem.icon
                                    return (
                                      <div
                                        key={scheduleIndex}
                                        className={`p-4 bg-gradient-to-r ${getTypeBg(scheduleItem.type)} rounded-xl hover:shadow-md transition-all duration-300 hover:scale-[1.01]`}
                                      >
                                        <div className="flex items-start gap-4">
                                          <div className="flex-shrink-0">
                                            <div
                                              className={`w-12 h-12 ${getTypeColor(scheduleItem.type)} rounded-xl flex items-center justify-center shadow-sm`}
                                            >
                                              <ScheduleIcon className="w-6 h-6" />
                                            </div>
                                          </div>
                                          <div className="flex-grow">
                                            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-2">
                                              <Badge className="bg-[#1D4ED8]/10 text-[#1D4ED8] text-sm px-3 py-1 w-fit">
                                                {scheduleItem.time}
                                              </Badge>
                                              <h4 className="text-lg font-bold text-[#1E293B]">{scheduleItem.event}</h4>
                                            </div>

                                            {scheduleItem.speaker && (
                                              <div className="mb-2">
                                                <p className="text-sm font-semibold text-[#1D4ED8] mb-1">Speaker:</p>
                                                <p className="text-sm text-[#475569]">{scheduleItem.speaker}</p>
                                              </div>
                                            )}

                                            {scheduleItem.topic && (
                                              <div className="mb-2">
                                                <p className="text-sm font-semibold text-[#F97316] mb-1">Topic:</p>
                                                <p className="text-sm text-[#475569]">{scheduleItem.topic}</p>
                                              </div>
                                            )}

                                            {scheduleItem.sessions && (
                                              <div className="space-y-3 mt-3">
                                                <p className="text-sm font-semibold text-[#1E293B]">
                                                  Parallel Sessions:
                                                </p>
                                                <div className="grid gap-3">
                                                  {scheduleItem.sessions.map((session, sessionIndex) => (
                                                    <div
                                                      key={sessionIndex}
                                                      className="bg-white/50 p-3 rounded-lg border border-gray-200"
                                                    >
                                                      <h5 className="font-semibold text-[#1E293B] text-sm mb-2">
                                                        {session.title}
                                                      </h5>
                                                      <div className="space-y-1 text-xs text-[#475569]">
                                                        <p>
                                                          <span className="font-medium">Chairs:</span> {session.chairs}
                                                        </p>
                                                        <p>
                                                          <span className="font-medium">Co-Chairs:</span>{" "}
                                                          {session.coChairs}
                                                        </p>
                                                      </div>
                                                    </div>
                                                  ))}
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Reference Cards */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-4">Quick Reference</h2>
            <p className="text-lg text-[#475569]">Key deadlines at a glance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-[#1D4ED8] to-[#1D4ED8]/80 text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">Abstract Deadline</h3>
                <p className="text-2xl font-bold mb-1">Aug 08</p>
                <p className="text-sm opacity-90">2025</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-600 to-purple-600/80 text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Bell className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">Notification of Acceptance</h3>
                <p className="text-2xl font-bold mb-1">Aug 14</p>
                <p className="text-sm opacity-90">2025</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-[#F97316] to-[#F97316]/80 text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">Full Paper Deadline</h3>
                <p className="text-2xl font-bold mb-1">Aug 30</p>
                <p className="text-sm opacity-90">2025</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-600 to-green-600/80 text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">Registration Deadline</h3>
                <p className="text-2xl font-bold mb-1">Sep 05</p>
                <p className="text-sm opacity-90">2025</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-600 to-green-600/80 text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">Conference</h3>
                <p className="text-2xl font-bold mb-1">Sep 11-12</p>
                <p className="text-sm opacity-90">2025</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Time Zone & Contact Info */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  Time Zone Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#1E293B] mb-2">Important Note</h4>
                        <p className="text-[#475569] text-sm">
                          All deadlines are based on <strong>Indian Standard Time (IST)</strong> - UTC+5:30
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center p-3 bg-[#F9FAFB] rounded-lg">
                      <span className="font-medium text-[#1E293B]">IST (India)</span>
                      <span className="text-[#475569]">UTC+5:30</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#F9FAFB] rounded-lg">
                      <span className="font-medium text-[#1E293B]">EST (US East)</span>
                      <span className="text-[#475569]">UTC-5:00</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#F9FAFB] rounded-lg">
                      <span className="font-medium text-[#1E293B]">GMT (London)</span>
                      <span className="text-[#475569]">UTC+0:00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#1D4ED8] to-[#F97316] text-white p-6">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-[#475569]">For any questions regarding deadlines, submissions, or scheduling:</p>
                  <div className="bg-[#1D4ED8]/5 p-4 rounded-xl border border-[#1D4ED8]/20">
                    <div className="text-center">
                      <p className="text-sm text-[#475569] mb-2">Contact Email:</p>
                      <p className="font-mono text-[#1D4ED8] text-lg font-semibold">ncntaia-2025@sreenidhi.edu.in</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-[#475569]">
                      We typically respond within 24-48 hours during business days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </ConferenceLayout>
  )
}
