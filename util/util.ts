export const getPaths = async (lat: number, lng: number, scale: number): Promise<string[]> => {
  const radius: number = scaleToRadius(scale)
  const alt: number = getAlt(lat, lng)
  
  const responce = await fetch(`http://localhost:1323/api/search-city-model?latitude=${lat}&longitude=${lng}&alt=${alt}&radius=${radius}`)
  const datas = await responce.json()

  const paths: string[] = datas.items.map((data: any) => data.url)
  return paths
}

const scaleToRadius = (scale: number): number => {
  return 50
}

const getAlt = (lat: number, lng: number) => {
  return 0
}
