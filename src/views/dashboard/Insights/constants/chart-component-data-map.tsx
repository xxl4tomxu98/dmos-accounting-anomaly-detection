import React from 'react';
import { ChartTypes } from '../enums/chart-types';
import {
  InsightsLineChartContainer,
  InsightsPieChartContainer,
} from '../InsightsCharts';

export const CHART_COMPONENT_DATA_MAP: Record<ChartTypes, React.ReactElement> =
  {
    LINE: <InsightsLineChartContainer />,
    PIE: <InsightsPieChartContainer />,
  };
