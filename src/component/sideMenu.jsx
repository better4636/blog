import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { getOverview } from '../service/posting';

const { SubMenu } = Menu;

export default function SideMenu() {
  const [current, setCurrent] = useState('1');
  const [overview, setOverview] = useState();

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  /*
   * effect로 로그인 했을 시 데이터 가져와야함.
   */
  useEffect(() => {
    // service에서 데이터를 가져온다.
    setOverview(getOverview());
  }, []);

  return (
    <>
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch' }}>
        <Menu
          theme="dark"
          onClick={handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline"
        >
          {overview &&
            overview.map((o) => {
              return (
                <SubMenu key={o.id} icon={<MailOutlined />} title={o.subjectTitle}>
                  {o.items.map((i) => {
                    return <Menu.Item key={i.key}>{i.content}</Menu.Item>;
                  })}
                </SubMenu>
              );
            })}
        </Menu>
      </div>
    </>
  );
}
