import React from 'react';
import { Avatar, Button, Dropdown, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function PostingLayout({ sideMenu }) {
  const menu = (
    <Menu style={{ outline: '#3d5e80 solid' }}>
      <Menu.Item>
        <Button
          type="text"
          onClick={() => {
            window.location = '/';
          }}
        >
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sider style={{ minHeight: '100vh' }}>{sideMenu}</Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div
            style={{
              display: 'flex',
              paddingTop: '1%',
              paddingRight: '1%',
              justifyContent: 'flex-end',
            }}
          >
            <Dropdown overlay={menu}>
              <Avatar style={{ backgroundColor: '#3d5e80' }} icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}
