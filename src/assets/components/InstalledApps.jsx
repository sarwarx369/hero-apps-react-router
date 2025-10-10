import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../utility/AddtoDb";

const InstalledApps = () => {
  const [installedapps, setinstalledapps] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const storedAppsdata = getStoredApp();
    console.log(storedAppsdata);
    const myinstalledapp = data.filter((app) =>
      storedAppsdata.includes(app.id)
    );
    setinstalledapps(myinstalledapp);
  }, [data]);
  return (
    <div className="bg-gray-50 min-h-screen  p-6">
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
      <div className=" p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-gray-700">
            {installedapps.length} Apps Found
          </p>
          <button className="text-gray-600 text-sm  px-3 py-1 rounded-md hover:bg-gray-100">
            Sort By Size ▼
          </button>
        </div>
        {/* App List */}
        <div className="space-y-4">
          {installedapps.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-white  rounded-lg shadow-sm p-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 ">
                  <img className="rounded-md" src={app.image} alt="" />
                </div>
                <div>
                  <h2 className="text-gray-800 font-semibold text-sm">
                    {app.title}
                  </h2>
                  <div className="flex items-center gap-3 text-gray-500 text-sm mt-1">
                    <span className="flex items-center gap-1">
                      <span className="text-green-600 text-lg">⬇</span>
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
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded">
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
