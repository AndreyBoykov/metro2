import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function AppFooter(): JSX.Element {
  return (
    <Footer style={{ 
      textAlign: 'center',
      position: 'sticky',
      bottom: 0,
      zIndex: 1000,
      width: '100%',
      background: '#f0f2f5'
    }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
}

export default AppFooter;
