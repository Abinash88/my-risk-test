import { useState } from "react";

import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;
const options: ApexOptions = {
  colors: ["#3C50E0", "#3C5AAA"],
  labels: ["AI 1", "AI 2"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "area",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "45%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "45%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S", "S"],
  },
  stroke: {
    curve: "smooth",
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      // radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

export default function BarChart() {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: "AI 1",
        data: [10, 28, 50, 30, 67, 67, 60],
      },
      {
        name: "AI 2",
        data: [30, 18, 90, 30, 67, 67, 60],
      },
    ],
  });
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-black text-xl font-medium">AI Performance</p>
        <RangePicker defaultValue={[dayjs(),dayjs()]}/>
      </div>
      <ReactApexChart
        options={options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  );
}
