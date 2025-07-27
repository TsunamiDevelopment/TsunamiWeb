import { ArrowLeft, ExternalLink, Globe, ImageIcon, Leaf } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GreenWaveEnergyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-2xl">GW</span>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-green-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Leaf className="h-16 w-16 text-green-400" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">GreenWave Energy</h1>
                <p className="text-xl text-green-200">Sustainable Energy Solutions</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-green-500/20 text-green-200 border-green-400">Renewable Energy</Badge>
              <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-400">Sustainability</Badge>
              <Badge className="bg-teal-500/20 text-teal-200 border-teal-400">Clean Tech</Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-300">2020</div>
                <div className="text-green-200">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-300">280%</div>
                <div className="text-green-200">Growth Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-300">500+ MW</div>
                <div className="text-green-200">Installed Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Globe className="h-4 w-4 mr-2" />
              Visit Website
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Sustainability Report
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Leaf className="h-4 w-4 mr-2" />
              Environmental Impact
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
                GreenWave Energy stands at the forefront of the renewable energy revolution, specializing in solar and
                wind power solutions for both commercial and residential markets. Established in 2020, the company has
                achieved remarkable 280% growth while maintaining an unwavering commitment to environmental
                sustainability.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our comprehensive approach encompasses project development, engineering, procurement, construction, and
                long-term operations and maintenance. GreenWave's innovative technology solutions and strategic
                partnerships have enabled us to install over 500 MW of clean energy capacity across the Western United
                States.
              </p>

              <p className="text-lg leading-relaxed">
                The company's mission extends beyond energy generation to creating a sustainable future for communities
                and businesses. Through cutting-edge technology and environmental stewardship, GreenWave continues to
                accelerate the transition to clean energy while delivering exceptional returns for stakeholders.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+ MW</div>
                  <div className="text-slate-600">Installed Capacity</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">50,000+</div>
                  <div className="text-slate-600">Homes Powered</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-teal-600 mb-2">200K+</div>
                  <div className="text-slate-600">Tons CO₂ Saved</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">25+</div>
                  <div className="text-slate-600">Active Projects</div>
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
                <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Solar Farm Installation</h3>
                  <p className="text-sm text-slate-600">Large-scale solar installation in Nevada</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Wind Turbine Array</h3>
                  <p className="text-sm text-slate-600">Offshore wind project in California</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Residential Solar</h3>
                  <p className="text-sm text-slate-600">Community solar program rollout</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-lime-500 to-green-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Energy Storage</h3>
                  <p className="text-sm text-slate-600">Battery storage facility construction</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Smart Grid Integration</h3>
                  <p className="text-sm text-slate-600">Advanced grid management system</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Maintenance Operations</h3>
                  <p className="text-sm text-slate-600">24/7 monitoring and maintenance</p>
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
                    <Globe className="h-5 w-5 mr-2 text-green-600" />
                    Official Website
                  </CardTitle>
                  <CardDescription>Visit the GreenWave Energy website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Learn about our renewable energy solutions and sustainability initiatives.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    www.greenwaveenergy.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-emerald-600" />
                    Sustainability Report
                  </CardTitle>
                  <CardDescription>Annual environmental impact report</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Detailed analysis of our environmental impact and sustainability goals.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Download Report
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
