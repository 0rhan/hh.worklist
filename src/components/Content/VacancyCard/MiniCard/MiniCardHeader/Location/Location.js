import React from "react";
import Typography from "@material-ui/core/Typography";
import LocationOn from "@material-ui/icons/LocationOn";
import styled from "styled-components";

const Location = props => {
  const { city } = props;

  return (
    <Container>
      <LocationOn fontSize="small" />
      {/* Название города */}
      <CityName>{city || "Не указано"}</CityName>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CityName = styled(Typography)`
  && {
    color: ${props => props.theme.palette.primary.light};
  }
`;
