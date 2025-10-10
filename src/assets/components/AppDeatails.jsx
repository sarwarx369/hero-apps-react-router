import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Barchart from "./Barchart";
import { ToastContainer, toast } from "react-toastify";
import { addToStoreDb, getStoredApp } from "../../utility/AddtoDb";

const AppDetails = () => {
  const [install, setInstall] = useState(false);

  const allApps = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);

  useEffect(() => {
    const storedApps = getStoredApp();
    if (storedApps.includes(appId)) {
      setInstall(true);
    }
  }, [appId]);

  const handleInstall = (appId) => {
    addToStoreDb(appId);
    setInstall(true);
    toast.success("Installed successfully!");
  };

  const singleApp = allApps?.find((app) => app.id === appId);

  if (!singleApp) {
    throw new Response("App not found", { status: 404 });
  }

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
    <div className="max-w-5xl mx-auto rounded-xl p-3 sm:p-4 md:p-6 space-y-5 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-3 sm:p-5 rounded-xl border border-gray-200 shadow-sm bg-white">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-xl border border-blue-200 shadow-sm"
          />
        </div>

        <div className="flex-1 space-y-1 sm:space-y-2 text-center sm:text-left">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
            {title}
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            Developed by{" "}
            <span className="text-blue-600 font-semibold">{companyName}</span>
          </p>

          <hr className="my-2 sm:my-3 border-gray-200" />

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 mt-2 sm:mt-3">
            <div className="text-center">
              <img
                src="/icon-downloads.png"
                alt="downloads"
                className="mx-auto w-5 h-5 sm:w-6 sm:h-6 mb-1"
              />
              <p className="text-green-600 font-semibold text-xs sm:text-sm">
                Downloads
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">{downloads}</p>
            </div>

            <div className="text-center">
              <img
                src="/icon-ratings.png"
                alt="ratings"
                className="mx-auto w-5 h-5 sm:w-6 sm:h-6 mb-1"
              />
              <p className="text-yellow-600 font-semibold text-xs sm:text-sm">
                Avg Rating
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">{ratingAvg}</p>
            </div>

            <div className="text-center">
              <img
                src="/icon-review.png"
                alt="reviews"
                className="mx-auto w-5 h-5 sm:w-6 sm:h-6 mb-1"
              />
              <p className="text-purple-600 font-semibold text-xs sm:text-sm">
                Reviews
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">{reviews}</p>
            </div>
          </div>

          <button
            onClick={() => handleInstall(appId)}
            disabled={install}
            className={`${
              install
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } text-white font-semibold mt-3 px-5 py-1.5 sm:px-6 sm:py-2 rounded-lg shadow transition text-sm sm:text-base`}
          >
            {install ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="overflow-x-auto">
        <Barchart appId={appId} allApps={allApps} />
      </div>

      <hr className="border-gray-200" />

      <div className="rounded-lg p-3 sm:p-4 bg-white shadow-sm border border-gray-200">
        <h2 className="font-semibold text-base sm:text-lg mb-2 text-gray-800">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base">
          {description}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
