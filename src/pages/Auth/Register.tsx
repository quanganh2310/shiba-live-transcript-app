import React, { useEffect, useState } from 'react';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { clearMessage, selectMessage } from '../../redux/slices/message';
import { register } from '../../redux/slices/auth';

const Register: React.FC = () => {
  const [successful, setSuccessful] = useState<boolean>(false);
  const message = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onFinish = (values: any) => {
    console.log(values);
    handleRegister(values);
    form.resetFields();
  };

  const handleRegister = (formValue: any) => {
    const { email, password } = formValue;
    setSuccessful(false);
    dispatch(register({ email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };
  return (
    <div>
      {!successful && (
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
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two passwords that you entered do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      )}
      <div>
        {message && <Alert message={message} type={successful ? 'success' : 'error'} showIcon />}
      </div>
    </div>
  );
};

export default Register;
