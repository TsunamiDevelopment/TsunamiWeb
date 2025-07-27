import { ArrowLeft, ExternalLink, Globe, ImageIcon, Users, Zap } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TechFlowSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
          <span className="text-white font-bold text-2xl">TF</span>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <Zap className="h-16 w-16 text-blue-400" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">TechFlow Solutions</h1>
                <p className="text-xl text-blue-200">Software Development & Digital Transformation</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-400">Technology</Badge>
              <Badge className="bg-cyan-500/20 text-cyan-200 border-cyan-400">B2B</Badge>
              <Badge className="bg-green-500/20 text-green-200 border-green-400">Enterprise</Badge>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-300">2019</div>
                <div className="text-blue-200">Established</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-300">340%</div>
                <div className="text-blue-200">Growth Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-300">150+</div>
                <div className="text-blue-200">Employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Globe className="h-4 w-4 mr-2" />
              Visit Website
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Portfolio
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Users className="h-4 w-4 mr-2" />
              Meet the Team
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
                TechFlow Solutions represents one of our most successful technology ventures, specializing in enterprise
                software development and digital transformation services. Since its establishment in 2019, the company
                has experienced remarkable growth, serving Fortune 500 companies and emerging businesses across North
                America and Europe.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                The company's core focus lies in developing cutting-edge cloud infrastructure solutions, custom
                enterprise applications, and comprehensive digital transformation strategies. TechFlow's innovative
                approach combines modern development methodologies with deep industry expertise to deliver solutions
                that drive real business value.
              </p>

              <p className="text-lg leading-relaxed">
                With a team of over 150 skilled professionals, TechFlow has established itself as a trusted partner for
                organizations looking to modernize their technology stack and accelerate their digital initiatives. The
                company's commitment to excellence and innovation continues to drive its impressive 340% growth
                trajectory.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
                  <div className="text-slate-600">Annual Revenue</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                  <div className="text-slate-600">Projects Delivered</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">85+</div>
                  <div className="text-slate-600">Enterprise Clients</div>
                </CardContent>
              </Card>

              <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">99.8%</div>
                  <div className="text-slate-600">Uptime SLA</div>
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
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Enterprise Dashboard</h3>
                  <p className="text-sm text-slate-600">Modern analytics dashboard for Fortune 500 client</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Cloud Infrastructure</h3>
                  <p className="text-sm text-slate-600">Scalable cloud architecture implementation</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Mobile Application</h3>
                  <p className="text-sm text-slate-600">Cross-platform mobile solution</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">API Integration</h3>
                  <p className="text-sm text-slate-600">Seamless third-party integrations</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Data Analytics</h3>
                  <p className="text-sm text-slate-600">Advanced data processing platform</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-white" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Security Framework</h3>
                  <p className="text-sm text-slate-600">Enterprise-grade security implementation</p>
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
                    <Globe className="h-5 w-5 mr-2 text-blue-600" />
                    Official Website
                  </CardTitle>
                  <CardDescription>Visit the TechFlow Solutions website</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Explore our full range of services, case studies, and client testimonials.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    www.techflowsolutions.com
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-green-600" />
                    LinkedIn Profile
                  </CardTitle>
                  <CardDescription>Connect with our professional network</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Follow our company updates, industry insights, and team achievements.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    LinkedIn Company Page
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ImageIcon className="h-5 w-5 mr-2 text-purple-600" />
                    Portfolio Gallery
                  </CardTitle>
                  <CardDescription>View our complete project portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Browse through detailed case studies and project showcases.</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Portfolio
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-orange-600" />
                    Technology Blog
                  </CardTitle>
                  <CardDescription>Read our latest insights and articles</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">Stay updated with industry trends and technical innovations.</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Blog
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
