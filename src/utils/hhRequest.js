import axios from "axios";

// Конфигурация axios
const hhRequest = axios.create({
  // Базовая ссылка
  // Запрос на вакансии
  baseURL: "https://api.hh.ru/vacancies",
  // Формат ответа
  responseType: "json",
  // Параметры
  params: {
    // Ограничение результата в 50 вакансий
    per_page: 50
  }
});

export default hhRequest;
