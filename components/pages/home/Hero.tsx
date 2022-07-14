import { Button } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
    <>
      {/* <!-- Main Hero Content --> */}
      <div className="container max-w-lg px-4 py-48 mx-auto mt-px text-left md:max-w-none md:text-center">
        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none">
          <span className="inline md:block">APRENDE Y CONSTRUYE TU VIDA</span>
          <span className='md:text-6xl'>
            GANA CONOCIMIENTO CON <span className="relative mt-2 text-transparent bg-clip-text bg-primary md:inline-block">[ EMPRESA ]</span>
          </span>
        </h1>
        <div className="mx-auto mt-5 text-white md:mt-12 md:max-w-lg md:text-center lg:text-lg">Simplifying the creation of landing pages, blog pages, application pages and so much more!</div>
        <div className="flex flex-col items-center mt-12 text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <Button className="bg-primary" variant="contained">Registrate</Button>
          </span>
          <Button variant="text" className='text-white text-sm mt-5'>Saber Más</Button>
        </div>
      </div>
      {/* <!-- End Main Hero Content --> */}
    </>
  )
}

export default Hero