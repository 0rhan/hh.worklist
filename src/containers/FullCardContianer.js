import React, { Component } from "react";
import FullVacancyCard from "components/Content/VacancyCard/FullVacancyCard/FullVacancyCard";
import hhReq from "api/hhReq";
import transformOne from "utils/transformOne";

class FullCardContainer extends Component {
  state = {
    vacancyData: {}
  };

  async getVacancy() {
    const { activeVacancyId: vacancyId } = this.props;
    const response = await hhReq.get(`vacancies/${vacancyId}`);
    const vacancyData = transformOne(response);
    this.setState({
      vacancyData: vacancyData
    });
  }

  componentDidMount() {
    this.getVacancy();
  }

  render() {
    const { vacancyData } = this.state;

    return <FullVacancyCard vacancyData={vacancyData} />;
  }
}

export default FullCardContainer;
