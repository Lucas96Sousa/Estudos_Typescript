import axios from 'axios'

export class StormGlass {
  readonly stormGlassApiParams = 
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed'
  
    readonly stormGlassApiSource= 'noaa'
  // eslint-disable-next-line @typescript-eslint/ban-types
  public async fetchPoints(lat: number, lng: number): Promise<{}>{
    return axios.get(`https://api.stormglass.io/v2/weather/point?params=${this.stormGlassApiParams}&source=${this.stormGlassApiSource}&end=1592113802&lat=${lat},lng=${lng}`)
  }
}

