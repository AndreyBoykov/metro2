import React, { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import NavBar from './ui/NavBar';
import SideBar from './ui/SideBar';
import AppFooter from './ui/AppFooter';


const { Content } = Layout;

function Root(): JSX.Element {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleSelectCategory = (id: number): void => {
    setSelectedCategoryId(id);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavBar />
      <Layout>
        <SideBar onSelectCategory={handleSelectCategory} />
        <Layout style={{ padding: '0 24px' }}>
          <Content style={{ padding: '24px', background: '#fff', minHeight: 280 }}>
            <Outlet />
          </Content>
          <AppFooter/>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Root;
