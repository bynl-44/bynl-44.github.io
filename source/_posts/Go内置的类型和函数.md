---
title: Go内置的类型和函数
author: 北苑南路44号
email: xyxcnnh@aliyun.com
abbrlink: f81ca75e
date: 2021-06-01 16:37:44
tags:
  - Go 基础
categories: Go
description:
---

Go有丰富的数据类型：

基本类型有：bool、string、int、int8、int16、int32、int64、byte、rune、float32、float64、complex64、complex128

Go还有：pointer、struct、array、slice、map、Range等复杂数据类型

<!-- more -->

## 基本类型

| 类型       | 长度（字节） | 默认值 | 说明                      |
| ---------- | ------------ | ------ | ------------------------- |
| bool       | 1            | false  | 仅有`true`或`false`两个值 |
| byte       | 1            | 0      | uint8的别称               |
| int        | 4            | 0      | int32                     |
| uint       | 8            | 0      | uint32                    |
| int8       | 1            | 0      | -128 ~ 127                |
| uint8      | 1            | 0      | 0 ~ 255                   |
| int16      | 2            | 0      | -32768 ~ 32767            |
| uint16     | 2            | 0      | 0 ~ 65535                 |
| int32      | 4            | 0      | -21亿 ~ 21亿              |
| uint32     | 4            | 0      | 0 ~ 42亿                  |
| int64      | 8            | 0      |                           |
| uint64     | 8            | 0      |                           |
| float32    | 4            | 0.0    |                           |
| float64    | 8            | 0.0    |                           |
| complex64  | 8            |        | 复数，实部和虚部为32位    |
| complex128 | 16           |        | 复数，实部和虚部为64位    |

### bool

Go中不允许将整型强制转换为bool。

bool也无法参与数值运算。

bool也无法与其他类型进行转换。

### 整型

支持八进制、六进制，以及科学计数法。

math标准库定义了各种类型的取值范围。

### 浮点型

两种浮点型数据格式遵循`IEEE 754`标准。

## 引用类型

| 类型      | 默认值 | 说明                         |
| --------- | ------ | ---------------------------- |
| uintptr   |        | 存储指针，uint32或uint64整数 |
| array     |        | 值类型                       |
| struct    |        | 值类型                       |
| string    | ""     | UTF-8字符串，值类型          |
| slice     | nil    | 引用类型                     |
| map       | nil    | 引用类型                     |
| channel   | nil    | 引用类型                     |
| interface | nil    | 接口                         |
| function  | nil    | 函数                         |



