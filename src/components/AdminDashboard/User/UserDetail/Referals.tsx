import React from "react";

export default function Referals() {
  const referrals = [
    {
      user: "Musa Aminat",
      accountType: "Professional",
      dateRegistered: "July 1, 2024 - 10:30AM",
    },
    {
      user: "John Snow",
      accountType: "Professional",
      dateRegistered: "July 1, 2024 - 10:30AM",
    },
    {
      user: "Jackie Brawn",
      accountType: "Professional",
      dateRegistered: "July 1, 2024 - 10:30AM",
    },
  ];

  return (
    <div className="w-full p-1">
      <div className="border border-gray-300 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">User Referrals</h2>
        <div className="m-2 rounded-lg overflow-scroll md:overflow-hidden border border-gray-300">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account Type
                </th>
                <th className="px-4 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Registered
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {referrals.map((referral, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                    {referral.user}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {referral.accountType}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {referral.dateRegistered}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
