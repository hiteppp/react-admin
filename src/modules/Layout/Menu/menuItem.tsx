import { MenuProps } from 'antd';
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { allRoutes } from '@/router';

export const items: MenuItem[] = [
  getItem('我的课表', 'class-schedule', <PieChartOutlined />),
  getItem('课程管理', 'subject-manage', <TeamOutlined />, [
    getItem('选课', 'select-subject'),
    getItem('我的课程', 'my-subject'),
  ]),
  getItem('通知', 'inform', <FileOutlined />),
];
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
