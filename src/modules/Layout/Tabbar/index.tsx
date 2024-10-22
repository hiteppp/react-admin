import { Layout, theme } from 'antd';

const { Header } = Layout;
export default () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      11111111111111
    </Header>
  );
};
