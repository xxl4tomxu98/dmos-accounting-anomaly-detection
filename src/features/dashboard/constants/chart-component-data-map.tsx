import React from 'react';
import { ChartTypes } from '../enums/chart-types';
import {
  InsightsBarChartContainer,
  InsightsPieChartContainer,
} from '../insights/components/InsightsCharts';

export const CHART_COMPONENT_DATA_MAP: Record<ChartTypes, React.ReactElement> =
  {
    BAR: <InsightsBarChartContainer />,
    PIE: <InsightsPieChartContainer />,
  };
