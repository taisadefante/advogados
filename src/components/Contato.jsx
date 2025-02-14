import icon from "../../public/iconForm.png";
import { Form } from "./Form";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export function Contato() {
  return (
    <section className="md:px-20 relative">
      <img
        src={icon}
        className="md:block hidden w-1/5 absolute left-[2%] bottom-0"
        loading="lazy"
      />
      <div
        className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:px-20"
        id="Contato"
      >
        <div className="contato lg:col-span-2 bg-[#0C1A26] py-6 flex gap-6 flex-col items-center text-white w-full">
          <div className="px-6 items-center text-center flex flex-col gap-2">
            <h2 className="text-3xl mt-6 mb-2">
              <span className="border-b-4 border-[#D0A854]">Mande</span> uma
              mensagem
            </h2>
            <p className="font-light">
              Conte comigo para esclarecer suas dúvidas e proteger seus
              direitos!
            </p>
          </div>

          <Form />
        </div>

        <div className="contatos py-6 pb-12 flex gap-10 flex-col items-center text-white w-full bg-[#0F1E2D]">
          <div className="px-6 items-center text-center flex flex-col gap-2">
            <h2 className="text-3xl mt-6 border-b-4 border-[#D0A854] border-1/2 mb-2">
              Contatos
            </h2>
            <p className="font-light">
              Entre em contato pelos canais disponíveis
            </p>
          </div>

          <div className="links flex flex-col gap-2 w-1/2 items-center">
            <FaWhatsapp className="text-2xl text-[#D0A854]" />
            <a href="" rel="noopener noreferrer" target="_blank">
              (xx) 0000-00000
            </a>
          </div>

          <div className="links flex flex-col gap-2 w-1/2 items-center">
            <FaInstagram className="text-2xl text-[#D0A854]" />
            <a
              href="https://www.instagram.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              @xxxxxxxx
            </a>
          </div>

          <div className="links flex flex-col gap-2 w-1/2 items-center">
            <MdOutlineEmail className="text-2xl text-[#D0A854]" />
            <a href="">xxxxxxx@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
