import { LineChart, LineChartProps } from "@fluentui/react-charts-preview";
import { Button } from "@fluentui/react-components";

const chartData: LineChartProps["data"] = [
  {
    legend: "Appointments", // Legend for the chart
    dataPoints: [
      { x: new Date("2018-01-06"), y: 10 },
      { x: new Date("2018-01-16"), y: 18 },
      { x: new Date("2018-01-20"), y: 24 },
      { x: new Date("2018-01-24"), y: 35 },
      { x: new Date("2018-01-26"), y: 35 },
      { x: new Date("2018-01-29"), y: 90 },
    ],
    color: "blue", // Optional: specify a color for the series
  },
];

const MainComponent: React.FC = () => {
  return (
    <div>
      <h1>HELLO?</h1>
      <Button appearance="primary">{"Test"}</Button>
      <LineChart data={chartData} />
    </div>
  );
};

export default MainComponent;
