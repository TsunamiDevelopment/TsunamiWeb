import { ArrowLeft, ExternalLink, Globe, ImageIcon, Truck } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UrbanLogisticsHubPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-2xl">UL</span>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-purple-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Truck className="h-16 w-16 text-purple-400" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Urban Logistics Hub</h1>
                <p className="text-xl text-purple-200">Supply Chain & Distribution Network</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-purple-500/20 text-purple-200 border-purple-400">Logistics</Badge>
              <Badge className="bg-pink-500/20 text-pink-200 border-pink-400">Infrastructure</Badge>
              <Badge className="bg-rose-500/20 text-rose-200 border-rose-400">E-commerce</Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-300">2021</div>
                <div className="text-purple-200">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-300">195%</div>
                <div className="text-purple-200">Growth Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-300">12</div>
                <div className="text-purple-200">Distribution Centers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Globe className="h-4 w-4 mr-2" />
              Visit Website
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Track Shipment
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Truck className="h-4 w-4 mr-2" />
              Service Areas
            </Button>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>

            <div className="prose prose-lg max-w-none text-slate-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Urban Logistics Hub represents a revolutionary approach to modern supply chain management and
                distribution. Established in 2021, our network has achieved impressive 195% growth by leveraging
                advanced technology and strategic locations to optimize supply chain efficiency for e-commerce and
                retail partners.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our comprehensive distribution network spans 12 strategically located facilities across major US
                metropolitan areas, providing seamless last-mile delivery solutions. Through innovative warehouse
                automation, real-time tracking systems, and data-driven logistics optimization, we deliver exceptional
                service reliability and cost efficiency.
              </p>

              <p className="text-lg leading-relaxed">
                The company's technology-first approach combines artificial intelligence, IoT sensors, and predictive
                analytics to create a smart logistics ecosystem. This enables our partners to reduce delivery times,
                minimize costs, and enhance customer satisfaction while maintaining the flexibility to scale operations
                dynamically.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2M+</div>
                  <div className="text-slate-600">Packages/Month</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-pink-600 mb-2">24hrs</div>
                  <div className="text-slate-600">Avg Delivery Time</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-rose-600 mb-2">99.5%</div>
                  <div className="text-slate-600">On-Time Delivery</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                  <div className="text-slate-600">Partner Retailers</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Automated Warehouse</h3>
                  <p className="text-sm text-slate-600">State-of-the-art robotic fulfillment center</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Fleet Management</h3>
                  <p className="text-sm text-slate-600">Advanced vehicle tracking and routing</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Control Center</h3>
                  <p className="text-sm text-slate-600">24/7 operations monitoring hub</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Sorting Facility</h3>
                  <p className="text-sm text-slate-600">High-speed package sorting system</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Last-Mile Delivery</h3>
                  <p className="text-sm text-slate-600">Urban delivery optimization network</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-sm text-slate-600">Real-time performance monitoring</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Related Links & Resources</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-purple-600" />
                    Official Website
                  </CardTitle>
                  <CardDescription>Visit the Urban Logistics Hub website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Explore our logistics solutions and distribution network capabilities.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    www.urbanlogisticshub.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-pink-600" />
                    Tracking Portal
                  </CardTitle>
                  <CardDescription>Real-time shipment tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Track your packages and monitor delivery status in real-time.</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Track Shipment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
