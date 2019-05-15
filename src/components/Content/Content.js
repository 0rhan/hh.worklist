import React from "react";
import { DataConsumer } from "utils/context";
import VacancyList from "./VacancyList/VacancyList";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const Content = () => {
  /* Cписок вакансий */
  return (
    <DataConsumer>
      {({ itemsCollection, loading }) =>
        // Отображать загрузку пока коллекция не будет загружена
        loading ? (
          // Анимация загрузки
          <Loader size={50} />
        ) : (
          // Вакансии
          <VacancyList itemsCollection={itemsCollection} />
        )
      }
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
