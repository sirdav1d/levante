'use client'

import React, { useState } from 'react'
import { User, Heart, Send, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Who() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    whatsapp: '',
    isForMe: true,
    lgpdConsent: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de envio
    console.log('Formulário enviado:', formData)
    alert('Solicitação enviada com sucesso! Entraremos em contato em breve.')
  }

  return (
    <section id='you' className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">
            Para quem é
          </h2>
          <p className="text-lg text-muted-foreground text-balance text-zinc-600 max-w-3xl mx-auto">
            Nossa plataforma oferece suporte tanto para quem precisa de ajuda quanto para quem quer ajudar alguém próximo
          </p>
        </div>

      

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
              Solicite ajuda agora
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 " >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                  Nome (opcional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Seu nome ou da pessoa"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-zinc-700 mb-2">
                  Cidade
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Sua cidade"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Radio buttons for "Sou eu" / "É outra pessoa" */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-3">
                  Esta solicitação é para:
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="isForMe"
                      checked={formData.isForMe}
                      onChange={() => setFormData(prev => ({ ...prev, isForMe: true }))}
                      className="w-4 h-4 text-blue-600 border-zinc-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-zinc-700">Sou eu que preciso de ajuda</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="isForMe"
                      checked={!formData.isForMe}
                      onChange={() => setFormData(prev => ({ ...prev, isForMe: false }))}
                      className="w-4 h-4 text-blue-600 border-zinc-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-zinc-700">É outra pessoa que precisa de ajuda</span>
                  </label>
                </div>
              </div>

              {/* LGPD Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="lgpdConsent"
                  name="lgpdConsent"
                  checked={formData.lgpdConsent}
                  onChange={handleInputChange}
                  required
                  className="w-4 h-4 text-blue-600 border-zinc-300 rounded focus:ring-blue-500 mt-1"
                />
                <label htmlFor="lgpdConsent" className="ml-3 text-sm text-zinc-600">
                  Autorizo o contato seguro e o tratamento dos meus dados pessoais conforme a{' '}
                  <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                size={'lg'}
                type="submit"
                disabled={!formData.lgpdConsent}
                className="w-full  disabled:bg-zinc-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                Enviar ajuda
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
