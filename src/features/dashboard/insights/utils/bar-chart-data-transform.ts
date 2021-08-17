import {
  entries,
  get,
  groupBy,
  LodashTap1x1,
  map,
  pipe,
  sumBy,
  tap,
} from 'lodash/fp';
import { AccountEntriesResponse } from '../../models/account-entries.models';

export const trace = (str: string): LodashTap1x1<unknown> =>
  tap((x) => console.log(`== ${str}: ${JSON.stringify(x)}`));

export function barChartDataTransform(data: AccountEntriesResponse): unknown {
  return pipe(
    get('content'),
    groupBy('createDate'),
    entries,
    map(([key, val]) => {
      return {
        x: key,
        y: sumBy('amount')(val),
      };
    }),
  )(data);
}
