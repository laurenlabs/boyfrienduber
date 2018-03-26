import React, { PureComponent } from "react";
import styled from 'styled-components';
import { Menu, Icon } from 'antd';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';


const StyledNav = styled.div`
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
      <StyledNav>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Login / Logout</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">Dashboard</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">Review</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">History</span>
          </Menu.Item>
        </Menu>
      </StyledNav>
    )
  }
}
