
import { DataRow } from './fileProcessing';

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

export const generateDistributionChart = (data: DataRow[], column: string): ChartData => {
  const values = data.map(row => row[column]);
  const uniqueValues = [...new Set(values)];
  const counts = uniqueValues.map(value => 
    values.filter(v => v === value).length
  );

  return {
    labels: uniqueValues.map(v => v.toString()),
    datasets: [{
      label: `Distribution of ${column}`,
      data: counts,
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
    }]
  };
};

export const generateScatterPlot = (
  data: DataRow[],
  xColumn: string,
  yColumn: string
): ChartData => {
  return {
    labels: data.map((_, index) => index.toString()),
    datasets: [{
      label: `${xColumn} vs ${yColumn}`,
      data: data.map(row => Number(row[xColumn])),
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    }]
  };
};
