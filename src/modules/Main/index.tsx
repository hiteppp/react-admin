import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default () => {
  const {
    state: { username, password, role_type },
  } = useLocation();
  const [personInfo, setPersonInfo] = useState<string | null>();
  useEffect(() => {
    setPersonInfo(localStorage.getItem('token'));
  }, []);
  return (
    <>
      <h1>主页</h1>
      <p>
        {personInfo},{role_type},{username},{password}
      </p>
    </>
  );
};
