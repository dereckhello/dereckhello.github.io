import ProjectCard from "./components/ProjectCard";
import AutoScrolling from "./components/AutoScrolling";
import "./App.css";
import { programmings, volunteers, studyingLogs } from "./data";
import MeA from "./assets/img/MeA.jpg";
import MeB from "./assets/img/MeB.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-4">
      <div className="border-b-2 border-[#E6E6E9] flex justify-between min-h-[40px] py-[20px] px-[10px]">
        <a
          className="py-[5px] px-[10px] border-b-2 border-[#9999A1] outline-4 outline-[#9999A1] --filter-drop-shadow-black-invert-ten-percent"
          href="#"
        >
          <h2>HelloWorld-er</h2>
        </a>
        <a href="https://github.com/HelloWorld-er">
          <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32">
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex justify-between px-[10px] pt-[10px]">
        <div className="px-[10px]">
          <div className="flex items-center">
            <h1 className="text-6xl font-bold">
              Hi! I am{" "}
              <span className="--text-shadow-black">HelloWorld-er</span> !
            </h1>
          </div>
          <section className="py-[10px] mt-[10px]">
            <div>
              <h2 className="text-4xl font-bold mb-6 py-[20px]">About Me</h2>
              <div>
                <div>
                  I am a self-taught programmer. I am a student in Hong Kong
                  currently.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="py-[10px] mt-[10px] w-full flex justify-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={1} // 每次完整显示 1 张图片
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 自动播放，3秒间隔
          pagination={{ clickable: true }} // 指示器可点击
          modules={[Autoplay, Pagination]} // 引入模块
          className="w-[1200px] h-[620px]" // Swiper 固定大小
        >
          <SwiperSlide className="flex justify-center items-center w-[1200px] h-[620px]">
            <img src={MeA} className="w-full h-full object-cover rounded" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-[1200px] h-[620px]">
            <img src={MeB} className="w-full h-full object-cover rounded" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="py-[10px] px-[10px] mt-[10px]">
        <h2 className="text-4xl font-bold mb-6 py-[20px] px-[10px]">
          Coding Project
        </h2>
        <AutoScrolling
          content={programmings.concat(programmings).map((project, index) => (
            <div key={index} className="w-86 flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        />
      </section>

      <section className="py-[10px] px-[10px] mt-[10px]">
        <h2 className="text-4xl font-bold mb-6 py-[20px] px-[10px]">
          Volunteer Program
        </h2>
        <AutoScrolling
          content={volunteers.concat(volunteers).map((project, index) => (
            <div key={index} className="w-86 flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        />
      </section>

      <section className="py-[10px] px-[10px] mt-[10px]">
        <h2 className="text-4xl font-bold mb-6 py-[20px] px-[10px]">
          Studying Log
        </h2>
        <AutoScrolling
          content={studyingLogs.concat(studyingLogs).map((project, index) => (
            <div key={index} className="w-86 flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        />
      </section>
    </div>
  );
}

export default App;
