import React from "react";
import { DataConsumer } from "utils/context";
import VacancyList from "./VacancyList/VacancyList";
import { Route, Switch } from "react-router-dom";
import Loader from "../Loader/Loader";
import FullCardContainer from "containers/FullCardContianer";
import NoMatch from "components/NoMatch/NoMatch";

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
          <Switch>
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
            {/* "Страница" не найдена */}
            <Route component={NoMatch} />
          </Switch>
        );
      }}
    </DataConsumer>
  );
};

export default Content;
