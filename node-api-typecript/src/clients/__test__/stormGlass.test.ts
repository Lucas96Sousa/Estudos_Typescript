import {StormGlass} from '@src/clients/stormGlass'

describe('StormGlass client', ()  => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat =-23.615400
    const lng = -46.649265 


    const stormGlass = new StormGlass();
    const response = await stormGlass.fetchPoints(lat, lng)
    expect(response).toEqual({})
  });
});