import { IoClose } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo.png";

export function Menu({ active, setActive }) {
  const closeSidebar = () => {
    setActive(false);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[70%] bg-[#efefef] shadow-lg z-20 transform ${
        active ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-6">
        <IoClose className="text-2xl cursor-pointer" onClick={closeSidebar} />
      </div>

      <div className="flex w-full justify-center items-center pb-10">
        <img src={Logo} />
      </div>

      <nav className="link flex flex-col items-center gap-6 px-6 text-slate-800 font-medium">
        <a href="#Inicio" onClick={closeSidebar}>
          Início
        </a>
        <a href="#Sobre" onClick={closeSidebar}>
          Sobre
        </a>
        <a href="#Servicos" onClick={closeSidebar}>
          Serviços
        </a>
        <a href="#Contato" onClick={closeSidebar}>
          Contatos
        </a>

        <div className="link flex gap-4 pt-10">
          <a
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://wa.me/551" rel="noopener noreferrer" target="_blank">
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </nav>
    </div>
  );
}
