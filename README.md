### what
是一个现代 JavaScript 应用程序的 静态模块打包器（module bundler）。
当 webpack 处理应用程序时，它会递归地构建一个 依赖关系图（dependency graph），
其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或者多个 bundle。
### concepts
#### 入口（entry）
入口起点：指示 webpack 应该使用哪个模块，来作为构建其内部 依赖图 的开始。
进入入口起点后，webpack 会找出有哪些模块和库是入口起点依赖的。

#### 输出（output）
出口：告诉 webpack 在哪里输出创建的 bundles，以及如何命名这些文件，默认是 ./dist。
基本上，整个应用程序结构，都会被编译到制定的输出路径的文件夹中。
可在配置中指定 output 字段来配置这些处理的过程。

#### loader
让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
可以将所有类型的文件转换为 webpack 能够处理的有效模块。

在 module 中设置 rules 时，必须包含两个属性：            
test：标识出应该被对应的 loader 进行准换的某个或某些文件；
use：表示进行转换时，应该使用哪个 loader。

```js
const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};

module.exports = config;
```
>“嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.txt' 的路径」时，在你对它打包之前，先使用 raw-loader 转换一下。”

#### 插件（plugins）
require() 它，然后把它添加到 plugins 数组中。

#### 模式
development 或 production

### tree shaking
通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。
