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
  
   // React Native includes images via require("../images/example.png")
   "global-require": 0
  }
 }
  