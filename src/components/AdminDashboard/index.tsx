import { Tree } from "@phosphor-icons/react";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Card from "../shared/Card";
import BarChart from "./BarChart";

export default function IndexAdminDashboard() {
  const [state, setState] = useState<{ series: number[] }>({
    series: [20, 30, 40, 50],
  });

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#4C78FF", "#FFE1A7", "#2A952A", "#FF2D55"],
    labels: ["Business", "Professionals", "New Accounts", "Account Closure"],
    legend: {
      show: true,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "55%",
          //   background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 300,
          },
        },
      },
    ],
  };

  return (
    <div>
      <div className="container pb-8 mt-[-1rem]  overflow-hidden">
        <div
          className="md:h-52 md:relative md:mb-14 bg-cover "
          style={{ backgroundImage: `url('/images/radiance.png')` }}
        >
          <div className="grid m-auto left-8 mt-16 md:absolute grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6">
            <Card
              icon={
                <div className="bg-white rounded-full p-4">
                  <Tree />
                </div>
              }
              title="Total Risks"
              no={726}
            />
            <Card
              icon={
                <div className="bg-white rounded-full p-4">
                  <Tree />
                </div>
              }
              title="Total Threats"
              no={726}
            />
            <Card
              icon={
                <div className="bg-white rounded-full p-4">
                  <Tree />
                </div>
              }
              title="Total Opportunities"
              no={726}
            />
            <Card
              icon={
                <div className="bg-white rounded-full p-4">
                  <Tree />
                </div>
              }
              title="Risk by Sectors"
              no={726}
            />
            <Card
              icon={
                <div className="bg-white rounded-full p-4">
                  <Tree />
                </div>
              }
              title="Risk by Country"
              no={726}
            />
            <Card
              icon={
                <div className="bg-white rounded-full p-4">
                  <Tree />
                </div>
              }
              title="Risk by Global"
              no={726}
            />
          </div>
        </div>
      </div>
      {/* first pie chart grid */}
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full h-full bg-white rounded-lg text-white p-3">
            <div className="flex justify-between text-black font-medium text-lg">
              <p className="">Total Users</p>
              <p className="">167</p>
            </div>
            <ReactApexChart
              options={options}
              series={state.series}
              type="donut"
            />
          </div>

          <div className="bg-white rounded-lg text-black flex flex-col">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col p-3">
                <div className="flex justify-between text-sm font-medium text-black">
                  <p>Lifetime Premium Purchase</p>
                  <p>45</p>
                </div>
                <div className="flex flex-col pt-2 text-sm">
                  <div className="flex justify-between text-[#646464] pb-1">
                    <div className="flex items-center">
                      <div className="bg-[#B51B12] h-4 w-4 rounded-full mr-2"></div>
                      <p>Pro</p>
                    </div>
                    <p>40%</p>
                  </div>
                  <div className="flex justify-between text-[#646464] pb-1">
                    <div className="flex items-center">
                      <div className="bg-[#FE5F56] h-4 w-4 rounded-full mr-2"></div>
                      <p>Premium</p>
                    </div>
                    <p>20%</p>
                  </div>
                  <div className="flex justify-between text-[#646464] pb-1">
                    <div className="flex items-center">
                      <div className="bg-[#FFE1A7] h-4 w-4 rounded-full mr-2"></div>
                      <p>Free</p>
                    </div>
                    <p>18%</p>
                  </div>
                  <div className="flex justify-between text-[#646464] pb-1">
                    <div className="flex items-center">
                      <div className="bg-[#FFAB08] h-4 w-4 rounded-full mr-2"></div>
                      <p>Standard</p>
                    </div>
                    <p>12%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-3">
                <div className="flex justify-between text-sm font-medium text-black">
                  <p>Subscription Buying Rate</p>
                  {/* <p>45</p> */}
                </div>
                <div className="flex flex-col pt-2 text-sm">
                  <div className="flex justify-between text-[#646464] pb-1">
                    <div className="flex items-center">
                      <div className="bg-[#B51B12] h-4 w-4 rounded-full mr-2"></div>
                      <p>Pro</p>
                    </div>
                    <p>40%</p>
                  </div>
                  <div className="flex justify-between text-[#646464] pb-1">
                    <div className="flex items-center">
                      <div className="bg-[#FE5F56] h-4 w-4 rounded-full mr-2"></div>
                      <p>Premium</p>
                    </div>
                    <p>20%</p>
                  </div>
                  <div className="flex justify-between text-[#646464] pb-1">
                    <div className="flex items-center">
                      <div className="bg-[#FFE1A7] h-4 w-4 rounded-full mr-2"></div>
                      <p>Free</p>
                    </div>
                    <p>18%</p>
                  </div>
                  <div className="flex justify-between text-[#646464] pb-1">
                    <div className="flex items-center">
                      <div className="bg-[#FFAB08] h-4 w-4 rounded-full mr-2"></div>
                      <p>Standard</p>
                    </div>
                    <p>12%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3 text-sm gap-2">
              <p className="text-black font-medium ">Most Used Premium Items</p>
              <div className="flex justify-between text-[#646464] text-sm">
                <div className="flex items-center">
                  <div className="bg-[#B51B12] h-4 w-4 rounded-full mr-2"></div>
                  <p>AI Generated risk profile</p>
                </div>
                <p>45%</p>
              </div>
              <div className="flex justify-between text-[#646464]">
                <div className="flex items-center">
                  <div className="bg-[#FE5F56] h-4 w-4 rounded-full mr-2"></div>
                  <p>Upload to T&O Standings (Main or Private) </p>
                </div>
                <p>35%</p>
              </div>
              <div className="flex justify-between text-[#646464]">
                <div className="flex items-center">
                  <div className="bg-[#FFE1A7] h-4 w-4 rounded-full mr-2"></div>
                  <p>Hold Private T&O groups</p>
                </div>
                <p>20%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bar chart and total usage grid */}
      <div className="container mx-auto py-8 mb-10">
        <div className="grid grid-cols-4 gap-6 h-[410px]">
          <div className="lg:col-span-3 col-span-4 bg-white p-2 md:p-4 rounded-lg text-black">
            <BarChart />
          </div>

          <div className="lg:col-span-1 col-span-4 rounded-lg text-white">
            <div className="flex flex-col">
              <div className="flex flex-col bg-white p-3 rounded-lg text-black h-[173px]">
                <p className="text-lg font-medium">Total Usage</p>
                <div className="flex justify-between w-full mt-4">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full border-4 border-[#D47335]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-lg font-medium">70%</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-[#646464]">Threats</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full border-4 border-[#D4D658]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-lg font-medium">30%</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-[#646464]">Opportunities</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-col bg-white p-3 rounded-lg text-black h-[217px]">
                <p className="text-lg font-medium">Threats VS Opportunity</p>
                <div className="flex justify-between w-full mt-4 overflow-y-auto scrollBar h-full">
                  <div className="flex flex-col items-center overflow-y-auto h-full w-full">
                    <div className="flex items-center w-full">
                      <div className="w-10 h-10 rounded-full border-4 border-[#D4D658]"></div>
                      <div className="flex flex-col ml-2">
                        <p className="text-lg font-medium">+ 14%</p>
                        <p className="text-sm text-[#C0C3D3]">
                          Weekly new customers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="w-10 h-10 rounded-full border-4 border-[#D4D658]"></div>
                      <div className="flex flex-col ml-2">
                        <p className="text-lg font-medium">+ 14%</p>
                        <p className="text-sm text-[#C0C3D3]">
                          Weekly new customers
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center w-full">
                      <div className="w-10 h-10 rounded-full border-4 border-[#D4D658]"></div>
                      <div className="flex flex-col ml-2">
                        <p className="text-lg font-medium">+ 14%</p>
                        <p className="text-sm text-[#C0C3D3]">
                          Weekly new customers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="w-10 h-10 rounded-full border-4 border-[#D4D658]"></div>
                      <div className="flex flex-col ml-2">
                        <p className="text-lg font-medium">+ 14%</p>
                        <p className="text-sm text-[#C0C3D3]">
                          Weekly new customers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
