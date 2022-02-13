import Link from 'next/link'
function Header() {
  return (
    <nav>
        <div className='flex justify-center sm:justify-end p-5 bg-white'>
            
            <ul className='flex space-x-3 sm:space-x-5 font-roboto font-bold text-[#292929]'>
                <Link href="/"><li className='cursor-pointer hover:text-[#296dcc] hover:scale-110 ease-in-out duration-300'>Home</li></Link>
                <Link href=""><li className='cursor-pointer hover:text-[#296dcc] hover:scale-110 ease-in-out duration-300'>Portifólio</li></Link>
                <Link href="/blog"><li className='cursor-pointer hover:text-[#296dcc] hover:scale-110 ease-in-out duration-300'>Blog</li></Link>
                <Link href=""><li className='cursor-pointer hover:text-[#296dcc] hover:scale-110 ease-in-out duration-300'>Sobre</li></Link>
                <Link href=""><li className='cursor-pointer hover:text-[#296dcc] hover:scale-110 ease-in-out duration-300'>Contato</li></Link>

            </ul>
        </div>
    </nav>
  )
}

export default Header