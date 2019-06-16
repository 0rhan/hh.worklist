import hhReq from "./hhReq";

// Метод для запроса данных
const fetchData = async (url, params) => {
  const { data } = await hhReq.get(url, { ...params });
  return data;
};

export default fetchData;
