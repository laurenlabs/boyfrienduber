import React, { PureComponent } from "react";
import styled from 'styled-components';

// import logo from '../../logo.svg';

const StyledHeader = styled.div`
  color: red;
  font-weight: bold;
`;

export default class Header extends PureComponent {
  render() {
    return (
      <StyledHeader>
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>BoyfriendUber</p>
        </header>
      </StyledHeader>
    )
  }
}
