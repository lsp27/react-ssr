import React from 'react'
// import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Translation from './containers/translation'
import App from './App'
import NotFound from './containers/NotFound'


export default [{
  path: '/',
  component: App,
  key: 'App',
  loadData: App.loadData,
  routes: [
    {
      path: "/",
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'home',
    },
    {
      path: "/translation",
      component: Translation,
      exact: true,
      loadData: Translation.loadData,
      key: 'translation'
    },
    {
      component: NotFound,
    }
  ]
}]



