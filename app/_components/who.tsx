'use client'

import React from 'react'
import { Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
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

export default function Who() {
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
    alert('Solicitação enviada com sucesso! Entraremos em contato em breve.')
    form.reset()
  }

  return (
    <section id='you' className="py-20 rounded-2xl text-white bg-zinc-950 w-full ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 items-start ">
        {/* Header */}
        <div className=" h-full relative">
          <h2 className="text-4xl font-bold  mb-4">
            Para quem é
          </h2>
          <p className="text-lg text-muted-foreground text-balance  max-w-3xl mx-auto">
            Nossa plataforma oferece suporte tanto para quem precisa de ajuda quanto para quem quer ajudar alguém próximo
          </p>
          <div>
          <div className="grid grid-cols-3 gap-4 mb-8 mt-auto bottom-0 w-full absolute">
  <div className="text-start mt-auto">
    <div className="text-3xl font-bold text-emerald-500">2.3M</div>
    <div className="text-sm text-zinc-400">Brasileiros afetados</div>
  </div>
  <div className="text-start">
    <div className="text-3xl font-bold text-emerald-500">24/7</div>
    <div className="text-sm text-zinc-400">Atendimento disponível</div>
  </div>
  <div className="text-start">
    <div className="text-3xl font-bold text-emerald-500">100%</div>
    <div className="text-sm text-zinc-400">Anônimo e gratuito</div>
  </div>
</div>
          </div>
        </div>
      
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-zinc-200">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6 text-center">
              Solicite ajuda agora
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-black">
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
                          className="px-4 py-3 rounded-xl"
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
                            </Button> </FormDescription>
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
          </div>
        </div>
        </div>
    </section>
  )
}
