import React, { Suspense } from "react";
import SearchResults from "../Components/SearchResults";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading Search...</div>}>
      <SearchResults />
    </Suspense>
  );
};

export default Page;
