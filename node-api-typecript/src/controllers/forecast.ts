import { Request, Response } from 'express';

import { Controller, Get } from '@overnightjs/core';
@Controller('forecast')
export class ForecastController {
  @Get('')
  public getForecastLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        time: '2020-11-9T00:00:00+00:00',
        forecast: [
          {
            lat: -33.79276,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 64.26,
            swellHight: 0.15,
            swelPeriod: 3.89,
            time: '2020-11-9T00:00:00+00:00',
            waveDirection: 231.38,
            windDirection: 299.45,
          },
        ],
      },
    ]);
  }
}
