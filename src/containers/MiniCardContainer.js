import React, { PureComponent } from "react";
import MiniCard from "components/Content/VacancyCard/MiniCard/MiniCard";

class MiniCardContainer extends PureComponent {
  render() {
    return <MiniCard {...this.props} />;
  }
}

export default MiniCardContainer;
