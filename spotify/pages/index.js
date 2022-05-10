// import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'

const Home = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      {/* <Head>
        <title>Spotify</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* </Head> */} 
      <main className='flex'>
        <Sidebar />
        <Center />
        {/* center */}
      </main>

      <div>
        {/* player */}
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      session
    }
  }
}
