import { useState } from "react";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Form() {
  // const notify = () => toast.success("Formulário enviado com sucesso")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    msg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      tel: formData.tel,
      message: formData.msg,
      subject: `Email enviado por ${formData.name}`,
    };

    emailjs
      .send(
        "service_chqdmqe",
        "template_1m78zhp",
        templateParams,
        "Uu8mJiCc9V1QnKYBG"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Formulário enviado com sucesso");

          setFormData({
            name: "",
            email: "",
            tel: "",
            msg: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Erro ao enviar. Tente novamente!");
        }
      );
  }

  return (
    <form
      onSubmit={sendEmail}
      className="px-6 w-full md:w-[55%] flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="name">Nome:</label>
        <input
          name="name"
          type="text"
          className="bg-transparent"
          placeholder="Insira seu nome"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          className="bg-transparent"
          placeholder="Insira seu email"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="tel">Telefone: </label>
        <input
          name="tel"
          type="tel"
          pattern="\(?\d{2}\)?\d{4,5}\d{4}"
          className="bg-transparent"
          placeholder="Insira seu telefone"
          onChange={handleChange}
          value={formData.tel}
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="msg">Mensagem:</label>
        <textarea
          name="msg"
          className="focus:outline-none text-slate-200 bg-transparent border-b pl-2 pr-6 resize-none"
          placeholder="Escreva sua mensagem"
          onChange={handleChange}
          value={formData.msg}
          required
        ></textarea>
      </div>
      <input
        type="submit"
        value="Enviar"
        className="py-4 px-6 text-[#0C1A26]  font-semibold bg-[#D0A854] w-fit radius"
      />

      {/* <button onClick={notify}>Teste</button> */}
    </form>
  );
}
