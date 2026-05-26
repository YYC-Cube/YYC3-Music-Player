# D-Music 开发者文档五件套

> **Phase 5：开发者文档体系完善**
> 日期：2026-05-26
> 作者：YYC³ Team / Trae AI Assistant
> 版本：v4.0.0
> 状态：已同步最新代码库配置（含Logo/海报/音乐资源、ErrorBoundary、ESLint、TypeScript）

---

## 文档体系概览

```
D-Music 开发者文档五件套
═══════════════════════════════════════════════════════════

📘 文档一：项目概述与快速开始
    └── 本文档 (D-Music-Developer-Guide.md)

📗 文档二：架构设计文档
    └── 见本文档「第二部分」

📙 文档三：API接口文档
    └── 见本文档「第三部分」

📕 文档四：组件开发指南
    └── 见本文档「第四部分」

📓 文档五：部署运维手册
    └── 见本文档「第五部分」
```

---

# 第一部分：项目概述与快速开始

## 1.1 项目简介

D-Music 是一个基于「五标五高五化」智能应用技术核心理念构建的下一代智能音乐生态系统。项目采用 React 18 + Vite 6 + Tailwind CSS 4 + Radix UI + shadcn/ui 技术栈，融合音乐创作、社区互动、跨平台体验和IP矩阵。

**品牌IP**：董小姐（D-Music原创音乐人）

## 1.2 技术栈

| 类别 | 技术选型 | 版本 |
|------|---------|------|
| 前端框架 | React | 18.3.1 |
| 构建工具 | Vite | 6.3.5 |
| 样式框架 | Tailwind CSS | 4.1.12 |
| UI组件库 | Radix UI + shadcn/ui | 1.x |
| 动画引擎 | motion/react | 12.23.24 |
| 包管理器 | pnpm | — |
| 类型系统 | TypeScript | ES2020 |
| 代码检查 | ESLint | 10.x |
| 数据持久化 | idb-keyval | 6.2.2 |
| 图标库 | lucide-react | 0.487.0 |

## 1.3 快速开始

```bash
# 1. 克隆项目
git clone <repository-url>
cd Music-Player

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev
# → http://localhost:5173

# 4. 构建生产版本
pnpm build

# 5. 预览生产构建
pnpm preview

# 6. TypeScript类型检查
pnpm typecheck

# 7. ESLint代码检查
pnpm lint
```

## 1.4 项目结构

