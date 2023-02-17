import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import logoImg from '../assets/logo.png'
import { after } from 'node:test'

type Props = {
  className?: string
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <div
      className={`fixed w-full flex flex-row justify-between items-center bg-black text-accent-original backdrop-blur-xl px-3 md:h-20 h-16 md:py-3 md:px-10 z-40 ${className}`}
    >
      <Link href="/">
        <Image src={logoImg} alt="logo" className="w-24 md:w-36 object-cover" />
      </Link>
      <div className="flex flex-row space-x-4 md:space-x-16 text-xl tracking-wider">
        <Link href="/" className="flex flex-col items-center mt-2">
          <p className="text-accent-original text-[0px] md:text-[8px] -mt-1  ml-2 invisible md:visible">タイトル</p>
          <p className="relative font-italianno text-2xl md:text-3xl hover:after:opacity-100 after:absolute after:h-[1px] md:after:w-[120%] after:top-11 after:left-[-10%] after:bg-accent-original after:opacity-0 after:transition-all after:duration-700">
            Title
          </p>
        </Link>
        <Link href="/gallery" className="flex flex-col items-center mt-2 ">
          <p className="text-accent-original text-[0px] md:text-[8px] -mt-1  ml-2 invisible md:visible">ギャラリー</p>
          <p className="relative font-italianno text-2xl md:text-3xl hover:after:opacity-100 after:absolute after:h-[1px] md:after:w-[120%] after:top-11 after:left-[-10%] after:bg-accent-original after:opacity-0 after:transition-all after:duration-700">
            Gallery
          </p>
        </Link>
        <Link href="/original" className="flex flex-col items-center mt-2 ">
          <p className="text-accent-original text-[0px] md:text-[8px] -mt-1  ml-2 invisible md:visible">オリジナル</p>
          <p className="relative font-italianno text-2xl md:text-3xl hover:after:opacity-100 after:absolute after:h-[1px] md:after:w-[120%] after:top-11 after:left-[-10%] after:bg-accent-original after:opacity-0 after:transition-all after:duration-700">
            Original
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Header
