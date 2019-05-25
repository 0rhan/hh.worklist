import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import LocationOn from "@material-ui/icons/LocationOn";

const Location = props => {
  const { city, street, building } = props;

  // Трансформация строки адреса в зависимости от наличия данных
  const checkCity = city ? `${city}` : "Не указано";
  const addComma = street && building ? `${checkCity},` : checkCity;
  const checkStreet = street ? `${street},` : "";
  const checkBuilding = building ? `${building}` : "";

  const address = `${addComma} ${checkStreet} ${checkBuilding}`;
  return (
    <Container>
      <LocationOn fontSize="small" />
      <Address>{address} </Address>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Address = styled(Typography)`
  && {
    color: ${props => props.theme.palette.primary.light};
  }
`;
