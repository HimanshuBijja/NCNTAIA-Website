"use client"

import ConferenceLayout from "@/components/ui/layout/conf-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
  Mail,
  DollarSign, // Added DollarSign icon
} from "lucide-react"

export default function CallForPapersPage() {
  const emailAddress = "ncntaia-2025@sreenidhi.edu.in"
  const mailToLink = `mailto:${emailAddress}`

  return (
    <ConferenceLayout
      title="Call for Papers"
      subtitle="Submit your research contributions to NCNTAIA 2025 and be part of advancing AI technologies"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Submission Process */}
        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-600" />
                How to Submit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-4">Submission Email</h4>
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-mono text-slate-800">{emailAddress}</span>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Send your abstracts and full papers to the above email address with appropriate subject lines.
                </p>
              </div>

              <div className="text-center">
                <a href={mailToLink}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    Submit Your Paper
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Submission Guidelines */}
        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Abstract Submission */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <Upload className="w-5 h-5 text-blue-600" />
                    Abstract Submission
                  </h3>
                  <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">Format Requirements</p>
                        <p className="text-sm text-slate-600">PDF format, Times New Roman font, 1 page maximum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">Required Information</p>
                        <p className="text-sm text-slate-600">Title, Authors Names, Affiliations, Email IDs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">Submission Deadline</p>
                        <p className="text-sm text-slate-600 font-semibold">August 08, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Paper Submission */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Full Paper Submission
                  </h3>
                  <div className="bg-green-50 p-4 rounded-lg space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">Format Requirements</p>
                        <p className="text-sm text-slate-600">IEEE format (Word or PDF), 6 pages maximum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">Additional Pages</p>
                        <p className="text-sm text-slate-600">+2 additional pages allowed with ₹250/page extra</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">Submission Deadline</p>
                        <p className="text-sm text-slate-600 font-semibold">August 30, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Plagiarism Policy */}
        <section>
          <Card className="shadow-lg border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                Plagiarism Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">Plagiarism Threshold</p>
                      <p className="text-slate-600">Less than 10% plagiarism allowed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">Detection Tools</p>
                      <p className="text-slate-600">
                        All submissions will be checked using reliable plagiarism detection tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">Consequences</p>
                      <p className="text-slate-600">Violations will lead to immediate rejection</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                <strong>Important:</strong> All submissions must be original, unpublished, and plagiarism-free. Authors
                are responsible for ensuring their work meets these requirements.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Publication Information */}
        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Publications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">Peer Review Process</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    All accepted papers will undergo a rigorous peer-review process by experts in the field.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      Double-blind review process
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      Expert reviewers from academia and industry
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                      Comprehensive feedback provided
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-3">Journal Publications</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Selected papers will be recommended for publication in SCOPUS/WoS indexed journals.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      SCOPUS indexed journals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Web of Science indexed journals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      High impact factor publications
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Registration Details */}
        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-green-600" />
                Conference Registration Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Research Scholars / Students */}
                <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col h-full">
                  <h4 className="font-bold text-blue-700 text-xl mb-2">Research Scholars / Students</h4>
                  <p className="text-3xl font-extrabold text-blue-600 mb-4">₹500</p>
                  <ul className="space-y-2 text-sm text-slate-700 flex-grow">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Access to all sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Conference kit
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Lunch & refreshments
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Certificate of participation
                    </li>
                  </ul>
                </div>

                {/* Faculty & Scientist */}
                <div className="bg-green-50 p-6 rounded-lg shadow-md flex flex-col h-full">
                  <h4 className="font-bold text-green-700 text-xl mb-2">Faculty & Scientist</h4>
                  <p className="text-3xl font-extrabold text-green-600 mb-4">₹1000</p>
                  <ul className="space-y-2 text-sm text-slate-700 flex-grow">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Access to all sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-1" />
                      Conference kit
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Lunch & refreshments
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Certificate of participation
                    </li>
                  </ul>
                </div>

                {/* Industry Persons */}
                <div className="bg-orange-50 p-6 rounded-lg shadow-md flex flex-col h-full">
                  <h4 className="font-bold text-orange-700 text-xl mb-2">Industry Persons</h4>
                  <p className="text-3xl font-extrabold text-orange-600 mb-4">₹2500</p>
                  <ul className="space-y-2 text-sm text-slate-700 flex-grow">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Access to all sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Conference kit
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Lunch & refreshments
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Certificate of participation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Networking opportunities
                    </li>
                  </ul>
                </div>

                {/* Foreign Participants */}
                <div className="bg-purple-50 p-6 rounded-lg shadow-md flex flex-col h-full">
                  <h4 className="font-bold text-purple-700 text-xl mb-2">Foreign Participants</h4>
                  <p className="text-3xl font-extrabold text-purple-600 mb-4">$100</p>
                  <ul className="space-y-2 text-sm text-slate-700 flex-grow">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Access to all sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Conference kit
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Lunch & refreshments
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Certificate of participation
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      Networking opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ConferenceLayout>
  )
}