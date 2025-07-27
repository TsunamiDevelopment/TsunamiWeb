import { ArrowRight, Code, Globe, Palette, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work & Portfolio</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Explore our latest web design projects and discover the diverse portfolio of companies we own and operate
              across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Client Web Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Web Design Projects</h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* E-Commerce Platform */}
            <Card className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-br from-white to-slate-50 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">EC</span>
              </div>

              <CardHeader className="pr-24">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>Launched 2024</span>
                  <span className="text-green-600 font-medium">↗ 150% Traffic</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <Palette className="h-12 w-12 text-blue-600 drop-shadow-lg" />
                  <Badge variant="secondary">E-Commerce</Badge>
                </div>
                <CardTitle className="text-2xl">Modern E-Commerce Platform</CardTitle>
                <CardDescription className="text-lg">Complete online store with payment integration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  A fully responsive e-commerce website featuring custom product catalogs, secure payment processing,
                  inventory management, and customer account portals. Built with modern technologies for optimal
                  performance and user experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Industry:</span>
                    <span className="text-slate-600">Retail & E-Commerce</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Launch Date:</span>
                    <span className="text-slate-600">March 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Technologies:</span>
                    <span className="text-slate-600">Next.js, Stripe, Tailwind</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Results:</span>
                    <span className="text-slate-600">150% increase in traffic</span>
                  </div>
                </div>
                <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link href="/projects/ecommerce-platform">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Restaurant Website */}
            <Card className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-br from-white to-slate-50 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">RS</span>
              </div>

              <CardHeader className="pr-24">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>Launched 2024</span>
                  <span className="text-green-600 font-medium">↗ 200% Reservations</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <Globe className="h-12 w-12 text-green-600 drop-shadow-lg" />
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Restaurant
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Interactive Restaurant Website</CardTitle>
                <CardDescription className="text-lg">Online menu and reservation system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Beautiful restaurant website featuring interactive menus, online reservation system, photo galleries,
                  and social media integration. Designed to showcase the dining experience and drive bookings.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Industry:</span>
                    <span className="text-slate-600">Food & Beverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Launch Date:</span>
                    <span className="text-slate-600">February 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Features:</span>
                    <span className="text-slate-600">Online Ordering, Reservations</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Results:</span>
                    <span className="text-slate-600">200% more reservations</span>
                  </div>
                </div>
                <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link href="/projects/restaurant-website">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Portfolio */}
            <Card className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-br from-white to-slate-50 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">CP</span>
              </div>

              <CardHeader className="pr-24">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>Launched 2024</span>
                  <span className="text-green-600 font-medium">↗ 300% Engagement</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <Code className="h-12 w-12 text-purple-600 drop-shadow-lg" />
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    Corporate
                  </Badge>
                </div>
                <CardTitle className="text-2xl">Professional Corporate Website</CardTitle>
                <CardDescription className="text-lg">Business showcase and lead generation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Sleek corporate website showcasing professional services, team expertise, client testimonials, and
                  case studies. Features modern animations and optimized for lead generation and conversions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Industry:</span>
                    <span className="text-slate-600">Professional Services</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Launch Date:</span>
                    <span className="text-slate-600">January 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Focus:</span>
                    <span className="text-slate-600">Lead Generation, SEO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Results:</span>
                    <span className="text-slate-600">300% more engagement</span>
                  </div>
                </div>
                <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link href="/projects/corporate-portfolio">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* SaaS Platform */}
            <Card className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-br from-white to-slate-50 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">SP</span>
              </div>

              <CardHeader className="pr-24">
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>Launched 2023</span>
                  <span className="text-green-600 font-medium">↗ 400% Signups</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <Zap className="h-12 w-12 text-orange-600 drop-shadow-lg" />
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    SaaS
                  </Badge>
                </div>
                <CardTitle className="text-2xl">SaaS Platform Interface</CardTitle>
                <CardDescription className="text-lg">User dashboard and subscription management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Comprehensive SaaS platform with user authentication, subscription management, analytics dashboards,
                  and API integrations. Built for scalability and optimal user experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Industry:</span>
                    <span className="text-slate-600">Software as a Service</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Launch Date:</span>
                    <span className="text-slate-600">December 2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Features:</span>
                    <span className="text-slate-600">Dashboard, Analytics, API</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Results:</span>
                    <span className="text-slate-600">400% increase in signups</span>
                  </div>
                </div>
                <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link href="/projects/saas-platform">
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Companies */}
          <div className="border-t pt-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Portfolio Companies</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">TF</span>
                </div>
                <CardHeader className="pr-20">
                  <CardTitle>TechFlow Solutions</CardTitle>
                  <CardDescription>Software Development & Consulting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Enterprise software solutions and digital transformation services for Fortune 500 companies.
                  </p>
                  <Badge>Portfolio Company</Badge>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">GW</span>
                </div>
                <CardHeader className="pr-20">
                  <CardTitle>GreenWave Energy</CardTitle>
                  <CardDescription>Renewable Energy Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Solar and wind power solutions for commercial and residential markets across the Western US.
                  </p>
                  <Badge>Portfolio Company</Badge>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">UL</span>
                </div>
                <CardHeader className="pr-20">
                  <CardTitle>Urban Logistics Hub</CardTitle>
                  <CardDescription>Supply Chain & Distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Modern logistics and distribution network optimizing supply chain efficiency for e-commerce.
                  </p>
                  <Badge>Portfolio Company</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
