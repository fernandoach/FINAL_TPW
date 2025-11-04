function HomePage(){
  return(
  <section className="w-full flex items-center justify-between px-16 py-10 from-[#ffe5d1] ">
    <div className="flex flex-col gap-5 max-w-lg">
    <h1 className="text-5xl fond-semibold leading-tight">Tienda de <br/>
      <span className="text-orange-500 font-bold">Motos</span>
    </h1>
    <p className="text-gray-600">Tienda especializadas en motos de calidad, con variedad de modelos, precios justos y en mejor servicio para que disfrutes la libertad sobre dos ruedas. </p>
  <div className="flex gap-4 mt-3 ">
    <button className="bg-white shadow-md px-6 py-3 rounded-full font-medium hover:scale-150 transition">¡REGISTRARSE GRATIS!</button>
    <button className="bg-orange-500 shadow-md px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition">INICIAR SESION</button>
  </div>
  <div className="mt-4 pl-20">
    <div className=" grid grid-cols-2 gap-4 mt-6 opacity-80 w-40">
    <img src="https://logodownload.org/wp-content/uploads/2014/04/honda-motos-logo-0.png" alt="Honda" className="h-15"/>
    <img src="https://ducatimadrid.com/wp-content/uploads/2021/02/logotipo.png.webp" alt="Ducati" className="h-15"/>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcWWR0pLv8gvuByNtAp9sQDmJwrGsTBDZRQ&s" alt="Yamaha" className="h-15"/>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsXRicLzFfUw7tjEEdMEtMT-hPpz3meFZ8Q&s" alt="Kawasaki" className="h-15"/>
  </div>
  </div> 
    </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="https://i.postimg.cc/MTVW1dR5/pngwing-com.png"
          alt="Moto"
          className="w-full max-w-[900px] drop-shadow-2xl"
        />
      </div>
    </section>
  );
}

export { HomePage }
