import { ArrowRight, Code, Globe, Palette, Server } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Tsunami Development
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-4 leading-relaxed">
              Premium Web Design & Hosting Solutions
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Creating stunning, high-performance websites for businesses worldwide. From custom design to reliable
              hosting, we deliver complete digital solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/*<Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/projects" className="flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>*/}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Get A Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive web solutions from concept to launch and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Palette className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Web Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Custom, responsive designs that capture your brand and engage your audience across all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Modern web development using the latest technologies for fast, secure, and scalable websites.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Server className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Web Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Reliable, high-performance hosting with 99.9% uptime guarantee and 24/7 technical support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Ongoing website maintenance, updates, and optimization to keep your site running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Client Work */}
      {/* PASTE CLIENT.TXT HERE WHEN PROJECTS ARE ERADY */}

      {/* Portfolio Companies Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio Companies</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Beyond web design, we own and operate successful companies across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-br from-white to-slate-50 transform hover:scale-105 relative overflow-hidden">
              <div>
                <img src="assets/img/createnow.png" alt="CreateNow Logo" className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" />
              </div>
              <CardHeader className="pr-20">
                <CardTitle>CreateNow</CardTitle>
                <CardDescription>Game Server Management Software</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  A sleek mod with built-in hosting that makes it easy to launch and manage Minecraft servers, ideal for small groups wanting a smooth, hassle-free experience.
                </p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="https://createnow.gg" target="_blank">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-br from-white to-slate-50 transform hover:scale-105 relative overflow-hidden">
              <div>
                <img src="assets/img/multiegg.png" alt="MultiEgg Logo" className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" />
              </div>
              <CardHeader className="pr-20">
                <CardTitle>MultiEgg</CardTitle>
                <CardDescription>Multi-Game Server Egg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">A <a href="https://pterodactyl.io" target="_blank" style={{ color: "green", textDecoration: "underline" }}>Pterodactyl.io</a> egg that is designed to handle multiple games/eggs all in one place, using as little space as possible.</p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="https://multiegg.tsunamidev.org" target="_blank">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-br from-white to-slate-50 transform hover:scale-105 relative overflow-hidden">
              <div>
                <img src="assets/img/waved.png" alt="WavedSupport Logo" className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg" />
              </div>
              <CardHeader className="pr-20">
                <CardTitle>Waved Support</CardTitle>
                <CardDescription>Support Management</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Centralized support for all projects, ensuring consistent and efficient ticket resolution across Tsunami Development's network.</p>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full rounded-full border-2 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="/">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Website?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create a stunning website that drives results for your business. From design to hosting, we've got you
            covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
            {/*<Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>*/}
          </div>
        </div>
      </section>
    </div>
  )
}
