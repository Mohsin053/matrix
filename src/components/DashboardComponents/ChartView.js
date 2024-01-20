import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function ChartView() {
  return (
    <LineChart
      data={{
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
          },
        ],
      }}
      width={Dimensions.get("window").width - 20} // from react-native
      height={280}
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundGradientFrom: "#111213",
        backgroundGradientTo: "#111213",
        color: (opacity = 1) => `#888889`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
    />
  );
}
