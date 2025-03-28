"use client";

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { usePopularMovies } from "../hooks/useTMDB";

const MoviesCardGrid = () => {
  const { movies, loading, error } = usePopularMovies();

  if (loading) return <p>Loading...</p>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-15">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          id={movie.id}
        />
      ))}
    </div>
  );
};

export default MoviesCardGrid;
