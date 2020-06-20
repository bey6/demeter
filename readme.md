# Demeter

A CLI to help you generate your base project withe vuej.s.

## dependencies

- [commander: Node.js 命令行接口的完整解决方案](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)
- [download-git-repo: Download and extract a git repository(Github, Gitlab, Gitbucket) from node.](https://www.npmjs.com/package/download-git-repo)
- [chalk: Terminal string styling.](https://www.npmjs.com/package/chalk)
- [figlet: Terminal FIG font-family](https://www.npmjs.com/package/figlet)
- [inquirer: A collection of common interactive command line user interfaces.](https://www.npmjs.com/package/inquirer)
- [shelljs: ShellJS is a portable (Windows/Linux/OS X) implementation of Unix shell commands on top of the Node.js API.](https://www.npmjs.com/package/shelljs)
- [ora: Elegant terminal spinner](https://www.npmjs.com/package/ora)
- [util: Node.js's util module for all engines.](https://www.npmjs.com/package/util)
  - 最初是为了使用它的 promisify, 但是效果不太理想，所以还是自己写了一下

## 参考文档

- [csdn\_利用 nodejs 写个前端脚手架来玩玩](https://blog.csdn.net/wang839305939/article/details/78276668)
- [掘进\_手把手教你使用 nodejs 编写 cli(命令行)](https://juejin.im/post/5bd90d3ce51d4579362b0390)
- [简书\_开发一个简单的 nodejs 版 CLI(命令行)工具](https://www.jianshu.com/p/acf2e7ec42b8)
- [简书\_nodejs 从零开发 CLI 工具](https://www.jianshu.com/p/791df5946b05)

## Create 指令

`create` 指令用来创建一个项目的基架。

就目前来讲，create 指令包括 3 部分：

1. 克隆线上仓库
2. 更新 npm 项目信息
3. [可选] 是否集成 oidc-client

### 克隆线上仓库

## link script

关联全局环境变量的前提条件是配置 `package.json`:

```json
{
  //...
  "bin": {
    "demeter": ".index.js"
  }
}
```

### link

```bash
sudo npm unlink
```

**output:**

```bash
audited 202 packages in 1.867s

23 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

/usr/local/bin/demeter -> /usr/local/lib/node_modules/demeter/index.js
/usr/local/lib/node_modules/demeter -> /mnt/d/codes/github/Demeter
```

现在你可以在任意位置了执行 `demeter` 👌。

```bash
liub@Bei-PC:/mnt/d/codes/local$ demeter create testproject
 ____                               __
/\  _`\                            /\ \__
\ \ \/\ \     __    ___ ___      __\ \ ,_\    __   _ __
 \ \ \ \ \  /'__`\/' __` __`\  /'__`\ \ \/  /'__`\/\`'__\
  \ \ \_\ \/\  __//\ \/\ \/\ \/\  __/\ \ \_/\  __/\ \ \/
   \ \____/\ \____\ \_\ \_\ \_\ \____\\ \__\ \____\\ \_\
    \/___/  \/____/\/_/\/_/\/_/\/____/ \/__/\/____/ \/_/


🎯 prepare to clone bey6/demeter
⠦ cloning...
✔️ ok.
liub@Bei-PC:/mnt/d/codes/local$ ls
archetypes  d3-fishbone-angular-master  eslint+pritter  pwa-vue    testproject  vue-mock
consult-jq  dbb                         node            test-ajax  ts-test
```

### unlink

```bash
sudo npm unlink
```

**output:**

```bash
liub@Bei-PC:/mnt/d/codes/github/Demeter$ sudo npm unlink
removed 1 package in 0.587s
```

> tip:
>
> 无论是 link 还是 unlink，都必须在项目根目录下执行才有效。
