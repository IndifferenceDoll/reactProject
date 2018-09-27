/* eslint-disable no-undef */
import getRouter from 'router/router';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './redux/store';

// 函数声明可以提升函数（包括函数名及函数体），所以上面能使用这个函数，如果var一个变量等于一个es6写法的函数则不行，函数表达式的var只提升了变量名，不提升函数体
function renderWithHotReload(RootElememt) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        {RootElememt}
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
}

// 初始化
renderWithHotReload(getRouter());
// 热更新
if (module.hot) {
  module.hot.accept('router/router', () => {
    const getRouterCustom = require('router/router').default;
    renderWithHotReload(getRouterCustom());
  });
}


// webpack热重载，没有react-hot-loader
// if(module.hot){
//     module.hot.accept()
// }
// ReactDom.render(
//     getRouter(),document.getElementById('app')
// )


// 非路由，组件写法
// import Hellow from './component/Hellow/Hellow'
// ReactDom.render(
//     <Hellow/>,document.getElementById('app')
// )


// 非组件写法
// ReactDom.render(
//     <div>Hellow React!</div>,document.getElementById('app')
// )


// 非react的纯es6写法
// var func = str =>{
//     document.getElementById('app').innerHTML = str
// }

// func('我现在在使用Babel!')
