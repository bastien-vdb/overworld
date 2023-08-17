import Bottleneck from 'bottleneck';

export const limiter = new Bottleneck({
    minTime: 500, // At least 500ms between each request
  });