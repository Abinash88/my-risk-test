import React from "react";

const Activities = () => {
  const paymentActivities = [
    {
      item: "Premium Subscription",
      amount: "$20.00",
      timestamp: "July 1, 2024 - 10:30AM",
    },
    {
      item: "Premium Subscription",
      amount: "$20.00",
      timestamp: "July 1, 2024 - 10:30AM",
    },
    {
      item: "Premium Subscription",
      amount: "$20.00",
      timestamp: "July 1, 2024 - 10:30AM",
    },
  ];

  const engagementActivities = [
    {
      timestamp: "July 1, 2024 - 10:30AM",
      activity: 'Liked a comment on "Market Volatility"',
    },
    { timestamp: "July 1, 2024 - 10:30AM", activity: "Display name updated" },
    {
      timestamp: "July 1, 2024 - 10:30AM",
      activity: 'Added comment to "Cybersecurity Threat"',
    },
  ];

  return (
    <div className="w-full p-4 space-y-4">
      {/* Login Activities */}
      <div className="border border-gray-300 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">Login Activities</h2>
        <div className="text-sm space-y-1 border border-gray-300 rounded-lg p-4">
          <p className="py-2">
            <strong>Last login:</strong> 2024-07-18 14:32
          </p>
          <p className="py-2">
            <strong>Login IP:</strong> 192.168.1.1
          </p>
          <p className="py-2">
            <strong>Device:</strong> Chrome on Windows
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Payment Activities */}
        <div className="border border-gray-300 rounded-lg p-4 ">
          <h2 className="text-lg font-semibold mb-2">Payment Activities</h2>
          <div className="m-2 rounded-lg overflow-hidden border border-gray-300">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paymentActivities.map((activity, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {activity.item}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      {activity.amount}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                      {activity.timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Engagement Activities */}
        <div className="border border-gray-300 rounded-lg p-4 ">
          <h2 className="text-lg font-semibold mb-2">Engagement Activities</h2>
          <div className="m-2 rounded-lg overflow-hidden border border-gray-300">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {engagementActivities.map((activity, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                      {activity.timestamp}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                      {activity.activity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
