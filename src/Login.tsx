import React, { useEffect, useState } from 'react';
import './Login.css';
import Header from './components/Header';
import { UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Definicja typu dla użytkownika
interface User {
  id: number;
  name: string;
  username: string;
  // ... inne pola użytkownika
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  // Funkcja do pobierania użytkowników z API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const onFinish = (values: any) => {
    // Znajdź użytkownika po nazwie użytkownika
    const user = users.find(user => user.username === values.username);

    if (user) {
      // Zapisz użytkownika w sesji i przekieruj na stronę główną
      sessionStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } else {
      console.error('User not found');
      // Tutaj możesz dodać obsługę błędów, np. wyświetlenie komunikatu
    }
  };

  return (
    <div>
      <Header />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