```
Music-Player/
├── config/                          # 配置层
│   ├── dmusic_variables.json        # 全局配置变量
│   ├── dmusic_types.ts              # TypeScript类型定义
│   └── API_Local.md                 # 本地API对接方案
│
├── database/                        # 数据库层
│   └── d_music_schema.sql.md        # MySQL DDL
│
├── docs/                            # 文档层
│   ├── 00-项目总览索引/              # 总览手册、导航、快速开始
│   ├── 01-启动规划阶段/              # 项目规划、需求、可行性、风险
│   ├── 02-项目设计阶段/              # 架构、详细设计、数据库、接口
│   ├── 03-开发实施阶段/              # 开发规范、测试、部署
│   ├── ...
│   └── 10-规划设计指南/              # 核心技术文档
│       ├── D-Music-Developer-Guide.md   # 本文档（五件套）
│       ├── D-Music-Audit-Phase3.md      # 审核报告
│       ├── D-Music-Implementation-Plan.md # 实施方案
│       └── Guidelines.md                 # 五标五高五化指导书
│
├── public/                          # 静态资源（重要）
│   ├── D-brand/                     # 全端品牌Logo
│   │   ├── android/                 # Android mipmap全尺寸
│   │   ├── ios/                     # iOS AppIcon全尺寸
│   │   ├── macos/                   # macOS icon全尺寸
│   │   ├── tvos/                    # tvOS品牌资源
│   │   ├── watchos/                 # watchOS图标
│   │   └── windows/                 # Windows图标
│   ├── D-cover/                     # 董小姐封面（7张）
│   │   ├── D-cover-01.jpg ~ D-cover-07.jpg
│   ├── D-poster/                    # 董小姐海报（6张）
│   │   ├── D-poster-01.jpg ~ D-poster-06.jpg
│   ├── D-Music/                     # 董小姐原创音乐（11首）
│   │   ├── 董小姐 and 沫言 - 奉陪.mp3
│   │   ├── 董小姐 and 沫言 - 岁月如歌.mp3
│   │   ├── 董小姐 and 沫言 - 时光.mp3
│   │   ├── 董小姐 and 沫言 - 浮生如渡.mp3
│   │   ├── 董小姐 and 沫言 - 渡心时序.mp3
│   │   ├── 董小姐 - 岁月如歌.mp3
│   │   ├── 董小姐 - 我是渡船也是过客.mp3
│   │   ├── 董小姐 - 我的宝贝.mp3
│   │   ├── 董小姐 - 秋风不问梧桐意.mp3
│   │   ├── 董小姐 - 过客.mp3
│   │   └── 董小姐 - 除了你.mp3
│   ├── assets/                      # 通用资源
│   ├── manifest.json                # PWA配置
│   └── sw.js                        # Service Worker
│
├── src/                             # 源代码
│   ├── main.tsx                     # 入口文件（含ErrorBoundary包裹）
│   ├── app/
│   │   ├── App.tsx                  # 根组件
│   │   └── components/              # 组件层
│   │       ├── ui/                  # shadcn/ui组件（30个）
│   │       ├── figma/               # Figma资源组件
│   │       ├── ErrorBoundary.tsx    # 错误边界组件
│   │       ├── MusicPlayer.tsx      # 主播放器（核心）
│   │       ├── MuseAICore.tsx       # AI控制核心
│   │       ├── AICreator.tsx        # AI音乐创作
│   │       └── ... (共28个核心组件)
│   └── styles/                      # 样式层
│       └── index.css                # 全局样式
│
├── supabase/                        # Supabase函数
├── .eslintrc.cjs                    # ESLint配置
├── tsconfig.json                    # TypeScript配置
├── tsconfig.node.json               # TypeScript Node配置
├── vite.config.ts                   # Vite配置
├── index.html                       # 入口HTML
└── package.json                     # 依赖配置
```

## 1.5 资源映射关系

### Logo资源路径映射

所有组件中的品牌Logo统一使用以下路径：

```typescript
// D-brand 全端Logo - 当前使用iOS 1024x1024版本
const dmLogoChrome = "/D-brand/ios/AppIcon.appiconset/Icon-App-1024x1024@1x.png";
const dmLogoRed    = "/D-brand/ios/AppIcon.appiconset/Icon-App-1024x1024@1x.png";
const dmLogoDi     = "/D-brand/ios/AppIcon.appiconset/Icon-App-1024x1024@1x.png";
const dmLogoGold   = "/D-brand/ios/AppIcon.appiconset/Icon-App-1024x1024@1x.png";
```

**全平台Logo可用尺寸参考**：

| 平台 | 路径前缀 | 可用尺寸 |
|------|---------|---------|
| iOS | `/D-brand/ios/AppIcon.appiconset/` | 20/29/40/60/76/83.5/1024px |
| Android | `/D-brand/android/mipmap-*/` | hdpi/ldpi/mdpi/xhdpi/xxhdpi/xxxhdpi |
| macOS | `/D-brand/macos/AppIcon.iconset/` | 16/32/128/256/512px |
| tvOS | `/D-brand/tvos/AppIcon.brandassets/` | 400/800/1280/2560px |
| watchOS | `/D-brand/watchos/AppIcon.appiconset/` | 24/27.5/29/33/40/43.5/50/98/108/1024px |
| Windows | `/D-brand/windows/windows/` | 16/32/48/64/128/256px |

