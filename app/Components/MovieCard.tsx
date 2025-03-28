"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  poster_path: string;
  id: number;
}

const MovieCard = ({ title, poster_path, id }: Props) => {
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const router = useRouter();
  const handlePlay = () => {
    router.push(`/Search/Play?query=${encodeURIComponent(id)}`);
  };
  return (
    <div className="border-2 w-[280px] h-[420px] flex flex-col gap-2 overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      <Image
        className="h-[80%] object-cover"
        alt={title}
        width={400}
        height={400}
        src={url}
      />
      <div className="flex justify-between items-center p-4 text-sm font-medium">
        <p className="truncate text-xl">{title}</p>
        <button
          onClick={handlePlay}
          className="bg-blue-600 text-white py-1 px-4 rounded-full hover:bg-blue-700 transition-colors hover:cursor-pointer"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
