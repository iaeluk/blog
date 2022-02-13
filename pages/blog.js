import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'

export default function Blog({meusPosts}) {
  
  return (
    <div className="bg-[#dbdbdb] w-full h-auto font-roboto">

      <Header />

        <div className='w-full h-[150px] bg-[#292929] text-[#686868] font-bold text-5xl flex items-center justify-center tracking-widest shadow-md '>
            Blog
        </div>
         
       <div className='flex flex-col items-center justify-center space-y-10 mt-[50px] pb-[80px]'>
            
        {meusPosts.posts.map(({titulo, postagem, data, img}) => (

        <div key={titulo} className="w-[90%] sm:w-[50%] border-b border-[#cbcbcbba]">

        <h2 className="text-[#292929] text-3xl font-bold tracking-wide">{titulo}</h2>

        {img && 
        <div className='flex items-center justify-center mt-[30px]'>
        <img src={img}/>
        </div>
        }

        <p className='mt-[15px] text-lg text-justify text-[#524743]'>{postagem}</p>

        </div>

      ))}

        </div>

    </div>
  )
}


export async function getStaticProps() {
  const posts =  await fetch(`https://blog-iaeluk.vercel.app/api/posts`)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
  })
  .then(res => res)

  return {
    props: {
      meusPosts: posts
    }
  }
}