### 海报资源路径映射

```typescript
// D-cover 董小姐封面（7张）
const cover1 = "/D-cover/D-cover-01.jpg";  // ~ D-cover-07.jpg

// D-poster 董小姐海报（6张）
const poster1 = "/D-poster/D-poster-01.jpg";  // ~ D-poster-06.jpg

// 黑胶唱片轮播使用
const dongPhoto1 = "/D-cover/D-cover-01.jpg";
const dongPhoto2 = "/D-cover/D-cover-02.jpg";
const dongPhoto3 = "/D-poster/D-poster-01.jpg";
```

### 音乐资源路径映射

```typescript
// D-Music 董小姐原创音乐（11首） - 作为默认曲目加载
const DEFAULT_TRACKS = [
  { title: '董小姐 & 沫言 - 奉陪',       url: '/D-Music/董小姐 and 沫言 - 奉陪.mp3' },
  { title: '董小姐 & 沫言 - 岁月如歌',    url: '/D-Music/董小姐 and 沫言 - 岁月如歌.mp3' },
  { title: '董小姐 & 沫言 - 时光',        url: '/D-Music/董小姐 and 沫言 - 时光.mp3' },
  { title: '董小姐 & 沫言 - 浮生如渡',    url: '/D-Music/董小姐 and 沫言 - 浮生如渡.mp3' },
  { title: '董小姐 & 沫言 - 渡心时序',    url: '/D-Music/董小姐 and 沫言 - 渡心时序.mp3' },
  { title: '董小姐 - 岁月如歌',           url: '/D-Music/董小姐 - 岁月如歌.mp3' },
  { title: '董小姐 - 我是渡船也是过客',   url: '/D-Music/董小姐 - 我是渡船也是过客.mp3' },
  { title: '董小姐 - 我的宝贝',           url: '/D-Music/董小姐 - 我的宝贝.mp3' },
  { title: '董小姐 - 秋风不问梧桐意',     url: '/D-Music/董小姐 - 秋风不问梧桐意.mp3' },
  { title: '董小姐 - 过客',              url: '/D-Music/董小姐 - 过客.mp3' },
  { title: '董小姐 - 除了你',             url: '/D-Music/董小姐 - 除了你.mp3' },
];
```

---

# 第二部分：架构设计文档

## 2.1 六化一体架构

```
┌─────────────────────────────────────────────────────────────┐
│                    D-Music 六化一体架构                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   标准化    │  │   流程化    │  │   科技化    │         │
│  │             │  │             │  │             │         │
│  │ • 技术标准  │  │ • 业务流程  │  │ • 音频技术  │         │
│  │ • 内容标准  │  │ • 服务流程  │  │ • 前端技术  │         │
│  │ • 体验标准  │  │ • 管理流程  │  │ • 后端技术  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   规范化    │  │   智能化    │  │   国标化    │         │
│  │             │  │             │  │             │         │
│  │ • 管理制度  │  │ • 智能推荐  │  │ • 国家标准  │         │
│  │ • 内容管理  │  │ • 智能创作  │  │ • 行业标准  │         │
│  │ • 服务质量  │  │ • 智能交互  │  │ • 国际标准  │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                    六化一体协同平台                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  数据中台   │  │  业务中台   │  │  技术中台   │         │
│  │             │  │             │  │             │         │
│  │ • 数据采集  │  │ • 用户服务  │  │ • 开发框架  │         │
│  │ • 数据处理  │  │ • 内容服务  │  │ • 组件库    │         │
│  │ • 数据分析  │  │ • 运营服务  │  │ • 中间件    │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└─────────────────────────────────────────────────────────────┘
```

## 2.2 前端架构分层

