import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Smartphone, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react"

export default function HomePage() {
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
              For Farmers
            </Link>
            <Link href="/buyers" className="text-gray-600 hover:text-green-600">
              For Buyers
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
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connecting Cameroon's Farmers
            <span className="text-green-600 block">to Global Markets</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AgriHub+ is a cloud-based agricultural e-marketplace that creates awareness, ensures fair pricing, and
            creates transparent connections between farmers and buyers across Cameroon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/farmers">I'm a Farmer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/buyers">I'm a Buyer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Smartphone className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>SMS & USSD Support</CardTitle>
                <CardDescription>
                  Access the platform via basic phones with SMS alerts and USSD integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/sms-ussd">SMS/USSD Demo</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/voice-interface">Voice Demo</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Direct Connections</CardTitle>
                <CardDescription>Connect farmers directly with buyers</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>AI-Powered Pricing</CardTitle>
                <CardDescription>
                  Get intelligent pricing recommendations based on market trends and data
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Mobile Money Integration</CardTitle>
                <CardDescription>Secure payments via MTN Mobile Money and Orange Money</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Real-time Alerts</CardTitle>
                <CardDescription>
                  Instant notifications for market prices, buyer requests, and opportunities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Cloud-Based Platform</CardTitle>
                <CardDescription>
                  Scalable AWS infrastructure ensuring 99.9% uptime and global accessibility
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-green-50">
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
      </section>

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
                  <Link href="/farmers">For Farmers</Link>
                </li>
                <li>
                  <Link href="/buyers">For Buyers</Link>
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
            <p>&copy; 2025 AgriHub+. All rights reserved. Built with ❤️ for Cameroon's farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
