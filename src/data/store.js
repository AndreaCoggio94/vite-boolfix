import { reactive } from "vue";

export const store = reactive({
  searchMovie: "https://api.themoviedb.org/3/search/movie?",
  apiKey: "api_key=ab7bbb91023578105b166ebbfc1c5d68",
  query: "&query=",
  filterData: "",
});
