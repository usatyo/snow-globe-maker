export const getPaths = (lat: number, lng: number, scale: number): string[] => {
  const radius: number = scaleToRadius(scale)
  const alt: number = getAlt(lat, lng)
  
  // fetch

  const paths: string[] = []
  return paths
}

const scaleToRadius = (scale: number): number => {
  return 0
}

const getAlt = (lat: number, lng: number) => {
  return 0
}
