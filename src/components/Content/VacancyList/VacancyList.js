import React from "react";
import VacancyCard from "../VacancyCard/VacancyCard";
import styled from "styled-components";

// Представление вакансий

const VacancyList = props => {
  // Извлечение коллекции вакансий
  const { vacancyCollection } = props;

  // Перебор и передача нужных параметров в карточку вакансии
  const items = vacancyCollection.map(item => {
    const {
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
    } = item;

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
        // street={street}
        // Дом
        // building={building}
        // Минимальная оплата
        min={min}
        // Максимальная оплата
        max={max}
        // Валюта
        currency={currency}
        // Налоги (bool)
        // gross={gross}
        // Название компании
        companyName={companyName}
        // Верификация компании (bool)
        verification={verification}
        //Логотип компании
        companyLogo={companyLogo}
        // Идентификатор вакансии
        id={id}
        // key
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
