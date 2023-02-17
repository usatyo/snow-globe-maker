export const getPaths = async (lat: number, lng: number, scale: number, pixelRadius: number): Promise<string[]> => {
  const radius: number = scaleToRadius(scale, pixelRadius)
  const alt: number = getAlt(lat, lng)

  const responce = await fetch(
    `http://localhost:1323/api/search-city-model?latitude=${lat}&longitude=${lng}&alt=${alt}&radius=${radius}`
  )
  const datas = await responce.json()

  const paths: string[] = datas.items.map((data: any) => data.url)
  return paths
}

export const scaleToRadius = (scale: number, pixelRadius: number): number => {
  // https://wiki.openstreetmap.org/wiki/Zoom_levels
  const equator = 40075016.686
  const latLength = equator * Math.cos(41.531088934083236 * Math.PI / 180.0)
  const perPixel = latLength / 2 ** scale / 256
  return Math.round((perPixel * pixelRadius) / 2)
}

const getAlt = (lat: number, lng: number) => {
  return 0
}

export const tooSmall = (scale: number): boolean => {
  return scale < 16
}

// https://github.com/ksasao/PlateauCityGmlSharp/blob/main/src/PlateauCityGml/Position.cs
export class LocationCoordinates {
  lat: number;
  lng: number;
  alt: number;
  constructor(lat: number, lng: number, alt: number) {
      this.lat = lat;
      this.lng = lng;
      this.alt = alt;
  }
  calcDist(dest: LocationCoordinates): number {
      // 高度を考慮した距離を計算する
      const dist = LocationCoordinates.haversine(this.lat, this.lng, dest.lat, dest.lng);
      const altDiff = this.alt - dest.alt;
      return Math.sqrt(dist * dist + altDiff * altDiff);
  }
  calcDistOnGnd(dest: LocationCoordinates): number {
      // 高度0での距離を計算する
      return LocationCoordinates.haversine(this.lat, this.lng, dest.lat, dest.lng);
  }
  toVec3Array(origin: LocationCoordinates): number[] {
      // 指定した origin を原点とした位置をX,Y,Z(m)に変換します
      // 右手系, Y-up, +Z方向が南, +X方向が東
      return [
          (origin.calcDist(new LocationCoordinates(origin.lat, this.lng, origin.alt)) * Math.sign(this.lng - origin.lng)),
          (this.alt - origin.alt),
          -(origin.calcDist(new LocationCoordinates(this.lat, origin.lng, origin.alt)) * Math.sign(this.lat - origin.lat))
      ];
  }
  static haversine(latitude1: number, longitude1: number, latitude2: number, longitude2: number): number {
      // https://ja.wikipedia.org/wiki/%E5%A4%A7%E5%86%86%E8%B7%9D%E9%9B%A2
      const r = 6371009;
      const deg2rad = Math.PI / 180.0;
      const lat1 = latitude1  * deg2rad;
      const lat2 = latitude2  * deg2rad;
      const sin_dlat = Math.sin(Math.abs(lat1 - lat2)*0.5);
      const sin_dlon = Math.sin(Math.abs(longitude1 - longitude2)*deg2rad*0.5);
      const dist = r * 2.0 * Math.asin(
              Math.sqrt(
                  sin_dlat * sin_dlat
                  + Math.cos(lat1) * Math.cos(lat2) * sin_dlon * sin_dlon
              )
          );
      return dist;
  }
}