import React from "react";
import { DataConsumer } from "utils/context";
import VacancyList from "./VacancyList/VacancyList";

const Content = () => {
  /* Cписок вакансий */
  return (
    <DataConsumer>
      {({ itemsCollection }) => (
        <VacancyList itemsCollection={itemsCollection} />
      )}
    </DataConsumer>
  );
};

export default Content;
