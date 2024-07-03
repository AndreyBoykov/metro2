import React from 'react';
import { Layout } from 'antd';
import NavBar from './ui/NavBar';
import SideBar from './ui/SideBar';
import MainPage from './pages/MainPage';
import AppFooter from './ui/AppFooter';

const { Content } = Layout;

function Root(): JSX.Element {
  const handleSelectCategory = (id: number): void => {
    console.log('Selected category ID:', id);
    // Здесь вы можете выполнить действия при выборе категории
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <NavBar />
      <Content style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
        <Layout
          style={{
            width: '100%',
            maxWidth: '1200px',
            minHeight: '100vh',
            background: '#fff',
            borderRadius: '8px',
            padding: '24px',
          }}
        >
          <SideBar onSelectCategory={handleSelectCategory} />
          <Layout style={{ padding: '0 24px' }}>
            <MainPage />
          </Layout>
        </Layout>
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default Root;
