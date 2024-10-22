import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>主页</h1>
      <Outlet />
    </>
  );
};

export default App;
