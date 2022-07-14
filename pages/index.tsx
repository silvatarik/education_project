import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/pages/home/navigation/Navbar'
import Hero from '../components/pages/home/Hero'
import CarouselImages from '../components/pages/home/carousels/CarouselImages'
import WavesAnimation from '../components/effects/WavesAnimation'
import CardFeature from '../components/pages/home/card/CardFeature'
import BannerAchievement from '../components/pages/home/banners/BannerAchievement'
import Teams from '../components/pages/home/Teams'

const images = [{ url: 'hero.jpg' }, { url: 'hero1.jpg' }]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Proyecto creado por Tarik Silva Peña" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        {/* <!-- Header Section ------> */}
        <section id='header'>
          <Navbar />
          <CarouselImages items={images}>
            <div className='h-full bg-opacity-50 bg-fixed bg-center bg-cover bg-black'>
              <Hero />
              <WavesAnimation />
            </div>
          </CarouselImages>
        </section>

        {/* <!-- End Header Section --> */}

        {/* <!-- Features Section ------> */}

        <section id='features'>
          <div className="container mx-auto py-10">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white text-center">¿ Nuestros <span className="underline decoration-blue-500">valores</span> ?</h1>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              <CardFeature />
              <CardFeature />
              <CardFeature />
            </div>
          </div>
        </section>

        {/* <!-- End Features Section --> */}

        {/* <!-- Banner  Section ------> */}

        <section id='bannerAchievements' style={{height: '200px'}}>
          <BannerAchievement />
        </section>

        {/* <!-- End Banner Section --> */}


        <section className=" py-20 bg-white mt-48">
          <div className="px-16 mx-auto max-w-7xl">
            <p className="font-medium tracking-wide text-blue-500 uppercase">OUR TEAM</p>
            <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
              An incredible team of <br />amazing individuals
            </h2>
            <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
              <Teams/>
              <Teams/>
              <Teams/>
              <Teams/>
            </div>
          </div>
        </section>
      </main >
    </>
  )
}

export default Home
