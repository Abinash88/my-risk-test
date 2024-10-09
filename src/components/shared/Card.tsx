import React from "react";

export default function Card({
  icon,
  title,
  no,
}: {
  icon: any;
  title: string;
  no: number;
}) {
  return (
    <div className="bg-white bg-opacity-70 shadow-md rounded-lg px-4 pt-4 flex flex-col">
      <div className="rounded-full p-4 mb-4 flex flex-col items-center">
        {icon}
        {/* <i className="fas fa-exclamation-triangle text-2xl text-gray-600"></i> */}
      </div>
      <h3 className="text-gray-600 text-xs text-start">{title}</h3>
      <p className="text-2xl font-bold text-black text-start mt-4 pb-4">{no}</p>
    </div>
  );
}
