import React, { Component } from "react";
import Header from "components/Header/Header";
import Content from "components/Content/Content";
import GlobalStyle from "utils/styles/GlobalStyle";
import { DataProvider } from "utils/context";
import { VACANCIES_URL } from "api/constants";
import transformVacancies from "utils/transformVacancies";
import fetchData from "api/fetchData";

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
  fetchVacancies = async () => {
    // Состояние загрузки
    this.setState({ loading: true });

    // Параметры запроса
    const url = VACANCIES_URL;
    const params = { params: { per_page: 50 } };

    // Запрос на вакансии
    const { items } = await fetchData(url, params);

    // Преобразование коллекции
    const vacancyCollection = transformVacancies(items);

    // Запись коллекции вакансий в состояние, смена состояния загрузки
    this.setState({
      // Коллекция вакансий
      vacancyCollection: vacancyCollection,
      // Состсояние загрузки
      loading: false
    });
  };

  // Получение id активной для просмотра вакансии
  handleActiveVacancy = id => () => {
    this.setState({
      activeVacancyId: id
    });
  };

  // Поиск вакансий по запросу
  searchVacancies = async (str, event) => {
    // Убрать стандартное действие при нажатии ENTER
    event.preventDefault();

    // Статус загрузки
    this.setState({
      loading: true
    });

    const url = VACANCIES_URL;
    const params = { params: { per_page: 50, text: str } };

    const { items } = await fetchData(url, params);

    const vacancyCollection = transformVacancies(items);

    this.setState({
      vacancyCollection: vacancyCollection,
      loading: false
    });
  };

  componentDidMount() {
    this.fetchVacancies();
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
