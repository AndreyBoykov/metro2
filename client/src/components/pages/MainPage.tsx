import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

function MainPage(): JSX.Element {
  return (
    <Content style={{ padding: '24px', background: '#fff', minHeight: 280 }}>
      Main Page Content
    </Content>
  );
}

export default MainPage;
