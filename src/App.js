import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from 'antd';

import CatalogScreen from './screens/CatalogScreen';

const { Content, Header } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Header></Header>
          <Content>
            <Switch>
              <Route exact path='/catalog' component={CatalogScreen}/>
              <Route exact path='/' component={() => (<Redirect to='/catalog'/>)}/>
            </Switch>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
