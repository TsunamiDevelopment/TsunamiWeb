'use client';

import { Code, Globe, Mail, MapPin, Palette, Phone, Server } from "lucide-react"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

function ContactForm() {
  const [loading, setLoading] = useState(false);

  interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    message: string;
  }

  interface ContactApiResponse {
    success: boolean;
    [key: string]: any;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement & {
      firstName: { value: string };
      lastName: { value: string };
      email: { value: string };
      company: { value: string };
      projectType: { value: string };
      budget: { value: string };
      message: { value: string };
    };

    const data: ContactFormData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      company: form.company.value,
      projectType: form.projectType.value,
      budget: form.budget.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ContactApiResponse = await res.json();
      if (result.success) {
        alert("Message sent!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/*<div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" placeholder="John" required className="rounded-full" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" placeholder="Doe" required className="rounded-full" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="john@example.com" required className="rounded-full" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Your Company" className="rounded-full" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Select name="projectType">
          <SelectTrigger id="projectType" name="projectType" className="rounded-full">
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new-website">New Website Design</SelectItem>
            <SelectItem value="redesign">Website Redesign</SelectItem>
            <SelectItem value="ecommerce">E-Commerce Store</SelectItem>
            <SelectItem value="hosting">Web Hosting</SelectItem>
            <SelectItem value="maintenance">Website Maintenance</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Budget Range</Label>
        <Select name="budget">
          <SelectTrigger id="budget" name="budget" className="rounded-full">
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-300">Under $300</SelectItem>
            <SelectItem value="300-500">$300 - $500</SelectItem>
            <SelectItem value="500-1000">$500 - $1000</SelectItem>
            <SelectItem value="over-1k">Over $1000</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
          className="min-h-[120px] rounded-3xl"
          required
        />
      </div> */}

        <div className="space-y-6">

  {/* Disabled message */}
  <p className="text-center text-gray-700 font-semibold text-lg bg-gray-100 p-3 rounded-xl">
  This form is temporarily disabled for update by the Webmaster.
</p>

  {/* Entire form disabled */}
  <div className="opacity-50 pointer-events-none space-y-6">

    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          placeholder="John"
          required
          className="rounded-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          placeholder="Doe"
          required
          className="rounded-full"
        />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="john@example.com"
        required
        className="rounded-full"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="company">Company</Label>
      <Input
        id="company"
        name="company"
        placeholder="Your Company"
        className="rounded-full"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="projectType">Project Type</Label>
      <Select name="projectType">
        <SelectTrigger id="projectType" name="projectType" className="rounded-full">
          <SelectValue placeholder="Select project type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="new-website">New Website Design</SelectItem>
          <SelectItem value="redesign">Website Redesign</SelectItem>
          <SelectItem value="ecommerce">E-Commerce Store</SelectItem>
          <SelectItem value="hosting">Web Hosting</SelectItem>
          <SelectItem value="maintenance">Website Maintenance</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="space-y-2">
      <Label htmlFor="budget">Budget Range</Label>
      <Select name="budget">
        <SelectTrigger id="budget" name="budget" className="rounded-full">
          <SelectValue placeholder="Select budget range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="under-300">Under $300</SelectItem>
          <SelectItem value="300-500">$300 - $500</SelectItem>
          <SelectItem value="500-1000">$500 - $1000</SelectItem>
          <SelectItem value="over-1k">Over $1000</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="space-y-2">
      <Label htmlFor="message">Project Details</Label>
      <Textarea
        id="message"
        name="message"
        placeholder="Tell us about your project goals, timeline, and any specific requirements..."
        required
        className="min-h-[120px] rounded-3xl"
      />
    </div>
  </div>
</div>

          

      {/*<Button
        asChild
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        disabled={loading}
      >
        {loading ? "Sending..." : "Get My Free Quote"}
      </Button>*/}
      <button
  type="button"
  disabled
  className="w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-40 cursor-not-allowed py-3 text-center text-white"
>
  Currently Disabled
</button>

    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Web Project</h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Ready to create an amazing website for your business? Get in touch with our team to discuss your project
              requirements and receive a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll provide a detailed proposal within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>Multiple ways to reach our web design and hosting team.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-slate-600 mb-2">contact@tsunamidev.org</p>
                      <p className="text-sm text-slate-500">General inquiries and project discussions</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-slate-600 mb-2">+1 (435) 850-7344</p>
                      <p className="text-sm text-slate-500">Business hours: 9 AM - 9 PM MST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-slate-600 mb-2">
                        N/A
                        <br />
                        <br />
                      </p>
                      <p className="text-sm text-slate-500"> (Unavailable) </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Quick Contact */}
              <Card className="rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                <CardHeader>
                  <CardTitle>Service-Specific Inquiries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Palette className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Web Design</h4>
                      <p className="text-slate-600">design@tsunamidev.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Code className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Development</h4>
                      <p className="text-slate-600">dev@tsunamidev.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Server className="h-5 w-5 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Hosting Support</h4>
                      <p className="text-slate-600">hosting@tsunamidev.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-cyan-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Maintenance</h4>
                      <p className="text-slate-600">support@tsunamidev.org</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">24-Hour Response Guarantee</h3>
                  <p className="text-blue-700 leading-relaxed">
                    We respond to all project inquiries within 24 hours with a detailed proposal and timeline. Ready to
                    start immediately!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}