import { Brain, BrainCircuit, Code2, HandshakeIcon, Lightbulb, Rocket, School2Icon, ChevronDown, Target, Trophy  } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Technical Skills",
    description:
      "• Development and Maintenance \n" +
      "• Debugging and Troubleshooting \n" +
      "• SQL and Database Management \n" +
      "• Performance Optimization \n" ,
      
  },
  {
    icon: HandshakeIcon,
    title: "Personal Skills",
    description:
      "• Adaptable and eager to learn. \n" +
      "• Highly motivated to improve.\n" +
      "• Team player and collaborative.\n" +
      "• Practical problem-solver. \n" ,
  }
];

const education = [
    {
    icon: School2Icon,
    title: "SINO KAMI?",
    description: "• Bachelor of Technical - Vocational in ICT Major in Computer Programming \n" +
    "Technological University of the Philippines - Taguig City | 2018 - 2022 \n" +
    "• IT in Mobile App and Web Development \n" +
    "STI Global City | 2016 - 2018"
  },
]

const layunin = [
    {
    icon: Trophy,
    title: "AMING LAYUNIN",
    subtitle: "Maging tulay ng malasakit, serbisyo, at pagkakaisa para sa kabataan ng North Daanghari.",
    p1: "Layunin naming:",
    description: "• Magbigay ng mga programang tumutugon sa pangangailangan at interes ng kabataan \n" +
                    "• Magkaroon ng mga oportunidad para sa pagkatuto at pagpapaunlad ng kasanayan. \n" +
                    "• Hikayatin ang aktibong pakikilahok ng kabataan sa mga gawaing pangkomunidad. \n"+
                    "• Isulong ang kalusugan, sports, at aktibong pamumuhay. \n "+
                    "• Suportahan ang talento, pagkamalikhain, at kakayahan ng kabataan.\n "+
                    "• Magbigay ng mga oportunidad para sa livelihood, trabaho, at personal na pag-unlad. \n"+
                    "• Hikayatin ang bolunterismo at paglilingkod sa komunidad. \n" +
                    "• Bumuo ng mga ugnayan at pakikipagtulungan para sa kapakinabangan ng kabataan. \n"

  },

]

export const About = () => {
    return <section id= "about" className="py-25 relative overflow-hidden bg-gradient-to-b from-gray-200 via-white to-gray-200">
        <div className="container mx-auto px-6 relatize z-10">

            
            <div className="grid lg:grid-cols-2 gap-16 items-top"> {/*Left column*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Us</span>
                    </div>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

                        <p className="text-2xl font-serif md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            SINO <span className='text-logo-red glow-text'> KAMI</span>?
                        </p>
                        <p>
                            <p className="mb-2">
                                Kami ay isang <strong>pribadong organisasyon ng mga kabataan</strong> na nagsimula noong <strong> Disyembre 2025</strong>.
                            </p>
                            <p className="mb-2">
                                Binuo ang Kapartner ng Kabataan mula sa hangaring magkaroon ng organisadong grupo na maaaring magsilbing katuwang ng kabataan sa pagbuo at pagsasagawa ng mga makabuluhang programa at aktibidad.
                            </p>
                             <p className="mb-6">
                               Naniniwala kami na ang kabataan ay hindi lamang tagatanggap ng mga programa. Sila rin ay maaaring maging <strong> aktibong katuwang, boluntaryo, lider, at bahagi ng mga solusyon </strong> para sa kanilang komunidad.
                            </p>
                        </p>
                 
                        <p className="text-2xl font-serif  md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            PAANO KAMI <span className="text-logo-blue glow-text"> NAGSIMULA? </span>
                        </p>
                        <p>
                            <p className="mb-2">
                            Nagsimula ang Kapartner ng Kabataan sa isang simpleng layunin- <strong> pag-isahin ang mga kabataan at lumikha ng mga oportunidad para sa kanila </strong>.                               
                            </p>
                             <p className="mb-2">
                            Mula nang itatag noong Disyembre 2025, patuloy naming isinusulong ang mga gawaing nakatuon sa interes, talento, pangangailangan, at potensyal ng kabataan.
                            </p>

                             <p className="mb-6">
                            Sa tulong ng aming mga boluntaryo, katuwang, at mga miyembro ng komunidad, patuloy naming binubuo ang isang organisasyong bukas sa pakikipagtulungan at pakikilahok ng bawat kabataan.
                            </p>                        
                        </p>
                    </div>     
                </div>

                {/* Right column */}
                <div>             
                    {/* Aming layunin */}
                    <div className="mt-12">
                        {layunin.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 3) * 100}ms` }}
                            >

                              <h3 className="text-xl font-semibold mb-5 flex items-center gap-3">              
                                <div className="flex items-center justify-center shrink-0">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                       <span className="font-serif ">AMING <span className="text-logo-yellow glow-text">LAYUNIN</span></span>
                               </h3>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.subtitle}
                                </h3>
                                 <h3 className="text-md mb-2">
                                    {item.p1}
                                </h3>
                                <p className="text-md text-muted-foreground whitespace-pre-line leading-7">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="mt-5 text-2xl font-serif mb-4 md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground text-center">
                            AMING <span className="text-logo-red glow-text"> PANGAKO </span>
                        </p>
                        <p className="text-center">
                            <p className="mb-2">
                            Nangangako ang  <strong> Kapartner ng Kabataan </strong>na patuloy na magsisilbing katuwang ng kabataan sa paglikha ng mga programa at oportunidad na   <strong> makabuluhan, inklusibo, at naaayon sa pangangailangan ng komunidad   </strong>.
                            </p>
                             <p className="mb-2">
                           Makikinig kami sa mga ideya at mungkahi ng kabataan, susuportahan ang kanilang mga kakayahan, at hihikayatin silang maging aktibong bahagi ng mga gawaing pangkomunidad.
                            </p>
                             <p className="mb-6">
                            <strong> Hindi lamang para sa kabataan - kasama ang kabataan.   </strong>
                            </p>                  
                        </p>

                <p className="text-2xl mb-4 font-serif  md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground text-center">
                            BAKIT  
                            <span className="glow-text hover:text-red"> KAPARTNER  </span>
                            <span className="glow-text hover:text-blue"> NG </span>
                            <span className="glow-text hover:text-yellow"> KABATAAN </span>
                        </p>
                        <p className="text-center">
                            <p className="mb-2">
                          Pinili namin ang pangalang <strong>Kapartner ng Kabataan </strong>dahil naniniwala kami na mas maraming bagay ang nagagawa kapag tayo ay nagtutulungan.
                            </p>
                             <p className="mb-2">
                          Hindi kailangang mag-isa ang isang kabataan sa pag-abot ng kanyang mga pangarap. Sa pamamagitan ng tamang suporta, oportunidad, at pakikipagtulungan, mas marami silang maaaring matutunan, maranasan, at maibahagi sa komunidad.
                            </p>
                             <p className="mb-2">
                          Ang <strong> KNK </strong> ay nais maging <strong> kapartner ng bawat kabataan</strong>—sa pagkatuto, pag-unlad, paglilingkod, at pakikilahok.
                            </p>
                        </p>
                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                    <a href= "#programs"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group" >
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                    </a>
                </div>
        </div>
    </section>;
};