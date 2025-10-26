import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight, HelpCircle } from 'lucide-react'
import DottedGlowBackground from '@/components/ui/dotted-glow-background'
import { Button } from '@/components/ui/button'

export default function Faq() {
  const faqs = [
    {
      question: "Como funciona o atendimento anônimo pelo WhatsApp?",
      answer: "Nosso atendimento é 100% anônimo e confidencial. Você conversa com nossa IA especializada através do WhatsApp sem precisar se identificar. A IA faz uma triagem inicial, oferece suporte emocional e, se necessário, encaminha para profissionais especializados, sempre mantendo seu anonimato."
    },
    {
      question: "O serviço é realmente gratuito?",
      answer: "Sim, nosso serviço é completamente gratuito. Não cobramos nada pelo atendimento, triagem, relatório de risco ou encaminhamentos. Acreditamos que o acesso ao tratamento para dependência em apostas deve ser universal e acessível a todos."
    },
    {
      question: "Como é feito o relatório de risco?",
      answer: "O relatório é gerado automaticamente pela nossa IA baseado na conversa que você teve. Ele avalia seu nível de risco de forma objetiva e sem julgamentos, considerando padrões de comportamento, frequência de apostas e impacto na sua vida. O relatório é confidencial e pode ser usado para orientar seu tratamento."
    },
    {
      question: "Posso cadastrar alguém que precisa de ajuda?",
      answer: "Sim, você pode cadastrar um amigo ou familiar que precisa de ajuda. Basta preencher o formulário indicando que é para outra pessoa. Nós entraremos em contato de forma discreta e ofereceremos o mesmo suporte anônimo e gratuito. É uma forma de ajudar quem você ama sem invadir a privacidade."
    },
    {
      question: "Como vocês garantem a privacidade dos meus dados?",
      answer: "Seguimos rigorosamente a LGPD e utilizamos as mais altas tecnologias de segurança para proteger seus dados. Todas as conversas são criptografadas, não armazenamos informações pessoais identificáveis e você pode solicitar a exclusão dos seus dados a qualquer momento. Seu anonimato e privacidade são nossa prioridade absoluta."
    }
  ]

  return (
    <section id='faq' className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-balance text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossa plataforma e como podemos te ajudar
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className=" w-3xl rounded-2xl border">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-zinc-200 last:border-b-0"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:bg-zinc-50 transition-colors">
                  <span className="text-lg font-semibold text-zinc-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <p className="text-zinc-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 relative overflow-hidden w-full">
          <div className="bg-white/10 backdrop-blur-xs rounded-2xl z-50 p-8 shadow-lg border border-zinc-200 max-w-2xl mx-auto">
            <h3 className="text-5xl font-bold text-zinc-900 mb-4">
              Ainda tem dúvidas?
            </h3>
           
            <Button asChild size={'lg'} className='rounded-full text-lg'>  
              <a
              href="https://wa.me/5511999999999?text=Tenho%20dúvidas%20sobre%20o%20serviço%20de%20ajuda%20com%20dependência%20em%20apostas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3  text-white font-semibold px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
             
              Falar com Especialista <ChevronRight/>
            </a>
            </Button>
           
          </div>
          <DottedGlowBackground
        className="pointer-events-none max-w-2xl z-0 mx-auto mask-radial-to-90% mask-radial-at-center"
        opacity={.3}
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

        </div>
      </div>
    </section>
  )
}