```
┌─────────────────────────────────────────────────────────────┐
│                  错误边界层 (Error Boundary)                  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  ErrorBoundary → 捕获渲染异常，优雅降级恢复            │  │
│  └───────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                  展示层 (Presentation)                       │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │MusicPlayer│ │MuseAICore│ │AICreator │ │SpaceTime │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │Profile   │ │StarPower │ │SmartRec  │ │Analytics │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
├─────────────────────────────────────────────────────────────┤
│                  组件层 (Components)                         │
│  ┌───────────────────────────────────────────────────────┐  │
│  │            shadcn/ui 组件库 (30个)                      │  │
│  │  Button | Card | Dialog | Tabs | Carousel | ...       │  │
│  └───────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                  资源层 (Assets)                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ D-brand  │ │ D-cover  │ │ D-poster │ │ D-Music  │      │
│  │ 全端Logo │ │ 封面(7张)│ │ 海报(6张)│ │ 音乐(11) │      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
├─────────────────────────────────────────────────────────────┤
│                  服务层 (Services)                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│  │api-svc   │ │idb-keyval│ │WebSocket │                    │
│  └──────────┘ └──────────┘ └──────────┘                    │
├─────────────────────────────────────────────────────────────┤
│                  配置层 (Config)                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐                    │
│  │variables │ │ types    │ │ API_Local│                    │
│  └──────────┘ └──────────┘ └──────────┘                    │
└─────────────────────────────────────────────────────────────┘
```

## 2.3 应用启动流程

```
index.html
    │
    ▼
src/main.tsx
    │
    ├── ErrorBoundary ← 全局错误边界包裹
    │       │
    │       ▼
    │   React.StrictMode
    │       │
    │       ▼
    │   App.tsx
    │       │
    │       ├── MusicPlayer ← 加载默认曲目（D-Music/）
    │       │       ├── 使用 D-brand Logo
    │       │       ├── 使用 D-cover 封面
    │       │       └── 使用 D-poster 海报
    │       │
    │       ├── MuseAICore
    │       ├── AICreator
    │       ├── MiniPlayer
    │       ├── FloatingCD
    │       └── ... 其他组件
    │
    └── index.css ← Tailwind CSS 4
```

## 2.4 数据流向图

```
用户交互
    │
    ▼
┌─────────────────┐
│   React Hooks   │ ← useState / useEffect / useCallback
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐ ┌────────┐
│  API   │ │  IDB   │ ← idb-keyval（本地音乐文件存储）
│ Service│ │ Store  │
└───┬────┘ └───┬────┘
    │          │
    ▼          ▼
┌────────┐ ┌────────┐
│ Local  │ │ Browser│
│ Server │ │ Storage│ ← 曲目元数据、播放记录、专辑
│ :3250  │ │        │
└────────┘ └────────┘
```

## 2.5 质量保障体系

```
┌─────────────────────────────────────────────┐
│              代码质量保障体系                 │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────┐  ┌─────────────┐           │
│  │ TypeScript  │  │   ESLint    │           │
│  │  严格模式   │  │  代码规范   │           │
│  │             │  │             │           │
│  │ • strict    │  │ • TS推荐    │           │
│  │ • noUnused  │  │ • React Hooks│          │
│  │ • ES2020    │  │ • React Refresh│        │
│  └─────────────┘  └─────────────┘           │
│                                             │
│  ┌─────────────┐  ┌─────────────┐           │
│  │ErrorBoundary│  │  Vite HMR   │           │
│  │  运行时保护 │  │  开发体验   │           │
│  │             │  │             │           │
│  │ • 渲染错误  │  │ • 热更新    │           │
│  │ • 优雅降级  │  │ • 快速构建  │           │
│  │ • 恢复机制  │  │ • 模块缓存  │           │
│  └─────────────┘  └─────────────┘           │
│                                             │
└─────────────────────────────────────────────┘
```

---

# 第三部分：API接口文档

## 3.1 API服务层

API服务层位于 `src/app/components/api-service.ts`，提供完整的本地API对接能力。

## 3.2 环境配置

