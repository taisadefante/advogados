export function CardHero({h2, img}){
  return(
      <div className="bg-[#0C1A26] w-full shadow-sm md:rounded-md lg:w-[300px] flex flex-col items-center py-4 text-white">
        <div className="bg-[#0C1A26] w-[80%] md:w-auto relative bottom-10 rounded-[100%] flex items-center justify-center">
          <img src={img} width="150" height="150" className="w-full" loading="lazy" alt="icon"/>
        </div>
        <h2 className="-mt-6 pb-6 font-semibold uppercase text-[#bbc1c7]">{h2}</h2>
      </div>
  )
}