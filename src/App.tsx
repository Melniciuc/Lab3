import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined}  from '@ant-design/icons'
import { Layout, Menu, Breadcrumb, MenuProps, theme, Row, Col } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import Card from 'antd/es/card/Card';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Victor', '1'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Autovehicul', '6')]),
  getItem('Files', '9', <FileOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [anul, setAnul] = useState('')
  const [motorizare, setMotorizare] = useState('')
  const [cards, setCards] = useState<{
    title: string
    name: string
    anul: string
    motorizare: string
  }[]>([])

  return (
    <div className="App">
     <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "#237158" }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Melniciuc Victor</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: "#0AE6A0" }}>
            <form onSubmit={(e) => {
              e.preventDefault()
              console.log('Date: ',title, name, anul, motorizare)
              setCards([...cards, {
                title,
                name,
                anul,
                motorizare
              }])
            }}>
               <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                Marca:
                  <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                </Col>
              </Row>

              <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                  Modelul:
                  <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                </Col>
              </Row>

                <Row style={{
                marginBottom: "20px"
              }}>
                <Col span={6}>
                <label>
                Anul:
                  <input type="anul" value={anul} onChange={e => setAnul(e.target.value)} />
                </label>
                </Col>
                </Row>

              <Row style={{
                marginBottom: "20px"
              }}>
              <Col span={6}>
                <label>
                Motorizare:
                <input type="text" value={motorizare} onChange={e => setMotorizare(e.target.value)} />
              </label>
                </Col>
              </Row>

              <Row>
                <Col span={6}>
                  <button>Submit</button>
                </Col>
              </Row>
            </form>
            {cards.map(card => (
              <Card title={card.title} style={{ width: 300, marginTop: "20px" }}>
                <p>Nume: {card.name}</p>
                <p>Anul: {card.anul}</p>
                <p>Motorizare: {card.motorizare}</p>
              </Card> 
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}

export default App;