const AccessAndPermission = () => {
  const permissions = [
    { name: "Manage Risk", enabled: true },
    { name: "AI Risk", enabled: true },
    { name: "Private T&O Groups", enabled: true },
    { name: "Subscription", enabled: true },
    { name: "Referral", enabled: true },
  ];

  return (
    <div className="w-full p-4">
      <div className="mt-4 rounded-lg overflow-hidden border border-gray-300">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300"
              >
                Permission
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {permissions.map((permission, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
                  {permission.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                    defaultChecked={permission.enabled}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessAndPermission;
