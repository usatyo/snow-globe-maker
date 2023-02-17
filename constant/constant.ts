export type PositionType = {
  lat: number
  lng: number
  alt: number
  scale: number
}

export const origin: PositionType = {
  lat: 43.0620569,
  lng: 141.351811,
  alt: 8.90593097,
  scale: 17
}

export type CityType = {
  name: string
  ruby: string
  gltfPath: string
}

export const cities: Array<CityType> = [
  { name: 'Sapporo', gltfPath: '/sapporo.glb', ruby: '札幌' },
  { name: 'Tokyo', gltfPath: '/tokyo.glb', ruby: '東京' },
  { name: 'Nagoya', gltfPath: '/nagoya.glb', ruby: '名古屋' },
  { name: 'Yokohama', gltfPath: '/yokohama.glb', ruby: '横浜' },
  { name: 'Osaka', gltfPath: '/osaka.glb', ruby: '大阪' }
]

export const emptyModel: string = '/empty.glb'

export type SceneType = {
  name: string
  ruby: string
  path: string
}

export const scenes: Array<SceneType> = [
  { name: 'Living', path: 'living.hdr', ruby: 'リビング' },
  { name: 'Studio', path: 'studio.hdr', ruby: 'スタジオ' },
  { name: 'Lounge', path: 'lounge.hdr', ruby: 'ラウンジ' },
  { name: 'Snow Field', path: 'snow_field.hdr', ruby: '屋外' }
]

export const shareUrl = 'http://github.com'
