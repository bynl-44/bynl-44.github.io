---
title: Go Commentary注释
author: 北苑南路44号
email: xyxcnnh@aliyun.com
categories: Go
tags:
  - Go 基础
abbrlink: a3abd4b3
date: 2021-05-30 17:34:39
description:
---

Go支持C语言风格的`/* */`块注释，也支持C++风格的`//`行注释。

行注释更通用，块注释主要用于包的详细说明或屏蔽大块代码。

<!-- more -->

## 注释不需要多余的排版

如`*`：

```go
/*
 * 不需要多余的*号
 这样就OK
 */
```

## 注释不要靠空格对齐

godoc会有类似gofmt这样的格式化功能

## 避免使用其他标签、注解文本

例如HTML，会照原样显示，所以应避免使用

