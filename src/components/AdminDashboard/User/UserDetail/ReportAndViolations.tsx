import React from "react";

export default function ReportAndViolations() {
  return (
    <div className="flex flex-col">
      <div className="bg-white border border-grey rounded-md p-6">
        <h2 className="text-lg font-semibold mb-4">Report & Violation</h2>

        {/* Report Table */}
        <div className="overflow-x-auto">
          <div className="m-2 rounded-lg overflow-hidden border border-gray-300">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left border border-gray-200">
                    Date
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-200">
                    Violation Type
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-200">
                    Description
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-200">
                    Action Taken
                  </th>
                  <th className="px-4 py-2 text-left border border-gray-200">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-4 border border-gray-200">
                    Jul 24, 2024 - 10:35AM
                  </td>
                  <td className="px-4 py-4 border border-gray-200">
                    Harassment
                  </td>
                  <td className="px-4 py-4 border border-gray-200">
                    Sent threatening messages to another user.
                  </td>
                  <td className="px-4 py-4 border border-gray-200">
                    User Suspended
                  </td>
                  <td className="px-4 py-4 border border-gray-200 text-center">
                    1
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 border border-gray-200">
                    Jul 24, 2024 - 10:35AM
                  </td>
                  <td className="px-4 py-4 border border-gray-200">
                    Harassment
                  </td>
                  <td className="px-4 py-4 border border-gray-200">
                    Shared offensive content in a group chat.
                  </td>
                  <td className="px-4 py-4 border border-gray-200">
                    Content Removed
                  </td>
                  <td className="px-4 py-4 border border-gray-200 text-center">
                    1
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 border border-gray-200">
                    Jul 24, 2024 - 10:35AM
                  </td>
                  <td className="px-4 py-4 border border-gray-200">Spam</td>
                  <td className="px-4 py-4 border border-gray-200">
                    Posted multiple spam messages in forums.
                  </td>
                  <td className="px-4 py-4 border border-gray-200">
                    Warning Issued
                  </td>
                  <td className="px-4 py-4 border border-gray-200 text-center">
                    1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Score Section */}
      <div className="bg-white border border-grey p-4 mt-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Report & Violation Score</h2>

        <div className="grid grid-cols-3 gap-4 text-center border border-grey rounded-lg">
          <div className="flex flex-col justify-center border border-grey rounded-lg m-3 h-20">
            <h3 className="text-lg font-semibold">Total Reports</h3>
            <p className="text-xl">3</p>
          </div>
          <div className="flex flex-col justify-center border border-grey rounded-lg m-3 h-20">
            <h3 className="text-lg font-semibold">Total Violations</h3>
            <p className="text-xl">3</p>
          </div>
          <div className="flex flex-col justify-center border border-grey rounded-lg m-3 h-20">
            <h3 className="text-lg font-semibold">Current Violation Score</h3>
            <p className="text-xl">3/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
