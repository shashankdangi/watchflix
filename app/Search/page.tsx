"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSearchMovies } from "../hooks/useTMDB";
import MovieCard from "../Components/MovieCard";

const page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const { searchResults, loading, error } = useSearchMovies(query);

  if (loading) return <p>Loading .....</p>;
  if (error) return <p>Error Fetching the Movie. Please try later.</p>;
  return (
    <div>
      <h1>
        Search Results for : <b className="text-3xl">{query}</b>{" "}
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-3 mt-6 gap-5">
        {searchResults.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              id={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
