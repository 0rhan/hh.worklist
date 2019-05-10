import React from "react";
import VacancyCard from "../../VacancyCard/VacancyCard";
import styled from "styled-components";

// Представление вакансий

const VacancyList = props => {
  // Извлечение коллекции вакансий
  const { itemsCollection } = props;

  // Перебор и передача нужных параметров в карточку вакансии
  const items = itemsCollection.map(item => {
    const {
      id,
      name,
      snippet: { requirement, responsibility }
      // address
    } = item;

    // const city = address && address.city;
    // console.log(city);

    return (
      <VacancyCard
        // Название вакансии
        name={name}
        // Требования
        requirement={requirement}
        // Обязанности
        responsibility={responsibility}
        // Город
        // city={city}
        // Улица
        // street={street}
        // Дом
        // building={building}
        // Минимальная оплата
        // min={min}
        // Максимальная оплата
        // max={max}
        // Валюта
        // currency={currency}
        // Налоги (bool)
        // gross={gross}
        // Идентификатор
        key={id}
      />
    );
  });

  // Контейнер для списка вакансий
  return <StyledList>{items}</StyledList>;
};

export default VacancyList;

const StyledList = styled.div`
  margin-top: 85px;
`;
