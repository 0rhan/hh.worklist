import axios from "axios";

// Конфигурация axios
const hhReq = axios.create({
  // Базовая ссылка
  baseURL: "https://api.hh.ru/",
  // Формат ответа
  responseType: "json",
  // Параметры
  params: {
    // Ограничение результата в 50 вакансий
    per_page: 50
  }
});

export default hhReq;
