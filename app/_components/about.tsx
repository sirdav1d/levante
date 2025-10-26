import React from 'react'
import { Shield, Heart, Lock, FileText, ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Sobre o Levante
          </h2>
          <p className="text-xlg text-muted-foreground text-balance max-w-3xl mx-auto">
            Uma plataforma dedicada a oferecer apoio e esperança para quem enfrenta a dependência em apostas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Nossa Missão</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Oferecer suporte humanizado e tecnologia avançada para ajudar pessoas a superarem a dependência em apostas, 
                promovendo recuperação, bem-estar e uma vida mais saudável através de atendimento anônimo e gratuito.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Nosso Propósito</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                Quebrar o estigma em torno da dependência em apostas, oferecendo um ambiente seguro e acolhedor 
                onde cada pessoa possa encontrar o apoio necessário para sua jornada de recuperação, sem julgamentos.
              </p>
            </div>

            
          </div>

          {/* Badge and Links */}
          <div className="space-y-8">
            {/* Anonymous Badge */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-center shadow-2xl">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Atendimento 100% Anônimo e Gratuito
              </h3>
              <p className="text-green-100 text-lg">
                Sem custos, sem identificação, apenas apoio e acolhimento para sua recuperação.
              </p>
            </div>

         
           
          </div>
        </div>
      </div>
    </section>
  )
}
