import React, { Component } from "react";
import styled from "styled-components";
import ShowMore from "../components/Content/VacancyList/ShowMore/ShowMore";
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
    const { mainCollection, itemsToShow } = this.state;

    const mainLastIndex = mainCollection.length;

    const { vacancyCollection } = this.props;

    const maxItems = vacancyCollection.length;

    let showMore;

    if (itemsToShow < maxItems) {
      showMore = itemsToShow + 5;
    } else {
      this.setState({
        collectionEnd: true
      });
    }

    this.setState(
      {
        itemsToShow: showMore
      },
      () => {
        const collectionNewPart = vacancyCollection.slice(
          mainLastIndex,
          showMore
        );
        this.setState(prevState => ({
          mainCollection: [...prevState.mainCollection, ...collectionNewPart]
        }));
      }
    );
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
