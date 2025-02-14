import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

import icon from "/public/trabalhista.svg";
import civil from "/public/civil.svg";
import criminal from "/public/criminal.svg";

import { CardHero } from "./CardHero";

export function Hero() {
  const [bgImage, setBgImage] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const updateBackgroundImage = () => {
      const mobileImage = "/hero3.webp";
      const desktopImage = "/hero.webp";
      setBgImage(window.innerWidth <= 768 ? mobileImage : desktopImage);
    };

    updateBackgroundImage();

    window.addEventListener("resize", updateBackgroundImage);
    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  useEffect(() => {
    if (inView && !bgImage) {
      setBgImage(window.innerWidth <= 768 ? "/hero3.webp" : "/hero.webp");
    }
  }, [inView, bgImage]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <section
        ref={ref}
        className={`hero md:px-40 text-center lg:text-start bg-cover xl:pb-[12rem] pb-[8rem] px-4 lg:bg-fixed lg:mt-0 mt-20 pt-24 lg:pt-[12rem]`}
        id="Inicio"
        style={{
          backgroundImage: inView && bgImage ? `url(${bgImage})` : "none",
          backgroundColor: "#0C1A26", // Fallback
        }}
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-between lg:items-start items-center gap-12 text-white">
          <div className="flex flex-col gap-2 items-center lg:items-baseline">
            <h1 className="md:text-5xl text-3xl font-semibold lg:w-[600px] w-full mt-2 flex flex-col uppercase">
              nOME DO ADVOGADO
            </h1>
            <span className="text-[#D0A854] uppercase text-md font-semibold border px-6 py-1 border-[#D0A854] bg-black bg-opacity-20 rounded-md mt-2 md:mt-4">
              Advogado
            </span>
          </div>
          <p className="md:text-lg">
            Advogado especializado em Direito Trabalhista, Civil e Criminal,
            oferecendo assessoria jurídica estratégica para proteger seus
            direitos e garantir a melhor defesa dos seus interesses.
          </p>
          <div className="py-4 px-6 text-[#0C1A26] font-medium bg-[#D0A854] radius">
            <a href="https://wa.li" className="font-bold md:text-lg">
              Entre em contato
            </a>
          </div>
        </div>
      </section>

      <div className="relative bottom-10 lg:bottom-20 bg-[#0C1A26] flex justify-center md:px-20">
        <CardHero h2="Trabalhista" img={icon} />
        <CardHero h2="Civil" img={civil} />
        <CardHero h2="Criminal" img={criminal} />
      </div>
    </>
  );
}
