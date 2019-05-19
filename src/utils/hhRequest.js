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
  },

  // Проверка и запись нужных данных вакансии
  transformResponse: [
    data => {
      // Вакансии
      const { items: response } = data;

      // Проверка и запись нужных данных вакансии
      const itemsCollection = response.map(item => {
        const { id, name, snippet, address, salary, employer } = item;

        // Проверка полей

        // Поля объекта snippet
        const requirement = snippet.requirement;
        const responsibility = snippet.responsibility;

        // Поля объекта address
        // const { city } = item.address || {};
        const city = address && address.city;
        // const street = address && address.street;
        // const building = address && address.building;

        // Поля объекта salary
        const min = salary && salary.from;
        const max = salary && salary.to;
        const currency = salary && salary.currency;
        // const gross = salary && salary.gross;

        // Поля объекта employer
        const companyName = employer.name;
        const verification = employer.trusted;
        const companyLogo = employer.logo_urls && employer.logo_urls[90];

        // Создание объекта с нужными данными
        const vacancyData = {
          id,
          name,
          requirement,
          responsibility,
          city,
          min,
          max,
          currency,
          companyName,
          verification,
          companyLogo
        };

        return vacancyData;
      });
      return itemsCollection;
    }
  ]
});

export default hhRequest;