```typescript
const ENV = {
  API_BASE: 'http://localhost:3250/api/v1',
  WS_URL: 'ws://localhost:3251/ws',
  STATIC_BASE: 'http://localhost:3250/static',
  USE_LOCAL_API: false,
};
```

## 3.3 API方法列表

| 方法 | 功能 | 路径 | 参数 | 返回值 |
|------|------|------|------|--------|
| `transcribeAudio` | 语音转文字 | POST /stt/transcribe | audioBlob, language | STTResult |
| `getNearbyMessages` | 附近消息查询 | GET /spacetime/nearby | lat, lng, radius | NearbyMessage[] |
| `sendSpaceTimeMessage` | 发送时空消息 | POST /spacetime/messages | payload | { id } |
| `getCollaborationTree` | 协作版本树 | GET /collaboration/tree/:id | creationId | CollaborationTree |
| `getStarPowerBalance` | 星力值余额 | GET /starpower/balance | userId? | StarPowerBalance |
| `dailyCheckin` | 每日签到 | POST /starpower/checkin | — | CheckinResult |
| `boostContent` | 星力助推 | POST /starpower/boost | contentId, amount | { remaining } |

## 3.4 WebSocket管理

```typescript
import { DMusicWebSocket, dmWebSocket } from './api-service';

dmWebSocket.connect('ws://localhost:3251/ws');

dmWebSocket.onMessage((msg) => {
  console.log('收到消息:', msg);
});

dmWebSocket.onStateChange((state) => {
  console.log('连接状态:', state);
});

dmWebSocket.disconnect();
```

## 3.5 本地数据持久化

### IndexedDB（idb-keyval）

```typescript
import { get as idbGet, set as idbSet, del as idbDel } from 'idb-keyval';

// 存储音乐文件
await idbSet(`track_file_${trackId}`, file);

// 读取音乐文件
const blob = await idbGet(`track_file_${trackId}`);

// 删除音乐文件
await idbDel(`track_file_${trackId}`);
```

### localStorage

```typescript
// 曲目元数据
localStorage.setItem('dmusic_tracks_metadata', JSON.stringify(metadata));

// 专辑数据
localStorage.setItem('dmusic_albums', JSON.stringify(albums));

// 播放记录
localStorage.setItem('dmusic_play_records', JSON.stringify(records));

// 播放事件
localStorage.setItem('dmusic_play_events', JSON.stringify(events));
```

## 3.6 默认曲目加载机制

MusicPlayer组件在首次加载时，自动从 `public/D-Music/` 目录加载11首董小姐原创音乐作为默认曲目：

```
加载流程：
1. 检查localStorage是否已有曲目元数据
2. 如果有 → 合并默认曲目与用户上传曲目（去重）
3. 如果没有 → 直接使用默认曲目列表
4. 如果IDB加载出错 → 降级到默认曲目
5. 首次加载自动创建「董小姐原创音乐」专辑
```

---

# 第四部分：组件开发指南

## 4.1 组件开发规范

### 4.1.1 文件命名规范

```
✅ 正确命名
├── MusicPlayer.tsx        # PascalCase组件
├── ErrorBoundary.tsx      # PascalCase组件
├── ThemeCustomizer.tsx    # PascalCase组件
└── ui/button.tsx          # shadcn/ui小写命名

❌ 错误命名
├── music-player.tsx
├── error_boundary.tsx
└── UI/Button.tsx
```

### 4.1.2 组件结构规范

```typescript
// 1. 导入顺序
import { useState, useEffect, useCallback, Component } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Music } from 'lucide-react';
import { Button } from './ui/button';
import type { UserProfile } from '../../../config/dmusic_types';

// 2. 类型定义
export interface ComponentProps {
  prop1: string;
  prop2?: number;
}

// 3. 品牌资源引用（统一路径）
const dmLogoChrome = "/D-brand/ios/AppIcon.appiconset/Icon-App-1024x1024@1x.png";

// 4. 组件定义
export function ComponentName({ prop1, prop2 = 0 }: ComponentProps) {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    // 初始化逻辑
  }, []);

  const handleClick = useCallback(() => {
    // 处理逻辑
  }, []);

  return (
    <div className="...">
      {/* 组件内容 */}
    </div>
  );
}

export default ComponentName;
```

