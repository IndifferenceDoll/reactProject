// http://eslint.org/docs/user-guide/configuring

module.exports = {
  // Use the AirBnB JS styleguide - https://github.com/airbnb/javascript
  "extends": "airbnb",
  
  // We use 'babel-eslint' mainly for React Native Classes
  "parser": "babel-eslint",
  "ecmaFeatures": {
   "classes": true,
  },
  
  // jsx相关插件
  "plugins": ["react", "jsx-a11y", "import"],
  
  // We can add/overwrite custom rules here
  "rules": {
    'linebreak-style': 'off',//涉及到不同系统下crlf or lf的校验
    "react/prop-types": 0,
   // React Native has JSX in JS files
   "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
   "import/no-unresolved": [0, {commonjs: true, amd: true}],//路径校验，webpack配置alias后，可以以绝对路径写，但eslint会报错，只能写相对路径或者关掉
   "import/extensions": [ 0, {ignorePackages: true} ],//扩展名检验
  
   // React Native includes images via require("../images/example.png")
   "global-require": 0,
   "no-plusplus":0,
   "no-useless-return":0
  }
 }
//  /*eslint-disable no-unused-vars*/ //针对某个文件关闭某项检测
// import SC from 'soundcloud';
// /*eslint-enable no-unused-vars*/ //针对某个文件开启某项检测
// import React from 'react';
// import ReactDOM from ‘react-dom';
// ...
  