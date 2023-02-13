export const getPaths = (lat: number, lng: number, zoomLevel: number): string[] => {
  const radius: number = zoomToRadius(zoomLevel)
  const alt: number = getAlt(lat, lng)
  
  const paths: string[] = []
  return paths
}

const zoomToRadius = (zoomLevel: number): number => {
  return 0
}

const getAlt = (lat: number, lng: number) => {
  return 0
}
