import { LodashTap1x1, tap } from 'lodash/fp';

export const trace = (str: string): LodashTap1x1<unknown> =>
  tap((x) => console.log(`== ${str}: ${JSON.stringify(x)}`));
