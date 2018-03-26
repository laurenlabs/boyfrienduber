import React, { PureComponent } from "react";
import styled from 'styled-components';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import bg from '../../overwatch_bg.png';

const StyledPage = styled.div`
  color: purple;
  background: url(${bg});
  background-size: cover;
  height: 100%;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export default class Page extends PureComponent {
  render() {
    return (
      <StyledPage>
        <Button type="primary">Primary</Button>
        {this.props.children}
      </StyledPage>
    )
  }
}
