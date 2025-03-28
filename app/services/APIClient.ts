import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_AUTH = process.env.NEXT_PUBLIC_TMDB_AUTH_KEY;
const VIDEO_BASE_URL = "https://vidsrc.to/embed/";

class TMDBApi {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      params: {
        api_key: API_KEY,
      },
      headers: {
        Authorization: TMDB_AUTH,
      },
    });
  }

  // Get Popular Movies
  getPopularMovies = async () => {
    try {
      const response = await this.axiosInstance.get("/trending/movie/day", {});
      return response.data.results;
    } catch (error) {
      console.error("Error fetching Popular Movies: ", error);
      throw error;
    }
  };

  //Search Movies on Query
  searchMovie = async (query: string) => {
    try {
      const response = await this.axiosInstance.get("/search/movie", {
        params: { query },
      });
      return response.data.results;
    } catch (error) {
      console.error("Error Searching the movie", error);
      throw error;
    }
  };
}

class VideoAPI {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: VIDEO_BASE_URL,
    });
  }
  //Get Movie with search Data
  getMovie = async (query: Number) => {
    try {
      const response = await this.axiosInstance.get(`/movie/${query}`);
      return response.data;
    } catch (err) {
      console.error("Error");
      throw err;
    }
  };
}

export { TMDBApi, VideoAPI };
