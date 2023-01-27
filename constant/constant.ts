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

export type SceneType = {
  name: string
  path: string
}

export const scenes: Array<SceneType> = [
  { name: 'Living Room', path: 'living.hdr' },
  { name: 'Studio', path: 'studio.hdr' },
  { name: 'Lounge', path: 'lounge.hdr' },
  { name: 'Snow Field', path: 'snow_field.hdr' }
]

export const shareUrl = "http://github.com"