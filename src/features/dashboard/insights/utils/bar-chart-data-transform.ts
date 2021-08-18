import { BarDatum } from '@nivo/bar';
import { entries, flow, map, sortBy } from 'lodash/fp';
import { AccountEntriesFrequencyResponse } from '../../models/account-entries.models';

interface Coords {
  x: string;
  y: number;
}
const mapToCoords = (entries: [string, number][]): Coords[] => {
  return map((entry: [string, number]) => ({
    x: entry[0],
    y: entry[1],
  }))(entries);
};
const sortByDate = (arr: Coords[]): Coords[] => {
  return sortBy<Coords>((obj) => new Date(obj.x))(arr);
};
export function barChartDataTransform(
  data: AccountEntriesFrequencyResponse,
): BarDatum[] {
  return flow(entries, mapToCoords, sortByDate)(data);
}
