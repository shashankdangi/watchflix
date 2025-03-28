import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const MoviePlayer = dynamic(() => import("@/app/Components/MoviePlayer"), {});

const Page = () => {
  return (
    <Suspense fallback={<div>Loading ....</div>}>
      <MoviePlayer />
    </Suspense>
  );
};

export default Page;
