import { CardServico } from "./CardServico";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa6";
import { GiBreakingChain } from "react-icons/gi";

export function Servicos() {
  return (
    <section
      className="fundo py-8 px-4 lg:px-[8rem] lg:h-[90vh] justify-center items-center flex flex-col lg:relative"
      id="Servicos"
    >
      <h2 className="text-2xl lg:text-white font-semibold lg:text-3xl text-center py-6 lg:capitalize lg:absolute lg:top-10">
        Serviços <span className="text-[#D0A854]">Oferecidos</span>
      </h2>

      <div className="flex lg:flex-row flex-col lg:flex-nowrap flex-wrap items-center justify-center p-4 gap-6">
        <CardServico
          svg={
            <MdOutlineWorkOutline className="text-6xl lg:text-white text-[#0C1A26]" />
          }
          titulo="Direito Trabalhista"
          text="Garantindo suporte jurídico em questões trabalhistas e previdenciárias, oferecendo orientação especializada em desligamentos, remuneração adicional, ambiente de trabalho adequado e acesso a benefícios e aposentadorias."
        />
        <div className="lg:hidden border w-1/5 h-1 bg-[#D0A854]"></div>
        <CardServico
          svg={
            <FaRegHandshake className="text-6xl lg:text-white text-[#0C1A26]" />
          }
          titulo="Direito Civil"
          text="Oferecendo assessoria jurídica em temas contratuais, planejamento sucessório, gestão de bens e assuntos familiares, sempre buscando soluções seguras e alinhadas às suas necessidades."
        />
        <div className="lg:hidden border w-1/5 h-1 bg-[#D0A854]"></div>
        <CardServico
          svg={
            <GiBreakingChain className="text-6xl lg:text-white text-[#0C1A26]" />
          }
          titulo="Direito Criminal"
          text="Prestando assistência jurídica em casos criminais, com compromisso, responsabilidade e abordagem estratégica para resguardar seus direitos e garantir um julgamento justo."
        />
      </div>
    </section>
  );
}
