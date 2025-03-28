"use client";
import { useGetMovie } from "@/app/hooks/useVideo";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const search = useSearchParams();
  const [source, setSource] = useState("embed.su");
  const id = search.get("query");
  const { link } = useGetMovie(id, source);
  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div>
        Play with id : {id} on {source}
      </div>
      <div className="flex flex-row gap-5">
        <Button
          className="hover:cursor-pointer"
          onClick={() => setSource("vidsrc.to")}
          disabled={source === "vidsrc.to"}
          variant={source === "vidsrc.to" ? "secondary" : "default"}
        >
          VidSrc
        </Button>
        <Button
          className="hover:cursor-pointer"
          onClick={() => setSource("embed.su")}
          disabled={source === "embed.su"}
          variant={source === "embed.su" ? "secondary" : "default"}
        >
          EmbedSU
        </Button>
      </div>
      <div id="movie-box " className="w-full">
        {link ? (
          <iframe
            src={link}
            width="100%"
            height="500px"
            allowFullScreen
            title="Movie Player"
          ></iframe>
        ) : (
          <div>Loading video...</div> // Optional loader
        )}
      </div>
    </div>
  );
};

export default page;
