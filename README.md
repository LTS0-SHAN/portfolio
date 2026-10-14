# 个人作品集网站 Portfolio

AI 辅助应用开发课程（SK1002）实验 4 的实践项目。项目在个人作品集网站的基础上完成一次完整的功能迭代，并使用 Git 管理版本、部署到 GitHub Pages。

## 功能特性

- 响应式个人作品集主页：首页、关于、作品、技能、联系
- 作品分类筛选：全部 / Web 前端 / 数据分析 / AI 应用 / 后端服务
- 浅色 / 深色主题切换，使用 localStorage 记住用户选择
- 纯静态实现：原生 HTML、CSS、JavaScript，不依赖任何框架和第三方 UI 库

## 目录结构

```
lab04/
├── index.html                 # 页面结构
├── css/style.css              # 样式（含浅色/深色主题变量）
├── js/main.js                 # 分类筛选与主题切换逻辑
├── .trae/rules/project_rules.md  # 项目开发规则
└── README.md
```

## 本地运行

在项目根目录启动任意静态服务即可：

```bash
python3 -m http.server 5500
```

浏览器访问 `http://127.0.0.1:5500`。

## 开发约定

项目开发规则见 `.trae/rules/project_rules.md`：使用原生技术栈、不引入第三方 UI 库、
保持现有页面结构、修改前先阅读现有代码、修改后必须验证、不破坏已有功能。

## 部署

网站为纯静态页面，已通过 GitHub Pages 部署：

- 访问地址：https://lts0-shan.github.io/portfolio/
- 仓库：https://github.com/LTS0-SHAN/portfolio
