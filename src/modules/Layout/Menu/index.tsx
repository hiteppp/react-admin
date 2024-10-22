import { Layout, Menu, MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from "react";
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('我的课表', '1', <PieChartOutlined />),
  getItem('发布课程', '2', <DesktopOutlined />),
  getItem('课程管理', 'sub2', <TeamOutlined />, [
    getItem('选课', '6'),
    getItem('退课', '8'),
  ]),
  getItem('用户管理', 'sub1', <UserOutlined />, [
    getItem('老师', '3'),
    getItem('学生', '4'),
    getItem('注册管理', '5'),
  ]),
  getItem('发布通知', '9', <FileOutlined />),
];

export default () => {
    const [collapsed, setCollapsed] = useState(false);
    const { Sider } = Layout;
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
    );
}