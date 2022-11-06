import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import logoImg from "../assets/logo.png"

type Props = {
  className?: string
}

export const Header: FC<Props> = ({ className }) => {
  return <div className={`flex flex-row justify-between items-center bg-black text-accent-original py-3 px-8 ${className}`}>
    <Image src={logoImg} alt="logo" className="w-64 object-cover" />
    <div className="flex flex-row items-center space-x-8 text-xl tracking-wider">
      <Link href="/">
        <p className="hover:underline underline-offset-4">Home</p>
      </Link>
      <Link href="/gallery">
        <p className="hover:underline underline-offset-4">Gallery</p>
      </Link>
    </div>
  </div>
}

export default Header
