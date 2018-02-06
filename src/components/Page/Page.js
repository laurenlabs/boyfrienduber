import React, { PureComponent } from "react";
import styled from 'styled-components';

const StyledPage = styled.div`
  color: purple;
  font-weight: bold;
  background-color: yellow;
`;

export default class Page extends PureComponent {
  render() {
    return (
      <StyledPage>
        <div>{this.props.children}</div>
      </StyledPage>
    )
  }
}
