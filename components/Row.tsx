import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface RowProps {
  title: string;
  movies: Movie[];
  // TODO: firebase 사용할 때
  // movie: Movie | DocumentData
}

function Row({ title, movies }: RowProps) {
  // 스크롤 화살표 구현 - 2:04:15
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleScroll = (direction: string) => {
    setIsMoved(true);

    // console.log("scrollRef.current", scrollRef.current!.scrollLeft);

    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      const scrollToX =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollToX, behavior: "smooth" });
    }
  };
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute z-40 top-0 bottom-0 left-2 m-auto w-7 h-7 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 border-white ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleScroll("left")}
        />
        <div
          ref={scrollRef}
          className="flex item-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 m-auto w-7 h-7 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleScroll("right")}
        />
      </div>
    </div>
  );
}

export default Row;
