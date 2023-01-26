import dynamic from "next/dynamic";
import { useMemo } from "react";

export const Original = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("../component/SquareMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )
  return (
    <div className="relative h-[600px] w-[1000px]">
      <div className="absolute z-0">
        <Map />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-60 w-60 m-auto rounded-full bg-black z-10 opacity-30 pointer-events-none"></div>
    </div>
  )
}

export default Original