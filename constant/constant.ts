export type CityType = {
  name: string
  gltfPath: string
}

export const cities: Array<CityType> = [
  { name: 'Sapporo', gltfPath: '/sapporo.glb' },
  { name: 'Tokyo', gltfPath: '/tokyo.glb' },
  { name: 'Nagoya', gltfPath: '/nagoya.glb' },
  { name: 'Yokohama', gltfPath: '/yokohama.glb' },
  { name: 'Osaka', gltfPath: '/osaka.glb' }
]

export type BackType = {
  name: string
  path: string
}

export const backs: Array<BackType> = [
  { name: 'Living Room', path: "living.hdr"},
  { name: 'Studio', path: "studio.hdr"},
  { name: 'Lounge', path: "lounge.hdr"},
]
