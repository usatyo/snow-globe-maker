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
      className={`flex flex-row justify-between items-center bg-black text-accent-original backdrop-blur-xl py-3 px-10 z-40 ${className}`}
    >
      <Link href="/">
        <Image src={logoImg} alt="logo" className="w-36 object-cover" />
      </Link>
      <div className="flex flex-row items-center space-x-16 text-xl tracking-wider">
        <Link href="/" className="flex flex-col items-center mt-2">
          <p className="text-accent-original text-[8px] -mt-1 tracking-[8px] ml-2 ">タイトル</p>
          <p className="relative font-italianno text-3xl hover:after:opacity-100 after:absolute after:h-[1px] after:w-[120%] after:top-11 after:left-[-10%] after:bg-accent-original after:opacity-0 after:transition-all after:duration-700">
            Title
          </p>
        </Link>
        <Link href="/gallery" className="flex flex-col items-center mt-2 ">
          <p className="text-accent-original text-[8px] -mt-1 tracking-[8px] ml-2">ギャラリー</p>
          {/* <p className="relative font-italianno text-3xl after:absolute after:h-[1px] hover:after:w-[120%] duration-300 after:top-11 after:left-[-10%] after:bg-accent-original "> */}
          <p className="relative font-italianno text-3xl hover:after:opacity-100 after:absolute after:h-[1px] after:w-[120%] after:top-11 after:left-[-10%] after:bg-accent-original after:opacity-0 after:transition-all after:duration-700">
            Gallery
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Header
