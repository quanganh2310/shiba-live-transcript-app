import { Alert, Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { login, selectIsLoggedin, selectUser } from '../../redux/slices/auth';
import { clearMessage, selectMessage } from '../../redux/slices/message';
import { notification } from 'antd';

const Login: React.FC = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = Form.useForm();
  const isLoggedIn = useAppSelector(selectIsLoggedin);
  const message = useAppSelector(selectMessage);
  const currentUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onFinish = (values: any) => {
    console.log(values);
    handleLogin(values);
    form.resetFields();
  };

  const handleLogin = (formValues: any) => {
    const { email, password } = formValues;
    setLoading(true);
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/profile');
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }
  return (
    <>
      {message && <Alert message={message} type="error" showIcon />}
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }, { type: 'email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
