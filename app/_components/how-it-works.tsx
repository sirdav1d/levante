import React from 'react'
import { MessageCircle, Shield, MapPin, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Converse com a IA pelo WhatsApp",
      description: "Anonimato e acolhimento garantidos",
      color: "bg-emerald-500"
    },
    {
      icon: Shield,
      title: "Descubra seu nível de risco",
      description: "Sem julgamentos, apenas apoio",
      color: "bg-emerald-500"
    },
    {
      icon: MapPin,
      title: "Receba ajuda perto de você",
      description: "Unidade, terapeuta ou grupo de apoio",
      color: "bg-emerald-500"
    }
  ]

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Um processo simples e seguro para te ajudar a superar a dependência em apostas
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Step Card */}
                <div>
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                      {step.title}
                    </h3>
                   
                  </div>
                </div>      
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
