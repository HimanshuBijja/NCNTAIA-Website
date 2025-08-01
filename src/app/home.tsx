import Image from "next/image"
import { Button } from "@/components/ui/button"


export default function Header() {
  return (
    <>
      {/* Top Banner */}
      <div className="bg-slate-800 text-white py-2 px-4 text-center text-sm">
        National Conference on Next-Gen Technologies in AI Applications | September 11-12, 2025 | SNIST Hyderabad, India and Online
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* Title */}
            
              <div className="flex flex-col items-center text-center lg:items-end lg:text-right mb-4 lg:mb-0 lg:mr-8">
                <div className="text-2xl font-bold text-slate-800">
                  NCNTAIA<span className="text-blue-600">25</span>
                </div>
                <div className="text-sm text-gray-600 leading-tight">
                  National Conference on Next-Gen
                  <br />
                  Technologies in AI Applications
                </div>
              </div>



            {/* 🔹 Logos Section */}
            <div className="flex items-center space-x-3 mb-3 lg:mb-0">
              <Image src="https://sreenidhi.edu.in/wp-content/uploads/2020/09/logo-snist.jpg" alt="SNIST" width={200} height={200} />
              <Image src="https://sreenidhi.edu.in/wp-content/uploads/2020/09/nirf-logo-1.png" alt="NIRF" width={50} height={50} />
              <Image src="https://sreenidhi.edu.in/wp-content/uploads/2020/09/logo-strip.jpg" alt="Approvals" width={250} height={50} />
            </div>

            {/* 🔹 Conference Title & Navigation */}
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8 w-full lg:w-auto">
              
              

              {/* Nav Menu */}
              <nav className="hidden lg:flex items-center space-x-6">
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">Home</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">About</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">Call for Papers</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">Tracks</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">Speakers</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">Dates</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">Committee</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">Brochure</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-700 hover:text-blue-600 cursor-pointer">
                  <span className="font-medium">Sponsers</span>
                </div>
              </nav>

              {/* CTA Button */}
              <div className="ml-0 lg:ml-6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
                  Register
                </Button>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  )
}