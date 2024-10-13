import routes from '@/router';
import { useRoutes } from 'react-router-dom';
const App = () => {
  //console.log(import.meta.env);
  const element = useRoutes(routes);
  return <>{element}</>;
};

export default App;
