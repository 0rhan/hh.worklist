const transformOne = vacancyData => {
  const {
    // Название вакансии
    name,

    // Описание вакансии
    description,

    // Навыки
    key_skills,

    // Расписание
    schedule,

    // Доступность для людей с инвалидностью
    accept_handicapped,

    // Доступность для детей
    accept_kids,

    // Опыт
    experience: { name: experience },

    // Адрес
    address,

    // Тип занятости
    employment,

    // Оплата
    salary,

    // Информация о компании
    employer,

    // Контакты
    contacts
  } = vacancyData;

  // Проверка объектов

  // Проверка объекта address
  const city = address && address.city;
  const street = address && address.street;
  const building = address && address.building;

  // Проверка объекта salary
  const min = salary && salary.from;
  const max = salary && salary.to;
  const currency = salary && salary.currency;
  const gross = salary && salary.gross;

  // Проверка объекта employer
  const companyName = employer.name;
  const verification = employer.trusted;
  const companyLogo = employer.logo_urls && employer.logo_urls["240"];

  // Проверка объекта contacts
  const contactName = contacts && contacts.name;
  const contactEmail = contacts && contacts.email;
  const contactPhones = contacts && contacts.phones;

  return {
    name,
    description,
    key_skills,
    schedule,
    accept_handicapped,
    accept_kids,
    experience,
    city,
    street,
    building,
    employment,
    min,
    max,
    currency,
    gross,
    companyName,
    companyLogo,
    verification,
    contactName,
    contactEmail,
    contactPhones
  };
};

export default transformOne;
