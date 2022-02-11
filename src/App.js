import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux';

import MyHeader from "@/components/header"
import MyFooter from "@/components/footer"

import routes from "./router/index"

import store from "./store"

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MyHeader />
        {renderRoutes(routes)}
        <MyFooter />
      </HashRouter>
    </Provider>
  )
})

