import React from "react";
import ShowFullVacancy from "./ShowFullVacancy/ShowFullVacancy";
import styled from "styled-components";

const MiniCardFooter = props => {
  const { id } = props;
  return (
    <ButtonContainer>
      <ShowFullVacancy id={id} />
    </ButtonContainer>
  );
};

export default MiniCardFooter;

const ButtonContainer = styled.div`
  padding: 10px 15px 15px 15px;
  display: flex;
  flex-direction: column-reverse;
`;
