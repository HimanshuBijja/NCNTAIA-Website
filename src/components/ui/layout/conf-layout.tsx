"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface ConferenceLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
}

export default function ConferenceLayout({
    children,
    title,
    subtitle,
}: ConferenceLayoutProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const getActiveLink = (href: string) =>
        pathname === href
            ? "text-blue-400"
            : "text-slate-200 hover:text-blue-400";

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* 🔹 Announcement Bar */}

            <div className="bg-slate-900 text-white text-sm text-center py-2 px-4">
                National Conference on Next-Gen Technologies in AI Applications
                | September 11–12, 2025 | SNIST Hyderabad, India and Online
            </div>

            {/* Logo Strip */}
            <div className="flex justify-center items-center gap-6 py-2 px-4 bg-white">
                <Image
                    src="https://sreenidhi.edu.in/wp-content/uploads/2020/09/logo-snist.jpg"
                    alt="SNIST"
                    width={215}
                    height={215}
                />
                <Image
                    src="https://sreenidhi.edu.in/wp-content/uploads/2020/09/nirf-logo-1.png"
                    alt="NIRF"
                    width={55}
                    height={50}
                />
                <Image
                    src="https://sreenidhi.edu.in/wp-content/uploads/2020/09/logo-strip.jpg"
                    alt="Approvals"
                    width={290}
                    height={80}
                />
            </div>

            {/* 🔹 Navigation Bar changes */}
            <nav
                className={`bg-slate-900 shadow-md z-40 transition-all duration-700 ${
                    isLoaded ? "opacity-100" : "opacity-100"
                }`}
                style={{ transitionDelay: "300ms" }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-4">
                        {/* 🔸 Title */}
                        <Link
                            href="/"
                            className="text-center md:text-left mb-3 md:mb-0"
                        >
                            <h1 className="text-2xl font-bold text-white leading-tight">
                                <span className="text-blue-400">NCNTAIA</span>25
                            </h1>
                            <p className="text-xs text-slate-300 hidden sm:block">
                                National Conference on Next-Gen Technologies in
                                AI Applications
                            </p>
                        </Link>

                        {/* 🔸 Menu */}
                        <div className="hidden lg:flex items-center space-x-6">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                {
                                    name: "Call for Papers",
                                    path: "/callforpapers",
                                },
                                { name: "Tracks", path: "/tracks" },
                                { name: "Speakers", path: "/speakers" },
                                { name: "Dates", path: "/dates" },
                                { name: "Committee", path: "/committee" },
                                { name: "Brochure", path: "/brochure" },
                                { name: "Sponsors", path: "/sponsorship" },
                            ].map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`${getActiveLink(
                                        item.path
                                    )} transition duration-300 text-sm font-medium`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* 🔸 Register */}
                        <div className="mt-4 md:mt-0">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
                                Register
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 🔹 Page Header */}
            <div className="pt-16 pb-10 bg-gradient-to-r from-slate-900 to-slate-800">
                <div className="container mx-auto px-4 text-center transition-all duration-1000">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {/* 🔹 Page Content */}
            <main className="container mx-auto px-4 py-12 flex-1">
                {children}
            </main>

            {/* 🔹 Footer */}
            <footer className="bg-slate-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Left Block - Conference Info and Sponsored By */}
                        <div>
                            <h3 className="text-xl font-bold mb-2">
                                <span className="text-blue-400">NCNTAIA</span>{" "}
                                2025
                            </h3>
                            <p className="text-slate-300 mb-2">
                                National Conference on Next-Gen Technologies in
                                AI Applications
                            </p>
                            <h4 className="font-semibold mb-1">Sponsored By</h4>
                            <p className="text-slate-300">ANRF - Sponsored</p>
                        </div>

                        {/* Middle Block - Contact */}
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <p className="text-slate-300">
                                Email: ncntaia-2025@sreenidhi.edu.in
                                <br />
                                Call : +91 96664 44100
                                <br />
                                      +91 99126 67488
                            </p>
                        </div>

                        {/* Right Block - Organized By */}
                        <div>
  <h4 className="font-semibold mb-4">Organized By</h4>
  <p className="text-slate-300">
    Sreenidhi Institute of Science & Technology
    <br />
    Yamnampet, Ghatkesar, Hyderabad - 501301,
    <br />
    Telangana, India.
    <br />
    <a href="mailto:ncntaia-2025@sreenidhi.edu.in" className="underline text-orange-400 hover:text-orange-300">
      ncntaia-2025@sreenidhi.edu.in
    </a>
    <br />
    <a
      href="https://maps.google.com/?q=Sreenidhi+Institute+of+Science+and+Technology"
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-400 hover:text-blue-300"
    >
      View Location on Map
    </a>
  </p>
</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
