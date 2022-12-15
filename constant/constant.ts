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
  { name: 'Living room', path: ['liv/px.png', 'liv/nx.png', 'liv/py.png', 'liv/ny.png', 'liv/pz.png', 'liv/nz.png']}
]
