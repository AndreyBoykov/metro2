import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';

const { Header } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function NavBar(): JSX.Element {
  return (
    <Header style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      background: '#001529'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '1200px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div className="demo-logo">Logo</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
    </Header>
  );
}

export default NavBar;
