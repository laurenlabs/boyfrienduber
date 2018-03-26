import React, { PureComponent } from "react";
import styled from 'styled-components';

// import logo from '../../logo.svg';

const StyledHeader = styled.div`
  background-color: rgba(29, 30, 36, .63);
  padding: 20px 0;
  & h1 {
    color: white;
    font-family: 'bignoodle';
    font-size: 4rem;
    letter-spacing: .13rem;
    margin: 0;
    text-shadow: 3px 4px 5px #1D1E24;
  }
`;

export default class Header extends PureComponent {
  render() {
    return (
      <StyledHeader>
        <header>
          <h1>BoyfriendUber</h1>
        </header>
      </StyledHeader>
    )
  }
}
