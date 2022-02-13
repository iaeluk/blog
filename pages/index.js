import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/Header'

export default function Home() {
  
  return (
    <>
    <Head>
      <title>Lucas Mendonça</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

   <div className="w-full h-[90vh] flex items-center justify-center bg-[#f8f5f5]">
     <div className="w-[85%] sm:w-[400px] h-[150px] bg-[#ffffff] flex items-center justify-center px-[10em] sm:px-[15em] py-[5em] sm:py-[7em] shadow-2xl">
     <h1 className="text-[#353434] font-bold text-5xl text-center font-indie">Lucas Mendonça</h1>
     </div>
   </div>
   </>
    
  )
}
