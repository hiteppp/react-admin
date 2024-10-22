import { Layout } from 'antd';
import Tabbar from './Tabbar';
import Main from './Main';
import Menu from './Menu';
const { Footer } = Layout;

export default () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Menu />
      <Layout>
        {/* 右边顶部 */}
        <Tabbar />
        {/* 内容 */}
        <Main />
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
