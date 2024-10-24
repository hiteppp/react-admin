import { Layout, Menu } from 'antd';
import { items } from './menuItem';
import { useState } from 'react';
import { Image } from 'antd';
import './index.less';

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Sider } = Layout;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
    >
      <div className="demo-logo-vertical">
        <Image
          width={80}
          style={{ borderRadius: 40 }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};
