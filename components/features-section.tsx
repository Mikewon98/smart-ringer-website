'use client'

import { Bell, BellOff, Phone, Users, Smartphone, Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

const features = [
  {
    icon: BellOff,
    title: 'Selective Silencing',
    description: 'Choose specific contacts to silence. Only their calls will be muted while your phone remains active for everyone else.',
    color: 'text-secondary'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay in control with smart notification management. Never miss important calls while filtering unwanted interruptions.',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Easy Contact Management',
    description: 'Seamlessly integrate with your contact list. Add or remove silenced contacts with just a few taps.',
    color: 'text-primary'
  },
  {
    icon: Phone,
    title: 'Default State Preservation',
    description: 'Your phone maintains its default ringer state for all non-silenced contacts. Complete control without compromise.',
    color: 'text-secondary'
  },
  {
    icon: Smartphone,
    title: 'Intuitive Interface',
    description: 'Beautiful, user-friendly design that makes call management effortless. No complicated settings or confusing menus.',
    color: 'text-accent'
  },
  {
    icon: Shield,
    title: 'Privacy Focused',
    description: 'Your contact information stays on your device. We prioritize your privacy and security above all else.',
    color: 'text-primary'
  }
]

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Powerful features for complete control
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to manage your incoming calls intelligently and efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30 bg-card cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`mb-6 inline-block p-4 rounded-2xl bg-primary/10 transition-all duration-300 ${hoveredIndex === index ? 'scale-110 rotate-3' : ''}`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
