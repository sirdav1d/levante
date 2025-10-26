import { Button } from "@/components/ui/button";
import {  ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Background from "./background";
export default function Hero() {
  return (
    
    <div id="home" className="h-screen w-full flex justify-center items-center relative ">
      <Background/>
      <div className="grid grid-cols-2 container mx-auto">
      <div className="flex flex-col w-full px-5 gap-5 z-20 ">
       
        <h1 className="text-6xl font-bold leading-[1.2]">Não é fraqueza pedir ajuda. É o jeito mais forte de recomeçar.</h1>
        <p className="text-lg text-foreground text-balance">Converse com nossa IA no WhatsApp e encontre ajuda anônima e gratuita.</p>
        <Button size="lg" className=" mt-5 w-fit text-lg rounded-full duration-300 hover:-translate-y-1 transition-all ease-in-out hover:shadow-lg">Quero recuperar o controle <ChevronRightIcon className="w-4 h-4" /></Button>
      </div>
      <div className="container mx-auto flex flex-col px-5 gap-5">
      </div>
      </div>
    </div>
  )
}