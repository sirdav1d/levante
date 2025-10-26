import React from 'react'
import { Shield, Heart, Lock, FileText, ExternalLink, Target, Eye, Star, Users, Phone, Clock, CheckCircle, Play, ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DottedGlowBackground from '@/components/ui/dotted-glow-background'
import ModalForm from './modal-form'

export default function About() {
  return (
    <section className="py-20 relative overflow-hidden min-h-0h-screen flex items-center justify-center">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={.2}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-4">
            {/* Small label */}
            
            
            {/* Main title */}
            <h2 className="text-4xl lg:text-5xl font-bold  leading-tight">
           Projeto Elisa
            </h2>
            
            {/* Description */}
            <p className="lg:text-lg text-muted-foreground text-balance leading-relaxed max-w-lg">
              A criatividade envolve quebrar padrões esperados para olhar as coisas de uma forma diferente. 
              Fazer mudanças é um esforço coletivo que pode trazer muitos desafios!
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ModalForm 
                triggerText="Saiba mais"
                triggerSize="lg"
                className="text-lg rounded-full hover:-translate-y-1 duration-300 transition-all ease-in-out hover:shadow-sm"
              />
              
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="relative mt-10 lg:mt-0">
            {/* Decorative dots background */}
          

            {/* Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 relative z-10">
              {/* Web Design Card */}
              <div className="bg-linear-to-br from-zinc-100 to-zinc-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-44">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Suporte Online</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Converse conosco via WhatsApp de forma 100% anônima e receba orientação especializada a qualquer hora."
                </p>
               
              </div>

              {/* App Design Card */}
              <div className="bg-linear-to-br from-zinc-100 to-zinc-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-44 lg:mt-20">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Avaliação de Risco</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Autoconhecimento é poder. Nossa ferramenta de avaliação te ajuda a mapear sua situação atual sem julgamentos.
                </p>
                
              </div>

              {/* UI/UX Design Card */}
              <div className="bg-linear-to-br from-zinc-100 to-zinc-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 lg:-mt-20 h-44">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Apoio Local</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Conectamos você com a rede de apoio mais próxima: terapeutas, grupos e unidades especializadas.
                </p>
              
              </div>

              <div className="bg-linear-to-br from-zinc-100 to-zinc-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mt-0 h-44">
                <h3 className="text-xl font-bold text-zinc-900 mb-3">Rede de Conexòes</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
               Compartilhe sua história e receba apoio de uma comunidade que acredita na sua capacidade de superar.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
