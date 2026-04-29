import React from 'react'
import { Button } from "./ui/button.tsx"
import { Card, CardContent } from "./ui/card.tsx"
import { Heart, Users, Target, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar.tsx'
import { DynamicFavicon } from './DynamicFavicon.tsx'

export default function About() {
  const navigate = useNavigate()
  return (
    <main className="flex flex-col min-h-screen">
      <DynamicFavicon />
      <NavBar />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Volunteers working together"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Charity Connect</h1>
            <p className="text-xl text-gray-300">
              Bridging the gap between generous hearts and meaningful causes since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Charity Connect, we believe in the power of collective giving. Our platform serves as a bridge between 
                compassionate donors and verified charitable organizations, making it easier than ever to support causes 
                that matter.
              </p>
            </div>
            <div className="relative h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="People joining hands"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Heart className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">5K+</h3>
                <p className="text-gray-600 text-center">Donors</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Users className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">100+</h3>
                <p className="text-gray-600 text-center">Charities</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Target className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">$2M+</h3>
                <p className="text-gray-600 text-center">Donated</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Trophy className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-gray-600 text-center">Projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete transparency in all our operations and ensure that every donation is tracked and 
                  properly allocated.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Impact</h3>
                <p className="text-gray-600">
                  We focus on creating measurable impact through strategic partnerships and efficient resource allocation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-gray-600">
                  We foster a strong sense of community among our donors, partners, and beneficiaries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of changemakers and help us create positive impact in the world.
          </p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100"
          onClick={() => navigate('/volunteer/apply')}> 
            Become a Volunteer
          </Button>
        </div>
      </section>
    </main>
  )
}

