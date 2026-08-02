# VibeMeter 产品网站

这是 VibeMeter 的产品网站，用来介绍这款 macOS Agent 活动追踪工具并提供安装包下载。

主项目：[RangeKing/vibemeter](https://github.com/RangeKing/vibemeter/)

网站展示 VibeMeter 的主要能力：实时查看 Claude Code 和 Codex 的运行状态，通过 Notch 和菜单栏掌握进度，整理本机可读取的会话与用量，并生成 VCTI 编程人格和分享卡片。页面支持简体中文、英文以及明暗主题。

## 网站内容

- VibeMeter 产品介绍与功能说明
- Notch、菜单栏、Live、Data、VCTI 和 Share 界面展示
- 隐私与本地数据处理说明
- DMG 和 ZIP 安装包直接下载
- 中英文切换与明暗主题

## 本地预览

直接用 Chrome 打开 `index.html` 即可浏览。语言切换、主题、动画和内容展示均支持 `file://`。

也可以启动本地 HTTP 服务：

```sh
python3 -m http.server 4173
```

然后打开 `http://127.0.0.1:4173/`。

## 安装包

网站下载按钮指向 [VibeMeter v0.1.0 Release](https://github.com/RangeKing/vibemeter/releases/tag/v0.1.0)，当前提供四个下载文件：

```text
VibeMeter_0.1.0_macOS_aarch64.dmg
VibeMeter_v0.1.0_macOS_arm64.zip
VibeMeter_0.1.0_macOS_x64.dmg
VibeMeter_v0.1.0_macOS_x64.zip
```

Apple Silicon 用户选择 `arm64` 或 `aarch64`，Intel Mac 用户选择 `x64`。四个安装包均要求 macOS 14 或更高版本，采用 ad-hoc 签名，尚未完成 Apple 公证。

更新版本时，需要同时修改 Release 下载链接、版本号、架构说明和签名状态。

## 网站分析

Cloudflare Web Analytics 默认关闭。如需启用，在 `index.html` 中填写站点 Token：

```html
<meta name="cloudflare-web-analytics-token" content="YOUR_TOKEN" />
```

未配置 Token 时不会加载分析脚本；在 `localhost`、`127.0.0.1` 和 `::1` 环境下也不会发送分析请求。
