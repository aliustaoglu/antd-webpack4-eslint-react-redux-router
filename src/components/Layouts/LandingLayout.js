import React from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { layoutColors } from 'constants/color';

const { Header, Content, Footer, Sider } = Layout;

export class LandingLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header" style={{ position: 'fixed', width: '100%' }}>
          <Row>
            <Col md={2}>LOGO</Col>
            <Col md={12}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Layout style={{ marginTop: '64px' }}>
          <Sider collapsed >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <Menu.SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </Menu.SubMenu>
              <Menu.SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ height: 2000, backgroundColor: 'red' }}>
            <div>ANA</div>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default LandingLayout;
