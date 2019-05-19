import React, { Component } from "react";
import Header from "components/Header/Header";
import Content from "components/Content/Content";
import GlobalStyle from "utils/styles/GlobalStyle";
import { DataProvider } from "utils/context";
import hhRequest from "utils/hhRequest";

class AppContainer extends Component {
  state = {
    vacancyCollection: [],
    // Состояние загрузки
    loading: true
  };

  async componentDidMount() {
    // Получение данных из запроса
    const { data } = await hhRequest.get();

    // Запись коллекции вакансий в состояние
    this.setState({
      vacancyCollection: data,
      loading: false
    });
  }

  render() {
    // Извлечение коллекции из состояния
    const { vacancyCollection, loading } = this.state;
    console.log(vacancyCollection);

    // Передача коллекции в компонент представления вакансий
    return (
      <>
        <DataProvider
          value={{
            vacancyCollection: vacancyCollection,
            loading: loading
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
