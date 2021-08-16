import { ChartTypes } from '../enums/chart-types';

interface ButtonListItemData {
  label: string;
  chart: ChartTypes;
}

export const BUTTON_LIST_ITEM_DATA: ButtonListItemData[] = [
  {
    label: 'Line Chart',
    chart: ChartTypes.LINE,
  },
  {
    label: 'Pie Chart',
    chart: ChartTypes.PIE,
  },
];
