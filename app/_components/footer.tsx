import React from 'react'
import { Heart, Shield, MessageCircle, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-start md:flex-row flex-col gap-8">
          {/* Brand Section */}
          <div className="w-fit">
            <div className="flex items-center mb-6 space-x-2 ">
            <img
        src="/logo.png"
        alt="logo"
        width={30}
        height={30}
      />
              <h3 className="text-2xl font-medium">Projeto Elisa</h3>
            </div>
            <p className="text-zinc-300 mb-6 leading-relaxed">
              Plataforma digital para prevenção e recuperação de pessoas com dependência em apostas, 
              oferecendo suporte anônimo e gratuito através de IA conversacional.
            </p>
            <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-4 py-2 w-fit">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">
                100% Anônimo e Gratuito
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className='w-full flex items-center flex-col'> 
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-zinc-300 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#para-quem" className="text-zinc-300 hover:text-white transition-colors">
                  Para Quem É
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-zinc-300 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#faq" className="text-zinc-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="text-zinc-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

         

          {/* Contact Info */}
          <div className='w-fit'>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center ">
                <MessageCircle className="w-5 h-5 mr-3 text-emerald-400" />
                <div>
               
                  <a 
                    href="https://wa.me/5511999999999" 
                    className="text-white hover:text-emerald-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-emerald-400" />
                <div>
                 
                  <a 
                    href="mailto:contato@levante.com.br" 
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    contato@levante.com.br
                  </a>
                </div>
              </div>
            
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h5 className="text-sm font-medium text-zinc-400 mb-3">Siga-nos nas redes sociais</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-zinc-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-zinc-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-zinc-800 hover:bg-emerald-400 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-zinc-800 hover:bg-emerald-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-zinc-400 mb-4 md:mb-0">
              © 2025 Projeto Elisa. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                Cookies
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
