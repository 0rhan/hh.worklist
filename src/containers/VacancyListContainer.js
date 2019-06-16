import React, { Component } from "react";
import styled from "styled-components";
import ShowMore from "components/Content/VacancyList/ShowMore/ShowMore";
import VacancyList from "components/Content/VacancyList/VacancyList";

// Представление вакансий

class VacancyListContainer extends Component {
  constructor(props) {
    super(props);
    const { vacancyCollection } = this.props;

    const mainCollection = vacancyCollection.slice(0, 5);

    this.state = {
      mainCollection: mainCollection,
      itemsToShow: 5,
      collectionEnd: false
    };
  }

  // Показать больше вакансий
  showMore = () => {
    const { itemsToShow } = this.state;

    const { vacancyCollection } = this.props;

    // Увеличть кол-во показываемых элементов
    const showMore = itemsToShow + 5;

    // Максимальное кол-во элементов
    const maxItems = vacancyCollection.length;

    // Извлечь нужное кол-во элементов
    const newCollection = vacancyCollection.slice(0, showMore);

    // Пока не достигнуто максимальное кол-во элементов
    if (showMore !== maxItems) {
      this.setState({
        mainCollection: newCollection,
        itemsToShow: showMore
      });
    } else {
      // Если достигнуто убрать кнопку
      this.setState({
        collectionEnd: true
      });
    }
  };

  render() {
    const { mainCollection, collectionEnd } = this.state;
    return (
      <StyledList>
        <VacancyList mainCollection={mainCollection} />
        <ShowMore showMore={this.showMore} collectionEnd={collectionEnd} />
      </StyledList>
    );
  }
}

export default VacancyListContainer;

const StyledList = styled.ul`
  margin-top: 85px;
  padding: 0px;
  list-style-type: none;
`;
