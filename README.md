# Nexape

Nexape 是 [BIPifrost](https://github.com/BIPifrost) 的个人博客，用来记录软件工程学习、项目实践以及生活中的想法。

线上地址：[https://bipifrost.github.io/Nexape/](https://bipifrost.github.io/Nexape/)

## 本地运行

```sh
pnpm install
pnpm dev
```

生产构建与预览：

```sh
pnpm build
pnpm preview
```

## 写作

文章位于 `src/content/posts/`，可以参考根目录的 `BLOG_TEMPLATE.md`，或运行：

```sh
pnpm new-post <文件名>
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 致谢

本站使用 [Astro](https://astro.build/) 构建，并基于 [Fuwari](https://github.com/saicaca/fuwari) 主题进行个性化修改。Fuwari 源码采用 MIT License。
