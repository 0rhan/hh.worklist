const transformVacancies = items => {
  // Проверка и запись нужных данных в коллекцию
  const itemsCollection = items.map(item => {
    const { id, name, snippet, address, salary, employer } = item;

    // Проверка объектов

    // Проверка объекта snippet
    const requirement = snippet.requirement;
    const responsibility = snippet.responsibility;

    // Проверка объекта address
    // const { city } = item.address || {};
    const city = address && address.city;

    // Проверка объекта salary
    const min = salary && salary.from;
    const max = salary && salary.to;
    const currency = salary && salary.currency;

    // Проверка объекта employer
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
};

export default transformVacancies;
