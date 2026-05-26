<div align="center">

<img src="public/D-Music-Player.png" alt="D-Music Player" width="100%" />

# D-Music Player

**下一代智能音乐生态系统**

[![Version](https://img.shields.io/badge/version-1.0.0-7c3aed?style=for-the-badge&logo=semver&logoColor=white)](https://github.com/YYC-Cube/YYC3-Music-Player)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![pnpm](https://img.shields.io/badge/pnpm-✓-f69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io)

[![PWA](https://img.shields.io/badge/PWA-Ready-a855f7?style=for-the-badge&logo=pwa&logoColor=white)](https://music.yyc3.top)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](https://github.com/YYC-Cube/YYC3-Music-Player/pulls)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222?style=for-the-badge&logo=github&logoColor=white)](https://music.yyc3.top)

> **YanYuCloudCube** · 言启象限 · 语枢未来
>
> _Words Initiate Quadrants, Language Serves as Core for Future_

</div>

---

## 📖 概述

D-Music Player 是由 YanYuCloudCube 团队打造的下一代智能音乐播放平台，以**董小姐原创音乐**为核心内容，融合沉浸式可视化、AI 智能交互、多形态播放体验于一体。

### ✨ 核心特性

| 特性 | 说明 |
| --- | --- |
| 🎵 **三种播放模式** | 沉浸（Immersive）、迷你（Mini）、完整（Full）无缝切换 |
| 🎨 **五种迷你形态** | 胶囊、黑胶、频谱、星云、全息 — 各具视觉风格 |
| 🤖 **Muse AI 控制台** | 语音搜索、智能推荐、对话式指令系统 |
| 🎬 **MV 播放器** | 视频拖放加载、画中画、全屏、可视化叠加 |
| 📊 **智能分析** | Wilson Score 评分、播放统计、趋势分析 |
| ⭐ **星力系统** | 听歌赚积分、VIP 等级、每日签到、成就系统 |
| 🎭 **主题定制器** | 渐变编辑器、毛玻璃效果、皮肤分享 |
| 📱 **PWA 完整支持** | 离线播放、安装到桌面、全平台图标适配 |
| 🔊 **音频可视化** | Canvas 频谱分析、SoundWave 声波条 |

---

## 🏗️ 技术架构

### 技术栈

```
┌─────────────────────────────────────────────┐
│                  Frontend                    │
├─────────────────────────────────────────────┤
│  React 18 + TypeScript (Strict Mode)        │
│  Vite 6.3.5 (Build Tool)                    │
│  Tailwind CSS 4.1 + shadcn/ui + Radix UI    │
│  motion/react (Framer Motion)               │
├─────────────────────────────────────────────┤
│               State & Storage               │
├─────────────────────────────────────────────┤
│  React useState/useRef (State)              │
│  localStorage + IndexedDB (Persistence)     │
│  Service Worker v3 (Offline Cache)          │
├─────────────────────────────────────────────┤
│                 PWA Layer                    │
├─────────────────────────────────────────────┤
│  Web App Manifest (D-brand Icons)           │
│  Service Worker (Static + Media + Dynamic)  │
│  Share Target + Protocol Handlers           │
└─────────────────────────────────────────────┘
```

### 项目结构

```
Music-Player/
├── public/
│   ├── D-brand/                  # 全平台 Logo (iOS/Android/macOS/tvOS/watchOS/Windows)
│   ├── D-cover/                  # 封面图 (5 张)
│   ├── D-poster/                 # 海报图 (5 张)
│   ├── D-avatar/                 # 头像 (3 张)
│   ├── D-Music/                  # 董小姐原创音乐 (11 首 MP3)
│   ├── manifest.json             # PWA Manifest
│   └── sw.js                     # Service Worker
├── src/
│   ├── main.tsx                  # 应用入口
│   ├── app/
│   │   ├── App.tsx               # 根组件
│   │   └── components/
│   │       ├── MusicPlayer.tsx   # 主播放器（沉浸/迷你/完整）
│   │       ├── MiniPlayer.tsx    # 迷你播放器（5 种形态）
│   │       ├── MuseAICore.tsx    # AI 控制核心浮窗
│   │       ├── MVPlayer.tsx      # MV 视频播放器
│   │       ├── ProfilePanel.tsx  # 个人中心
│   │       ├── ThemeCustomizer.tsx # 主题定制器
│   │       ├── StarPowerBoard.tsx # 星力系统
│   │       ├── SmartAnalytics.tsx # 智能分析
│   │       ├── AudioVisualizer.tsx # 音频可视化
│   │       ├── SoundWaveBar.tsx   # 声波条
│   │       ├── ParticleBackground.tsx # 粒子背景
│   │       ├── FloatingCD.tsx     # 浮动 CD
│   │       ├── VoiceInput.tsx     # 语音输入
│   │       ├── ErrorBoundary.tsx  # 错误边界
│   │       └── ui/               # shadcn/ui 基础组件 (47 个)
│   └── styles/
│       └── index.css             # 全局样式
├── config/
│   ├── dmusic_types.ts           # 类型定义
│   └── dmusic_variables.json     # 变量配置
├── database/
│   └── d_music_schema.sql.md     # 数据库 Schema
├── docs/                         # 项目文档
├── index.html                    # HTML 入口
├── vite.config.ts                # Vite 配置
├── tsconfig.json                 # TypeScript 配置
├── .eslintrc.cjs                 # ESLint 配置
└── package.json                  # 项目配置
```

---

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

### 安装与启动

```bash
# 克隆仓库
git clone https://github.com/YYC-Cube/YYC3-Music-Player.git
cd YYC3-Music-Player

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 **http://localhost:3066/**

### 构建部署

```bash
# 生产构建
pnpm build

# 预览构建结果
pnpm preview
```

### 代码检查

```bash
# TypeScript 类型检查
pnpm typecheck

# ESLint 代码检查
pnpm lint
```

---

## 🎮 功能导航

### 播放模式

| 模式 | 触发方式 | 说明 |
| --- | --- | --- |
| **完整模式** | 默认启动 | 侧边栏 + 歌曲列表 + 浮动 CD + 底部控制栏 |
| **迷你模式** | 点击迷你化按钮 | 底栏浮窗，5 种形态可切换 |
| **沉浸模式** | 点击沉浸按钮 | 全屏粒子背景 + 旋转黑胶 + 极简控制 |

### 迷你形态切换

```
胶囊 (Capsule) → 黑胶 (Vinyl) → 频谱 (Spectrum) → 星云 (Nebula) → 全息 (HoloCard)
```

### 键盘快捷键

| 快捷键 | 功能 |
| --- | --- |
| `⌘K` / `Ctrl+K` | 打开 Muse AI 控制台 |
| `Space` | 播放 / 暂停 |
| `←` / `→` | 上一首 / 下一首 |
| `↑` / `↓` | 音量增减 |
| `Esc` | 关闭当前面板 |

---

## 🎨 资源体系

### 图片资源映射

| 目录 | 用途 | 数量 |
| --- | --- | --- |
| `D-brand/` | 全平台 Logo（iOS/Android/macOS/tvOS/watchOS/Windows） | 40+ |
| `D-cover/` | 沉浸/迷你模式背景轮播图 | 5 |
| `D-poster/` | 频谱/全息卡片背景 | 5 |
| `D-avatar/` | 用户头像 | 3 |
| `D-Music/` | 董小姐原创音乐 | 11 首 |

### 背景图系统

| 组件 | 背景图源 | 封面/中心图 | 切换间隔 |
| --- | --- | --- | --- |
| 沉浸·黑胶 | D-cover + D-poster | D-cover + D-poster | 5s |
| 迷你·胶囊 | — | D-cover + D-poster | 4.5s |
| 迷你·黑胶 | — | D-cover + D-poster | 6s |
| 迷你·频谱 | D-poster (55%) | D-brand logo | 5s |
| 迷你·星云 | — | D-cover + D-poster | 7s |
| 迷你·全息 | D-cover (55%) | D-brand logo | 4s |

---

## 📱 PWA 支持

D-Music Player 支持完整的 PWA 安装体验：

- **离线播放**：11 首音乐全部预缓存
- **安装到桌面**：Chrome/Edge/Safari 均支持
- **全平台图标**：Android / iOS / macOS / Windows / tvOS / watchOS
- **Share Target**：接收音频文件分享
- **协议处理**：`web+dmusic://` 自定义协议

部署到 HTTPS 后，浏览器地址栏将出现安装按钮。

---

## 🌐 部署

### GitHub Pages

项目已配置 GitHub Pages 部署，域名：**[music.yyc3.top](https://music.yyc3.top)**

```bash
# 构建
pnpm build

# 部署 dist/ 目录到 GitHub Pages
```

### 自定义部署

```bash
pnpm build
# 将 dist/ 目录部署到任意静态托管服务
```

---

## 🤝 参与贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

---

## 📄 许可证

Copyright &copy; 2026 YanYuCloudCube Team. All rights reserved.

---

<div align="center">

**D-Music Player** · 言启千行代码，语枢万物智能

[🌐 music.yyc3.top](https://music.yyc3.top) · [📦 GitHub](https://github.com/YYC-Cube/YYC3-Music-Player) · [📧 Contact](mailto:admin@0379.email)

</div>
