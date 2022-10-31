const GET_FILMS = 'GET_FILMS';

const MOVIES_URL = 'https://ghibliapi.herokuapp.com/films';

const initialState = [];

export const getMovieAction = (payload) => ({
   type: GET_FILMS,
   payload,
});

// eslint-disable-next-line default-param-last
const logic = (state= initialState, action) => {
    switch (action.type) {
      case GET_FILMS:
        return [...action.payload];
      default:
        return state;
    }
  };

export default logic;

export const getMovieApi = () => async (dispatch) => {
    const response = await fetch(MOVIES_URL);
    const films = await response.json();
    const formatMovieData = films.map((e) => {
      const obj = {
            movieKey: e.id,
            title: e.title,
            banner: e.movie_banner,
            image: e.image,
            description: e.description,
            director: e.director,
            producer: e.producer,
        };
        return obj;
    });
    dispatch(getMovieAction(formatMovieData));
};