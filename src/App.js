import React from 'react';
import './App.css';
import { Layout} from 'antd';

const { Content, Header, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
