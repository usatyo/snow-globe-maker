export const getPaths = async (lat: number, lng: number, scale: number): Promise<string[]> => {
  const radius: number = scaleToRadius(scale)
  const alt: number = getAlt(lat, lng)

  const responce = await fetch(
    `http://localhost:1323/api/search-city-model?latitude=${lat}&longitude=${lng}&alt=${alt}&radius=${radius}`
  )
  const datas = await responce.json()

  const paths: string[] = datas.items.map((data: any) => data.url)
  return paths
}

export const scaleToRadius = (scale: number): number => {
  const equator = 30000000
  const perPixel = equator / 2 ** scale / 256
  return Math.round((perPixel * 450) / 2)
}

const getAlt = (lat: number, lng: number) => {
  return 0
}
