import React from "react";
import { DataConsumer } from "utils/context";
import VacancyList from "./VacancyList/VacancyList";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import { Route } from "react-router-dom";
import FullVacancyCard from "./VacancyCard/FullVacancyCard/FullVacancyCard";

const Content = () => {
  /* Cписок вакансий */
  return (
    <DataConsumer>
      {({ vacancyCollection, loading, activeVacancyId }) => {
        // Отображать загрузку пока коллекция не будет загружена

        // Анимация загрузки
        if (loading) {
          return <Loader size={50} />;
        }

        // После загрузки данных
        if (!loading) {
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
                  <FullVacancyCard
                    vacancyCollection={vacancyCollection}
                    activeVacancyId={activeVacancyId}
                  />
                )}
              />
            </>
          );
        }
      }}
    </DataConsumer>
  );
};

export default Content;

const Loader = styled(CircularProgress)`
  && {
    position: fixed;
    top: 50%;
    left: 50%;
  }
`;
