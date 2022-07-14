import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/pages/home/navigation/Navbar'
import Hero from '../components/pages/home/Hero'
import CarouselImages from '../components/pages/home/carousels/CarouselImages'
import WavesAnimation from '../components/effects/WavesAnimation'
import CardFeature from '../components/pages/home/card/CardFeature'
import BannerAchievement from '../components/pages/home/banners/BannerAchievement'

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

        <section id='bannerAchievements'>
          <BannerAchievement />
        </section>

        {/* <!-- End Banner Section --> */}
      </main >
    </>
  )
}

export default Home
