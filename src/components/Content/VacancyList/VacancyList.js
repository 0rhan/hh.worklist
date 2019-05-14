import React from "react";
import VacancyCard from "../VacancyCard/VacancyCard";
import styled from "styled-components";

// Представление вакансий

const VacancyList = props => {
  // Извлечение коллекции вакансий
  const { itemsCollection } = props;

  // Перебор и передача нужных параметров в карточку вакансии
  const items = itemsCollection.map(item => {
    const { id, name, snippet, address, salary, employer } = item;

    // Проверка полей
    // Поля объекта snippet
    const requirement = snippet.requirement;
    const responsibility = snippet.responsibility;

    // Поля объекта address
    // const { city } = item.address || {};
    const city = address && address.city;
    const street = address && address.street;
    const building = address && address.building;

    // Поля объекта salary
    const min = salary && salary.from;
    const max = salary && salary.to;
    const currency = salary && salary.currency;
    const gross = salary && salary.gross;

    // Поля объекта employer
    const companyName = employer.name;
    const verification = employer.trusted;
    const companyLogo = employer.logo_urls && employer.logo_urls[90];

    return (
      <VacancyCard
        // Название вакансии
        name={name}
        // Требования
        requirement={requirement}
        // Обязанности
        responsibility={responsibility}
        // Город
        city={city}
        // Улица
        street={street}
        // Дом
        building={building}
        // Минимальная оплата
        min={min}
        // Максимальная оплата
        max={max}
        // Валюта
        currency={currency}
        // Налоги (bool)
        gross={gross}
        // Название компании
        companyName={companyName}
        // Верификация компании (bool)
        verification={verification}
        //Логотип компании
        companyLogo={companyLogo}
        // Идентификатор вакансии
        key={id}
      />
    );
  });

  // Контейнер для списка вакансий
  return <StyledList>{items}</StyledList>;
};

export default VacancyList;

const StyledList = styled.ul`
  margin-top: 85px;
  padding: 0px;
  list-style-type: none;
`;
