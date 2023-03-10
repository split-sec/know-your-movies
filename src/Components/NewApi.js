import axios from "axios";

export default function newApi() {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1&include_adult=false&query=Avengers`)
    .then((res) => console.log(res));
}