### 4.1.3 类组件规范（ErrorBoundary）

```typescript
import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <DefaultErrorUI />;
    }
    return this.props.children;
  }
}
```

## 4.2 核心组件清单

| 组件名 | 功能 | 复杂度 | 资源依赖 | 状态 |
|--------|------|--------|---------|------|
| MusicPlayer | 主播放器 | 高 | D-brand, D-cover, D-poster, D-Music | ✅ |
| MuseAICore | AI控制核心 | 高 | D-brand | ✅ |
| AICreator | AI音乐创作 | 高 | D-brand | ✅ |
| SpaceTimeCall | 时空胶囊 | 高 | — | ✅ |
| ProfilePanel | 用户面板 | 中 | D-brand | ✅ |
| StarPowerBoard | 星力排行榜 | 中 | — | ✅ |
| SmartRecommendation | 智能推荐 | 中 | — | ✅ |
| SmartAnalytics | 智能分析 | 中 | — | ✅ |
| ThemeCustomizer | 主题定制 | 中 | — | ✅ |
| StandardsPanel | 规范面板 | 中 | — | ✅ |
| IncentiveSystem | 激励系统 | 中 | — | ✅ |
| PracticeRoom | 练习室 | 中 | — | ✅ |
| AudioVisualizer | 音频可视化 | 中 | — | ✅ |
| MVPlayer | MV播放器 | 中 | — | ✅ |
| FloatingCD | 悬浮CD | 低 | D-brand | ✅ |
| HoloGrid | 全息网格 | 低 | — | ✅ |
| ParticleBackground | 粒子背景 | 低 | — | ✅ |
| SoundWaveBar | 声波条 | 低 | — | ✅ |
| MobileNavBar | 移动导航 | 中 | — | ✅ |
| DeepSearch | 深度搜索 | 中 | — | ✅ |
| HotkeyOverlay | 热键覆盖 | 低 | — | ✅ |
| VoiceInput | 语音输入 | 中 | — | ✅ |
| NationalStandards | 国标中心 | 低 | — | ✅ |
| MiniPlayer | 迷你播放器 | 中 | D-brand | ✅ |
| AIAssistant | AI助手 | 中 | — | ✅ |
| NeuralStatusBar | 神经状态栏 | 低 | — | ✅ |
| **ErrorBoundary** | **错误边界** | **低** | **—** | **✅ 新增** |

## 4.3 UI组件库

位于 `src/app/components/ui/`，包含30个shadcn/ui组件：

```
UI组件库 (30个)
├── accordion.tsx      # 手风琴
├── alert-dialog.tsx   # 警告对话框
├── alert.tsx          # 警告
├── aspect-ratio.tsx   # 宽高比
├── avatar.tsx         # 头像
├── badge.tsx          # 徽章
├── breadcrumb.tsx     # 面包屑
├── button.tsx         # 按钮
├── calendar.tsx       # 日历
├── card.tsx           # 卡片
├── carousel.tsx       # 轮播
├── chart.tsx          # 图表
├── checkbox.tsx       # 复选框
├── collapsible.tsx    # 可折叠
├── command.tsx        # 命令面板
├── context-menu.tsx   # 右键菜单
├── dialog.tsx         # 对话框
├── drawer.tsx         # 抽屉
├── dropdown-menu.tsx  # 下拉菜单
├── form.tsx           # 表单
├── hover-card.tsx     # 悬浮卡片
├── input-otp.tsx      # OTP输入
├── input.tsx          # 输入框
├── label.tsx          # 标签
├── menubar.tsx        # 菜单栏
├── navigation-menu.tsx # 导航菜单
├── pagination.tsx     # 分页
├── popover.tsx        # 弹出框
├── progress.tsx       # 进度条
├── radio-group.tsx    # 单选组
├── resizable.tsx      # 可调整大小
├── scroll-area.tsx    # 滚动区域
├── select.tsx         # 选择器
├── separator.tsx      # 分隔线
├── sheet.tsx          # 侧边栏
├── sidebar.tsx        # 侧边栏
├── skeleton.tsx       # 骨架屏
├── slider.tsx         # 滑块
├── sonner.tsx         # 通知
├── switch.tsx         # 开关
├── table.tsx          # 表格
├── tabs.tsx           # 标签页
├── textarea.tsx       # 文本域
├── toggle-group.tsx   # 切换组
├── toggle.tsx         # 切换
└── tooltip.tsx        # 提示
```

