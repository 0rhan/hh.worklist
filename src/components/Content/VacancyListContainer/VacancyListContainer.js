import React, { Component } from "react";
import hhRequest from "utils/hhRequest";
import VacancyList from "./VacancyList/VacancyList";

//Контейнер для представления вакансий

class VacancyListContainer extends Component {
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
    return <VacancyList itemsCollection={itemsCollection} />;
  }
}

export default VacancyListContainer;
