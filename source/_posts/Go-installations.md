---
title: Go installations
author: 北苑南路44号
email: xyxcnnh@aliyun.com
categories: Go
tags: Go 基础
abbrlink: 4cee0b85
date: 2021-05-29 13:00:18
description:
---

1. Download and install -- 快速安装
2. Managing Go installations -- 怎样使用第三方工具管理多个 Go 版本
3. Installing Go from source -- 怎样通过源码安装

<!-- more -->

## Download and install

### 1. Go download.

Downloads: https://golang.org/dl/

### 2. Go install

#### macOS

1. 下载 `.pkg` 安装文件，并运行
2. 验证安装是否成功

```bash
go version
```

Go 会被安装到目录`/usr/local/go` 中。安装过程会自动将`/usr/local/go/bin` 目录添加到 `PATH` 中，需要重启 Terminal 来使其生效。

#### Windows

1. 下载 `.msi` 文件并运行
2. 打开 cmd 窗口，验证安装是否成功

```bash
go version
```

Go 会默认安装到 `Program Files` 或 `Program Files(x86)` 目录中。安装过程中也会自动配置环境变量。

#### Linux

1. 将 `.tar.gz` 文件解压到 `/usr/local/go` 目录中

```bash
rm -rf /usr/local/go && tar -C /usr/local/ -xzf go1.16.4.linux-amd64.tar.gz
```

2. Add `/usr/local/go/bin` to `PATH`

```bash
export PATH=$PATH:/usr/local/go/bin
```

3. Verify that you've installed Go

```bash
go version
```

## Managing Go installations

1. go get
2. Homebrew
3. apt-get
4. wget

### go get

_Note：_ 需要先安装 git 工具

使用 `go get` 安装 Go 的指定版本。例如：

```bash
go get golang.ort/dl/go1.10.7
go1.10.7 download
```

要使用指定版本，可以在 go 后面跟上版本号：

```bash
go1.10.7 version
```

**Uninstalling Go**

macOS/Linux/FreeBSD:

1. 删除 Go 文件夹。go 一般在目录/usr/local/go 中
2. 删除 Go PATH。编辑/etc/profile 文件或$HOME/.profile 文件。macOS 还需要删除/etc/paths.d/go 文件

Windows：

在 Windows 控制面板中删除 Go。

或使用命令：

```bash
msiexec /x go{{version}}.windows-{{cpu-arch}}.msi /q
```

### Homebrew

macOS 还可以使用 Homebrew 安装 Go：

```bash
brew update && brew upgrade
brew install go
brew install git
brew install mercurial
```

### GVM

gvm 是第三方开发的 Go 多版本管理工具

**安装 gvm**：

```bash
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
```

**使用 gvm 安装 Go：**

```bash
gvm install go1.14.7
gvm use go1.14.7
```

### apt-get

部分 Linux 用户可以使用 apt-get 安装 Go：

```bash
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:gophers/go
sudo apt-get update
sudo apt-get install golang-stable git-core mercurial
```

### wget

使用 wget 工具安装 Go：

```bash
wget https://storage.googleapis.com/golang/go1.14.7.linux-amd64.tar.gz
# 或 wget https://dl.google.com/go/go1.14.7.linux-amd64.tar.gz

sudo tar -xzf go1.14.7.linux-amd64.tar.gz -C /usr/local
```

配置环境变量：

```bash
export GOROOT=/usr/local/go
export GOBIN=$GOROOT/bin
export PATH=$PATH:$GOBIN
export GOPATH=$HOME/gopath # 可选配置
```

## Installing Go from source

官方指南：https://docs.studygolang.com/doc/install-source.html
