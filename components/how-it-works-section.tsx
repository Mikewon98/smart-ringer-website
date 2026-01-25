'use client'

import { Download, UserPlus, Volume2, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Download,
    title: 'Download the App',
    description: 'Get Smart Ringer from the Play Store and install it on your Android device.',
    step: '01'
  },
  {
    icon: UserPlus,
    title: 'Select Contacts',
    description: 'Choose which contacts you want to silence from your contact list.',
    step: '02'
  },
  {
    icon: Volume2,
    title: 'Set Your Preferences',
    description: 'Customize how you want to handle calls from selected contacts.',
    step: '03'
  },
  {
    icon: CheckCircle,
    title: 'Enjoy Peace of Mind',
    description: 'Relax knowing your phone will only ring for the calls that matter to you.',
    step: '04'
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get started in minutes with our simple four-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 -z-10" />
              )}
              
              <div className="text-center space-y-4 hover:scale-105 transition-transform duration-300">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-300" />
                  <div className="relative bg-card border-2 border-primary/20 rounded-full p-8 group-hover:border-primary/50 transition-all duration-300">
                    <step.icon className="h-12 w-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground font-bold text-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
