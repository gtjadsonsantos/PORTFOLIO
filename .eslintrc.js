module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react",
        "import"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/prop-types": 0
    },
    "settings": {
        "react": {
          "createClass": "createReactClass",               
          "pragma": "React",  
          "version": "detect",           
          "flowVersion": "0.53" 
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
          "Hyperlink",
          {"name": "Link", "linkAttribute": "to"}
        ]
      }
};