import React from 'react';
import { Avatar, Dropdown, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

export default function PostingLayout({ sideMenu }) {
  const menu = (
    <Menu style={{ outline: '#3d5e80 solid' }}>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
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
