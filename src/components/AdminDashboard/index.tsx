import { faBars, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Card from "../shared/Card";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
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
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <Card
            icon={<FontAwesomeIcon icon={faPen} />}
            title="Total Risks"
            no={726}
          />
          <Card
            icon={<FontAwesomeIcon icon={faPen} />}
            title="Total Threats"
            no={726}
          />
          <Card
            icon={<FontAwesomeIcon icon={faPen} />}
            title="Total Opportunities"
            no={726}
          />
          <Card
            icon={<FontAwesomeIcon icon={faPen} />}
            title="Risk by Sectors"
            no={726}
          />
          <Card
            icon={<FontAwesomeIcon icon={faPen} />}
            title="Risk by Country"
            no={726}
          />
          <Card
            icon={<FontAwesomeIcon icon={faPen} />}
            title="Risk by Global"
            no={726}
          />
        </div>
      </div>
      {/* first pie chart grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg text-white p-3">
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
                <div className="flex justify-between text-lg font-medium text-black">
                  <p>Lifetime Premium Purchase</p>
                  <p>45</p>
                </div>
                <div className="flex flex-col pt-2">
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
                <div className="flex justify-between text-lg font-medium text-black">
                  <p>Subscription Buying Rate</p>
                  {/* <p>45</p> */}
                </div>
                <div className="flex flex-col pt-2">
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
            <div className="flex flex-col p-3">
              <p className="text-black font-medium text-lg">
                Most Used Premium Items
              </p>
              <div className="flex justify-between text-[#646464]">
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
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3 bg-white p-6 rounded-lg text-black">
            <BarChart />
          </div>

          <div className="col-span-1 p-6 rounded-lg text-white"></div>
        </div>
      </div>
    </div>
  );
}
