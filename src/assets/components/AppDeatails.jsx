import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Barchart from "./Barchart";
import { ToastContainer, toast } from "react-toastify";
import { addToStoreDb, getStoredApp } from "../../utility/AddtoDb";

const AppDetails = () => {
  // ✅ Proper state naming
  const [install, setInstall] = useState(false);

  // ✅ Loader data & params
  const allApps = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);

  useEffect(() => {
    // 🔹 Check if already installed
    const storedApps = getStoredApp();
    if (storedApps.includes(appId)) {
      setInstall(true);
    }
  }, [appId]);

  // ✅ Button handler

  const handleInstall = (appId) => {
    addToStoreDb(appId);
    setInstall(true);
    toast("installed succesfully");
  };

  // ✅ Find the single app
  const singleApp = allApps?.find((app) => app.id === appId);

  // ✅ Loading check
  if (!singleApp) {
    throw new Response("App not found", { status: 404 });
  }

  // ✅ Destructure safely
  const {
    title,
    image,
    description,
    downloads,
    size,
    reviews,
    companyName,
    ratingAvg,
  } = singleApp;

  return (
    <div className="max-w-4xl mx-auto rounded-xl p-6 space-y-6">
      {/* ---------- Header Section ---------- */}
      <div className="flex items-center gap-6 rounded-lg p-4">
        {/* App Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-40 h-40 object-cover rounded-xl border border-blue-200 shadow-sm"
          />
        </div>

        {/* App Info */}
        <div className="flex-1 space-y-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>
            Developed by{" "}
            <span className="text-blue-600 font-semibold">{companyName}</span>
          </p>
          <hr />

          {/* ---------- Stats Section ---------- */}
          <div className="flex gap-10 mt-3">
            <div className="text-center">
              <img
                src="/icon-downloads.png"
                alt="downloads"
                className="mx-auto w-6 h-6 mb-1"
              />
              <p className="text-green-600 font-semibold">Downloads</p>
              <p>{downloads}</p>
            </div>

            <div className="text-center">
              <img
                src="/icon-ratings.png"
                alt="ratings"
                className="mx-auto w-6 h-6 mb-1"
              />
              <p className="text-yellow-600 font-semibold">Average Rating</p>
              <p>{ratingAvg}</p>
            </div>

            <div className="text-center">
              <img
                src="/icon-review.png"
                alt="reviews"
                className="mx-auto w-6 h-6 mb-1"
              />
              <p className="text-purple-600 font-semibold">Total Reviews</p>
              <p>{reviews}</p>
            </div>
          </div>

          {/* ---------- ✅ Install Button ---------- */}
          <button
            onClick={() => handleInstall(appId)}
            disabled={install}
            className={`${
              install ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 "
            } text-white font-semibold mt-3 px-4 py-2 rounded-lg `}
          >
            {install ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <hr />

      {/* ---------- Ratings Section ---------- */}

      <Barchart appId={appId} allApps={allApps}></Barchart>

      <hr />

      {/* ---------- Description Section ---------- */}
      <div className="rounded-lg p-4">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
