import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Edukasyon at Pagpapaunlad ng Kasanayan",
    description:
      "Mga training, workshop, learning activities, at iba pang oportunidad para sa pagkatuto at pagpapaunlad ng kakayahan.",
    image: "",
  },
  {
    title: "Trabaho at Kabuhayan",
    description:
      "Mga programa at oportunidad na makatutulong sa career awareness, livelihood, entrepreneurship, at paghahanda para sa trabaho.",
    image: "",
  },
  {
    title: "Sports at Pisikal na Kaunlaran",
    description:
      "Mga paligsahan, sports activities, fitness programs, at iba pang aktibidad na nagtataguyod ng teamwork, disiplina, at aktibong pamumuhay.",
    image: "",
  },
  {
    title: "Kalusugan at Kagalingan",
    description:
      "Mga programa na naglalayong palawakin ang kaalaman ng kabataan tungkol sa kalusugan, wellness, at healthy lifestyle.",
    image: "",
  },
   {
    title: "Sining, Kultura at Pagkamalikhain",
    description:
      "Mga aktibidad na nagbibigay ng pagkakataon sa kabataan na maipakita at mapaunlad ang kanilang talento at pagkamalikhain.",
    image: "",
  },
   {
    title: "Pangangalaga sa Kapaligiran",
    description:
      "Mga inisyatiba na naghihikayat sa kabataan na makilahok sa pangangalaga at pagpapanatili ng malinis na kapaligiran.",
    image: "",
  },
   {
    title: "Digital Literacy at Responsableng Paggamit ng Teknolohiya",
    description:
      "Mga aktibidad na nagtataguyod ng ligtas, responsable, at produktibong paggamit ng internet at social media.",
    image: "",
  },
   {
    title: "Pakikilahok at Bolunterismo ng Kabataan",
    description:
      "Mga oportunidad para sa kabataan na makilahok, magboluntaryo, maglingkod, at maging bahagi ng mga gawaing pangkomunidad.",
    image: "",
  }

];

export const Programs = () => {
    return <section id= "programs" className="py-25 relative overflow-hidden">
                {/* Bg glows */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
                <div className="container mx-auto px-6 relatize z-10">
                    {/* Section header */}
                    <div className="text-center mx-auto max-w-3xl mb-16">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            PROGRAMS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                            <span className="font-serif  font-normal ">
                                AMING MGA POKUS
                            </span>
                        </h2>
                    </div>

                    {/* Projects Grid */}
                    <div className="mb-10 grid md:grid-cols-4 gap-8">
                        {projects.map((project, idx) => (
                            <div 
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden aspect-video">
                                     <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                      />
                                     <div
                                        className="absolute inset-0 
                                        bg-gradient-to-t from-card via-card/50
                                        to-transparent opacity-60"
                                    />
                                </div>
                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>

                                    </div>
                                    <p className="text-nuted-foreground text-sm"> 
                                        {project.description}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                    
                                  
                <p className="text-2xl mb-5 font-serif  md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground text-center">
                            <span className="glow-text"> MARAMING</span>  
                            <span className="glow-text hover:text-red"> SA</span>
                            <span className="glow-text hover:text-blue">LA</span>
                            <span className="glow-text hover:text-yellow">MAT! </span>
                        </p>
                        <p className="text-center">
                            <p className="mb-2">
                          Ang Kapartner ng Kabataan ay patuloy na lumalago dahil sa suporta ng mga <strong> kabataan, boluntaryo, katuwang, organisasyon, at miyembro ng komunidad </strong> na nagbibigay ng kanilang oras, talento, ideya, at suporta.
                            </p>

                             <p className="mb-2">
                         Maraming salamat sa bawat taong nakikiisa at naniniwala sa kakayahan ng kabataan.

                            </p>

                             <p className="mb-5">
                          Sama-sama nating gawing mas makabuluhan ang bawat pagkakataon para sa kabataan ng North Daanghari.

                            </p>

                               <p className="mb-2">  
                            <span className="text-logo-red font-serif"> <strong> KAPARTNER</strong></span>
                            <span className="text-logo-blue font-serif"> <strong> NG </strong></span>
                            <span className="text-logo-yellow font-serif"> <strong> KABATAAN</strong></span>

                            </p>

                            <p className="mb-2">
                        <strong className="font-serif"> Tulay ng Malasakit, Serbisyo, at Pagkakaisa. </strong>

                            </p>  
                        </p>

                     <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">

                     
                        <a href= "#projects"
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group" >
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                        </a>
                    </div>
                </div>
            </section>;
};