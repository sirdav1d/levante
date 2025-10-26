"use client";
import React from 'react';
import { Button } from "@/components/ui/button";

import { CheckCircle, Users, Shield, Clock, Star, ArrowRight, Building2, Heart, Brain, Phone, Mail, MapPin } from 'lucide-react';
import ModalForm from '../_components/modal-form';
import Background from '../_components/background';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
     <div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Top Fade Grid Background */}
  <div
    className="absolute inset-0 z-0 h-screen"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}

      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
           
            <h1 className="text-5xl md:text-5xl text-balance font-bold mb-6 leading-tight">
              Transforme sua <span className="text-primary">instituição</span> em um centro de referência em saúde mental
            </h1>
            <p className="text-lg  text-balance text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se à nossa rede de clínicas e hospitais credenciados para oferecer atendimento psicológico de qualidade através da nossa plataforma inovadora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <Button size="lg" className="text-lg px-8 py-4 rounded-full">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Profissionais Credenciados</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Instituições Parceiras</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10k+</div>
              <div className="text-muted-foreground">Pacientes Atendidos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Satisfação dos Pacientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que se credenciar conosco?</h2>
            <p className="text-lg text-balance text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma plataforma completa que conecta sua instituição a pacientes que precisam de atendimento psicológico especializado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Amplie seu Alcance</CardTitle>
                <CardDescription>
                  Conecte-se com milhares de pacientes que buscam atendimento psicológico especializado em dependência de apostas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Segurança e Confiabilidade</CardTitle>
                <CardDescription>
                  Plataforma segura com criptografia de ponta e conformidade com LGPD para proteção total dos dados.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Gestão Simplificada</CardTitle>
                <CardDescription>
                  Sistema integrado para agendamentos, prontuários e acompanhamento de pacientes de forma eficiente.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>IA Avançada</CardTitle>
                <CardDescription>
                  Aproveite nossa inteligência artificial para triagem inicial e suporte no diagnóstico de dependências.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Impacto Social</CardTitle>
                <CardDescription>
                  Faça parte de uma rede que transforma vidas e contribui para a redução do problema de dependência em apostas.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Suporte Completo</CardTitle>
                <CardDescription>
                  Equipe especializada para treinamento, suporte técnico e acompanhamento contínuo da sua instituição.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentialing Process */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Processo de Credenciamento</h2>
            <p className="text-lg text-balance text-muted-foreground max-w-2xl mx-auto">
              Processo simples e rápido para credenciar sua instituição em nossa plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solicitação</h3>
              <p className="text-muted-foreground">Preencha o formulário de credenciamento com os dados da sua instituição.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise</h3>
              <p className="text-muted-foreground">Nossa equipe analisa a documentação e verifica a conformidade.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Treinamento</h3>
              <p className="text-muted-foreground">Capacitação da equipe para uso da plataforma e protocolos.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ativação</h3>
              <p className="text-muted-foreground">Sua instituição é ativada e começa a receber pacientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Requisitos para Credenciamento</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Registro no Conselho Regional de Psicologia</h3>
                    <p className="text-muted-foreground">Instituição devidamente registrada e em conformidade com o CRP.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Profissionais Especializados</h3>
                    <p className="text-muted-foreground">Equipe com experiência em dependências e saúde mental.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Infraestrutura Adequada</h3>
                    <p className="text-muted-foreground">Instalações apropriadas para atendimento psicológico.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Conformidade com LGPD</h3>
                    <p className="text-muted-foreground">Políticas de privacidade e proteção de dados implementadas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-linear-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Documentação Necessária</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Registro no CRP</li>
                <li>• CNPJ da instituição</li>
                <li>• Comprovante de endereço</li>
                <li>• Currículos dos profissionais</li>
                <li>• Política de privacidade</li>
                <li>• Certificado de conformidade LGPD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Depoimentos de Instituições Parceiras</h2>
            <p className="text-xl text-muted-foreground">Veja o que nossos parceiros dizem sobre a plataforma.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "A plataforma revolucionou nosso atendimento. Conseguimos ajudar muito mais pessoas e o processo é muito mais eficiente."
                </p>
                <div className="font-semibold">Dr. Maria Silva</div>
                <div className="text-sm text-muted-foreground">Clínica Psicológica São Paulo</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "O suporte técnico é excepcional e a IA nos ajuda muito na triagem inicial dos pacientes."
                </p>
                <div className="font-semibold">Dr. João Santos</div>
                <div className="text-sm text-muted-foreground">Hospital das Clínicas</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Desde que nos credenciamos, nossa demanda aumentou 300% e conseguimos ajudar muito mais pessoas."
                </p>
                <div className="font-semibold">Dra. Ana Costa</div>
                <div className="text-sm text-muted-foreground">Centro de Psicologia Rio</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para fazer a diferença?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se à nossa rede e comece a transformar vidas hoje mesmo. O processo de credenciamento é rápido e simples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-white  ">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-zinc-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-muted-foreground">Nossa equipe está pronta para ajudar sua instituição.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-muted-foreground">(11) 99999-9999</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">parcerias@levante.com.br</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Endereço</h3>
              <p className="text-muted-foreground">São Paulo, SP</p>
            </div>
          </div>
        </div>
      </section></div>
    </div>
  );
}
