import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import ProductsCards from '../components/ProductsCards'

export default function Home() {
  return (
    <div className="max-w-screen-xl bg-blue-50">
      <div className="">
        <Head>
          <title>Local Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <HeroSection />
        </header>
        <main className="">
          <div>
          <ProductsCards />
          </div>
        </main>
      </div>
    </div>
  )
}
