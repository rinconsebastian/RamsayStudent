import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Students from './components/students';


export default () => (
  <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/students' component={Students} />
   
  </Layout>
);
