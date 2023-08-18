import getCityLatLon from '@/functions/map/getCityLatLon';

describe('getCityLatLon function', () => {
  it('should be defined', () => {
    expect(getCityLatLon).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof getCityLatLon).toBe('function');
  });
});
