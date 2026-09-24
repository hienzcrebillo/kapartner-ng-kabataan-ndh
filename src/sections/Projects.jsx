import { ChevronLeft, ChevronRight, Quote, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";;


const projects =[
    {
        title: "Rolling Kitchen",
        date: "Abril 12, 2026",
        place: "Road 2 Extension, North Daanghari, Taguig City",
        participants: "Kabataan at mga residente ng North Daanghari, Youth  Volunteers mula sa TST NDH Locos at mga Kapartner ng Kabataan.",
        description: "Ang Rolling Kitchen Program ay isang community-based feeding initiative na naglalayong maghatid ng masarap at masustansyang pagkain para sa mga kabataan sa North Daanghari. Sa pamamagitan ng programang ito, nais ng Kapartner ng Kabataan – North Daanghari na makapaghatid hindi lamang ng pagkain kundi pati ng saya, pakikipagkapwa, at malasakit sa bawat kabataang nakikilahok.",
        links: "https://www.facebook.com/share/p/1W23DjCa25/",
        images: [
            "/program-photos/rollingkitchen/rk1.png",
            "/program-photos/rollingkitchen/rk2.png",
            "/program-photos/rollingkitchen/rk3.png",
            "/program-photos/rollingkitchen/rk4.png",
            "/program-photos/rollingkitchen/rk5.png",
        ]

    },
    {
        title: "NutriHenyo: Live Quiz Bee",
        date: "Hulyo 28, 2026",
        place: "North Daanghari, Taguig City",
        participants: " Kabataan ng North Daanghari, at ang mga nanalo na sina: Rosielyn Ropa, Raymart Mantomingcal Timbal, Sophia Blaire Rosco, Nikka Yadao, Kim Magalona, Kryss Ssyrk, Kristine Mae Mendoza, Roze Lyne, Christine Jade Buquid, at Juvie Toribio. ",
        description: "Ang NutriHenyo ay isang interactive na programa para sa kabataan na nagtataguyod ng kaalaman tungkol sa wastong nutrisyon at malusog na pamumuhay. Sa pamamagitan ng isang masayang Live Quiz Bee, nagkaroon ng pagkakataon ang mga kabataan na matuto, makilahok, at subukin ang kanilang kaalaman tungkol sa nutrisyon habang nakikipagpaligsahan sa kapwa kabataan.",
        links: "https://www.facebook.com/share/p/19apL9ijpG/?mibextid=wwXIfr",
        images: [
            "/program-photos/nutrihenyo/nh1.png",
            "/program-photos/nutrihenyo/nh2.png",
            "/program-photos/nutrihenyo/nh3.png",
            "/program-photos/nutrihenyo/nh4.png",
        ]

    },
    {
        title: "Kapangyarihan ng Wikang Filipino",
        date: "Agosto 21-30, 2026",
        participants: "Kabataang 10-18 taong gulang North Daanghari ",
        description: "Bilang pagdiriwang ng Buwan ng Wika, Isang Tiktok Spoken Poetry challenge ang inihanda upang maipamalas ng mga kabataan ng North Daanghari ang kanilang taglay sa pag bigkas ng tula at pagpapamalas ng pagmamahal sa wikang pambansa.",
        links: "https://www.facebook.com/share/p/19FuGVexzk/?mibextid=wwXIfr ",
        images: [
            "/program-photos/kabataan/k1.png",
            "/program-photos/kabataan/k2.png",
            "/program-photos/kabataan/k3.png",
            "/program-photos/kabataan/k4.png",
            "/program-photos/kabataan/k5.png",
        ]

    },
     {
        title: "WiKapangyarihan: Ang Tunay na Henyo",
        date: "Agosto 22, 2026",
        participants: "Ra Arals, John Drayden Mendoza Amar, Anjilu Khaye, Aldrin Abalos, Angerrie Sueno, April Gwen Abalos, Amhidel Reyes, Nicole Placides, Christine Jade Buquid, Azel Martinez Olleres ",
        winner: "Diane Mendoza, AM Diestro, Richelle Baraceros, Rosielyn Ropa, Japet Buod, Samantha Kate Rosco, Juvie Toribio, at Joy Belaro",
        description: "Ang Wikapangyarihan: Ang Tunay na Henyo ay isang interactive na programa para sa kabataan na nagtataguyod ng kaalaman tungkol sa pagpapahalaga sa wikang Filipino, kultura, at karunungang-bayan. Sa pamamagitan ng isang masayang Live Quiz Bee, nagkaroon ng pagkakataon ang mga kabataan na matuto, makilahok, at subukin ang kanilang talino tungkol sa wika habang nakikipagpaligsahan at nagkakaroon ng koneksyon sa kapwa kabataan.",
        links: "https://www.facebook.com/share/p/187QoBpunK/",
        images: [
            "/program-photos/wika/w1.png",
            "/program-photos/wika/w2.png",
            "/program-photos/wika/w3.png",
            "/program-photos/wika/w4.png",
            "/program-photos/wika/w5.png",
        ]

    },
    {
        title: "City of Taguig Youth Trade Bazaar: Kapartner ng Kabatan Pastil House ",
        date: "Agosto 11-14 2026 ",
        participants: "Stephanie Plana, Ann Lorraine Aguilar, Joana Mae Mendoza, Jinelle Rosco, at Kislev Masing ",
        description: "Ang City of Taguig: Youth Trade Bazaar ay isang programa na nagbibigay ng pagkakataon sa mga kabataan na matuto at magkaroon ng aktuwal na karanasan sa entrepreneurship, financial literacy, customer service, at pagpapatakbo ng maliit na negosyo. Sa pamamagitan ng programa, nabigyan ang mga kabataan ng espasyo upang maipakita ang kanilang sipag, pagkamalikhain, diskarte, at kakayahan habang nagbebenta ng kanilang mga produkto. Higit pa sa pagkakaroon ng pagkakakitaan, layunin ng Youth Trade Bazaar na mahubog ang mga kabataan sa pagiging mas responsable, madiskarte, at handang humarap sa mga hamon ng entrepreneurship.",
        links: "https://www.facebook.com/share/p/19JkLsif3u/?mibextid=wwXIfr ",
        images: [
            "/program-photos/bazaar/b1.png",
            "/program-photos/bazaar/b2.png",
            "/program-photos/bazaar/b3.png",
            "/program-photos/bazaar/b4.png",
            "/program-photos/bazaar/b5.png",
            "/program-photos/bazaar/b6.png",
        ]

    },

]


export const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const images = projects[0].images;



const [currentImage, setCurrentImage] = useState(0);
const [animate, setAnimate] = useState(true);

const currentProject = projects[activeIdx];

const slideImages = [
    ...currentProject.images,
    currentProject.images[0],
];

useEffect(() => {
    setCurrentImage(0);
    setAnimate(true);
}, [activeIdx]);



useEffect(() => {
    const timer = setInterval(() => {
        setCurrentImage((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
}, []);

useEffect(() => {
    if (currentImage === images.length) {
        setTimeout(() => {
            setAnimate(false);
            setCurrentImage(0);

            setTimeout(() => {
                setAnimate(true);
            }, 50);
        }, 1500);
    }
}, [currentImage, images.length]);
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-5"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            Projects & Activities
          </span>
        </div>

       {/* Testimonial Carousel */}
        <div className="max-w-10xl gap-10">
            <div>
                <div className="relative">
                    {/* Main Testimonial */}
                        <div className=" p-8 rounded-3xl md:p-5 glow-border animate-fade-in animation-delay-200 grid md:grid-cols-2 ">
                        <div className="md:col-span-2 flex items-center justify-center gap-2 mt-4">
                            <button
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                onClick={previous}
                            >
                                <ChevronLeft />
                            </button>

                            <button
                                onClick={next}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <ChevronRight />
                            </button>
                        </div>  

                        <div className="mx-6">
                            <div className="p-6 md:p-6">
                             
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-4 font-serif glow-text">
                               {projects[activeIdx].title}
                            </h3>

                            {/* Date */}
                            <p className="text-sm md:text-base text-muted-foreground mb-4">
                               <strong> Petsa: </strong>  {projects[activeIdx].date}
                            </p>

                            {/* Participants */}
                            <p className="text-sm md:text-base text-muted-foreground mb-4">
                               <strong> Mga Lumahok: </strong> {projects[activeIdx].participants}
                            </p>

                            {/* Description */}
                            <p className="text-sm md:text-base text-muted-foreground mb-4">
                                {projects[activeIdx].description}
                            </p>

                             <a
                                        href={projects[activeIdx].links}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-semibold hover:underline"
                                    >
                                    Para sa mas maraming imporasyon →
                                    </a>            
                                      
                        </div>
               
                        {/* Main Testimonial */}
                        <div className=" p-8 rounded-3xl md:p-12 animate-fade-in animation-delay-200 ">
                            <div className="relative w-full h-[550px] overflow-hidden rounded-2xl ml-2">
                                <div
                                    className={`flex w-full h-full ${
                                        animate
                                            ? "transition-transform duration-[2000ms] ease-in-out"
                                            : ""
                                    }`}
                                    style={{
                                        transform: `translateX(-${currentImage * 100}%)`,
                                    }}
                                >
                                    {slideImages.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`${currentProject.title} ${index + 1}`}
                                            className="w-full h-full object-cover flex-shrink-0"
                                        />
                                    ))}        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>  
        </div>
        
      </div>
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href= "#partners"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group" >
            <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
  );
};
