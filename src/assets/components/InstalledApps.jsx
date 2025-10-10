import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../utility/AddtoDb";
import { toast, ToastContainer } from "react-toastify";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // for dropdown sorting
  const data = useLoaderData();

  useEffect(() => {
    const storedAppsData = getStoredApp();
    const myInstalledApps = data.filter((app) =>
      storedAppsData.includes(app.id)
    );
    setInstalledApps(myInstalledApps);
  }, [data]);

  // 🔹 Uninstall Function
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);

    // Update localStorage
    const storedAppsData = getStoredApp().filter((appId) => appId !== id);
    localStorage.setItem("installed", JSON.stringify(storedAppsData));
    toast("App uninstalled successfully!");

    // Show toast
  };

  // 🔹 Sort Function
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
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Toast container */}
      <ToastContainer />

      {/* Header */}
      <div className="text-center p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-gray-700">
            {installedApps.length} Apps Found
          </p>

          {/* 🔹 Sort Dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="text-gray-600 text-sm border rounded-md px-3 py-1 bg-white hover:bg-gray-50"
          >
            <option value="">Sort by Downloads ▼</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>

        {/* 🔹 App List */}
        <div className="space-y-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-white rounded-lg shadow-sm p-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14">
                  <img className="rounded-md" src={app.image} alt={app.title} />
                </div>
                <div>
                  <h2 className="text-gray-800 font-semibold text-sm">
                    {app.title}
                  </h2>
                  <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <span className=" h-5 w-5">
                        <img src="/public/icon-downloads.png" alt="" />
                      </span>
                      {app.downloads}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-orange-500 text-lg">★</span>
                      {app.rating}
                    </span>
                    <span>{app.size}</span>
                  </div>
                </div>
              </div>

              {/* 🔹 Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-green-500  text-white text-sm font-medium px-4 py-2 rounded"
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
