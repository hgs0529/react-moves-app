const API_KEY = "9680a37b7e17e87c6a9023788d0fcc01";
const BASE_PATH = "https://api.themoviedb.org/3/";

interface IMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}movie/now_playing?api_key=${API_KEY}`).then(
    (resp) => resp.json()
  );
}
