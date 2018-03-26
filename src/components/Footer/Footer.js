import React, { PureComponent } from "react";
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: rgba(29, 30, 36, .63);
  padding: 20px 0;
  & p {
    color: white;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
    font-size: 1rem;
    margin: 0;
  }
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <StyledFooter><p>&copy; 2018 Lauren Labs</p></StyledFooter>
    )
  }
}
