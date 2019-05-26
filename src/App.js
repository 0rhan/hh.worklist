import React, { Component } from "react";
import Header from "components/Header/Header";
import Content from "components/Content/Content";
import GlobalStyle from "utils/styles/GlobalStyle";
import { DataProvider } from "utils/context";
import transformVacancies from "utils/transformVacancies";
import hhReq from "api/hhReq";

class AppContainer extends Component {
  state = {
    // Коллекция вакансий
    vacancyCollection: [],
    // Сколько вакансий показывать изначально
    itemsToShow: 5,
    // Состояние загрузки
    loading: true,
    // Id активной вакансии для подробного просмотра
    activeVacancyId: ""
  };

  //  Запрос на получение коллекции вакансий
  async getVacancies() {
    // Запрос на вакансии
    const {
      data: { items }
    } = await hhReq.get("vacancies", {
      params: {
        per_page: 50
      }
    });

    // Преобразование коллекции
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

  // Поиск вакансий по запросу
  searchVacancies = (str, event) => {
    event.preventDefault();
    const getSearch = async str => {
      const {
        data: { items }
      } = await hhReq.get("vacancies/", {
        params: {
          per_page: 50,
          text: str
        }
      });
      const vacancyCollection = transformVacancies(items);
      this.setState({
        vacancyCollection: vacancyCollection,
        loading: false
      });
    };

    this.setState({
      loading: true
    });

    getSearch(str);
  };

  componentDidMount() {
    this.getVacancies();
  }

  render() {
    const {
      vacancyCollection,
      itemsToShow,
      loading,
      activeVacancyId
    } = this.state;

    // Передача коллекции в компонент представления вакансий
    return (
      <>
        <DataProvider
          value={{
            vacancyCollection: vacancyCollection,
            itemsToShow: itemsToShow,
            loading: loading,
            activeVacancyId: activeVacancyId,
            handleActiveVacancy: this.handleActiveVacancy,
            searchVacancies: this.searchVacancies
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
