import axios from "axios";

// Конфигурация axios
const hhReq = axios.create({
  // Базовая ссылка
  baseURL: "https://api.hh.ru/",
  // Формат ответа
  responseType: "json",

});

export default hhReq;
