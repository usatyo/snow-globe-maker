import Image from "next/image";
import Crystal from "../component/Crystal";
import Header from "../component/Header";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header className="grow-0" />
      <div className="grow flex flex-row bg-gradient-to-br from-base-dark to-black">
        <div className="relative grow-0 w-1/3 flex flex-row justify-end items-center">
          <div className="-mr-36 z-10 p-1 border-8 border-accent-original">
            <p className="p-20 text-accent-original text-lg border-2 border-accent-original tracking-[3px] font-extrabold">あなたの街にも、初雪を</p>
          </div>
          <Crystal />
        </div>
        <div className="relative grow">
          <Image src='https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNub3d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' alt="snowImg" layout="fill" objectFit="cover" className="grayscale opacity-50" />
        </div>
      </div>
      <div className="absolute right-7 bottom-7 font-italianno text-accent-original text-2xl">
        <p>usatyo</p>
        <p>sugara</p>
        <p>karinto</p>
        <p>almikan</p>
      </div>
    </div>
  )
}
