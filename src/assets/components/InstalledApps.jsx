import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../utility/AddtoDb";
import { toast, ToastContainer } from "react-toastify";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedAppsData = getStoredApp();
    const myInstalledApps = data.filter((app) =>
      storedAppsData.includes(app.id)
    );
    setInstalledApps(myInstalledApps);
  }, [data]);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);

    const storedAppsData = getStoredApp().filter((appId) => appId !== id);
    localStorage.setItem("installed", JSON.stringify(storedAppsData));
    toast("App uninstalled successfully!");
  };

  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...installedApps];
    if (order === "high-low") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (order === "low-high") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledApps(sorted);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6">
      <ToastContainer />

      <div className="text-center p-4 md:p-6 mb-4 md:mb-6">
        <h1 className="text-lg md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-xs md:text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="p-2 md:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <p className="font-semibold text-gray-700 text-sm md:text-base">
            {installedApps.length} Apps Found
          </p>

          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="text-gray-600 text-xs md:text-sm border rounded-md px-2 md:px-3 py-1 bg-white hover:bg-gray-50 w-full sm:w-auto"
          >
            <option value="">Sort by Downloads ▼</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>

        <div className="space-y-3 md:space-y-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-lg shadow-sm p-4 text-center sm:text-left"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 md:gap-4 w-full">
                <div className="w-14 h-14">
                  <img
                    className="rounded-md w-full h-full object-cover"
                    src={app.image}
                    alt={app.title}
                  />
                </div>
                <div>
                  <h2 className="text-gray-800 font-semibold text-sm md:text-base">
                    {app.title}
                  </h2>
                  <div className="flex justify-center sm:justify-start flex-wrap items-center gap-2 md:gap-3 text-gray-500 text-xs md:text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <span className="h-4 w-4 md:h-5 md:w-5">
                        <img src="/public/icon-downloads.png" alt="" />
                      </span>
                      {app.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-orange-500 text-base md:text-lg">
                        ★
                      </span>
                      {app.rating}
                    </span>
                    <p>{app.size}MB</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500 text-white text-xs md:text-sm font-medium px-4 py-2 rounded cursor-pointer mt-3 sm:mt-0 w-full sm:w-auto"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;
