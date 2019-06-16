import React, { Component } from "react";
import { VACANCIES_URL } from "api/constants";
import FullVacancyCard from "components/Content/VacancyCard/FullVacancyCard/FullVacancyCard";
import transformOne from "utils/transformOne";
import Loader from "components/Loader/Loader";
import fetchData from "api/fetchData";

class FullCardContainer extends Component {
  state = {
    vacancyData: {},
    loading: true
  };

  async getVacancy() {
    const { activeVacancyId: vacancyId } = this.props;

    const url = `${VACANCIES_URL}/${vacancyId}`;

    const response = await fetchData(url);

    const vacancyData = transformOne(response);
    this.setState({
      vacancyData: vacancyData,
      loading: false
    });
  }

  componentDidMount() {
    this.getVacancy();
  }

  render() {
    const { vacancyData, loading } = this.state;

    return (
      <>
        {loading ? <Loader /> : <FullVacancyCard vacancyData={vacancyData} />}
      </>
    );
  }
}

export default FullCardContainer;
