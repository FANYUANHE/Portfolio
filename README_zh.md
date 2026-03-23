# 范园贺 | 个人作品集

基于 **Vite + React 18** 构建的个人作品集 / 在线简历网站，支持中英双语、明暗主题切换、滚动触发动画和完全数据驱动的架构。

**在线访问：** [https://euanfan.github.io/Portfolio/](https://euanfan.github.io/Portfolio/)

---

## 目录

- [功能概览](#功能概览)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [配置说明](#配置说明)
- [页面模块](#页面模块)
- [设计系统](#设计系统)
- [浏览器支持](#浏览器支持)
- [部署](#部署)
- [许可与致谢](#许可与致谢)

---

## 功能概览

- **Vite + React**：标准现代前端工程化构建，开发体验好、生产构建产物优化。
- **中英双语**：完整的中文和英文内容，一键切换语言，偏好保存在 localStorage。
- **数据驱动**：个人信息、工作经历、项目展示、技能等集中在数据模块中，修改数据即可更新全站。
- **明暗主题**：浅色/深色主题切换，支持系统偏好检测，首次加载无闪烁。
- **响应式布局**：桌面端、平板端和移动端完整适配。
- **丰富动效**：首屏 GSAP 时间线入场动画、ScrollTrigger 滚动触发动画、液态背景光斑、毛玻璃导航栏。
- **模块化组件**：每个页面区块均为独立 React 组件，易于维护和扩展。
- **可访问性**：语义化 HTML、平滑滚动、外部链接 `rel="noopener noreferrer"`、交互元素 aria 标签。

---

## 技术栈

| 类别     | 技术                         | 说明                           |
|----------|------------------------------|--------------------------------|
| 构建工具 | Vite 6                       | 快速开发服务器与生产构建优化   |
| 框架     | React 18                     | 函数式组件 + Hooks             |
| 样式     | Tailwind CSS 3               | 原子类 + 自定义 CSS 变量       |
| 动画     | GSAP 3 + ScrollTrigger       | 时间线动画、滚动触发动画       |
| 图标     | Lucide React                 | 组件式 SVG 图标                |
| 字体     | Inter + Noto Sans SC         | 英文 + 中文排版（Google Fonts）|
| 部署     | GitHub Actions + GitHub Pages | 推送到 main 自动构建部署       |

---

## 项目结构

```
Portfolio/
├── index.html                        # Vite 入口（含主题预加载脚本）
├── package.json                      # 依赖与脚本
├── vite.config.js                    # Vite 配置（base: /Portfolio/）
├── tailwind.config.js                # Tailwind 配置（data-theme 暗色模式）
├── postcss.config.js                 # PostCSS 配置
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions：构建 → 部署至 gh-pages
├── public/
│   └── images/
│       ├── favicon.png               # 网站图标
│       ├── hero/                     # 首屏头像
│       ├── company_logo/             # 公司 Logo
│       └── low-code_platform/        # 项目截图
└── src/
    ├── main.jsx                      # React 挂载入口
    ├── App.jsx                       # 根组件（主题/语言状态管理）
    ├── index.css                     # 全局样式 + Tailwind + CSS 变量
    ├── data/
    │   ├── profileEn.js              # 英文数据
    │   ├── profileZh.js              # 中文数据
    │   └── uiText.js                 # UI 文案国际化（标签、标题等）
    ├── utils/
    │   └── theme.js                  # 主题/语言持久化工具函数
    └── components/
        ├── Navigation.jsx            # 顶部导航栏 + 毛玻璃效果
        ├── ThemeToggle.jsx           # 明暗主题切换按钮
        ├── LangToggle.jsx            # 中英语言切换按钮
        ├── LiquidBackground.jsx      # 浮动渐变光斑背景
        ├── Hero.jsx                  # 首屏区块
        ├── About.jsx                 # 关于我（Bento 网格布局）
        ├── Experience.jsx            # 工作经历（时间线）
        ├── Projects.jsx              # 项目展示（轮播）
        ├── Skills.jsx                # 技术能力
        └── Footer.jsx                # 联系方式 + 页脚
```

---

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

然后在浏览器访问 `http://localhost:5173`。

### 生产构建

```bash
npm run build
```

构建产物在 `dist/` 目录，可部署至任意静态托管服务。

### 预览构建产物

```bash
npm run preview
```

---

## 配置说明

全站内容由 `src/data/` 下的三个数据模块驱动：

| 文件              | 用途                                    |
|-------------------|-----------------------------------------|
| `profileEn.js`    | 所有英文内容（个人信息、经历、项目、技能） |
| `profileZh.js`    | 所有中文内容（与英文结构一一对应）         |
| `uiText.js`       | UI 标签与区块标题的中英文文案              |

### 数据字段说明

| 字段               | 说明         | 示例                                |
|--------------------|--------------|-------------------------------------|
| `name`             | 英文名       | `"Euan Fan"`                        |
| `nameChinese`      | 中文名       | `"范园贺"`                          |
| `title`            | 职位标题     | `"高级前端 / 全栈工程师"`           |
| `location`         | 所在地       | `"中国 · 北京"`                     |
| `heroImage`        | 首屏头像路径 | `"images/hero/hero_photo.jpg"`      |
| `heroSubline`      | 一句话介绍   | `"持续打造服务于百万级用户的平台型产品..."` |
| `heroVisa`         | 工作状态     | `"可在中国合法工作"`                |
| `heroTechStack`    | 技术栈标签   | `["React", "TypeScript", "Node.js"]` |
| `experienceYears`  | 经验年限     | `"10年以上经验"`                    |
| `email` / `phone` / `wechat` | 联系方式 | —                               |

### 教育经历

```javascript
education: {
  school: "北华大学",
  major: "网络工程",
  period: "2011 - 2015"
}
```

### 关于我模块

- **`aboutIntro`**：About 区首段完整介绍。
- **`aboutHighlights`**：三条核心要点，每项 `{ icon, text }`，`icon` 为 Lucide 图标名（如 `code`、`brain`、`building-2`）。
- **`keyStrengths`**：核心能力列表。
- **`impactHighlights`**：核心成果列表。

### 工作经历

```javascript
experienceList: [
  {
    company: "美团",
    companyLogo: "images/company_logo/meituan.png",
    companyBrief: "中国领先的本地生活服务与配送平台。",
    companyUrl: "https://www.meituan.com/en-US/about-us",
    position: "高级软件工程师",
    period: "2021年7月 - 2022年4月",
    description: ["作为核心开发成员参与美团优选..."],
    highlights: ["前端基础设施", "冷热分层"]
  }
]
```

### 项目展示

```javascript
projectList: [
  {
    title: "企业级低代码运营活动平台",
    type: "mobile",              // "mobile" | "web"
    overview: "面向运营团队的可视化低代码平台...",
    screenshots: ["images/low-code_platform/toC_1.png"],
    outcomes: [...],
    role: [...],
    background: [...],
    challengesSolved: [...],
    techStack: ["前端：React、TypeScript", "后端：Node.js、MongoDB"],
    outcomeKeywords: ["30分钟"],  // 文本中高亮的关键词
    roleKeywords: ["项目负责人"],
    backgroundKeywords: ["高频上线"],
    challengesKeywords: ["响应速度"]
  }
]
```

### 技能

- **`skillsGroups`**：分组 `{ title, items: [] }`，如 `"语言与框架"` 和 `"工具与平台"`。
- **`skillColors`**：技能名称到品牌色的映射，用于标签样式和悬停效果。

### 社交链接

```javascript
social: {
  github: "https://github.com/EUANFAN",
  linkedin: "https://www.linkedin.com/in/euan-fan/"
}
```

---

## 页面模块

| 模块       | 组件                 | 说明                                                         |
|------------|----------------------|--------------------------------------------------------------|
| **导航**   | `Navigation.jsx`     | 固定顶部，滚动后毛玻璃效果；包含语言切换和主题切换           |
| **首屏**   | `Hero.jsx`           | 全屏高度；姓名、职位、头像、技术栈、工作状态。GSAP 入场动画  |
| **关于我** | `About.jsx`          | Bento 网格布局：简介、核心能力、成果亮点、教育背景、专业资质 |
| **工作经历** | `Experience.jsx`   | 时间线布局，带公司 Logo、职位、工作描述。Intersection Observer 触发动画 |
| **项目展示** | `Projects.jsx`     | 项目卡片，截图轮播，成果、职责、背景、挑战、技术栈。关键词高亮 |
| **技能**   | `Skills.jsx`         | 分组技能标签，带品牌色和悬停效果                             |
| **联系**   | `Footer.jsx`         | 邮箱 CTA 按钮、社交链接（GitHub、LinkedIn）、版权信息        |

**全局层：**

- **LiquidBackground**：固定背景层，三个模糊渐变光斑缓慢浮动
- **noise-overlay**：极低透明度的分形噪点纹理叠加层

---

## 设计系统

### CSS 变量

| 变量               | 浅色模式默认值                | 深色模式覆盖值                  |
|--------------------|-------------------------------|--------------------------------|
| `--bg-primary`     | `#FAFBFC`                    | `#0B1120`                      |
| `--bg-secondary`   | `#F1F5F9`                    | `#111827`                      |
| `--text-primary`   | `#0F172A`                    | `#E5E7EB`                      |
| `--text-muted`     | `#64748B`                    | `#9CA3AF`                      |
| `--accent`         | `#0EA5E9`                    | `#38BDF8`                      |
| `--accent-soft`    | `#E0F2FE`                    | `rgba(56, 189, 248, 0.15)`     |
| `--glass-bg`       | `rgba(255, 255, 255, 0.85)`  | `rgba(17, 24, 39, 0.8)`        |

主题通过 `<html>` 元素的 `data-theme` 属性切换。`index.html` 中的预加载脚本会在首次渲染前读取 localStorage 和系统偏好，避免主题闪烁。

### 字体

- **英文：** Inter（Google Fonts），300–900 字重
- **中文：** Noto Sans SC / 思源黑体（Google Fonts），300–900 字重

### UI 模式

- **毛玻璃效果**：`.glass` = 半透明背景 + `backdrop-filter: blur(20px)` + 细边框
- **Bento 网格**：About 区使用 CSS Grid（桌面端左 1.6fr / 右 1fr，移动端堆叠）
- **时间线**：Experience 区垂直时间线，带动画圆点和悬停淡化效果
- **轮播组件**：项目截图轮播，支持圆点指示器和箭头导航

### 动画

- **Hero**：GSAP 时间线，入场动画（位移 + 淡入 + 缩放）
- **About**：ScrollTrigger 触发 Bento 卡片逐个入场
- **Experience**：Intersection Observer 触发时间线项从左滑入
- **Projects**：Intersection Observer 触发项目卡片从下方入场
- **Skills / Footer**：ScrollTrigger 触发标题和内容逐级入场

---

## 浏览器支持

- 现代浏览器（Chrome、Firefox、Safari、Edge）推荐最新版本
- 依赖：ES6+、React 18、CSS `backdrop-filter`、Intersection Observer、GSAP
- 移动端完整可用

---

## 部署

### GitHub Pages（自动化）

项目已配置 GitHub Actions（`.github/workflows/deploy.yml`），每次推送到 `main` 分支时自动构建部署：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动执行 `npm ci` → `npm run build`
3. 构建产物（`dist/`）部署到 `gh-pages` 分支
4. 网站上线：`https://euanfan.github.io/Portfolio/`

**前置设置：** 在 GitHub 仓库的 **Settings → Pages** 中，将 **Source** 设为 `Deploy from a branch`，分支选 `gh-pages`，目录选 `/ (root)`。

### 手动部署

将 `dist/` 目录内容上传至任意静态托管服务（Vercel、Netlify、Cloudflare Pages 等）。

> **注意：** 如果部署到非根路径，需要相应修改 `vite.config.js` 中的 `base` 配置。

---

## 许可与致谢

- 使用 React、GSAP 与 Tailwind CSS 构建
- 版权 © 2025 范园贺
- 本仓库仅供个人作品集使用
