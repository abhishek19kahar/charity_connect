import React from 'react'
import { Button } from "./ui/button.tsx"
import { Card, CardContent } from "./ui/card.tsx"
import { Input } from "./ui/input.tsx"
import { Textarea } from "./ui/textarea.tsx"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { DynamicFavicon } from './DynamicFavicon.tsx'
import NavBar from './NavBar.tsx'

export default function Contact() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col min-h-screen">
      <DynamicFavicon />
      <NavBar />
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="People in a meeting"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch with us to learn more about our causes or how you can help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input id="subject" placeholder="Message Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Send Message</Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center p-4">
                    <MapPin className="h-6 w-6 text-orange-500 mr-4" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">123 Charity Lane, Giving City, GC 12345</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Phone className="h-6 w-6 text-green-500 mr-4" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Mail className="h-6 w-6 text-blue-500 mr-4" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@charityconnect.org</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Clock className="h-6 w-6 text-purple-500 mr-4" />
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "How can I donate?", a: "You can donate through our website, by phone, or by mail. Visit our 'Donate/Food' page for more information." },
              { q: "Is my donation tax-deductible?", a: "Yes, all donations to Charity Connect are tax-deductible to the extent allowed by law." },
              { q: "How can I volunteer?", a: "We have various volunteering opportunities. Please fill out our volunteer form on the 'Volunteer/Apply' page." },
              { q: "Where does my money go?", a: "Your donations directly support the NGOs in need. We ensure transparency by publishing annual reports detailing our expenditures." }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support can change lives. Join us in our mission to create a better world for all.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100"
          onClick={() => navigate('/home')}
          >
            Donate Now
          </Button>
        </div>
      </section>
    </main>
  )
}

