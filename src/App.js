import React, { Component } from "react";
import Header from "components/Header/Header";
import Content from "components/Content/Content";
import GlobalStyle from "utils/styles/GlobalStyle";
import { DataProvider } from "utils/context";
import transformVacancies from "utils/transformVacancies";
import hhReq from "api/hhReq";

class AppContainer extends Component {
  state = {
    vacancyCollection: [],
    // Состояние загрузки
    loading: true,
    // Id активной вакансии для подробного просмотра
    activeVacancyId: ""
  };

  //  Запрос на получение коллекции вакансий
  async getVacancies() {
    const {
      data: { items }
    } = await hhReq.get("vacancies");
    const vacancyCollection = transformVacancies(items);
    // Запись коллекции вакансий в состояние
    this.setState({
      vacancyCollection: vacancyCollection,
      loading: false
    });
  }

  // Получение id активной для просмотра вакансии
  handleActiveVacancy = id => () => {
    this.setState({
      activeVacancyId: id
    });
  };

  componentDidMount() {
    this.getVacancies();
  }

  render() {
    const { vacancyCollection, loading, activeVacancyId } = this.state;

    // Передача коллекции в компонент представления вакансий
    return (
      <>
        <DataProvider
          value={{
            vacancyCollection: vacancyCollection,
            loading: loading,
            activeVacancyId: activeVacancyId,
            handleActiveVacancy: this.handleActiveVacancy
          }}
        >
          <GlobalStyle />
          <Header />
          <Content />
        </DataProvider>
      </>
    );
  }
}

export default AppContainer;
