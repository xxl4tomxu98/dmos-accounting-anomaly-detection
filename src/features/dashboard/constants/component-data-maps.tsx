import React from 'react';
import {
  AiAnalysisContainer,
  AiAnalysisFrequencyChartContainer,
} from '../analysis/AnalysisContent';
import {
  AnalysisContentTypes,
  InsightsContentTypes,
} from '../enums/content-types';
import {
  AccountEntriesChartContainer,
  RentalDataChartContainer,
  StaticAnalysisContainer,
} from '../insights/components/InsightsContent';

export const INSIGHTS_COMPONENT_DATA_MAP: Record<
  InsightsContentTypes,
  React.ReactElement
> = {
  STATIC_ANALYSIS: <StaticAnalysisContainer />,
  RENTAL_DATA: <RentalDataChartContainer />,
  ACCOUNT_ENTRIES: <AccountEntriesChartContainer />,
};

export const ANALYSIS_COMPONENT_DATA_MAP: Record<
  AnalysisContentTypes,
  React.ReactElement
> = {
  AI_ANALYSIS: <AiAnalysisContainer />,
  AI_ANALYSIS_FREQUENCY: <AiAnalysisFrequencyChartContainer />,
};
