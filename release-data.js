// Generated from RangeKing/vibemeter. Do not edit by hand.
window.VibeMeterReleaseData = {
  "schemaVersion": 1,
  "sourceRepo": "RangeKing/vibemeter",
  "version": "v0.1.1",
  "releaseUrl": "https://github.com/RangeKing/vibemeter/releases/tag/v0.1.1",
  "publishedAt": "2026-08-03T02:03:27Z",
  "releaseUpdatedAt": "2026-08-03T02:11:02Z",
  "assets": {
    "arm64.dmg": "https://github.com/RangeKing/vibemeter/releases/download/v0.1.1/VibeMeter_0.1.1_macOS_aarch64.dmg",
    "arm64.zip": "https://github.com/RangeKing/vibemeter/releases/download/v0.1.1/VibeMeter_v0.1.1_macOS_arm64.zip",
    "x64.dmg": "https://github.com/RangeKing/vibemeter/releases/download/v0.1.1/VibeMeter_0.1.1_macOS_x64.dmg",
    "x64.zip": "https://github.com/RangeKing/vibemeter/releases/download/v0.1.1/VibeMeter_v0.1.1_macOS_x64.zip"
  },
  "notes": {
    "zh-CN": {
      "source": "fallback",
      "markdown": "## 中文\r\n\r\n`v0.1.1` 重点提升 Codex Desktop 实时活动与 Notch 状态的可靠性。\r\n\r\n### 修复与改进\r\n\r\n- 即使 Codex Desktop 的 Hook 事件未送达，VibeMeter 也会从近期会话记录中发现正在进行的对话，减少实时页与 Notch 漏检。\r\n- 已完成的任务不会再被迟到的 Memory 子任务事件恢复成“正在读取”；任务会正确进入已完成分组，并保留耗时与跳转能力。\r\n- 加强完成事件与辅助事件并发到达时的状态保护，避免已完成会话被重新激活。\r\n- 更新 GitHub Actions 与前端依赖。\r\n\r\n## English\r\n\r\n`v0.1.1` improves the reliability of Codex Desktop live activity and Notch status tracking.\r\n\r\n### Fixes and improvements\r\n\r\n- VibeMeter can now discover active Codex Desktop conversations from recent session records when hook events are unavailable, reducing missing activity in Live and the Notch.\r\n- Completed tasks are no longer revived as “Reading” by late Memory subtask events. They move into Completed with duration and jump-back support preserved.\r\n- Added race protection for completion and auxiliary events arriving at nearly the same time.\r\n- Updated GitHub Actions and frontend dependencies."
    },
    "en": {
      "source": "localized",
      "markdown": "`v0.1.1` improves the reliability of Codex Desktop live activity and Notch status tracking.\n\n### Fixes and improvements\n\n- VibeMeter can now discover active Codex Desktop conversations from recent session records when hook events are unavailable, reducing missing activity in Live and the Notch.\n- Completed tasks are no longer revived as “Reading” by late Memory subtask events. They move into Completed with duration and jump-back support preserved.\n- Added race protection for completion and auxiliary events arriving at nearly the same time.\n- Updated GitHub Actions and frontend dependencies."
    }
  }
};
