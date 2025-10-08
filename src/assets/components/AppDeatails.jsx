import { useLoaderData, useParams } from "react-router";

const AppDeatails = () => {
  const AllApps = useLoaderData();

  const { id } = useParams();

  const appId = parseInt(id);

  const singleApp = AllApps.find((app) => app.id === appId);
  console.log(singleApp);

  if (!singleApp) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  const {
    title,
    image,
    description,
    downloads,
    size,
    reviews,
    ratings,
    companyName,
    ratingAvg,
  } = singleApp;

  return (
    <div className="max-w-4xl mx-auto  rounded-xl p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center gap-6  rounded-lg p-4">
        {/* Left: App Image */}
        <div className="flex-shrink-0">
          <img
            src={image}
            className="w-40 h-40 object-cover rounded-xl border border-blue-200 shadow-sm"
          />
        </div>

        {/* Right: App Info */}
        <div className="flex-1 space-y-2">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>
            Developed by <span className="text-blue-600">{companyName}</span>
          </p>
          <hr />

          {/* Stats Section */}
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
              <img src="/icon-ratings.png" className="mx-auto w-6 h-6 mb-1" />
              <p className="text-yellow-600 font-semibold">Average Rating</p>
              <p>{ratingAvg}</p>
            </div>

            <div className="text-center">
              <img src="/icon-review.png" className="mx-auto w-6 h-6 mb-1" />
              <p className="text-purple-600 font-semibold">Total Reviews</p>
              <p>{reviews}</p>
            </div>
          </div>

          {/* Install Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold mt-3 px-4 py-2 rounded-lg">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
      <hr />

      {/* Ratings Section */}
      <div className="border-2  border-blue-300 rounded-lg p-4">
        <h2 className="font-semibold mb-3">Ratings</h2>
        {Object.entries(ratings)
          .sort(([a], [b]) => b - a)
          .map(([star, count]) => (
            <div key={star} className="flex items-center gap-3 mb-2">
              <p className="w-8">{star}★</p>
              <div className="bg-gray-200 rounded-full w-full h-3 relative">
                <div
                  className="bg-orange-500 h-3 rounded-full"
                  style={{ width: `${(count / 12000) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">count</p>
            </div>
          ))}
      </div>
      <hr />
      {/* Description Section */}
      <div className=" rounded-lg p-4">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AppDeatails;
