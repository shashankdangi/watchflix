import MoviePlayer from "@/app/Components/MoviePlayer";
import React, { Suspense } from "react";

const page = () => {
  <Suspense fallback={<div>Loading ....</div>}>
    <MoviePlayer />
  </Suspense>;
};

export default page;
