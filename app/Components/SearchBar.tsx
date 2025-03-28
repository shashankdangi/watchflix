"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(`/Search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Search Your fav movie..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        type="submit"
        className="hover:cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
