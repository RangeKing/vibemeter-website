// Generated from RangeKing/vibemeter. Do not edit by hand.
window.VibeMeterReleaseData = {
  "schemaVersion": 2,
  "sourceRepo": "RangeKing/vibemeter",
  "version": "v0.1.4",
  "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.1.4",
  "publishedAt": "2026-08-05T11:54:10Z",
  "releaseUpdatedAt": "2026-08-05T11:56:16Z",
  "notes": {
    "zh-CN": {
      "source": "fallback",
      "markdown": "Download the DMG or ZIP matching your Mac. Apple Silicon is for M-series Macs; Intel is for Intel-based Macs. Builds are ad-hoc signed and are not notarized."
    },
    "en": {
      "source": "fallback",
      "markdown": "Download the DMG or ZIP matching your Mac. Apple Silicon is for M-series Macs; Intel is for Intel-based Macs. Builds are ad-hoc signed and are not notarized."
    }
  },
  "assets": {
    "arm64.dmg": "https://github.com/RangeKing/vibemeter/releases/download/v0.1.4/VibeMeter_0.1.4_macOS_aarch64.dmg",
    "arm64.zip": "https://github.com/RangeKing/vibemeter/releases/download/v0.1.4/VibeMeter_v0.1.4_macOS_arm64.zip",
    "x64.dmg": "https://github.com/RangeKing/vibemeter/releases/download/v0.1.4/VibeMeter_0.1.4_macOS_x64.dmg",
    "x64.zip": "https://github.com/RangeKing/vibemeter/releases/download/v0.1.4/VibeMeter_v0.1.4_macOS_x64.zip"
  },
  "releases": [
    {
      "sourceRepo": "RangeKing/vibemeter",
      "version": "v0.1.4",
      "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.1.4",
      "publishedAt": "2026-08-05T11:54:10Z",
      "releaseUpdatedAt": "2026-08-05T11:56:16Z",
      "notes": {
        "zh-CN": {
          "source": "fallback",
          "markdown": "Download the DMG or ZIP matching your Mac. Apple Silicon is for M-series Macs; Intel is for Intel-based Macs. Builds are ad-hoc signed and are not notarized."
        },
        "en": {
          "source": "fallback",
          "markdown": "Download the DMG or ZIP matching your Mac. Apple Silicon is for M-series Macs; Intel is for Intel-based Macs. Builds are ad-hoc signed and are not notarized."
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
