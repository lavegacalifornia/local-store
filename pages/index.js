import Head from 'next/head'
import InfoHeroSection from '../components/InfoHeroSection'
import ProductsCards from '../components/ProductsCards'

export default function Home() {
  return (
    <div className="container bg-blue-50">
      <div className="">
        <Head>
          <title>Local Store</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <InfoHeroSection />
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
