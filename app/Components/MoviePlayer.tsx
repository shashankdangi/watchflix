"use client";

import { useGetMovie } from "@/app/hooks/useVideo";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const MoviePlayer = () => {
  const search = useSearchParams();
  const [source, setSource] = useState("embed.su");
  const idParam = search.get("query");
  const id = idParam ? parseInt(idParam) : null;

  const { link } = useGetMovie(id, source);

  return (
    <div className="flex flex-col gap-5 items-center w-full">
      <div>
        Play with id: {id} on {source}
      </div>
      <div className="flex flex-row gap-5">
        <Button
          disabled={source === "vidsrc.to"}
          onClick={() => setSource("vidsrc.to")}
        >
          VidSrc
        </Button>
        <Button
          disabled={source === "embed.su"}
          onClick={() => setSource("embed.su")}
        >
          EmbedSU
        </Button>
      </div>
      <div id="movie-box" className="w-full">
        {link && (
          <iframe
            src={link}
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
            title="Movie Player"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default MoviePlayer;
