const key='d15ecda425a20ebf3c23afdbe046550e'

const requests={
requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=true`,
};
export default requests