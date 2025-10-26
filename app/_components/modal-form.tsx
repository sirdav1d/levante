'use client'

import React from 'react'
import { ChevronRight, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

// Schema de validação com Zod
const formSchema = z.object({
  name: z.string().min(3,'Nome é obrigatório'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  whatsapp: z.string().min(1, 'WhatsApp é obrigatório').regex(/^55\d{2}\d{8,9}$/, 'Formato inválido. Use 5511950826317'),

  lgpdConsent: z.boolean().refine(val => val === true, {
    message: 'Você deve aceitar os termos de privacidade'
  })
})

type FormData = z.infer<typeof formSchema>

interface ModalFormProps {
  triggerText?: string
  triggerVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  triggerSize?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export default function ModalForm({ 
  triggerText = "Solicitar ajuda",
  triggerVariant = "default",
  triggerSize = "default",
  className = ""
}: ModalFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      city: '',
      whatsapp: '',
    
      lgpdConsent: false
    }
  })

  const onSubmit = (data: FormData) => {
    console.log('Formulário enviado:', data)
    
    // Gerar mensagem padrão para WhatsApp
    const message = generateWhatsAppMessage(data)
    
    // Número do WhatsApp (substitua pelo número da sua empresa/organização)
    const whatsappNumber = '5511920060646' // Formato: código do país + DDD + número
    
    // Gerar URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    // Abrir WhatsApp em nova aba
    window.open(whatsappUrl, '_blank')
    
    // Mostrar confirmação
    alert('Redirecionando para o WhatsApp...')
    form.reset()
  }

  const generateWhatsAppMessage = (data: FormData) => {
    const { name, city, whatsapp,  } = data
    
    
    
    return `Olá! Gostaria de solicitar ajuda.

📋 *Dados da solicitação:*
• Nome: ${name}
• Cidade: ${city}
• WhatsApp: ${whatsapp}


Por favor, entre em contato comigo para mais detalhes. Obrigado! 🙏`
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant={triggerVariant} 
          size={triggerSize}
          className={className}
        >
          {triggerText}<ChevronRight/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-zinc-900 text-center">
            Solicite ajuda agora
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-600">
            Preencha os dados abaixo e entraremos em contato em breve
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Seu nome ou da pessoa" 
                      {...field} 
                      className="px-4 py-3 rounded-full "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Sua cidade" 
                      {...field} 
                      className="px-4 py-3 rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* WhatsApp */}
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="5511950826317" 
                      {...field} 
                      className="px-4 py-3 rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           
          
            {/* LGPD Checkbox */}
            <FormField
              control={form.control}
              name="lgpdConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-1 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-zinc-600">
                      Autorizo o contato seguro e o tratamento dos meus dados pessoais conforme a{' '}
                    </FormLabel>
                    <FormDescription>
                      <Button asChild variant={'link'} className='p-0'> 
                        <a href="#">Política de Privacidade</a>
                      </Button> 
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={!form.watch('lgpdConsent')}
              className="w-full disabled:bg-zinc-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              Enviar ajuda
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
