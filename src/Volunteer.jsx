import { useLocation } from "react-router-dom";
import { volunteers } from "./data/index";

const Volunteers = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get("title");
  const currentVolunteers = volunteers.find((item) => item.title === title);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 封面图片 */}
      <div className="h-[400px] w-full overflow-hidden rounded-xl shadow-md">
        <img
          src={currentVolunteers.firstImg}
          className="w-full h-full object-cover"
          alt={currentVolunteers.title}
        />
      </div>

      {/* 文章内容 */}
      <div className="mt-6">
        <h1 className="m-6 text-3xl font-bold text-gray-800 dark:text-white text-center">
          {currentVolunteers.title}
        </h1>
        <div className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
          <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 whitespace-pre-line">
            {currentVolunteers.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
