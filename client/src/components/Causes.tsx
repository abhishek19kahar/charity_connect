import React from 'react'
import { Button } from "./ui/button.tsx"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx"
import { Progress } from './ui/progress.tsx'
import { Heart, Users, Target, ArrowRight } from 'lucide-react'
import { DynamicFavicon } from './DynamicFavicon.tsx'
import NavBar from './NavBar.tsx'

const causes = [
  {
    title: "Clean Water Initiative",
    description: "Providing clean and safe drinking water to communities in need.",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 75000,
    goal: 100000,
  },
  {
    title: "Education for All",
    description: "Supporting education programs for underprivileged children.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 50000,
    goal: 80000,
  },
  {
    title: "Hunger Relief",
    description: "Providing meals and nutrition support to those facing food insecurity.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 30000,
    goal: 60000,
  },
  {
    title: "Environmental Conservation",
    description: "Protecting ecosystems and promoting sustainable practices.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    raised: 40000,
    goal: 70000,
  },
]

export default function Causes() {
  return (
    <main className="flex flex-col min-h-screen">
      <DynamicFavicon />
      {/* Hero Section */}
      <NavBar />
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="People holding hands"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Causes</h1>
            <p className="text-xl text-gray-300">
              Explore the various causes we support and join us in making a difference
            </p>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {causes.map((cause, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{cause.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{cause.description}</p>
                  <div className="mb-2">
                    <Progress value={(cause.raised / cause.goal) * 100} className="h-2" />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Raised: ${cause.raised.toLocaleString()}</span>
                    <span>Goal: ${cause.goal.toLocaleString()}</span>
                  </div>
                  <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Heart className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">10K+</h3>
                <p className="text-gray-600 text-center">Lives Impacted</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Users className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">5K+</h3>
                <p className="text-gray-600 text-center">Volunteers</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Target className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">20+</h3>
                <p className="text-gray-600 text-center">Countries Reached</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <ArrowRight className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-3xl font-bold mb-2">100+</h3>
                <p className="text-gray-600 text-center">Ongoing Projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Cause */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Cause</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Featured Cause"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Emergency Relief Fund</h3>
              <p className="text-gray-600 mb-6">
                Our Emergency Relief Fund provides immediate assistance to communities affected by natural disasters, 
                conflicts, and other crises. Your donation helps us deliver food, water, shelter, and medical aid to 
                those who need it most.
              </p>
              <Progress value={60} className="h-2 mb-2" />
              <div className="flex justify-between text-sm text-gray-600 mb-6">
                <span>Raised: $300,000</span>
                <span>Goal: $500,000</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600">Donate to This Cause</Button>
            </div>
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
          <Button className="bg-white text-orange-500 hover:bg-gray-100">
            Explore All Causes
          </Button>
        </div>
      </section>
    </main>
  )
}

