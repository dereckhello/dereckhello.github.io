import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
// import ProjectCard from "./ProjectCard";

const AutoScrolling = ({ speed = 1,content }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null); // 用于存储 requestAnimationFrame 的 ID
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let lastScrollLeft = scrollContainer.scrollLeft;

    const step = () => {
      if (!isPaused) {
        lastScrollLeft += speed; // 控制滚动速度
        if (lastScrollLeft >= scrollContainer.scrollWidth / 2) {
          lastScrollLeft = 0; // 无缝循环滚动
        }
        scrollContainer.scrollLeft = lastScrollLeft;
      }
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused, speed]);

  return (
    <div
      className="scroll-container"
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)} // 鼠标悬停暂停
      onMouseLeave={() => setIsPaused(false)} // 鼠标移开恢复
    >
      <div className="scroll-content">
        {content}
        {/* {data.concat(data).map((project, index) => (
          <div key={index} className="w-86 flex-shrink-0">
            <ProjectCard {...project} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

AutoScrolling.propTypes = {
  // data: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     title: PropTypes.string.isRequired,
  //     description: PropTypes.string,
  //     image: PropTypes.string,
  //   })
  // ).isRequired,
  speed: PropTypes.number,
  content: PropTypes.dom
};

export default AutoScrolling;
