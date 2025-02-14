export function CardServico({svg, titulo, text}){
  return(
      <div className="card lg:text-white lg:bg-[#0C1A26] md:backdrop-blur-md bg-opacity-80 md:bg-opacity-20 px-6 py-6 flex flex-col items-center text-center gap-4 rounded-md md:w-1/3 md:h-[300px]" data-aos="fade-up"> 
        {svg}
        <h2 className="text-xl font-semibold">{titulo}</h2>
        <p>{text}</p>
      </div>
  )
}