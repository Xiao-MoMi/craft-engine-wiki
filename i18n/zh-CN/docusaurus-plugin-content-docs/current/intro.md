---
title: 📗 介绍
id: intro
slug: /
---

import ColoredLink from '@site/src/components/ColoredLink';
import Highlight from '@site/src/components/Highlight';

嘿！欢迎来到 CraftEngine 文档！

<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img src="img/craftengine.gif" alt="banner" width="400" height="400" />
</div>


## 什么是 CraftEngine

CraftEngine 使您能够通过创建新的方块、物品和配方来自定义您的 Minecraft 服务器体验。所有这些都可以仅通过资源包和服务器端实现来完成，无需任何客户端模组安装。

:::info

CraftEngine 附带了一整套方块行为 API，让您可以像在 Forge/Fabric 中一样注册自定义方块行为。如果您曾经是模组开发者，您会对 CraftEngine 的注册系统感到宾至如归！我们建议使用 [PaperWeight](https://github.com/PaperMC/paperweight) 作为您的首选开发依赖项。

:::

## 获取插件
- 社区版可在 <Highlight color="#3CB371"><ColoredLink to="https://modrinth.com/plugin/craftengine" color="#ffffff">**Modrinth**</ColoredLink></Highlight> 上下载
- 高级版可在 <Highlight color="#2E8B57"><ColoredLink to="https://polymart.org/product/7624/craftengine" color="#ffffff">**Polymart**</ColoredLink></Highlight> 上购买

## 安装

CraftEngine 需要一个基于 <Highlight color="#1877F2"><ColoredLink to="https://papermc.io/downloads/paper" color="#ffffff">**Paper**</ColoredLink></Highlight> 的 Minecraft 服务器才能运行。它与大多数常见的衍生版本兼容，包括 <Highlight color="#1877F2"><ColoredLink to="https://papermc.io/downloads/folia" color="#ffffff">**Folia**</ColoredLink></Highlight>、Pufferfish、Purpur 和类似的变体。
要安装插件，只需将 .jar 文件拖放到服务器的 /plugins 文件夹中即可。

:::info

CraftEngine 需要 JDK 21 或更高版本才能运行。支持的最低 Minecraft 版本为 1.20，但这可能会在未来的更新中根据[网易](https://minecraft.wiki/w/China_Edition)在中国对 Minecraft 服务器版本的支持情况而改变。

:::

## 获取插件支持
- <Highlight color="#FFA500">**高级版**</Highlight> 许可证用户可以通过我们的 <Highlight color="#9370DB"><ColoredLink to="https://discord.gg/xiaomomi" color="#ffffff">**Discord**</ColoredLink></Highlight> 机器人进行验证，以访问专属支持渠道。
- 寻求技术援助的开发者应使用 #api-help 渠道获得专门支持。

## 主要区别
CraftEngine 的底层实现原理与同类竞争产品有着根本的不同。如果您对技术细节感到好奇，可以在 GitHub 上查看我们的代码以加深了解。

简单来说：
- CraftEngine 实现了服务器端模组制作，能够创建超越当前 Minecraft 版本限制的新方块
- 使用类似于 ViaBackwards 的实现方法，它将这些新方块转换为对玩家仍然可见的旧版方块格式

:::tip

您可以在 [☄️ 独家功能](./intro/exclusive_feature) 上快速浏览 CraftEngine 的一些独家功能

有些功能在其他插件中已经存在——但 CraftEngine 做得更好。请在 [🥕 更胜一筹](./intro/simply_better) 上查看比较

:::
