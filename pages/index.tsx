import { useRouter } from 'next/router'

import Crystal from '../component/Crystal'
import Header from '../component/Header'

export default function Home() {
  const router = useRouter()
  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <Header className="grow-0" />
      <div className="absolute top-0 left-0 h-full w-1/2">
        <Crystal />
      </div>
      <div className="grow flex flex-row bg-base-dark">
        <div className="flex flex-col space-y-24 grow-0 w-2/5 items-center text-center align-middle mt-[20%] text-accent-original">
          <p className="text-[1.5rem]  tracking-[3px] font-noto font-extralight">
            ─　あなたの街にも、初雪を　─
          </p>
          <div className='flex flex-col space-y-6'>
            <button
              id="button"
              onClick={() => {
                router.push('/gallery')
              }}
              className="relative cursor-pointer border-[1px] border-accent-original w-80 py-6 text-md tracking-widest font-noto hover:bg-accent-original z-20 transition-all duration-500 hover:text-base-dark"
            >
              サンプル作品を見る
            </button>
            <button
              id="button"
              onClick={() => {
                router.push('/original')
              }}
              className="relative cursor-pointer border-[1px] border-accent-original w-80 py-6 text-md tracking-widest font-noto hover:bg-accent-original z-20 transition-all duration-500 hover:text-base-dark"
            >
              オリジナル作品を作る
            </button>
          </div>
        </div>
        <div className="relative grow grayscale opacity-60 bg-city bg-cover bg-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-base-dark"></div>
        </div>
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
