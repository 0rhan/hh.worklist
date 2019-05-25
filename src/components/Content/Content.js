import React from "react";
import { DataConsumer } from "utils/context";
import VacancyList from "./VacancyList/VacancyList";
import { Route } from "react-router-dom";
import Loader from "../Loader/Loader";
import FullCardContainer from "containers/FullCardContianer";

const Content = () => {
  /* Cписок вакансий */
  return (
    <DataConsumer>
      {({ vacancyCollection, loading, activeVacancyId }) => {
        // Отображать загрузку пока коллекция не будет загружена

        // Анимация загрузки
        if (loading) {
          return <Loader />;
        }

        // После загрузки данных
        return (
          <>
            {/* Карточки вакансий */}
            <Route
              exact
              path="/"
              render={props => (
                <VacancyList vacancyCollection={vacancyCollection} />
              )}
            />
            {/* Карточка с полной информацией о вакансии */}
            <Route
              path={`/vacancy_id${activeVacancyId}`}
              render={props => (
                <FullCardContainer activeVacancyId={activeVacancyId} />
              )}
            />
          </>
        );
      }}
    </DataConsumer>
  );
};

export default Content;
