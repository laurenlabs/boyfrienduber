import React, { PureComponent } from "react";
import styled from 'styled-components';

const StyledFooter = styled.div`
  color: green;
  font-weight: bold;
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <StyledFooter><p>This is the footer.</p></StyledFooter>
    )
  }
}
