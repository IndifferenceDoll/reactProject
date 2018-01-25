import React from 'react'
import ReactDom from 'react-dom'
import Hellow from './component/Hellow/Hellow'

ReactDom.render(
    <Hellow/>,document.getElementById('app')
)

//非组件写法
// ReactDom.render(
//     <div>Hellow React!</div>,document.getElementById('app')
// )

//非react的纯es6写法
// var func = str =>{
//     document.getElementById('app').innerHTML = str
// }

// func('我现在在使用Babel!')