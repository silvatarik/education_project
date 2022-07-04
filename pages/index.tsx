import type { NextPage } from 'next'
import Head from 'next/head'
import SearchIcon from '@mui/icons-material/Search'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Education</title>
        <meta name="description" content="Proyecto creado por Tarik Silva Peña" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <!-- Section 1 --> */}
        <section className='relative bg-fixed bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url('./img/home/hero.jpg')" }}>
          <div className='h-full bg-opacity-50 bg-black'>
            <div className="w-full px-6 pb-12 antialiased">
              <div className="mx-auto max-w-7xl">
                <nav className="relative z-50 h-24 select-none">
                  <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
                    <div className="flex items-center justify-start w-1/4 h-full pr-4">
                      <a href="#_" className="inline-block py-4 md:py-0">
                        <span className="p-1 text-xl font-black leading-none text-white">LOGO</span>
                      </a>
                    </div>
                    <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
                      <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                        <a href="#_" className="items-center block w-auto h-16 px-6 text-xl font-black leading-none text-white md:hidden">tails<span className="text-indigo-600">.</span></a>
                        <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                          <a href="#_" className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-white transition duration-700 hover:scale-125 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                          <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-white md:w-auto md:px-0 md:mx-2 transition duration-700 hover:scale-125 lg:mx-3 md:text-center">Features</a>
                          <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-white md:w-auto md:px-0 md:mx-2 transition duration-700 hover:scale-125 lg:mx-3 md:text-center">Blog</a>
                          <a href="#_" className="inline-block w-full py-2 mx-0 font-medium text-left text-white md:w-auto md:px-0 md:mx-2 transition duration-700 hover:scale-125 lg:mx-3 md:text-center">Contact</a>
                        </div>
                        <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                          <a href="#" className="w-full px-3 py-2 mr-0 text-gray-700 md:mr-2 lg:mr-3 md:w-auto">Sign In</a>
                          <a href="#_" className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600">Sign Up</a>
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-0 flex flex-col items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                      <svg className="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak=""><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      <svg className="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak=""><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                  </div>
                </nav>

                {/* <!-- Main Hero Content --> */}
                <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
                  <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Start Crafting Your</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">Next Great Idea</span></h1>
                  <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Simplifying the creation of landing pages, blog pages, application pages and so much more!</div>
                  <div className="flex flex-col items-center mt-12 text-center">
                    <span className="relative inline-flex w-full md:w-auto">
                      <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Purchase Now
                      </a>
                      <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">only $15/mo</span>
                    </span>
                    <a href="#_" className="mt-3 text-sm text-indigo-500">Learn More</a>
                  </div>
                </div>
                {/* <!-- End Main Hero Content --> */}

              </div>
            </div >
          </div>
        </section>

      </main >
    </>
  )
}

export default Home
