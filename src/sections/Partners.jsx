import { ChevronLeft, ChevronRight, Quote, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";;

const partners =[
    
    {
        title: "Sining sa Kusina: Pastry Making Workshop  ",
        date: "Hulyo 19, 2026  ",
        participants: "Pinangunahan ng Taguig Manpower Training and Assessment Center - TMTC, Sangguniang Kabataan North Daanghari, Kapartner ng Kabataan North Daanghari, at mga Kabataan ng North Daanghari Facebook  ",
        description: " Programang nagbibigay oportunidad sa mga kabataan upang matuto ng mga bagong kasanayan sa paggawa ng iba’t ibang Pastry at maging handa sa kanilang kinabukasan.",
        links: "https://www.facebook.com/share/p/1B4pLu1pST/?mibextid=wwXIfr ",
        images: [
            "/program-photos/sining/s1.png",
            "/program-photos/sining/s2.png",
            "/program-photos/sining/s3.png",
            "/program-photos/sining/s4.png",
            "/program-photos/sining/s5.png",
            "/program-photos/sining/s6.png",
            "/program-photos/sining/s7.png",
            "/program-photos/sining/s8.png",
        ]
    },
     {
        title: "Youth Mission: Nutrisyon",
        date: "Hulyo 27, 2026 ",
        participants: "Stephanie Plana, Jinelle Anne Rosco ",
        description: " Ang Youth Mission: Nutrisyon ay isang makabuluhang programa para sa kabataan na nagtataguyod ng kaalaman tungkol sa wastong nutrisyon, malusog na pamumuhay, at mga digital health initiative tulad ng Taguig Nutri App. Sa pamamagitan ng diet counseling at mga sesyon sa Pinggang Pinoy at 10 Kumainments, nagkaroon ng pagkakataon ang mga kabataan na matuto mula sa mga eksperto at mapalawak ang kanilang kamalayan sa kahalagahan ng kalusugan at nutrisyon para sa komunidad. ",
        links: "https://www.facebook.com/share/r/1GvzycDSop/ ",
        images: [
            "/program-photos/youth/y1.png",
            "/program-photos/youth/y2.png",
            "/program-photos/youth/y3.png",
            "/program-photos/youth/y4.png",
            "/program-photos/youth/y5.png",
            "/program-photos/youth/y6.png",
            "/program-photos/youth/y7.png",
            "/program-photos/youth/y8.png",
        ]
    }
]


export const Partners = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % partners.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + partners.length) % partners.length
    );
  };

  const images = partners[0].images;

    const [currentImage, setCurrentImage] = useState(0);
    const [animate, setAnimate] = useState(true);

    const currentProject = partners[activeIdx];

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
    <section id="partners" className="py-25 relative overflow-hidden">
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
            Partnerships and Collaboration
          </span>
        </div>

       {/* Carousel */}
        <div className="max-w-10xl gap-10">
            <div>
                <div className="relative">
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

                        <div className=" p-8 rounded-3xl md:p-12 animate-fade-in animation-delay-200 ">
                            <div className="relative w-full h-[550px] overflow-hidden rounded-2xl -ml-4">
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

                        <div className="mx-10">
                            <div className="p-6 md:p-6">
                             
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-4 font-serif glow-text">
                               {partners[activeIdx].title}
                            </h3>

                            {/* Date */}
                            <p className="text-sm md:text-base text-muted-foreground mb-4">
                               <strong> Petsa: </strong>  {partners[activeIdx].date}
                            </p>

                            {/* Participants */}
                            <p className="text-sm md:text-base text-muted-foreground mb-4">
                               <strong> Mga Lumahok: </strong> {partners[activeIdx].participants}
                            </p>

                            {/* Description */}
                            <p className="text-sm md:text-base text-muted-foreground mb-4">
                                {partners[activeIdx].description}
                            </p>

                             <a
                                        href={partners[activeIdx].links}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary font-semibold hover:underline"
                                    >
                                    Para sa mas maraming imporasyon →
                                    </a>            
                        </div>               
                    </div>
                </div>
            </div>
            
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a href= "#contact"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group" >
            <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
    </section>
  );
};
