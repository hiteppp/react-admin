import Login from '@/modules/Login';

import Register from '@/modules/Register';
import { useGlobalComponet } from '@/Provider';
const App = () => {
  console.log(import.meta.env);
  const { SvgIcon, Tab, Dialog } = useGlobalComponet();
  return (
    <>
      <h1>Vite + React</h1>
      <p>管理系统</p>
      <Login />
      {/* 测试svg */}
      <SvgIcon type="test" color="pink" width={130} height={130} />
      <Register />
      <h2>分割线11111111111111111</h2>
      <Tab />
      <Dialog />
    </>
  );
};

export default App;
