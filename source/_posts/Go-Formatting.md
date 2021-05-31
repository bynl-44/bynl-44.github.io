---
title: Go Formatting
author: 北苑南路44号
email: xyxcnnh@aliyun.com
categories: Go
tags: Go 基础
abbrlink: 43b3c0c3
date: 2021-05-29 15:40:31
description:
---

格式问题有很多争议，但影响很小。人可是适应不同的风格，但如果每个人都遵循相同的风格，就可以花更多的时间在其他更有意义的事情上。

`go fmt` 是 Go 官方提供的统一的格式化代码风格工具。

<!-- more -->

格式化的一些细节：

1. 缩进。默认使用 tab，而不是空格。
2. 每行字符长度。默认不限制每行长度。
3. 圆括号。相对于 C 或 Java，Go 更少使用圆括号
