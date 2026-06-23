---
title: "关于这个博客"
description: "这个博客是怎么搭起来的，用了什么技术，为什么这么选。"
pubDatetime: 2026-06-23
tags: ["博客", "Astro"]
---

这篇文章聊聊这个博客本身——怎么搭的，为什么选这些技术。

## 为什么想写博客

干后端这几年，学了不少东西，但很多都是用完就忘。收藏夹里一堆链接，笔记软件里一堆半成品，真正需要的时候又找不着。

与其继续这样，不如搞个博客，逼自己把学过的东西梳理一遍。写出来本身就是最好的复习，万一还能帮到别人，那就更好了。

## 技术选型

### Astro

之前试过几个方案——Hexo、Hugo、WordPress，都不太满意。直到遇到 [Astro](https://astro.build/)，感觉对了。

Astro 最打动我的是"零 JS 默认"——页面默认不加载任何客户端 JavaScript，只有用到交互组件时才会按需加载。博客这种内容型站点，要的就是快，不需要花里胡哨的客户端渲染。

对我这个后端来说，还有几个很实用的点：

- Markdown 写文章，跟写代码一样顺手
- 内容集合（Content Collections）有类型校验，写 frontmatter 不容易出错
- 构建产物小，部署简单

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) 挺适合我这种 CSS 不太行的后端选手。不用纠结 class 命名，直接在模板里写工具类，所见即所得。打包的时候还会自动 Tree-shake，最终 CSS 体积很小。

### Pagefind

[Pagefind](https://pagefind.app/) 是个静态搜索方案，构建时自动给页面建索引，不需要后端服务就能搜。博客嘛，搜索体验得有。

### 主题

不想从零开始设计页面，所以直接基于 [AstroPaper](https://github.com/satnaing/astro-paper) 改的。它自带暗色模式、SEO 优化、OG 图片生成这些功能，省了不少事。我在它的基础上做了些调整：

- 语言切成了中文
- 去掉了上游模板里用不着的示例内容
- 配了 GitHub Pages 部署

## 部署

博客托管在 GitHub Pages 上，通过 GitHub Actions 自动部署。流程很简单：

1. `dev` 分支上写东西、改东西
2. 本地跑 `pnpm dev` 看看效果
3. 没问题就合并到 `master`
4. GitHub Actions 自动构建部署，大概一分钟上线

写文章就是新建一个 Markdown 文件，加上 frontmatter：

```markdown
---
title: "文章标题"
description: "文章简介"
pubDatetime: 2026-06-23
tags: ["标签"]
---

正文内容...
```

推上去就完事了。

## 后续计划

先把博客跑起来，后面再慢慢完善。可能会加评论系统、RSS 订阅、阅读统计这些，看心情吧。
