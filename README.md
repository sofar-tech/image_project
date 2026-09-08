# 我的博客（image_project）

基于 [Astro](https://astro.build/) 的个人博客，通过 **GitHub Pages** 发布。

站点地址（部署成功后）：

https://sofar-tech.github.io/image_project/

## 本地预览

需要已安装 [Node.js](https://nodejs.org/)（建议 22+）。

```bash
npm install
npm run dev
```

浏览器打开终端里提示的本地地址即可。

## 发布一篇新文章

1. 在 `src/content/blog/` 新建 Markdown 文件，例如 `my-new-post.md`
2. 文件开头写上元信息：

```md
---
title: '文章标题'
description: '一句话摘要'
pubDate: 'Sep 10 2026'
---

这里写正文……
```

3. 提交并推送：

```bash
git add .
git commit -m "Add new blog post"
git push
```

4. 打开 GitHub 仓库的 **Actions**，等 Deploy 成功后刷新网站。

## 首次启用 GitHub Pages

1. 打开仓库：https://github.com/sofar-tech/image_project  
2. **Settings → Pages**  
3. **Source** 选择 **GitHub Actions**  
4. 把本仓库代码 push 到 `main`，触发工作流自动部署

## 常用命令

| 命令 | 作用 |
|------|------|
| `npm run dev` | 本地开发预览 |
| `npm run build` | 构建静态站点到 `dist/` |
| `npm run preview` | 预览构建结果 |

## 修改站点名称

编辑 `src/consts.ts` 里的 `SITE_TITLE` 和 `SITE_DESCRIPTION`。
