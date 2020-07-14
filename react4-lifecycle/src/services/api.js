import axios from "axios";

const API_URL = "https://hn.algolia.com/api/v1/search?query=";

//функция, которая преобразует названия полей из ответа бекенда в нужные названия для нас, проходя по ним map
const articlesMapper = (articles) => {
  return articles.map(({ objectID, url, title }) => ({
    id: objectID,
    link: url,
    title,
  }));
};

export const getArticlesByQuery = (query = "") =>
  axios
    .get(API_URL + query)
    .then((response) => articlesMapper(response.data.hits));
