import React, { Component } from "react";
import Header from "components/Header/Header";
import Content from "components/Content/Content";
import GlobalStyle from "utils/styles/GlobalStyle";
import { DataProvider } from "utils/context";
import hhRequest from "utils/hhRequest";

//Контейнер для представления вакансий

class AppContainer extends Component {
  state = {
    itemsCollection: []
  };

  async componentDidMount() {
    // Получение данных из запроса
    const {
      data: { items }
    } = await hhRequest.get();

    // Запись коллекции вакансий в состояние
    this.setState({
      itemsCollection: items
    });
  }

  render() {
    // Извлечение коллекции из состояния
    const itemsCollection = this.state.itemsCollection;

    // Передача коллекции в компонент представления вакансий
    return (
      <>
        <DataProvider
          value={{
            itemsCollection: itemsCollection
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
