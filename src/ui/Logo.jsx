import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
  background-color: var(--color-grey-50);
  font-size: 2rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return <StyledLogo>WILDERNESTS Portal</StyledLogo>;
}

export default Logo;
