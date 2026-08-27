// Generated from RangeKing/vibemeter. Do not edit by hand.
window.VibeMeterReleaseData = {
  "schemaVersion": 2,
  "sourceRepo": "RangeKing/vibemeter",
  "version": "v0.5.0",
  "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.5.0",
  "publishedAt": "2026-08-27T13:49:58Z",
  "releaseUpdatedAt": "2026-08-27T13:51:36Z",
  "notes": {
    "zh-CN": {
      "source": "localized",
      "markdown": "VibeMeter 0.5.0 让多项目工作更容易整理，也让单次会话携带的上下文变得可回看。\n\n### 新增\n\n- **项目视图与项目组**：Sessions 新增项目视图，可按最近活动、会话数、时长、Token、成本、文件、代码行、工具和错误排序；设置中可以把多个本机项目归入可命名、可重命名的项目组，并直接查看组内会话汇总。\n- **会话上下文浏览器**：会话详情新增“上下文”页，以只读方式展示上下文 Token 结构、分类统计和可读取内容。系统提示词、工具定义、用户消息、注入内容、助手消息、工具调用与工具结果分别呈现；数据会标记为已观测、估算或未记录，文字预览按需脱敏并限制长度。\n- **更顺手的项目选择**：设置中的项目列表支持 Shift 连选与 Command/Ctrl 多选，创建项目组时可以更快组织相关项目。\n\n### 修复与改进\n\n- 修复 Codex 本机数据库并发读取可能造成的卡住问题，并将实时读取工作移出主运行线程。\n- 修复 Claude 会话结束后仍残留在 Notch 中的问题。\n- 修复项目组设置、CACHE 人物图显示和上下文结构图的对齐细节。\n- 更新官方模型价格目录，并补充 GLM-5-3 Flash 的价格信息。\n\n上下文浏览器的交互方向参考了 [dsh-context](https://github.com/bowenliang123/dsh-context)，感谢 [bowenliang123](https://github.com/bowenliang123) 的开源工作；VibeMeter 使用独立的数据模型与实现。"
    },
    "en": {
      "source": "localized",
      "markdown": "VibeMeter 0.5.0 makes multi-project work easier to organize and gives each session a clearer, reviewable view of the context it carried.\n\n### New\n\n- **Projects view and project groups**: Sessions now opens with a project view that can be sorted by recent activity, session count, duration, tokens, cost, files, lines, tools, or errors. Settings can group multiple local projects under a name, rename groups, and show the group’s combined session summary.\n- **Session Context browser**: Session details now include a read-only Context view with context-token structure, category totals, and available content. System prompts, tool schemas, user messages, injected context, assistant messages, tool use, and tool results are shown as separate categories; coverage is labeled Observed, Estimated, or Not recorded, while text previews are sanitized and bounded on demand.\n- **Faster project selection**: The project list in Settings supports Shift-range selection and Command/Ctrl multi-selection for quicker group creation.\n\n### Fixes and improvements\n\n- Prevented Codex local database reads from hanging under concurrent access, and moved blocking live reads off the main runtime thread.\n- Fixed stale Claude sessions remaining visible in the Notch after completion.\n- Refined project-group settings, the CACHE character artwork, and Context structure alignment.\n- Refreshed the official model price catalog and added pricing for GLM-5-3 Flash.\n\nThe Context browser’s interaction direction was informed by [dsh-context](https://github.com/bowenliang123/dsh-context). Thanks to [bowenliang123](https://github.com/bowenliang123) for the open-source work; VibeMeter uses an independent data model and implementation."
    }
  },
  "assets": {
    "arm64.dmg": "https://github.com/RangeKing/vibemeter/releases/download/v0.5.0/VibeMeter_0.5.0_macOS_aarch64.dmg",
    "arm64.zip": "https://github.com/RangeKing/vibemeter/releases/download/v0.5.0/VibeMeter_v0.5.0_macOS_arm64.zip",
    "x64.dmg": "https://github.com/RangeKing/vibemeter/releases/download/v0.5.0/VibeMeter_0.5.0_macOS_x64.dmg",
    "x64.zip": "https://github.com/RangeKing/vibemeter/releases/download/v0.5.0/VibeMeter_v0.5.0_macOS_x64.zip"
  },
  "releases": [
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.5.0",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.5.0",
      "publishedAt": "2026-08-27T13:49:58Z",
      "releaseUpdatedAt": "2026-08-27T13:51:36Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "VibeMeter 0.5.0 让多项目工作更容易整理，也让单次会话携带的上下文变得可回看。\n\n### 新增\n\n- **项目视图与项目组**：Sessions 新增项目视图，可按最近活动、会话数、时长、Token、成本、文件、代码行、工具和错误排序；设置中可以把多个本机项目归入可命名、可重命名的项目组，并直接查看组内会话汇总。\n- **会话上下文浏览器**：会话详情新增“上下文”页，以只读方式展示上下文 Token 结构、分类统计和可读取内容。系统提示词、工具定义、用户消息、注入内容、助手消息、工具调用与工具结果分别呈现；数据会标记为已观测、估算或未记录，文字预览按需脱敏并限制长度。\n- **更顺手的项目选择**：设置中的项目列表支持 Shift 连选与 Command/Ctrl 多选，创建项目组时可以更快组织相关项目。\n\n### 修复与改进\n\n- 修复 Codex 本机数据库并发读取可能造成的卡住问题，并将实时读取工作移出主运行线程。\n- 修复 Claude 会话结束后仍残留在 Notch 中的问题。\n- 修复项目组设置、CACHE 人物图显示和上下文结构图的对齐细节。\n- 更新官方模型价格目录，并补充 GLM-5-3 Flash 的价格信息。\n\n上下文浏览器的交互方向参考了 [dsh-context](https://github.com/bowenliang123/dsh-context)，感谢 [bowenliang123](https://github.com/bowenliang123) 的开源工作；VibeMeter 使用独立的数据模型与实现。"
        },
        "en": {
          "source": "localized",
          "markdown": "VibeMeter 0.5.0 makes multi-project work easier to organize and gives each session a clearer, reviewable view of the context it carried.\n\n### New\n\n- **Projects view and project groups**: Sessions now opens with a project view that can be sorted by recent activity, session count, duration, tokens, cost, files, lines, tools, or errors. Settings can group multiple local projects under a name, rename groups, and show the group’s combined session summary.\n- **Session Context browser**: Session details now include a read-only Context view with context-token structure, category totals, and available content. System prompts, tool schemas, user messages, injected context, assistant messages, tool use, and tool results are shown as separate categories; coverage is labeled Observed, Estimated, or Not recorded, while text previews are sanitized and bounded on demand.\n- **Faster project selection**: The project list in Settings supports Shift-range selection and Command/Ctrl multi-selection for quicker group creation.\n\n### Fixes and improvements\n\n- Prevented Codex local database reads from hanging under concurrent access, and moved blocking live reads off the main runtime thread.\n- Fixed stale Claude sessions remaining visible in the Notch after completion.\n- Refined project-group settings, the CACHE character artwork, and Context structure alignment.\n- Refreshed the official model price catalog and added pricing for GLM-5-3 Flash.\n\nThe Context browser’s interaction direction was informed by [dsh-context](https://github.com/bowenliang123/dsh-context). Thanks to [bowenliang123](https://github.com/bowenliang123) for the open-source work; VibeMeter uses an independent data model and implementation."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.4.3",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.4.3",
      "publishedAt": "2026-08-21T13:53:17Z",
      "releaseUpdatedAt": "2026-08-21T13:55:39Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "- 修复 Grok 图标，改用 LobeHub 官方 Grok 图标。\n- 安装初始化时自动检测本机已安装的 Agent，未检测到的 Agent 不再显示在数据页右上角筛选器中。\n- 设置页新增数据页 Agent 显示选项，可自动显示已检测 Agent，也可手动管理显示列表。\n- 安装新 Agent 后，可在设置页重新检测并更新数据页 Agent 列表。"
        },
        "en": {
          "source": "localized",
          "markdown": "- Fixed the Grok icon by using the official Grok icon from LobeHub.\n- The initial setup now detects the Agents installed on this Mac, and undetected Agents are hidden from the Data page top-right filter.\n- Added Data page Agent display controls in Settings, with automatic detection or a manually managed display list.\n- Added a re-detect action in Settings to update the Data page Agent list after installing a new Agent."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.4.2",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.4.2",
      "publishedAt": "2026-08-21T08:07:00Z",
      "releaseUpdatedAt": "2026-08-21T11:14:10Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "### 新增\n- 支持 Grok Build：\n  - 索引本地历史会话与实时状态\n  - 支持项目、标题、模型、会话 ID 和用量信息\n  - 支持工具调用、错误状态、完成状态与 Notch 展示\n  - 保持本地优先与隐私安全，不保存提示词、代码或原始工具输出\n- 新增官方 API 价格获取脚本，覆盖 OpenAI、Anthropic、DeepSeek、Kimi、Z.AI、xAI 和 Cursor。\n- 每次发版自动从官方页面刷新 API 价格，并记录来源、抓取时间和页面哈希，避免价格静默过期。\n### 修复\n- 修复数据页切换 agent 后 API 等价成本估算数字不更新的问题。\n- 成本估算改为基于当前筛选结果重新聚合。\n- 对缺少官方 cache-write 价格或非 USD 价格的模型采取保守处理，不猜测汇率或价格。"
        },
        "en": {
          "source": "localized",
          "markdown": "### Added\n- Added Grok Build support:\n  - Indexes local historical sessions and live status\n  - Supports projects, titles, models, session IDs, and usage data\n  - Supports tool calls, errors, completion states, and Notch display\n  - Preserves VibeMeter’s local-first and privacy-safe design\n- Added an official API pricing fetcher covering OpenAI, Anthropic, DeepSeek, Kimi, Z.AI, xAI, and Cursor.\n- API prices are refreshed automatically during every release, with source URLs, fetch timestamps, and page hashes recorded for auditability.\n### Fixed\n- Fixed the Data page API-equivalent cost estimate not updating when switching agents.\n- Cost estimates are now recalculated from the currently selected agents.\n- Models without official cache-write prices or with non-USD pricing are handled conservatively without guessed rates or exchange conversions."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.4.1",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.4.1",
      "publishedAt": "2026-08-16T15:10:50Z",
      "releaseUpdatedAt": "2026-08-16T15:14:36Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "VibeMeter 0.4.1 修复了 macOS 安装镜像中的 Finder 布局问题，并把镜像最终化与校验纳入自动发布流程。\n\n### 修复与改进\n\n- 发布 DMG 前自动隐藏 `.background` 与 `.VolumeIcon.icns`，并将其图标位置移出 Finder 窗口，避免内部打包文件出现在安装界面。\n- Apple Silicon 与 Intel 镜像上传前都会重新挂载并校验隐藏标记、Finder 隐藏属性和图标位置；校验失败会直接阻止发布。\n- DMG 布局工具改用隔离的 Python 虚拟环境，避免系统 Python 的包管理策略中断发布。\n\n### 安装说明\n\n- 需要 macOS 14 或更高版本。\n- 下载与你的 Mac 匹配的 Apple Silicon 或 Intel DMG/ZIP。\n- 当前构建采用 ad-hoc 签名，尚未经过 Apple 公证；首次打开时可能需要在“隐私与安全性”中手动允许。"
        },
        "en": {
          "source": "localized",
          "markdown": "VibeMeter 0.4.1 fixes the Finder layout of the macOS installer image and adds DMG finalization and verification to the automated release pipeline.\n\n### Fixes and improvements\n\n- `.background` and `.VolumeIcon.icns` are now hidden and positioned outside the Finder window before each DMG is published, so internal packaging files no longer appear in the installer view.\n- Both Apple Silicon and Intel images are remounted and checked for POSIX hidden flags, Finder invisibility, and off-window icon positions before upload. A failed check blocks the release.\n- DMG layout tooling now runs in an isolated Python virtual environment, preventing system Python package-management policy from interrupting releases.\n\n### Installation\n\n- Requires macOS 14 or later.\n- Download the Apple Silicon or Intel DMG/ZIP that matches your Mac.\n- Builds are ad-hoc signed and are not Apple-notarized yet. macOS may require manual approval in Privacy & Security on first launch."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.4.0",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.4.0",
      "publishedAt": "2026-08-16T12:27:57Z",
      "releaseUpdatedAt": "2026-08-16T12:30:24Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "VibeMeter 0.4.0 扩展了本机 Agent 观察范围，并让数据入口、实时状态和会话回看更贴近日常使用。\n\n### 新增\n\n- **DeepSeek Harness 完整接入**：只读解析本机结构化会话记录，支持历史分析、精确实时生命周期、轨迹回放、来源状态和跳回入口。VibeMeter 不安装 Hook，也不会修改 Harness 配置或会话。\n- **Kimi Code 与 ZCode 精确实时状态**：两类来源现在进入完整历史与实时生命周期管线，可显示等待、错误、运行和完成等状态，并参与 Data、回放、VCTI、分享与来源状态。\n- **统一 Agent 图标**：主界面、来源页和 Notch 使用一致的提供商图标，并补充 ZCode 资源与多会话计数显示。\n\n### 修复与改进\n\n- ZCode 会合并快照、任务索引、模型输入输出日志和新版 CLI 数据库中的同一会话，优先采用最新且更完整的状态；会话标题也能在可用时保留。\n- ZCode 用户输入采用稳定位置与指纹去重，重建索引时不会把旧提示词误当成新的实时输入。\n- Data 现在是默认首页；Sources 增加返回设置页的入口，来源权限变化会触发相应的历史索引刷新。\n- 调整 Agent 图表配色与工具图表留白，改善数值和标签的可读性；会话轨迹增加即时悬停与键盘焦点提示。\n- 移除 Data 中独立的 Cursor 账户用量面板，继续保持账户级数据与本机历史、回放和 VCTI 分离。\n- Notch 与 Live 不再显示完成复核操作，关注列表聚焦仍需处理的等待、错误和高置信卡住状态。\n- 改进关闭状态下的本机回环代理识别，并更新前端与 Rust 依赖。\n\n### 安装说明\n\n- 需要 macOS 14 或更高版本。\n- 下载与你的 Mac 匹配的 Apple Silicon 或 Intel DMG/ZIP。\n- 当前构建采用 ad-hoc 签名，尚未经过 Apple 公证；首次打开时可能需要在“隐私与安全性”中手动允许。"
        },
        "en": {
          "source": "localized",
          "markdown": "VibeMeter 0.4.0 expands local agent coverage and makes the Data entry point, live status, and session review fit everyday use more closely.\n\n### New\n\n- **Full DeepSeek Harness integration** read-only parses local structured session records for historical analytics, exact live lifecycle status, trajectory replay, source health, and a validated jump-back entry. VibeMeter installs no hook and never changes Harness configuration or sessions.\n- **Exact Kimi Code and ZCode live status** moves both sources into the full history and lifecycle pipeline, including waiting, error, running, and completion states across Data, replay, VCTI, sharing, and source status.\n- **Unified agent icons** bring consistent provider marks to the main app, Sources, and the Notch, including a dedicated ZCode asset and multi-session counts.\n\n### Fixes and improvements\n\n- ZCode now merges matching sessions from snapshots, task indexes, model I/O logs, and the newer CLI database, preferring the freshest and most complete state. Available conversation titles are preserved.\n- Stable position and fingerprint tracking prevents old ZCode prompts from being replayed as new live input during reindexing.\n- Data is now the default home page. Sources has a direct path back to Settings, and history indexes refresh when source permissions change.\n- Refreshed agent chart colors, wider tool-chart spacing, and immediate hover and keyboard-focus tooltips improve chart and session-trajectory readability.\n- The separate Cursor account-usage panel has been removed from Data, keeping account-level data separate from local history, replay, and VCTI.\n- The Notch and Live no longer show completion-review actions, keeping attention surfaces focused on waiting, errors, and high-confidence stuck states that still need attention.\n- Loopback proxy detection now handles disabled local proxy entries more safely, alongside routine frontend and Rust dependency updates.\n\n### Installation\n\n- Requires macOS 14 or later.\n- Download the Apple Silicon or Intel DMG/ZIP that matches your Mac.\n- Builds are ad-hoc signed and are not Apple-notarized yet. macOS may require manual approval in Privacy & Security on first launch."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.3.2",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.3.2",
      "publishedAt": "2026-08-14T14:29:30Z",
      "releaseUpdatedAt": "2026-08-14T14:31:51Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "VibeMeter 0.3.2 把“会话”从数据页中的明细入口独立出来，让一次 Agent 工作过程更容易筛选、展开和回看。\n\n### 新增\n\n- **独立会话页**：会话与回放现在拥有单独的导航入口，支持按时间范围、Agent、模型、项目、验证状态、注意力信号、代码修改和提交筛选，并可继续加载更早记录。\n- **会话轨迹总览**：将一次会话拆成阶段轨道，以及输入、Agent、工具三条过程线；时间证据可用时按真实时长呈现，否则使用稳定的事件顺序。异常事件和密集阶段可以直接定位、展开。\n- **按需内容预览**：支持的来源可在会话回放中显示用户输入与 Agent 输出。预览仅在打开详情时从原始本机来源读取，不会在 VibeMeter 数据库中保存副本，也不会进入 Notch、通知或分享卡。\n- **可选系统代理**：设置页新增 macOS 系统代理开关，仅用于提供商额度与状态请求。该功能默认关闭，VibeMeter 不会修改系统代理设置。\n\n### 修复与改进\n\n- 已完成的会话重新开始工作后，旧的完成复核会自动解决，不再继续占用注意力队列。\n- Notch 中存在多个待确认完成项时，可以一次确认当前可见项目。\n- 数据页聚焦长期统计和工作事件，会话台账与回放统一移入独立会话页。\n\n### 安装说明\n\n- 需要 macOS 14 或更高版本。\n- 下载与你的 Mac 匹配的 Apple Silicon 或 Intel DMG/ZIP。\n- 当前构建采用 ad-hoc 签名，尚未经过 Apple 公证；首次打开时可能需要在“隐私与安全性”中手动允许。"
        },
        "en": {
          "source": "localized",
          "markdown": "VibeMeter 0.3.2 moves Sessions out of the Data drill-down and into a dedicated workspace, making each agent run easier to filter, expand, and review.\n\n### New\n\n- **Dedicated Sessions page** adds a first-class navigation entry for sessions and replay, with filters for time range, agent, model, project, verification state, attention signals, code changes, and commits, plus pagination for older records.\n- **Session trajectory overview** maps each run into a phase rail and separate Input, Agent, and Tools lanes. It uses observed duration when timestamps are available and a stable event sequence otherwise, with direct access to issues and dense phases.\n- **On-demand content previews** show user input and agent output for supported sources. VibeMeter reads the preview from the original local source only when session details are opened, stores no preview copy in its database, and keeps it out of the Notch, notifications, and share cards.\n- **Optional system proxy support** lets provider quota and status requests use the active macOS system proxy. It is off by default, and VibeMeter never changes the system proxy configuration.\n\n### Fixes and improvements\n\n- When a completed session starts working again, its old completion review is resolved instead of remaining in the attention queue.\n- Multiple visible completion reviews in the Notch can now be confirmed together.\n- Data stays focused on long-term analytics and work events, while the session ledger and replay now live on the dedicated Sessions page.\n\n### Installation\n\n- Requires macOS 14 or later.\n- Download the Apple Silicon or Intel DMG/ZIP that matches your Mac.\n- Builds are ad-hoc signed and are not Apple-notarized yet. macOS may require manual approval in Privacy & Security on first launch."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.3.1",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.3.1",
      "publishedAt": "2026-08-13T05:07:46Z",
      "releaseUpdatedAt": "2026-08-13T05:10:17Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "VibeMeter 0.3.1 让 VCTI 从一个人格结论，变成一份可以读懂、核对和分享的本机行为画像。\n\n### 新增\n\n- **VCTI 身份证据**：在保留原有二十四款人物图的基础上，补充工作节奏、协作方式、工具与 Skill 多样性，以及错误、重试和回滚等过程证据。\n- **证据覆盖说明**：明确显示哪些行为已经记录、哪些来源能力不足；缺失数据不会被当成零，也不会用模拟值补齐。\n- **一致的身份卡**：VCTI 页面与现有分享卡使用同一人物图、时间范围、来源筛选和证据口径，预览、SVG 与 PNG 保持一致。\n- **更自然的呈现**：首次显示或切换范围时加入生成动效，同时完整支持系统“减少动态效果”设置。\n\n### 修复与改进\n\n- VCTI 及身份卡现在严格跟随全局时间范围和已启用的数据来源。\n- 保留原有 VCTI 人物图，不再让新增证据视觉替换或改画角色。\n- 注意力卡片加入经过隐私裁剪的会话标题，同一项目下的多个完成项更容易区分。\n- 加强中英文、明暗主题、分享比例、确定性输出与隐私拦截的发布门禁。\n\n### 安装说明\n\n- 需要 macOS 14 或更高版本。\n- 下载与你的 Mac 匹配的 Apple Silicon 或 Intel DMG/ZIP。\n- 当前构建采用 ad-hoc 签名，尚未经过 Apple 公证；首次打开时可能需要在“隐私与安全性”中手动允许。"
        },
        "en": {
          "source": "localized",
          "markdown": "VibeMeter 0.3.1 turns VCTI from a persona result into a local behavior profile you can understand, verify, and share.\n\n### New\n\n- **VCTI identity evidence** keeps the original 24 character illustrations and adds recorded work rhythm, collaboration patterns, tool and Skill diversity, plus process evidence such as errors, retries, and rollbacks.\n- **Evidence coverage** shows which behaviors were recorded and where source capabilities are limited. Missing data is never converted to zero or filled with simulated values.\n- **Consistent identity cards** use the same character, time range, source selection, and evidence model across VCTI and the existing share card, with one render model for preview, SVG, and PNG.\n- **Accessible presentation** adds a generation animation on first reveal or range changes while fully respecting the system Reduce Motion setting.\n\n### Fixes and improvements\n\n- VCTI and identity cards now follow the global time range and enabled data sources consistently.\n- The original VCTI character art remains intact instead of being replaced or redrawn by the new evidence presentation.\n- Attention cards now include the privacy-sanitized session title, making completion items from the same project easier to distinguish.\n- Expanded release gates for both languages, light and dark themes, share ratios, deterministic output, and privacy protection.\n\n### Installation\n\n- Requires macOS 14 or later.\n- Download the Apple Silicon or Intel DMG/ZIP that matches your Mac.\n- Builds are ad-hoc signed and are not Apple-notarized yet. macOS may require manual approval in Privacy & Security on first launch."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.3.0",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.3.0",
      "publishedAt": "2026-08-12T16:04:36Z",
      "releaseUpdatedAt": "2026-08-12T16:14:36Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "VibeMeter 0.3.0 不只告诉你 Agent 正在做什么，也开始说明什么时候值得你介入。为此，这个版本同时重建了实时与历史证据链。\n\n### 新增\n\n- **工作脉搏**：把生命周期、工作阶段、关注信号和数据新鲜度拆开呈现，避免用单一状态掩盖证据差异。\n- **注意力队列**：在实时页与 Notch 中统一展示需要你、阻塞错误、疑似卡住和待确认完成，支持已处理、并非卡住、稍后提醒与返回来源会话。\n- **精准优先的卡住判断**：只在重复失败或重复操作序列满足严格规则时提示，并保留判断证据和用户反馈。\n- **系统提醒与质量门槛**：提醒在系统确认投递后才记为已发送，并持续记录误报、漏报和响应延迟样本。\n- **更多本机来源证据**：统一 Claude Code、Codex、Kimi Code、ZCode、Cursor、OpenClaw 与 Hermes 的来源能力口径；ZCode 现在也会出现在数据页筛选中。\n\n### 隐私与可靠性\n\n- 实时与历史记录统一进入可追踪的规范证据链，旧数据库通过分阶段迁移、校验和回滚安全升级。\n- 原始实时信封默认不保留；用户主动开启诊断时，才会在本机加密保留七天，并可随时提前清除。\n- 加固隐私裁剪、幂等重索引、乱序事件重放、来源不可用状态和本地数据清除。\n- 修复重复启动时崩溃或空白窗口、数据页切换卡住、注意力历史轮询随数据增长变慢，以及迁移恢复后启动失败。\n\n### 界面改进\n\n- 收紧 Notch 关注卡片排版，移除重复标题，并让“已处理”保持单行。\n- 完善注意力历史分页、跳回失败提示和不可用状态展示。\n\n### 安装说明\n\n- 需要 macOS 14 或更高版本。\n- 下载与你的 Mac 匹配的 Apple Silicon 或 Intel DMG/ZIP。\n- 当前构建采用 ad-hoc 签名，尚未经过 Apple 公证；首次打开时可能需要在“隐私与安全性”中手动允许。"
        },
        "en": {
          "source": "localized",
          "markdown": "VibeMeter 0.3.0 not only shows what an agent is doing, but also explains when your attention may be useful. This release rebuilds the live and historical evidence pipeline that supports those decisions.\n\n### New\n\n- **Work Pulse** separates lifecycle, work phase, attention signal, and freshness instead of collapsing them into one status.\n- **Attention Queue** brings requests for your attention, blocking errors, suspected stalls, and completion review to Live and the Notch, with handled, not-stuck, snooze, and jump-back actions.\n- **Precision-first stall detection** only raises a signal after strict repeated-failure or repeated-operation rules are satisfied, while retaining evidence and user feedback.\n- **Notification quality gates** count a notification only after confirmed system delivery and track false positives, misses, and response latency.\n- **Broader local evidence coverage** unifies capability language across Claude Code, Codex, Kimi Code, ZCode, Cursor, OpenClaw, and Hermes. ZCode is now available in Data filters as well.\n\n### Privacy and reliability\n\n- Live and historical records now feed one versioned canonical evidence chain, with staged, verified, and recoverable database migrations.\n- Raw live envelopes remain off by default. When diagnostic retention is explicitly enabled, they are encrypted locally for seven days and can be cleared early.\n- Hardened privacy redaction, idempotent re-indexing, out-of-order event replay, honest unavailable states, and local-data cleanup.\n- Fixed repeated-launch crashes or blank windows, Data-page stalls, attention polling that slowed as history grew, and startup failures after recovered migrations.\n\n### Interface improvements\n\n- Tightened Notch attention cards, removed the repeated heading, and kept the handled action on one line.\n- Added real attention-history pagination, visible jump-back failures, and explicit unavailable states.\n\n### Installation\n\n- Requires macOS 14 or later.\n- Download the Apple Silicon or Intel DMG/ZIP that matches your Mac.\n- Builds are ad-hoc signed and are not Apple-notarized yet. macOS may require manual approval in Privacy & Security on first launch."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.2.0",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.2.0",
      "publishedAt": "2026-08-09T13:29:46Z",
      "releaseUpdatedAt": "2026-08-09T13:32:20Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "- 新增 ZCode 支持：读取本机 ZCode 会话快照与模型 I/O 记录，并将会话、Token、模型、工具、项目与状态纳入 VibeMeter 的数据、实时视图和导出。\n- 新增 Kimi Code 与 ZCode 实时运行检测：通过只读的本机运行时状态更新 Live 与 Notch，并在数据源设置中展示对应支持状态。\n- 扩展 Agent 标识、配色和导出标签，完整覆盖 Kimi Code 与 ZCode。\n- 修复分享预览与导出未遵循当前选择时间范围的问题。\n- 更新 macOS DMG 安装界面，并同步应用、安装包和 README 的版本标识至 0.2.0。\n\n下载适合你 Mac 的 DMG 或 ZIP：Apple Silicon 适用于 M 系列 Mac，Intel 适用于 Intel Mac。构建为 ad-hoc 签名，未进行公证。"
        },
        "en": {
          "source": "localized",
          "markdown": "- Added ZCode support: read local ZCode session snapshots and model I/O records, bringing sessions, Tokens, models, tools, projects, and status into VibeMeter data, live views, and exports.\n- Added live runtime detection for Kimi Code and ZCode using read-only local runtime state, with support status surfaced in Sources settings, Live, and the Notch.\n- Extended agent marks, colors, and export labels to cover Kimi Code and ZCode consistently.\n- Fixed share previews and exports so they follow the currently selected time range.\n- Refreshed the macOS DMG installer experience and aligned the app, package, and README version surfaces at 0.2.0.\n\nDownload the DMG or ZIP matching your Mac: Apple Silicon is for M-series Macs, and Intel is for Intel-based Macs. Builds are ad-hoc signed and are not notarized."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.1.4",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.1.4",
      "publishedAt": "2026-08-05T11:54:10Z",
      "releaseUpdatedAt": "2026-08-05T11:57:00Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "- 修复菜单栏弹出窗口中的额度重置提示：增强文字字重，并显示距离重置的剩余时间。\n- 修复数据页 Token 趋势图的数值显示：保留实际观测点，避免折线、纵坐标和提示数值不一致。\n- 优化 Cursor Dashboard 用量读取：设置页在读取期间显示旋转状态，读取内容移至数据页独立展示。\n- 数据页现在显示 Cursor 账户 Token 与成本，并明确区分远程账户数据和本机历史统计；读取中或不可用时展示对应状态。"
        },
        "en": {
          "source": "localized",
          "markdown": "- Improved the menu bar quota reset notice with stronger typography and a remaining-time countdown.\n- Fixed Data trend values so plotted points, the y-axis, and tooltips stay aligned with observed Token usage.\n- Improved Cursor Dashboard usage loading with an explicit spinner in Settings and moved account details to a dedicated Data-page panel.\n- Data now shows Cursor account Token and cost with clear separation from local history, including explicit loading and unavailable states."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.1.3",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.1.3",
      "publishedAt": "2026-08-05T02:27:48Z",
      "releaseUpdatedAt": "2026-08-05T05:16:20Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "VibeMeter 0.1.3 改善了 Data 与 Live 两个核心页面的真实状态展示。\n\n### 主要变化\n\n- 数据页默认隐藏本机未检测到、未记录，或当前时间范围 Token 用量为 0 的 Agent；仍可通过筛选按钮手动查看。\n- Token 活动现在显示用量最大的格子，以及对应的日期和 Token 用量。\n- 移除数据卡片重复的副标题，让信息层级更紧凑。\n- Codex `turn_aborted` 会显示为“已暂停”，不再把暂停会话显示为运行中；新一轮开始后可以恢复为运行中。\n- 忽略 Codex Memory 子会话的终止事件，避免将父会话错误刷新为运行中。\n- 中英文界面与所有版本面已统一到 `0.1.3`。"
        },
        "en": {
          "source": "localized",
          "markdown": "VibeMeter 0.1.3 improves truthful state presentation across the Data and Live pages.\n\n### Highlights\n\n- Hide Agents that are not detected locally, not recorded, or have zero Token usage in the selected range by default; they remain available through manual filters.\n- Show the largest Token Activity cell with its date and Token usage.\n- Remove repetitive Data card subtitles for a tighter information hierarchy.\n- Represent Codex `turn_aborted` sessions as Paused instead of Running; a new turn can resume the session.\n- Ignore terminal Codex Memory child events so they cannot incorrectly revive a parent session as Running.\n- Align the bilingual UI and all version surfaces at `0.1.3`."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.1.2",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.1.2",
      "publishedAt": "2026-08-03T14:41:39Z",
      "releaseUpdatedAt": "2026-08-05T05:16:43Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "`v0.1.2` 修复数据页空会话噪声，并让版本信息与实际构建保持一致。\n\n### 修复与改进\n\n- 过滤没有标题、项目、Token、文件/行变更、提交、验证或错误证据的仅元数据会话；它们不再出现在数据页的工作事件卡片中，原始会话仍保留在会话台账。\n- 对确实没有编辑证据的任务显示“无编辑证据”，不再误称为“未验证”。\n- 设置页版本号改为读取应用版本配置，移除“· 本机测试版”；本版本显示为 `VibeMeter 0.1.2`。\n- Rust provider 的客户端元数据和 User-Agent 版本改为跟随打包后的 Cargo 版本。"
        },
        "en": {
          "source": "localized",
          "markdown": "`v0.1.2` removes empty work-event noise from Data and keeps the displayed version aligned with the packaged build.\n\n### Fixes and improvements\n\n- Metadata-only sessions without a title, project, token usage, file/line changes, commits, verification, or errors are no longer shown as work-event cards on Data; the raw sessions remain available in the session ledger.\n- Tasks with no edit evidence now show “No edit evidence” instead of being mislabeled “Unverified.”\n- Settings now reads the application version from the package configuration and removes the “· local beta” suffix; this build displays `VibeMeter 0.1.2`.\n- Rust provider client metadata and User-Agent strings now follow the packaged Cargo version."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.1.1",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.1.1",
      "publishedAt": "2026-08-03T02:03:27Z",
      "releaseUpdatedAt": "2026-08-03T02:11:02Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "`v0.1.1` 重点提升 Codex Desktop 实时活动与 Notch 状态的可靠性。\n\n### 修复与改进\n\n- 即使 Codex Desktop 的 Hook 事件未送达，VibeMeter 也会从近期会话记录中发现正在进行的对话，减少实时页与 Notch 漏检。\n- 已完成的任务不会再被迟到的 Memory 子任务事件恢复成“正在读取”；任务会正确进入已完成分组，并保留耗时与跳转能力。\n- 加强完成事件与辅助事件并发到达时的状态保护，避免已完成会话被重新激活。\n- 更新 GitHub Actions 与前端依赖。"
        },
        "en": {
          "source": "localized",
          "markdown": "`v0.1.1` improves the reliability of Codex Desktop live activity and Notch status tracking.\n\n### Fixes and improvements\n\n- VibeMeter can now discover active Codex Desktop conversations from recent session records when hook events are unavailable, reducing missing activity in Live and the Notch.\n- Completed tasks are no longer revived as “Reading” by late Memory subtask events. They move into Completed with duration and jump-back support preserved.\n- Added race protection for completion and auxiliary events arriving at nearly the same time.\n- Updated GitHub Actions and frontend dependencies."
        }
      }
    },
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.1.0",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.1.0",
      "publishedAt": "2026-08-01T13:40:07Z",
      "releaseUpdatedAt": "2026-08-01T14:04:55Z",
      "notes": {
        "zh-CN": {
          "source": "default",
          "markdown": "测试版正式发布"
        },
        "en": {
          "source": "default",
          "markdown": "First public beta release."
        }
      }
    }
  ]
};
