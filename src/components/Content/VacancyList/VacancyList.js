import React from "react";
import MiniCardContainer from "containers/MiniCardContainer";

const VacancyList = props => {
  const { mainCollection } = props;
  // Перебор и передача нужных параметров в карточку вакансии
  const items = mainCollection.map(item => {
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
      <MiniCardContainer
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
  return items;
};

export default VacancyList;
