import {
  AnalysisContentTypes,
  InsightsContentTypes,
} from '../enums/content-types';
import { ContentTitles } from './content-titles';

interface ButtonListItemData<TContentTypes> {
  label: string;
  content: TContentTypes;
}

export const INSIGHTS_BUTTON_LIST_ITEM_DATA: ButtonListItemData<InsightsContentTypes>[] =
  [
    {
      label: `${ContentTitles.RENTAL_BOOTH_AND_ACCOUNTING}`,
      content: InsightsContentTypes.STATIC_ANALYSIS,
    },
    {
      label: `${ContentTitles.RENTAL_BOOTH_FREQUENCY}`,
      content: InsightsContentTypes.RENTAL_DATA,
    },
    {
      label: `${ContentTitles.ACCOUNT_ENTRY_FREQUENCY}`,
      content: InsightsContentTypes.ACCOUNT_ENTRIES,
    },
  ];
export const ANALYSIS_BUTTON_LIST_ITEM_DATA: ButtonListItemData<AnalysisContentTypes>[] =
  [
    {
      label: 'AI Analysis',
      content: AnalysisContentTypes.AI_ANALYSIS,
    },
  ];
