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

export const scaleToRadius = (scale: number, pixelRadius: number = 10): number => {
  const coef = 4000000
  return Math.round((coef * pixelRadius) / (2 ** scale))
}

const getAlt = (lat: number, lng: number) => {
  return 0
}

export const tooSmall = (scale: number): boolean => {
  return scale < 17
}