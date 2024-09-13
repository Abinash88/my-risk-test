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
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <div className="rounded-full p-4 mb-4 flex flex-col items-center">
        {icon}
        {/* <i className="fas fa-exclamation-triangle text-2xl text-gray-600"></i> */}
      </div>
      <h3 className="text-gray-600 text-start">{title}</h3>
      <p className="text-2xl font-bold text-black text-start mt-2">{no}</p>
    </div>
  );
}
