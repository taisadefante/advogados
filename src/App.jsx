import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Servicos } from "./components/Servicos";
import { Sobre } from "./components/Sobre";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./Global.css"


export function App(){
  return(
    <>
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Contato />
      <Footer />
      <ToastContainer stacked draggable
        autoClose={2000}
        className="toast-container"
        hideProgressBar
        closeOnClick 
        theme="dark"
        position= "top-center"
        closeButton={false}
        />
    </>
  )
}