// Base da URL: https://api.themoviedb.org/3
// URL DA API: /movie/550?api_key=b8eb4ace57a9776e464725237d540b49

// INSTALR AXIOS PARA CONSUMIR A API >>> npm install axios

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
export default api



