import { Award, Code, Globe, Palette, Server, Users } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tsunami Development</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              A premier web design and hosting company dedicated to creating exceptional digital experiences for
              businesses worldwide, while building a diverse portfolio of successful companies.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-xl leading-relaxed mb-6">
                Founded with a passion for exceptional web design and reliable hosting solutions, Tsunami Development
                has grown from a boutique web agency into a comprehensive digital solutions provider. Our primary focus
                remains creating stunning, high-performance websites that drive real business results for our clients.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What sets us apart is our full-service approach: we don't just design and build your website – we host
                it, maintain it, and ensure it continues to perform at its best. Our team of talented designers,
                developers, and hosting specialists work together to deliver seamless digital experiences from concept
                to launch and beyond.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Beyond our core web services, we've strategically invested in and developed a portfolio of successful
                companies across various industries. This diversification allows us to bring unique insights and
                cross-industry expertise to every web project we undertake.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we serve clients ranging from local businesses to Fortune 500 companies, while maintaining our
                commitment to personalized service, cutting-edge technology, and exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Do Best</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Palette className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Custom Web Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Bespoke website designs that capture your brand essence and engage your target audience across all
                  devices and platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Code className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle>Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Modern, fast, and secure web development using the latest technologies and best practices for optimal
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Server className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Premium Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Reliable, high-performance web hosting with 99.9% uptime guarantee, daily backups, and 24/7 technical
                  support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-cyan-600 mb-4" />
                <CardTitle>Website Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Ongoing website maintenance, security updates, content management, and performance optimization
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-orange-600 mb-4" />
                <CardTitle>Digital Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Comprehensive digital strategy consulting to help businesses maximize their online presence and
                  growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-red-600 mb-4" />
                <CardTitle>SEO & Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Search engine optimization and digital marketing services to increase visibility and drive qualified
                  traffic.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Track Record</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-slate-600 font-medium">Websites Created</div>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-slate-600 font-medium">Uptime Guarantee</div>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-slate-600 font-medium">Technical Support</div>
              </CardContent>
            </Card>

            <Card className="text-center rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-cyan-600 mb-2">5+</div>
                <div className="text-slate-600 font-medium">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-8">
                <div className="text-center">
                  <div>
                    <img src="assets/img/penguin.jpg" alt="Nathaniel Wanner" className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg overflow-hidden" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Nathaniel Wanner</h3>
                  <p className="text-slate-600 mb-4">Founder & CEO</p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Leading Tsunami Development with a vision to create exceptional web experiences that drive business
                    success. With over a decade of experience in web design, development, and digital strategy, our
                    leadership team combines technical expertise with business acumen to deliver outstanding results for
                    clients while building a diverse portfolio of successful companies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
