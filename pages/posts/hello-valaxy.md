---
layout: post
title: Hello, Valaxy!
date: 2025-07-08 17:31:42
updated: 2025-07-08 17:31:42
categories:
  - Valaxy
tags:
  - valaxy
---

**Welcome to [Valaxy](https://valaxy.site/)!**

Github: [valaxy Github](https://github.com/YunYouJun/valaxy)

## 新建文章

使用命令行工具：

```bash
vala new [title]

# Example:
vala new hello-valaxy
```

然后，你会在 `pages/posts` 目录下看到一个新的 Markdown 文件，文件名为 `hello-valaxy.md`。

编辑文章，保存后，`commit`、`push`...

## 本地预览

使用命令：

```bash
pnpm dev
```

访问 `http://localhost:4859` 即可预览。

## 部署

使用GitHub Actions自动部署，不需要手动操作。