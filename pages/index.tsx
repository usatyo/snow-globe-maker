import Crystal from '../component/Crystal'
import Header from '../component/Header'

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <Header className="grow-0" />
      <div className="grow flex flex-row bg-base-dark">
        <div className="relative grow-0 w-1/3 flex flex-row justify-end items-center">
          <div className="relative -mr-24 z-10 p-1 border-8 border-accent-original">
            <hr className="absolute top-1/2 h-1 w-3 left-14 text-accent-original" />
            <hr className="absolute top-1/2 h-1 w-3 right-14 text-accent-original" />
            <p className="p-20 text-accent-original text-lg border-2 border-accent-original tracking-[3px] font-extrabold">
              あなたの街にも、初雪を
            </p>
          </div>
        </div>
        <div className="relative grow grayscale opacity-70 bg-city bg-cover bg-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-base-dark"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-1/2">
        <Crystal />
      </div>
      {/* <div className="absolute right-7 bottom-7 font-italianno text-accent-original text-2xl">
        <p>usatyo</p>
        <p>sugara</p>
        <p>karintou</p>
        <p>almikan</p>
      </div> */}
    </div>
  )
}
