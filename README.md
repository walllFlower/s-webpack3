> 8.9
#### Q1 NodeJs中的全局变量path下的方法join和resolve的区别？
- path.join将指定的path片段连接起来，并规范化生成的路径
```javascript
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// /foo/bar/baz/asdf/

path.join('')
// . 当前文件夹
```

- path.resolve会把路径片段连接后解析成一个绝对路径。说白了，如果resolve方法中传入的第一个路径为绝对路径，如'/src'，则解析时会将'/src'用上生成最终的绝对路径；如果resolve方法中传入的第一个路径为相对路径，如'src'，则解析时会在路径前添上当前工作目录'/Users/zengyumeng/Web/study-webpack3/'。
```javascript
path.resolve('/src');
// /src

path.resolve('src','style','..');
// /Users/zengyumeng/Web/study-webpack3/src
```

- __dirname为当前执行文件所在文件夹的路径

#### Q2 和CSS有关的几个loader的区别？（style-lolader css-loader sass-loader postcss-loader）
- sass-loader    将scss编译成css
- css-loader     解析@import()、url()方式引入的css
- style-loader   解析css代码到style标签，放入head标签当中
- postcss-loader 添加css属性浏览器前缀(在sass-loader之前，css-loader之后使用它)

#### Q3 不同mode下webpack自动配置plugin有哪些？各自的作用？
- mode=production 将process.env.NODE_ENV设置为production，启用
    - FlagDependencyUsagePlugin
    - FlagIncludedChunksPlugin 
    - ModuleConcatenationPlugin 用一种很高端的方法提升打包出的代码在浏览器中的执行速度
    - NoEmitOnErrorsPlugin 在编译出现错误时，用于跳过输出阶段
    - OccurrenceOrderPlugin
    - SideEffectsFlagPlugin 
    - UglifyJsPlugin 压缩代码

- mode=development 将process.env.NODE_ENV设置为development，启用
    - NamedChunksPlugin
    - NamedModulesPlugin 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境

#### 配置内容
- 配置好所有需要的loader √
- 配置好HRM（开发环境）√
- 配置好几个基础的插件 √
- 分好开发环境和生产环境文件，为后续配置做好准备 √

> 8.10
#### Q1 source-map是什么玩意儿？

#### Q2 process.env.NODE_ENV对配置的影响，以及DefinePlugin插件的作用？

#### Q3 和react有关的几个babel-plugin的作用？

#### 配置内容
- 修改配置，支持react开发
- 搭建好基本的react开发框架