export type CityType = {
  name: string
  gltfPath: string
}

export const cities: Array<CityType> = [
  { name: 'Sapporo', gltfPath: '/sapporo.glb' },
  { name: 'Tokyo', gltfPath: '/tokyo.glb' },
  { name: 'Osaka', gltfPath: '/osaka.glb' }
]

export type BackType = {
  name: string
  path: Array<string>
}

export const backs: Array<BackType> = [
  { name: "living", path: ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'] }
]