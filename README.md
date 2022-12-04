## 项目目录说明
~~~makefile
preset-vue@full
├── babel.config.js
├── package-lock.json
├── package.json
├── public # 静态目录
│   ├── favicon.ico
│   └── index.html
├── README.md # 目录说明
├── src # 源码目录
│   ├── api # 全局接口
│   │   ├── http.config.ts # 接口配置
│   │   └── index.ts # 接口入口
│   ├── App.vue # 全局入口组件
│   ├── assets # 静态目录
│   ├── components # 组件目录
│   ├── main.ts # 文件入口
│   ├── router # 路由管理
│   ├── store # vuex 储存库
│   │   ├── index.ts # 储存库入口
│   │   └── types.ts # 常量
│   ├── style # 全局样式(不需要引入, 全局生效)
│   │   ├── class.scss # 全局类名
│   │   ├── index.scss # 入口文件
│   │   ├── mixin.scss # scss 集合
│   │   └── variables.scss # 样式变量
│   ├── types # 类型说明
│   │   ├── custom.d.ts # 自定义类型
│   │   ├── declares # 项目依赖说明
│   │   └── request.d.ts # 请求类型说明
│   ├── utils # 工具模块
│   │   ├── calculation.ts  # 计算处理
│   │   ├── grammar-sugar.ts # 语法糖处理
│   │   └── index.ts # 入口文件
│   └── views # 视图组件(路由)
│       ├── About.vue
│       └── ...
├── tsconfig.json # ts 文件配置
└── vue.config.js # vue 脚手架配置
~~~
## 项目规范说明

项目采用`axios`，`scss`，`vue`，`bootstrap-vue`，`vue-router`，`vuex` 等主体技术进行开发
项目要求组件化开发，结构化，清晰化项目结构。 请遵循代码中所定义的规范进行开发

### CSS 预编辑器规范

- 所有主题色号不允许在单独页面/组件使用，只允许使用src/style/variables中定义的变量。
- 避免大量的嵌套规则。当可读性受到影响时，将之打断。推荐避免出现多于20行的嵌套规则出现。
- 少用#，少用*，少用标签选择器
- 尽量避免使用 !important

### CSS 属性书写顺序

- 建议遵循以下顺序

1. 布局定位属性：`display / position / float / clear / visibility / overflow`
2. 自身属性：`width / height / margin / padding / border / background`
3. 文本属性：`color / font / text-decoration / text-align / vertical-align / white- space / break-word`
4. 其他属性（CSS3）：`content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …`

### class 标签命名

- 尽量采用-分开关键字命名
- 英文单词尽量不要缩写

### js 规范

- 采用模块化编程，通过`ES6`语法暴露 `-> export`
- 重复代码进行封装为方法，减少代码臃肿，让代码清晰明了
- 减少代码圈复杂度，减少代码嵌套，善于`return`，少用`else`
- 函数与变量命名采用驼峰命名法 `-> userInfo or getUserInfo`
- 常量(不会再次进行修改)命名采用大写加下划线命名 `-> USER_STATUS`

### vuex 规范

~~~markdown
# 规范定义mutations-type常量命名
# 常量前缀采用动词, 后缀为对应的数据名称
- export const RECEIVE_[DATA_NAME] = 'receive_[data_name]' ->  接收并覆盖某个数据
- export const MODIFY_[DATA_NAME] = 'modify_[data_name]' ->  修改某个数据或数据项
- export const DELETE_[DATA_NAME] = 'delete_[data_name]' -> 删除某个数据或数据项
- export const UNSHIFT_[DATA_NAME_ITEM] = 'unshift_[data_name_item]' -> 向某个数据前端添加一项数据
- export const PUSH_[DATA_NAME_ITEM] = 'push_[data_name_item]' -> 向某个数据后端添加一项数据
~~~

## 项目构建命令清单

``` bash
# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```