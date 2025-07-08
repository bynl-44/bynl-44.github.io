---
layout: post
title: git使用规范
date: 2025-07-08 17:48:25
updated: 2025-07-08 17:48:25
categories:
  - git
tags:
  - git
---

`git`是个很强大的工具，每个人都有自己的使用习惯。但团队协作需要的是标准和规范，避免不必要的混乱。
杂乱的提交记录，很快就会让项目难以协调和维护。

### 开发一个功能

从主分支创建一个本地开发分支。

```bash
git checkout master
git pull
git checkout -b feature-xxx
```

> 每次开发新功能，都应该单独新建一个分支。

提交代码

```bash
git status
git add .
git commit -m "feat: 添加功能"
```

> **一个良好的提交信息应该是这样的：**
>
> - 第一行是提要，简短描述功能。
> - 隔一行，罗列出改动原因、主要变动、以及需要注意的问题等。
> - 再隔一行，提供对应的地址链接（如界面地址、bug地址等）。

### 与主分支合并

开发过程中，要经常同步主分支。

```bash
git fetch origin
git rebase origin/master
```

### 合并提交记录

当在本地分支开发完成后，很可能有一堆提交记录。
但合并到主分支是，通常需要一条或几条整洁干净的提交记录。这样做不仅清晰、规范，也更容易管理和追踪。

可以使用 `git rebase` 命令将本地分支的提交记录整理成干净的提交记录。

```bash
git rebase -i HEAD~5
```

> - 这里的 `HEAD~5` 表示当前分支的前 5 个提交记录。
> - `-i` 表示 interactive，即交互式。

另一种思路是，先撤销一些提交记录，然后再创建一个新的提交记录。

可以使用 `git reset` 命令撤销一些提交记录，然后再合并。

```bash
git reset HEAD~5
git commit -m "feat: 添加功能"
```

> - `HEAD~5` 表示撤销前 5 个提交记录。
>

### 推送到远程仓库

开发完成后，将代码推送到远程仓库。

```bash
git push origin feature-xxx
```

### 发出合并请求

推送到远程仓库后，就可以发出合并请求，要求将代码合并到主分支。

请求代码审查，等待代码审查通过后，再合并到主分支。

