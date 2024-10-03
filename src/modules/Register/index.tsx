import { useGlobalComponet } from '@/Provider';

export default () => {
  const { SvgIcon, Tab, Dialog } = useGlobalComponet();
  return (
    <>
      <h1>注册666666666666666</h1>
      <SvgIcon type="test" color="pink" width={130} height={130} />

      <Tab />
      <Dialog />
    </>
  );
};
