import { Source } from './index.interface';

export const getSrc = (source: Source) => {
  let src: any = source;
  if (typeof source === 'string') {
    src = {
      uri: src,
      // cache: 'cacheOnly'
    };
  }
  return src;
};
