import { useEffect, useState } from "react";
import { TMDBApi } from "../services/APIClient";

const tmdbApi = new TMDBApi();

export const usePopularMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const popularMovies = await tmdbApi.getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("Failed to fetch popular movies");
        console.log();
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export const useSearchMovies = (query: string) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      const fetchSearchResults = async () => {
        try {
          setLoading(true);
          const results = await tmdbApi.searchMovie(query);
          setSearchResults(results);
        } catch (err) {
          setError("failed to fetch movies");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchSearchResults();
    }
  }, [query]);

  return { searchResults, loading, error };
};
