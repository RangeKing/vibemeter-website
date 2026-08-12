// Generated from RangeKing/vibemeter. Do not edit by hand.
window.VibeMeterReleaseData = {
  "schemaVersion": 2,
  "sourceRepo": "RangeKing/vibemeter",
  "version": "v0.3.0",
  "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.3.0",
  "publishedAt": "2026-08-12T16:04:36Z",
  "releaseUpdatedAt": "2026-08-12T16:06:19Z",
  "notes": {
    "zh-CN": {
      "source": "localized",
      "markdown": "VibeMeter 0.3.0 不只告诉你 Agent 正在做什么，也开始说明什么时候值得你介入。为此，这个版本同时重建了实时与历史证据链。\n\n### 新增\n\n- **工作脉搏**：把生命周期、工作阶段、关注信号和数据新鲜度拆开呈现，避免用单一状态掩盖证据差异。\n- **注意力队列**：在实时页与 Notch 中统一展示需要你、阻塞错误、疑似卡住和待确认完成，支持已处理、并非卡住、稍后提醒与返回来源会话。\n- **精准优先的卡住判断**：只在重复失败或重复操作序列满足严格规则时提示，并保留判断证据和用户反馈。\n- **系统提醒与质量门槛**：提醒在系统确认投递后才记为已发送，并持续记录误报、漏报和响应延迟样本。\n- **更多本机来源证据**：统一 Claude Code、Codex、Kimi Code、ZCode、Cursor、OpenClaw 与 Hermes 的来源能力口径；ZCode 现在也会出现在数据页筛选中。\n\n### 隐私与可靠性\n\n- 实时与历史记录统一进入可追踪的规范证据链，旧数据库通过分阶段迁移、校验和回滚安全升级。\n- 原始实时信封默认不保留；用户主动开启诊断时，才会在本机加密保留七天，并可随时提前清除。\n- 加固隐私裁剪、幂等重索引、乱序事件重放、来源不可用状态和本地数据清除。\n- 修复重复启动时崩溃或空白窗口、数据页切换卡住、注意力历史轮询随数据增长变慢，以及迁移恢复后启动失败。\n\n### 界面改进\n\n- 收紧 Notch 关注卡片排版，移除重复标题，并让“已处理”保持单行。\n- 完善注意力历史分页、跳回失败提示和不可用状态展示。\n\n### 安装说明\n\n- 需要 macOS 14 或更高版本。\n- 下载与你的 Mac 匹配的 Apple Silicon 或 Intel DMG/ZIP。\n- 当前构建采用 ad-hoc 签名，尚未经过 Apple 公证；首次打开时可能需要在“隐私与安全性”中手动允许。\n\n---"
    },
    "en": {
      "source": "localized",
      "markdown": "VibeMeter 0.3.0 not only shows what an agent is doing, but also explains when your attention may be useful. This release rebuilds the live and historical evidence pipeline that supports those decisions.\n\n### New\n\n- **Work Pulse** separates lifecycle, work phase, attention signal, and freshness instead of collapsing them into one status.\n- **Attention Queue** brings requests for your attention, blocking errors, suspected stalls, and completion review to Live and the Notch, with handled, not-stuck, snooze, and jump-back actions.\n- **Precision-first stall detection** only raises a signal after strict repeated-failure or repeated-operation rules are satisfied, while retaining evidence and user feedback.\n- **Notification quality gates** count a notification only after confirmed system delivery and track false positives, misses, and response latency.\n- **Broader local evidence coverage** unifies capability language across Claude Code, Codex, Kimi Code, ZCode, Cursor, OpenClaw, and Hermes. ZCode is now available in Data filters as well.\n\n### Privacy and reliability\n\n- Live and historical records now feed one versioned canonical evidence chain, with staged, verified, and recoverable database migrations.\n- Raw live envelopes remain off by default. When diagnostic retention is explicitly enabled, they are encrypted locally for seven days and can be cleared early.\n- Hardened privacy redaction, idempotent re-indexing, out-of-order event replay, honest unavailable states, and local-data cleanup.\n- Fixed repeated-launch crashes or blank windows, Data-page stalls, attention polling that slowed as history grew, and startup failures after recovered migrations.\n\n### Interface improvements\n\n- Tightened Notch attention cards, removed the repeated heading, and kept the handled action on one line.\n- Added real attention-history pagination, visible jump-back failures, and explicit unavailable states.\n\n### Installation\n\n- Requires macOS 14 or later.\n- Download the Apple Silicon or Intel DMG/ZIP that matches your Mac.\n- Builds are ad-hoc signed and are not Apple-notarized yet. macOS may require manual approval in Privacy & Security on first launch."
    }
  },
  "assets": {
    "arm64.dmg": "https://github.com/RangeKing/vibemeter/releases/download/v0.3.0/VibeMeter_0.3.0_macOS_aarch64.dmg",
    "arm64.zip": "https://github.com/RangeKing/vibemeter/releases/download/v0.3.0/VibeMeter_v0.3.0_macOS_arm64.zip",
    "x64.dmg": "https://github.com/RangeKing/vibemeter/releases/download/v0.3.0/VibeMeter_0.3.0_macOS_x64.dmg",
    "x64.zip": "https://github.com/RangeKing/vibemeter/releases/download/v0.3.0/VibeMeter_v0.3.0_macOS_x64.zip"
  },
  "releases": [
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.3.0",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.3.0",
      "publishedAt": "2026-08-12T16:04:36Z",
      "releaseUpdatedAt": "2026-08-12T16:06:19Z",
      "notes": {
        "zh-CN": {
          "source": "localized",
          "markdown": "VibeMeter 0.3.0 不只告诉你 Agent 正在做什么，也开始说明什么时候值得你介入。为此，这个版本同时重建了实时与历史证据链。\n\n### 新增\n\n- **工作脉搏**：把生命周期、工作阶段、关注信号和数据新鲜度拆开呈现，避免用单一状态掩盖证据差异。\n- **注意力队列**：在实时页与 Notch 中统一展示需要你、阻塞错误、疑似卡住和待确认完成，支持已处理、并非卡住、稍后提醒与返回来源会话。\n- **精准优先的卡住判断**：只在重复失败或重复操作序列满足严格规则时提示，并保留判断证据和用户反馈。\n- **系统提醒与质量门槛**：提醒在系统确认投递后才记为已发送，并持续记录误报、漏报和响应延迟样本。\n- **更多本机来源证据**：统一 Claude Code、Codex、Kimi Code、ZCode、Cursor、OpenClaw 与 Hermes 的来源能力口径；ZCode 现在也会出现在数据页筛选中。\n\n### 隐私与可靠性\n\n- 实时与历史记录统一进入可追踪的规范证据链，旧数据库通过分阶段迁移、校验和回滚安全升级。\n- 原始实时信封默认不保留；用户主动开启诊断时，才会在本机加密保留七天，并可随时提前清除。\n- 加固隐私裁剪、幂等重索引、乱序事件重放、来源不可用状态和本地数据清除。\n- 修复重复启动时崩溃或空白窗口、数据页切换卡住、注意力历史轮询随数据增长变慢，以及迁移恢复后启动失败。\n\n### 界面改进\n\n- 收紧 Notch 关注卡片排版，移除重复标题，并让“已处理”保持单行。\n- 完善注意力历史分页、跳回失败提示和不可用状态展示。\n\n### 安装说明\n\n- 需要 macOS 14 或更高版本。\n- 下载与你的 Mac 匹配的 Apple Silicon 或 Intel DMG/ZIP。\n- 当前构建采用 ad-hoc 签名，尚未经过 Apple 公证；首次打开时可能需要在“隐私与安全性”中手动允许。\n\n---"
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
