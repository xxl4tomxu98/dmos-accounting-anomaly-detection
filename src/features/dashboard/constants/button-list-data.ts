import { ChartTypes } from '../enums/chart-types';

interface ButtonListItemData {
  label: string;
  chart: ChartTypes;
}

export const BUTTON_LIST_ITEM_DATA: ButtonListItemData[] = [
  {
    label: 'Bar Chart',
    chart: ChartTypes.BAR,
  },
  {
    label: 'Pie Chart',
    chart: ChartTypes.PIE,
  },
];
