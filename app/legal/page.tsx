import { Download, FileText, Scale, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function LegalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Documents</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Access our comprehensive legal documentation, corporate governance materials, and compliance information.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Corporate Documents */}
            {/*<div className="mb-12">
              <div className="flex items-center mb-8">
                <Scale className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Corporate Documents</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Articles of Incorporation
                    </CardTitle>
                    <CardDescription>Official corporate formation documents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Legal document establishing Tsunami Development as a corporation, including corporate structure,
                      purpose, and governance framework.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Corporate Bylaws
                    </CardTitle>
                    <CardDescription>Internal governance rules and procedures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Comprehensive bylaws governing corporate operations, board procedures, shareholder rights, and
                      internal management protocols.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Board Resolutions
                    </CardTitle>
                    <CardDescription>Key corporate decisions and authorizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Collection of board resolutions documenting major corporate decisions, strategic initiatives, and
                      formal authorizations.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Certificate of Good Standing
                    </CardTitle>
                    <CardDescription>Current corporate status verification</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Official certificate confirming Tsunami Development's current good standing with state authorities
                      and compliance with filing requirements.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>*/}

            <Separator className="my-12" />

            {/* Compliance & Regulatory */}
            <div className="mb-12">
              <div className="flex items-center mb-8">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold">Compliance & Regulatory</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Privacy Policy
                    </CardTitle>
                    <CardDescription>Data protection and privacy practices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Comprehensive privacy policy outlining our data collection, processing, and protection practices
                      in compliance with applicable regulations.
                    </p>
                    <Button
  asChild
  variant="outline"
  className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>
  <a href="/legal/privacy.pdf">
    <Download className="h-4 w-4 mr-2 inline-block" />
    Download PDF
  </a>
</Button>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Terms of Service
                    </CardTitle>
                    <CardDescription>Service terms and conditions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Standard terms and conditions governing the use of our services, including rights,
                      responsibilities, and limitations.
                    </p>
                    <Button
  asChild
  variant="outline"
  className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>
  <a href="/legal/privacy.pdf">
    <Download className="h-4 w-4 mr-2 inline-block" />
    Download PDF
  </a>
</Button>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Code of Conduct
                    </CardTitle>
                    <CardDescription>Ethical standards and business practices</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Corporate code of conduct establishing ethical standards, business practices, and behavioral
                      expectations for all stakeholders.
                    </p>
                    <Button
  asChild
  variant="outline"
  className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>
  <a href="/legal/privacy.pdf">
    <Download className="h-4 w-4 mr-2 inline-block" />
    Download PDF
  </a>
</Button>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Anti-Corruption Policy
                    </CardTitle>
                    <CardDescription>Anti-bribery and corruption compliance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Comprehensive anti-corruption policy ensuring compliance with anti-bribery laws and maintaining
                      the highest standards of business integrity.
                    </p>
                    <Button
  asChild
  variant="outline"
  className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>
  <a href="/legal/privacy.pdf">
    <Download className="h-4 w-4 mr-2 inline-block" />
    Download PDF
  </a>
</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="my-12" />

            {/* Financial & Reporting */}
            {/*<div className="mb-12">
              <div className="flex items-center mb-8">
                <FileText className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold">Financial & Reporting</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Annual Report 2023
                    </CardTitle>
                    <CardDescription>Comprehensive annual business report</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Complete annual report including financial performance, strategic initiatives, and outlook for the
                      upcoming year.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Audited Financial Statements
                    </CardTitle>
                    <CardDescription>Independent audit results</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      Independently audited financial statements providing transparent view of our financial position
                      and performance.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent rounded-full border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>*/}

            {/* Legal Notice */}
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Legal Notice</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  All documents provided on this page are for informational purposes and represent the most current
                  versions available. For official legal matters or specific inquiries, please contact our legal
                  department directly.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Documents are provided in PDF format and may require Adobe Acrobat Reader or compatible software to
                  view. If you experience any issues accessing these documents, please contact our support team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}