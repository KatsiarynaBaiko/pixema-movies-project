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

const getPosts = () => {
    // return API.get("/titles/?limit=10");
    return API.get("/titles");
};


const getSinglePost = (id: string) => {
    return API.get(`/titles/${id}/`);
};

// title - наш параметр
// exact - точное совпадение по введенному в инпут (при поиске)
const getSearchPosts = (title: string) => {
    return API.get(`/titles/search/title/${title}`, { exact: false })

}

export default {
    getPosts,
    getSinglePost,
    getSearchPosts,
};