## 4.4 动画使用规范

```typescript
import { motion, AnimatePresence } from 'motion/react';

// 1. 基础动画
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  内容
</motion.div>

// 2. 悬停动画
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  按钮
</motion.button>

// 3. 列表动画
<AnimatePresence>
  {items.map((item) => (
    <motion.div
      key={item.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {item.content}
    </motion.div>
  ))}
</AnimatePresence>

// 4. 循环动画（如CD旋转）
<motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
>
  旋转元素
</motion.div>
```

## 4.5 ErrorBoundary使用规范

ErrorBoundary已在 `src/main.tsx` 中作为全局错误边界包裹App组件：

```typescript
// src/main.tsx
import { ErrorBoundary } from './app/components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
```

**局部使用**：对于易出错组件，可单独包裹：

```typescript
<ErrorBoundary fallback={<div>加载失败</div>}>
  <SomeRiskyComponent />
</ErrorBoundary>
```

---

# 第五部分：部署运维手册

## 5.1 环境要求

| 环境 | 版本要求 | 说明 |
|------|---------|------|
| Node.js | ≥18.0.0 | 推荐使用LTS版本 |
| pnpm | ≥8.0.0 | 包管理器 |
| Git | ≥2.30.0 | 版本控制 |
| MySQL | ≥8.0.0 | 数据库（可选） |
| Redis | ≥6.0.0 | 缓存（可选） |

## 5.2 开发环境部署

```bash
# 1. 克隆仓库
git clone <repository-url>
cd Music-Player

# 2. 安装依赖
pnpm install

# 3. 环境变量（可选）
cp .env.example .env.local

# 4. 启动开发服务器
pnpm dev
# → http://localhost:5173

# 5. 类型检查
pnpm typecheck

# 6. 代码检查
pnpm lint
```

## 5.3 配置文件详解

### TypeScript配置（tsconfig.json）

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### TypeScript Node配置（tsconfig.node.json）

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

### ESLint配置（.eslintrc.cjs）

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

### Vite配置（vite.config.ts）

```typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

## 5.4 生产环境部署

```bash
# 1. 构建生产版本
pnpm build

# 2. 预览生产构建
pnpm preview

# 3. 部署到服务器
# 将 dist/ 目录部署到Web服务器
```

## 5.5 Docker部署

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
docker build -t d-music:latest .
docker run -d -p 80:80 --name d-music d-music:latest
```

## 5.6 CI/CD配置

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Type check
        run: pnpm typecheck

      - name: Lint
        run: pnpm lint

      - name: Build
        run: pnpm build

      - name: Deploy
        run: |
          # 部署脚本
