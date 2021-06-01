---
title: Hexo配置主题
author: 北苑南路44号
email: xyxcnnh@aliyun.com
tags:
  - Hexo theme
categories: Hexo
abbrlink: 575c230a
date: 2021-06-01 12:35:26
description:
---

每次，看到他人的漂亮小站的时候，都忍不住惊呼『哇哦，好漂亮啊！』

So，直到遇到了[Hexo-Theme-Yun (yunyoujun.cn)](https://yun.yunyoujun.cn/)这个主题。我知道，我也可以了。他简直太优秀了。在我看到它的第一眼，就喜欢上他了。哈哈哈~

感谢yun主题的作者的分享，谢谢你！

<!-- more -->

再次惊呼，这个主题的文档做的太好了、太省心了。我几乎按照上面的说明，复制粘贴就搞定了。不愧是我，哈哈~

且慢，你以为我~ 就这？~

## 添加backup

没有备份，总感觉少了点什么，就像有个小偷在偷偷的惦记着你。

放心~，有他。

### 安装hexo-git-backup

```bash
# 先安装它
yarn add hexo-git-backup
```

### 然后在blog/_config.yml文件中添加：

```yml
# backup
backup:
  type: git
  message: backup my blog of <your site>
  repository:
  	# origin: 仓库地址,分支名
    origin: git@github.com:xxx/xxx.github.io.git,backup
```

之后，使用一条命令就可以备份。

```bash
hexo b
```

啊~，舒服了。

这下好了，终于可以愉快的休息了。

但是，每次写完文章后，hexo clean，hexo b，hexo g，hexo d。

为什么我如此『深爱』hexo。。。

## 添加GitHub Action

我添加个workflow，让他自动跑，岂不完美，哈哈~

### 新建文件

blog/目录下：

```bash
mkdir -p .github/workflow/
cd .github/workflow/
touch blank.yml
```

### 写入这样的内容

blank.yml：

```yml
name: Hexo Deploy

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-18.04
    if: github.event.repository.owner.id == github.event.sender.id

    steps:
      - name: Checkout source
        uses: actions/checkout@v2
        with:
          ref: master

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '14'

      - name: Setup Hexo
        env:
          ACTION_DEPLOY_KEY: ${{ secrets.HEXO_DEPLOY_KEY }} # 请注意这里，有个KEY
        run: |
          mkdir -p ~/.ssh/
          echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa
          chmod 700 ~/.ssh
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.email "your email"	# 这里是GitHub登录邮箱地址
          git config --global user.name "your name" # 这里是GitHub登录昵称
          npm install hexo-cli -g
          npm install
          git clone -b dev https://github.com/YunYouJun/hexo-theme-yun themes/yun # 这里是最新的yun主题，直接clone过来

      - name: Deploy
        run: |
          hexo clean
          hexo b
          hexo g
          hexo d
```

接下来，搞定`HEXO_DEPLOY_KEY`（这只是个名字）：

### 生成新SSH密钥

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

复制SSH公钥

```bash
pdcopy < ~/.ssh/id_ed25519.pub
```

### 在GitHub仓库中完成设置

进入GitHub仓库的Settings -> Secrets，按钮 `new repository secret`，设置『HEXO_DEPLOY_KEY』。

Value，粘贴

Name，HEXO_DEPLOY_KEY

Add secret

轻松搞定。这样push之后，就会自动执行任务了。

恩~不错，来自懒癌的肯定。

## 添加CNAME

嘿嘿嘿，搞了个域名，又有新玩具了。

如果在Settings里手动设置域名，GitHub会自动在仓库根目录添加CNAME文件，里面的内容就是域名。

简单~ 同样在GitHub仓库Settings -> Pages中，把域名配置上，OK~ 搞定。打开浏览器，输入域名，完美~ 哈哈~

嘿嘿~ 我改了个逗号，push~~ 打开浏览器

what？

404~？

打开Settings -> Pages，嗯？~设置的域名呢？不会每次跑自动任务后，[都要来设置吧]()

但是，blog当前的分支，是hexo生成的内容。

所以

**把CNAME移到source目录**

这样，自动任务就会自动生成CNAME文件了

大功告成！
