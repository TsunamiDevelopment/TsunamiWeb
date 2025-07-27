import { ArrowLeft, Building, ExternalLink, Globe, ImageIcon } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NexusRealEstatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-900 to-rose-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-2xl">NR</span>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-orange-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Building className="h-16 w-16 text-orange-400" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Nexus Real Estate</h1>
                <p className="text-xl text-orange-200">Commercial & Residential Development</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-orange-500/20 text-orange-200 border-orange-400">Real Estate</Badge>
              <Badge className="bg-red-500/20 text-red-200 border-red-400">Development</Badge>
              <Badge className="bg-rose-500/20 text-rose-200 border-rose-400">Investment</Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-300">2018</div>
                <div className="text-orange-200">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-300">425%</div>
                <div className="text-orange-200">Growth Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-300">$2.5B+</div>
                <div className="text-orange-200">Assets Under Management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Globe className="h-4 w-4 mr-2" />
              Visit Website
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Property Portfolio
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Building className="h-4 w-4 mr-2" />
              Investment Opportunities
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
                Nexus Real Estate stands as our flagship real estate development company, focusing on sustainable
                commercial and residential projects across the Southeast and Southwest United States. Since its
                establishment in 2018, the company has achieved an exceptional 425% growth rate while managing over $2.5
                billion in assets.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our comprehensive approach encompasses land acquisition, project development, construction management,
                and long-term asset management. Nexus Real Estate creates innovative spaces that enhance communities
                while delivering strong investment returns through strategic market positioning and sustainable design
                principles.
              </p>

              <p className="text-lg leading-relaxed">
                The company's portfolio includes mixed-use developments, luxury residential communities, commercial
                office complexes, and retail centers. Through partnerships with leading architects, contractors, and
                financial institutions, Nexus continues to set new standards in real estate development and community
                building.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">$2.5B+</div>
                  <div className="text-slate-600">Assets Managed</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">45+</div>
                  <div className="text-slate-600">Active Projects</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-rose-600 mb-2">15M+</div>
                  <div className="text-slate-600">Sq Ft Developed</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
                  <div className="text-slate-600">Occupancy Rate</div>
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
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Luxury Residential</h3>
                  <p className="text-sm text-slate-600">Premium residential community in Austin</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Commercial Complex</h3>
                  <p className="text-sm text-slate-600">Mixed-use development in Miami</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Office Tower</h3>
                  <p className="text-sm text-slate-600">Class A office building in Atlanta</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Retail Center</h3>
                  <p className="text-sm text-slate-600">Shopping and dining destination</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Sustainable Housing</h3>
                  <p className="text-sm text-slate-600">LEED-certified residential project</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Urban Redevelopment</h3>
                  <p className="text-sm text-slate-600">Historic district revitalization</p>
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
                    <Globe className="h-5 w-5 mr-2 text-orange-600" />
                    Official Website
                  </CardTitle>
                  <CardDescription>Visit the Nexus Real Estate website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Explore our property portfolio and investment opportunities.</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    www.nexusrealestate.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-red-600" />
                    Investment Portal
                  </CardTitle>
                  <CardDescription>Real estate investment opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Access exclusive investment opportunities and market insights.</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Investor Portal
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
