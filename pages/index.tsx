import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/pages/home/navigation/Navbar'
import Hero from '../components/pages/home/Hero'
import CarouselImages from '../components/pages/home/carousels/CarouselImages'
import WavesAnimation from '../components/effects/WavesAnimation'

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
        <Navbar />
        <CarouselImages items={images}>
          <div className='h-full bg-opacity-50 bg-fixed bg-center bg-cover bg-black'>
            <Hero />
          </div>
        </CarouselImages>
        <WavesAnimation/>
        {/* <!-- End Header Section --> */}
      </main >
    </>
  )
}

export default Home
