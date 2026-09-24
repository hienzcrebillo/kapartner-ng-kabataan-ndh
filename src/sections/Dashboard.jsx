import { Button } from '@/components/Button';
import {
  ArrowRight,
  Download,
  ChevronDown,
  MailIcon
} from 'lucide-react';
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Prisma",
  "Jest",
  "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Dashboard = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/**BG */}
        <div className="absolute inset-0">
            <img src = "45.png" 
            alt="knk.png"
            className="w-full h-full object-cover opacity-40"/>

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-background/75 to-white"/>
        </div>

       { /*Content*/}
       <div className="container mx-auto px-5 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

                 <div className="relative animate-fade-in animation-delay-300">
                {/*Profile Image */}
                    <div className= "relative max-w-md mx-auto">
                        
                        <div
                            className=" "
                        />
                        <div className="rounded-3xl p-2 ">
                            <img 
                            src= "/knk.png" 
                            alt="Kapartner ng Kabataan" 
                            className="w-full aspect-[2/2] object-cover rounded-xl" />
                        </div>
                    </div>
               </div>

               { /*Right column - Text Content*/}


               <div className="space-y-8">
          
                {/*Headline */}
                <div className="space-y-5">
                    
                    <h1 className="text-5xl md:text-3xl lg: text-7xl font-bold leading-tight animate-fade-in">
                    <span className="text-primary"> Kapartner ng Kabataan </span> 
                      <span> - </span>   
                    <span className="font-serif italic font-normal">
                    North Daang Hari
                    </span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        Tulay ng Malasakit, Serbisyo, at Pagkakaisa para sa Bawat Kabataan ng North Daanghari
                    </p>

                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        Ang Kapartner ng Kabataan – North Daanghari (KNK) ay isang pribadong organisasyon ng mga kabataan na naglalayong magbigay ng mga programa, oportunidad, at aktibidad para sa kapakanan at pag-unlad ng kabataan sa aming komunidad.
                    </p>

                     <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                       Sa pamamagitan ng pagkakaisa, bolunterismo, at pakikipagtulungan, isinusulong namin ang aktibong pakikilahok ng kabataan sa mga gawaing makatutulong sa kanilang personal na pag-unlad at sa buong komunidad.
                    </p>
                </div>
  
                </div>   
        </div>
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
            animate-fade-in animation-delay-800">
                <a href= "#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group" >
                <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
       </div>
    
       
    </section>
    );
};