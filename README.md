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

## 安装包与版本说明

网站从 `release-data.js` 读取最新版本号、发布日期、Release 地址、四个安装包地址，以及按版本倒序排列的中英文更新日志。同步脚本会把 `release-data.js` 的缓存键更新为当前 Release 的修订时间和数据 schema 版本，避免 GitHub Pages 发布后继续使用旧的浏览器缓存。`index.html` 只声明 `arm64.dmg`、`arm64.zip`、`x64.dmg` 和 `x64.zip` 四类资源，不重复写死版本号或文件名，因此直接用 `file://` 打开时也能正常下载。

Apple Silicon 用户选择 ARM64，Intel Mac 用户选择 x64。DMG 适合常规安装，ZIP 可用于直接解压。

如需手动同步某个已发布版本，可运行：

```sh
node scripts/sync-release.mjs --tag vX.Y.Z
node scripts/test-release-sync.mjs
node scripts/validate-site.mjs
node scripts/verify-release-assets.mjs
```

同步脚本会先确认四个附件齐全，再覆盖 `release-data.js`。缺少任意附件、链接不合法、语言键不一致或页面没有绑定四类资源时，校验会直接失败。

## 自动同步流程

主仓库完成 Apple Silicon 与 Intel 构建并上传四个附件后，`release.yml` 使用 `repository_dispatch` 通知本仓库。`sync-release.yml` 随后完成以下工作：

1. 获取指定 GitHub Release 及公开 Release 历史，并确认 ARM64/x64 的 DMG 和 ZIP 均已上传；
2. 生成 `release-data.js`，提取版本号、发布日期、下载地址和全部更新日志；
3. 校验 JavaScript、双语键、下载链接和页面绑定；
4. 创建版本同步 PR，并在仓库允许时启用自动 squash 合并；如果仓库未开启自动合并，工作流会在自身校验全部通过后直接 squash 合并。

需要完成两项仓库设置：

- 在 `RangeKing/vibemeter` 中添加 Actions Secret `WEBSITE_DISPATCH_TOKEN`。建议使用只授权 `RangeKing/vibemeter-website` 的细粒度 Token，并授予 `Contents: write`。
- 在 `RangeKing/vibemeter-website` 的 Actions 设置中启用读写权限、允许 Actions 创建 Pull Request。建议开启仓库自动合并；未开启时，工作流会使用已完成校验的同步 PR 直接合并。

Release 正文可以使用下面的双语结构：

```md
## 简体中文
- 新增……
- 修复……

## English
- Added…
- Fixed…
```

同步脚本优先按语言标题切分，也会在没有标题时根据中英文段落自动切分；兼容 `中文`、`简体中文`、`Chinese`、`English` 和 `英文` 等常见标题写法。缺少某种语言时，网页显示原始 Release 内容和完整发布说明链接，不自动翻译或补写。

## 网站分析

Cloudflare Web Analytics 默认关闭。如需启用，在 `index.html` 中填写站点 Token：

```html
<meta name="cloudflare-web-analytics-token" content="YOUR_TOKEN" />
```

未配置 Token 时不会加载分析脚本；在 `localhost`、`127.0.0.1` 和 `::1` 环境下也不会发送分析请求。