```

## 5.7 监控告警

```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: any) {
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

window.addEventListener('error', (event) => {
  console.error('全局错误:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('未处理Promise:', event.reason);
});
```

## 5.8 运维检查清单

### 部署前检查

- [ ] 代码已提交并推送
- [ ] TypeScript编译无错误（`pnpm typecheck`）
- [ ] ESLint检查无错误（`pnpm lint`）
- [ ] 构建成功（`pnpm build`）
- [ ] 环境变量已配置
- [ ] D-brand/D-cover/D-poster/D-Music资源已就位
- [ ] manifest.json已更新

### 部署后检查

- [ ] 应用可正常访问
- [ ] 品牌Logo正确显示（D-brand）
- [ ] 默认音乐可播放（D-Music 11首）
- [ ] 封面海报正确显示（D-cover/D-poster）
- [ ] ErrorBoundary正常工作
- [ ] PWA功能正常

## 5.9 故障排查

| 问题 | 可能原因 | 解决方案 |
|------|---------|---------|
| 构建失败 | 依赖缺失 | `pnpm install` |
| 类型错误 | TypeScript配置 | 检查tsconfig.json |
| ESLint报错 | 代码规范 | `pnpm lint` 查看详情 |
| 样式丢失 | Tailwind配置 | 检查vite.config.ts中tailwindcss插件 |
| Logo不显示 | 路径错误 | 检查public/D-brand/目录结构 |
| 音乐无法播放 | 文件缺失 | 检查public/D-Music/目录 |
| 海报不显示 | 文件缺失 | 检查public/D-cover/和D-poster/ |
| 白屏 | 渲染错误 | 检查ErrorBoundary是否捕获错误 |
| API请求失败 | CORS配置 | 检查vite.config.ts proxy配置 |
| 性能下降 | Bundle过大 | 代码分割 + 懒加载 |

---

## 附录

### A. 常用命令速查

```bash
# 开发
pnpm dev              # 启动开发服务器 (localhost:5173)
pnpm build            # 构建生产版本
pnpm preview          # 预览生产构建

# 代码质量
pnpm typecheck        # TypeScript类型检查
pnpm lint             # ESLint代码检查

# 依赖管理
pnpm install          # 安装依赖
pnpm update           # 更新依赖
pnpm outdated         # 检查过期依赖
```

### B. 开发依赖清单

| 包名 | 版本 | 用途 |
|------|------|------|
| @types/react | ^19.2.15 | React类型定义 |
| @types/react-dom | ^19.2.3 | ReactDOM类型定义 |
| @typescript-eslint/eslint-plugin | ^8.60.0 | TS ESLint插件 |
| @typescript-eslint/parser | ^8.60.0 | TS ESLint解析器 |
| @vitejs/plugin-react | 4.7.0 | Vite React插件 |
| @tailwindcss/vite | 4.1.12 | Tailwind Vite插件 |
| eslint | ^10.4.0 | 代码检查 |
| eslint-plugin-react-hooks | ^7.1.1 | React Hooks规则 |
| eslint-plugin-react-refresh | ^0.5.2 | React Refresh规则 |
| tailwindcss | 4.1.12 | CSS框架 |
| vite | 6.3.5 | 构建工具 |

### C. 相关文档链接

| 文档 | 路径 | 说明 |
|------|------|------|
| 项目指导书 | docs/10-.../Guidelines.md | 五标五高五化核心理念 |
| 审核报告 | docs/10-.../D-Music-Audit-Phase3.md | Phase 3全链路审核 |
| 实施方案 | docs/10-.../D-Music-Implementation-Plan.md | 三阶段实施规划 |
| 配置变量 | config/dmusic_variables.json | 全局配置 |
| 类型定义 | config/dmusic_types.ts | TypeScript类型 |
| API文档 | config/API_Local.md | 本地API对接方案 |
| 数据库DDL | database/d_music_schema.sql.md | MySQL建表语句 |
| Figma提示 | docs/10-.../Figma_AI_Prompts.md | Figma AI提示词 |

---

**文档版本**：v4.0.0
**最后更新**：2026-05-26
**变更摘要**：同步Logo/海报/音乐资源配置、新增ErrorBoundary、ESLint、TypeScript配置说明、更新架构图与组件清单
**维护团队**：YYC³ Team / Trae AI Assistant
