import { create } from "apisauce";



// базовый url (добавлен ключ в ссылку
// так как нужна авторизация по требованию ресурса)
// const API = create({
//     baseURL: 'https://moviesdatabase.p.rapidapi.com',
// });

// не сработало :(
// const API = create({
//     baseURL: 'https://example.p.rapidapi.com?rapidapi-key=f35c5038cfmsh623b39fb492d764p1ae170jsn5f306caa8d6d',
// });
// а ниже работает :)

const API = create({
    baseURL: 'https://moviesdatabase.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': 'f35c5038cfmsh623b39fb492d764p1ae170jsn5f306caa8d6d',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
});

// const getPosts = () => {
//     // return API.get("/titles/?limit=10");
//     return API.get("/titles");
// };
// add "base_info"
const getPosts = () => {
    return API.get("/titles", { info: "base_info", limit: 50 });
};


// const getSinglePost = (id: string) => {
//     return API.get(`/titles/${id}/`);
// };
// add "base_info"
const getSinglePost = (id: string) => {
    return API.get(`/titles/${id}/`, { info: "base_info" });
};


// title - наш параметр
// exact - точное совпадение по введенному в инпут (при поиске)
// const getSearchPosts = (title: string) => {
//     return API.get(`/titles/search/title/${title}`, { exact: false })
// }
const getSearchPosts = (title: string) => {
    return API.get(`/titles/search/title/${title}`, { info: "base_info", exact: false, limit: 50 })
}

const getTrendsPosts = () => {
    // return API.get("/titles", {info: "base_info", sort: 'year.decr', list: 'top_rated_english_250'});
    // return API.get("/titles", {info: "base_info", sort: 'year.decr', list: 'top_boxoffice_last_weekend_10'});
    return API.get("/titles", { info: "base_info", sort: 'year.decr', list: 'most_pop_movies', limit: 50 });

};

const getRecommendationsPosts = () => {
    return API.get("/titles", { info: "base_info", sort: 'year.decr', list: 'top_boxoffice_last_weekend_10', limit: 4 });
};


export default {
    getPosts,
    getSinglePost,
    getSearchPosts,
    getTrendsPosts,
    getRecommendationsPosts,
};