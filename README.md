# 脚手架文件结构
    |——my_first_item 项目名
        ├── build : webpack 相关的配置文件夹
        │   ├── build.js: 生产环境构建脚本
        │   │── check-versions.js: 检查npm,node.js版本
        │   │── utils.js: 构建相关工具方法
        │   │── vue-loader.conf.js: 配置了css加载器以及编译css之后自动添加前缀
        │   │── webpack.base.conf.js: webpack基本配置
        │   │── webpack.dev.conf.js: webpack开发环境配置
        │   │── webpack.prod.conf.js: webpack生产环境配置
        ├── config : webpack 相关配置文件夹
        │   │── dev.env.js: 开发环境变量
        │   │── index.js: 项目配置文件
        │   │── prod.env.js: 生产环境变量
        ├── node_modules npm加载的项目依赖模块
        ├── src 我们要开发的目录
        │   ├── api  与后台交互模块文件夹
        │   ├── common 通用资源文件夹，如fonts/img
        │   ├── components 非路由组件文件夹
        │   ├── fiters 自定义过滤器模块文件夹
        │   ├── mock 模拟数据接口文件夹
        │   ├── pages router组件文件夹
        │   ├── router router文件夹
        │   ├── store vuex相关模块文件夹
        │   ├── app.vue 应用组件
        │   ├── main.js 入口js
        ├── static 静态资源目录，如图片、字体等，不被webpack构建
        │   ├── .gitkeep
        ├── .babelrc: 兼容js语法的配置
        ├── .editorconfig: 
        ├── .gitignore: git版本管制忽略的配置
        ├── .postcssrc.js postcss的配置文件
        ├── index.html 首页入口文件
        ├── package.json: 应用包配置文件 
        ├── README.md: 应用描述文件
