import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from './components/Banner'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner/>
      <h1>Vikas Kumar</h1>
      <h1>Boota Singh</h1>
      <h1>Sandeep Kumar</h1>
      <h1>Happy</h1>
      <h1>Kanhaiya</h1>
      <h1>UDPL</h1>
      <h1>Our Pet</h1>
      </main>
    </div>
  )
}

export default Home
