import { create } from "apisauce";

// базовый url (добавлен ключ в ссылку
// так как нужна авторизация по требованию ресурса)
// const API = create({
//     baseURL: 'https://moviesdatabase.p.rapidapi.com',
// });
const API = create({
    baseURL: 'https://example.p.rapidapi.com?rapidapi-key=f35c5038cfmsh623b39fb492d764p1ae170jsn5f306caa8d6d',
});


const getPosts = () => {
    // return API.get("/titles/?limit=10");
    return API.get("/titles");
};



export default {
    getPosts,
};