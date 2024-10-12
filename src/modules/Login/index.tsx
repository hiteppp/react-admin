import { Button, Form, FormProps, Input, Radio } from 'antd';
import styles from './index.module.less';
import { request } from '@/apis/request';
type FieldType = {
  username: string;
  password: string;
  role_type: string;
};
const onFinish: FormProps<FieldType>['onFinish'] = async values => {
  console.log('Success:', values);
  const { data } = await request('login', values);
  const { access_token } = data;
  //把token存储在本地
  localStorage.setItem('token', access_token);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo);
};

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ offset: 0, span: 16 }}
        style={{ maxWidth: 900, width: 500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="角色"
          name="role_type"
          rules={[{ required: true, message: '请选择角色!' }]}
        >
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={'student'}>学生</Radio>
            <Radio value={'teacher'}>老师</Radio>
            <Radio value={'admin'}>管理员</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
