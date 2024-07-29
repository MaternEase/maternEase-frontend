import React from 'react';
import { Layout, Menu, Dropdown, Input, Button, Space, Avatar } from 'antd';
import { MenuUnfoldOutlined, BellOutlined, UserOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo4.png'; // Replace with the actual path to your logo file
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// import DehazeIcon from '@mui/icons-material/Dehaze';

const { Header } = Layout;
const { Search } = Input;

const AppHeader = ({ onMenuClick }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    console.log('logout');
    try {
      await signOut(); // Removed email, password as they are not defined
      navigate('/signin'); // Redirect to login page or any other desired page after logout
    } catch (error) {
      console.log('error', error);
      // setError('Logout failed.');
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header
      className="header"
      style={{ backgroundColor: '#EEEEEE', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', position: 'fixed', width: '100%', zIndex: 1000 }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '1px' }} />
        <span style={{ color: '#967AA1', fontSize: '25px' }}>MaternEase</span>
        <Button
          type="link"
          // icon={<DehazeIcon style={{ fontSize: '25px', paddingLeft: '15px' }} />}
          onClick={onMenuClick}
          style={{ color: 'black' }}
        />
      </div>
      <Space size="middle">
        <Search placeholder="Search..." style={{ width: 200, marginTop: '1rem' }} />
        <BellOutlined style={{ fontSize: '30px', color: 'Black', marginTop: '20px' }} />
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar icon={<UserOutlined style={{ fontSize: '30px' }} />} style={{ cursor: 'pointer', fontSize: '30px' }} />
        </Dropdown>
      </Space>
    </Header>
  );
};

export default AppHeader;
