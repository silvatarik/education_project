import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/pages/home/navigation/Navbar'
import Hero from '../components/pages/home/Hero'

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
        <section className='relative bg-fixed bg-center bg-cover bg-no-repeat' style={{ backgroundImage: "url('./img/home/hero.jpg')" }}>
          <div className='h-full bg-opacity-50 bg-black'>
            <Navbar />
            <Hero />
          </div>
        </section>
        {/* <!-- End Header Section --> */}
      </main >
    </>
  )
}

export default Home
