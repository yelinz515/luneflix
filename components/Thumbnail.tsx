import Image from "next/image";
import React from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface ThumbnailProps {
  // 하나만 보여져야 하기 때문에 평소와 같이 Movie[]로 쓰지 않음
  movie: Movie;
  // : 2:30:00 - part 1
  // firebase 사용할 때
  // movie: Movie | DocumentData
}

function Thumbnail({ movie }: ThumbnailProps) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=""
        layout="fill"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
}

export default Thumbnail;
