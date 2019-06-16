import React from "react";
import { DataConsumer } from "utils/context";
import VacancyListContainer from "../../containers/VacancyListContainer";
import { Route, Switch } from "react-router-dom";
import Loader from "../Loader/Loader";
import FullCardContainer from "containers/FullCardContianer";
import NoMatch from "components/NoMatch/NoMatch";

const Content = () => {
  /* Cписок вакансий */
  return (
    <DataConsumer>
      {({
        vacancyCollection,
        itemsToShow,
        loading,
        activeVacancyId,
        fetchData
      }) => {
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
              render={() => (
                <VacancyListContainer
                  vacancyCollection={vacancyCollection}
                  itemsToShow={itemsToShow}
                />
              )}
            />
            {/* Карточка с полной информацией о вакансии */}
            <Route
              path={`/vacancy_id${activeVacancyId}`}
              render={() => (
                <FullCardContainer
                  activeVacancyId={activeVacancyId}
                  fetchData={fetchData}
                />
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
