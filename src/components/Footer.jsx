import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="h-[200px] mt-10 py-6 lg:px-[10rem] flex flex-col lg:flex-row items-center justify-between border-t-2 gap-8">
      <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />

      <div className="link flex gap-6">
        <a
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://w" rel="noopener noreferrer" target="_blank">
          <FaWhatsapp className="text-2xl" />
        </a>
        <a
          href="xxxxxxxxxxxxx@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <MdOutlineEmail className="text-2xl" />
        </a>
      </div>

      <div className="pb-10 lg:pb-0 text-center flex flex-col items-center">
        <p>
          &copy; 2025 - DEFAN Soluções Digitais | Todos os direitos reservados.
        </p>
        <p>Desenvolvido por: Taís Defante</p>
      </div>
    </footer>
  );
}
