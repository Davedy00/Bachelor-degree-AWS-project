'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

export default function HomePage() {
  const imagesGridRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [
    { src: "/placeholder.jpg", alt: "Farm 1" },
    { src: "/farmer-buyer-home-page.png", alt: "Farm 2" },
    { src: "/3d-farmers-buyers.svg", alt: "Farm 3" },
    { src: "/placeholder-user.jpg", alt: "Farm 4" },
    { src: "/placeholder-logo.png", alt: "Farm 5" },
    { src: "/jean-paul-nkeng.png", alt: "Farm 6" },
  ]

  useEffect(() => {
    const grid = imagesGridRef.current
    if (!grid) return
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % images.length
      setCurrentIndex(index)
      grid.scrollTo({ left: index * 360, behavior: 'smooth' })
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Sync dot click with scroll
  const handleDotClick = (idx: number) => {
    setCurrentIndex(idx)
    imagesGridRef.current?.scrollTo({ left: idx * 360, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A+</span>
            </div>
            <span className="text-xl font-bold text-green-800">AgriHub+</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/farmers" className="text-gray-600 hover:text-green-600">
              Farmers
            </Link>
            <Link href="/buyers" className="text-gray-600 hover:text-green-600">
              Buyers
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-green-600">
              About
            </Link>
            <Link href="/sms-ussd" className="text-gray-600 hover:text-green-600">
              SMS/USSD Demo
            </Link>
            <Link href="/voice-interface" className="text-gray-600 hover:text-green-600">
              Voice Demo
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Create Account</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Connecting Farmers
                <span className="text-green-600 block">to Markets</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                AgriHub+ is a cloud-based agricultural e-marketplace that creates awareness, ensures fair pricing, and
                creates transparent connections between farmers and buyers across Cameroon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/farmers">I'm a Farmer</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/buyers">I'm a Buyer</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - 3D Image */}
            <div className="relative h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/farmer-buyer-home-page.png"
                      alt="Farmers and Buyers 3D Illustration"
                      fill
                      className="object-contain animate-float"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SMS & USSD Support Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-green-300/30 via-blue-200/30 to-emerald-100/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-blue-100/30 to-sky-100/30"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">SMS & USSD Support</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Access the platform via basic phones with SMS alerts and USSD integration
                </p>
                <div className="flex space-x-2 mb-4">
                  <Button variant="outline" size="sm" asChild className="bg-white/80 backdrop-blur-sm border-blue-200 hover:bg-blue-50">
                    <Link href="/sms-ussd">SMS/USSD Demo</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="bg-white/80 backdrop-blur-sm border-green-200 hover:bg-green-50">
                    <Link href="/voice-interface">Voice Demo</Link>
                  </Button>
                </div>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/features/sms-ussd">Read More</Link>
                </Button>
              </div>
            </div>

            {/* Direct Connections Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-green-300/30 via-blue-200/30 to-emerald-100/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-blue-100/30 to-sky-100/30"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Connections</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Connect farmers directly with buyers
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/features/direct-connections">Read More</Link>
                </Button>
              </div>
            </div>

            {/* AI-Powered Pricing Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-green-300/30 via-blue-200/30 to-emerald-100/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-blue-100/30 to-sky-100/30"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Pricing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Get intelligent pricing recommendations based on market trends and data
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/features/ai-pricing">Read More</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Money Integration Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-green-300/30 via-blue-200/30 to-emerald-100/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-blue-100/30 to-sky-100/30"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Money Integration</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Secure payments via MTN Mobile Money and Orange Money
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/features/mobile-money">Read More</Link>
                </Button>
              </div>
            </div>

            {/* Real-time Alerts Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-green-300/30 via-blue-200/30 to-emerald-100/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-blue-100/30 to-sky-100/30"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Alerts</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Instant notifications for market prices, buyer requests, and opportunities
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/features/real-time-alerts">Read More</Link>
                </Button>
              </div>
            </div>

            {/* Cloud-Based Platform Card */}
            <div className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-green-300/30 via-blue-200/30 to-emerald-100/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 via-blue-100/30 to-sky-100/30"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-400 flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud-Based Platform</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Scalable AWS infrastructure ensuring 99.9% uptime and global accessibility
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/features/cloud-platform">Read More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Images Grid Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Farming in Action</h2>
          <div
            ref={imagesGridRef}
            className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {images.map((img, i) => (
              <div key={i} className="min-w-[350px] rounded-xl overflow-hidden shadow-lg snap-center">
                <Image src={img.src} alt={img.alt} width={400} height={250} className="object-cover w-full h-64" />
              </div>
            ))}
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none ${
                  idx === currentIndex ? 'bg-green-600 scale-125' : 'bg-gray-300'
                }`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Charts & Graphs Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How AgriHub+ Upscales Farmer Revenue & Sales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Line Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Revenue Growth (Line Chart)</h3>
              <div className="w-full h-72">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="200" fill="#f0fdf4" />
                  <polyline
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="6"
                    points="0,180 50,160 100,140 150,120 200,100 250,80 300,60 350,40 400,20"
                  />
                  <circle cx="400" cy="20" r="8" fill="#22c55e" />
                  <text x="320" y="40" fill="#22c55e" fontSize="16" fontWeight="bold">Revenue</text>
                  <text x="10" y="195" fill="#64748b" fontSize="12">Year 1</text>
                  <text x="340" y="195" fill="#64748b" fontSize="12">Year 5</text>
                </svg>
              </div>
              <p className="mt-6 text-gray-600 text-center">
                Revenue increases steadily as farmers leverage AgriHub+ tools.
              </p>
            </div>
            {/* Bar Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Sales Volume (Bar Chart)</h3>
              <div className="w-full h-72 flex items-end">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="200" fill="#eff6ff" />
                  <rect x="30" y="150" width="40" height="30" fill="url(#barGradient)" rx="8" />
                  <rect x="90" y="120" width="40" height="60" fill="url(#barGradient)" rx="8" />
                  <rect x="150" y="90" width="40" height="90" fill="url(#barGradient)" rx="8" />
                  <rect x="210" y="60" width="40" height="120" fill="url(#barGradient)" rx="8" />
                  <rect x="270" y="40" width="40" height="140" fill="url(#barGradient)" rx="8" />
                  <rect x="330" y="20" width="40" height="160" fill="url(#barGradient)" rx="8" />
                  <text x="35" y="195" fill="#64748b" fontSize="12">Y1</text>
                  <text x="95" y="195" fill="#64748b" fontSize="12">Y2</text>
                  <text x="155" y="195" fill="#64748b" fontSize="12">Y3</text>
                  <text x="215" y="195" fill="#64748b" fontSize="12">Y4</text>
                  <text x="275" y="195" fill="#64748b" fontSize="12">Y5</text>
                  <text x="335" y="195" fill="#64748b" fontSize="12">Y6</text>
                </svg>
              </div>
              <p className="mt-6 text-gray-600 text-center">
                Sales volume grows year over year as market access expands.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      {/* Stats Section */}
      {/* <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Registered Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Active Buyers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">₣2.5B</div>
              <div className="text-gray-600">Total Transactions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-600">Reduced Post-Harvest Loss</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Agriculture in Cameroon?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers and buyers already using AgriHub+ to create a more efficient and profitable
            agricultural ecosystem.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/register">Start Your Journey Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A+</span>
                </div>
                <span className="text-xl font-bold">AgriHub+</span>
              </div>
              <p className="text-gray-400">
                Empowering Cameroon's agricultural sector through technology and innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/farmers">Farmers</Link>
                </li>
                <li>
                  <Link href="/buyers">Buyers</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/api">API</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/community">Community</Link>
                </li>
                <li>
                  <Link href="/training">Training</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
                <li>
                  <Link href="/legal">Legal</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AgriHub+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
