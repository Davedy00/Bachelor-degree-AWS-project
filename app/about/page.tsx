import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, Globe, Shield, Zap, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { label: "Registered Farmers", value: "10,000+", icon: Users },
    { label: "Active Buyers", value: "500+", icon: Target },
    { label: "Successful Transactions", value: "₣2.5B", icon: Award },
    { label: "Post-Harvest Loss Reduction", value: "30%", icon: TrendingUp },
  ]

  const features = [
    {
      icon: Globe,
      title: "Cloud-Based Infrastructure",
      description: "Built on AWS with 99.9% uptime, ensuring reliable access across Cameroon",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Integrated with MTN Mobile Money and Orange Money for safe transactions",
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "SMS and USSD notifications keep farmers informed of market opportunities",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "Supporting local communities with training and technology access",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A+</span>
            </div>
            <span className="text-xl font-bold text-green-800">AgriHub+</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/farmers" className="text-gray-600 hover:text-green-600">
              For Farmers
            </Link>
            <Link href="/buyers" className="text-gray-600 hover:text-green-600">
              For Buyers
            </Link>
            <Link href="/about" className="text-green-600 font-medium">
              About
            </Link>
          </nav>
          <Button asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto text-center">
          <Badge className="mb-4">About AgriHub+</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Agriculture
            <span className="text-green-600 block">in Cameroon</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AgriHub+ is a cloud-based agricultural e-marketplace that connects farmers directly with buyers, eliminating
            middlemen and ensuring fair pricing for everyone in the agricultural value chain.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that technology can bridge the gap between Cameroon's hardworking farmers and the buyers who
                need their crops. Our platform eliminates the traditional barriers that have kept farmers from accessing
                fair markets.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By leveraging cloud computing, mobile technology, and AI-powered insights, we're creating a transparent,
                efficient, and profitable ecosystem for agricultural trade in Cameroon.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Eliminate middlemen and increase farmer profits</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Reduce post-harvest losses through better market access</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Provide market intelligence and fair pricing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                  <p className="text-gray-700">Support food security and economic growth</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Cameroon</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is designed specifically for the Cameroonian market, supporting both smartphone users and
              those with basic phones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-green-600 mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Architecture</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AgriHub+ is built on a robust cloud infrastructure using AWS services, ensuring scalability, security, and
              reliability for all users.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Components</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Web Portal & Mobile App</h4>
                  <p className="text-gray-600 text-sm">
                    React-based frontend hosted on Amazon S3 with CloudFront CDN for fast global access
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Backend APIs</h4>
                  <p className="text-gray-600 text-sm">
                    Serverless architecture using AWS Lambda and API Gateway for scalable backend services
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Database & Storage</h4>
                  <p className="text-gray-600 text-sm">
                    Amazon RDS for transactional data and S3 data lake for analytics and machine learning
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                  <p className="text-gray-600 text-sm">
                    Amazon SNS for SMS alerts and third-party USSD gateway integration
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cloud Data Platform</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Data Ingestion Layer</h4>
                  <p className="text-green-800 text-sm">Streaming and batch data ingestion from multiple sources</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Data Storage Layer</h4>
                  <p className="text-blue-800 text-sm">Fast and slow storage for different data access patterns</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Data Processing Layer</h4>
                  <p className="text-purple-800 text-sm">AWS Glue for ETL and data transformation pipelines</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Data Serving Layer</h4>
                  <p className="text-orange-800 text-sm">Amazon Athena and QuickSight for analytics and insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            AgriHub+ was created by Kenne Geri and Kameny Fred Audrey, passionate about leveraging technology to
            transform agriculture in Cameroon.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KG</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Kenne Geri</h3>
                <p className="text-gray-600 text-sm">Co-Founder & Technical Lead</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KF</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Kameny Fred Audrey</h3>
                <p className="text-gray-600 text-sm">Co-Founder & Business Development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Agricultural Revolution</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a farmer looking to sell your crops or a buyer seeking fresh produce, AgriHub+ is here to
            connect you with the right opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/farmers">I'm a Farmer</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600"
              asChild
            >
              <Link href="/buyers">I'm a Buyer</Link>
            </Button>
          </div>
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
            <p>&copy; 2024 AgriHub+. All rights reserved. Built with ❤️ for Cameroon's farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
