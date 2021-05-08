
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' },
  //       { path: '/user', component: '../pages/user' }
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true, // 开启antd，默认是按需加载
      dva: {
        immer:true // 推荐开启 dva-immer 以简化 reducer 编写，不需要写return
      }, // dva为true，则是开启dva
      dynamicImport: { // UmiJs结合Dva配置实现资源的按需加载,不会在渲染首页的时候一下加载太多的资源，默认开启了chunk属性
        webpackChunkName: true,
        loadingComponent:'./components/loading.jsx', // 指定加载时的组件路径
        level:2  // 指定按需加载的路由等级,路由<=2的页面才有loading显示，所以说level的级别越高，处理的loading的情况就越多
      }, 
      locale:{
        default: 'en-US', // 英语
        baseNavigator: false, // 默认是true，是true的时候，默认以浏览器的语言作为默认语言
        antd:true, // 是否启用antd的<LocaleProvider />
        baseSeparator: '-' // 语言默认分隔符

      },
      title: 'umi-create-app',
      dll: { // webpack 的 dll 插件预打包一份 dll 文件来达到二次启动提速的目的。是指在开发环境下,修改了代码,重新打包的提升,并不是指线上的提速,因为真正上线并不存在webpack的概念了,是指开发环境中的打包
        include:['dva/router','dva/saga','dva/fetch'], // 某些固定的库,没必要每一次都加载,只下载一次就可以了
        exclude:['@babel/runtime'] // 不允许做缓存

      }, // 
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  targets: {
    ie: 11,
  },
  proxy: { // 配置 webpack-dev-server 的 proxy 属性。如果要代理请求到其他服务器，可以这样配：
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }
}
