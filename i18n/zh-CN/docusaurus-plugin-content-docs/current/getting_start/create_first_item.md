---
title: 💎 第一个物品
id: create_first_item
---

import React from 'react';
import Highlight from '@site/src/components/Highlight';
import PluginFileTree from '@site/src/components/PluginFileTree';
import ColoredLink from '@site/src/components/ColoredLink';

## 你的第一大步

感谢您选择 CraftEngine - 这是一个您不会后悔的明智之举！欢迎来到 CraftEngine 的第一个教程！我敢打赌您已经迫不及待地想创建您的第一个物品了。但在我们开始之前，让我带您了解一下 CraftEngine 的 <Highlight color="#3CB371">**配置文件夹**</Highlight> 是如何组织的。

:::tip

您可以点击文件夹，不要错过每个文件旁边的“？”——它也是可以点击的！

:::

<PluginFileTree
  initialTreeData={[
    {
      id: "cache",
      name: "cache",
      hoverText: "一些缓存文件（例如，由外部托管系统生成的临时数据）主要用于服务器重启期间的数据初始化。",
      children: []
    },
    {
      id: "generated",
      name: "generated",
      hoverText: "用于存储生成的资源包。",
      children: [
        {
          id: "resource_pack.zip",
          name: "resource_pack.zip",
          isLeaf: true,
        }
      ]
    },
    {
      id: "libs",
      name: "libs",
      hoverText: "此文件夹包含 CraftEngine 的运行时依赖项。它们会根据您使用的功能动态加载。例如，只有在启用 S3 功能时才会下载与 S3 相关的依赖项。",
      children: []
    },
    {
      id: "resources",
      name: "resources",
      hoverText: "这是资源文件夹。它包含您的配置和资源包。",
      children: [
          {
          id: "tutorial",
          name: "tutorial",
          hoverText: "这是我们在教程中创建的包名 - 您可以随意命名。请记住，如果文件夹名称以“.”开头，它将被视为隐藏文件，不会被读取。",
          children: [
            {
              id: "configuration",
              name: "configuration",
              hoverText: "此文件夹用于配置文件 - 确保它们是 yml 或 json 格式。",
              children: [
                {
                  id: "first_item",
                  name: "first_item.yml",
                  isLeaf: true,
                  hoverText: "这是您首先要制作的东西 - 您的第一个物品！",
                }
              ]
            },
            {
              id: "resourcepack",
              name: "resourcepack",
              hoverText: "此文件夹存储资源包文件 - 它们的结构与 Minecraft 资源包相同。",
              children: [
                {
                  id: "assets",
                  name: "assets",
                  children: [

                  ]
                }
              ]
            },
            {
              id: "pack",
              name: "pack.yml",
              isLeaf: true,
              hoverText: "这是资源元数据文件 - 它定义了默认命名空间、作者、版本等内容。",
            }
          ]
        }
      ]
    },
    {
      id: "translations",
      name: "translations",
      hoverText: "此文件夹包含各种语言的翻译文件。它主要用于命令反馈和警告消息。",
      children: [
        {
          id: "en",
          name: "en.yml",
          isLeaf: true,
        },
        {
          id: "zh_cn",
          name: "zh_cn.yml",
          isLeaf: true,
        }
      ]
    },
    {
      id: "additional-real-blocks.yml",
      name: "additional-real-blocks.yml",
      isLeaf: true,
      hoverText: "此文件将根据 mappings.yml 中定义的映射向服务器注册额外的方块状态。",
    },
    {
      id: "commands.yml",
      name: "commands.yml",
      isLeaf: true,
      hoverText: "这是插件的命令文件。"
    },
    {
      id: "config.yml",
      name: "config.yml",
      isLeaf: true,
      hoverText: "这是插件的主配置文件。"
    },
    {
      id: "mappings.yml",
      name: "mappings.yml",
      isLeaf: true,
      hoverText: "这是插件的方块映射文件——它决定了您可以将哪些方块状态用于自定义方块。"
    }
  ]}
/>

<div style={{ marginBottom: "32px" }}></div>

### 设置文件夹结构

继续并在上面的文件夹中找到我们的 <Highlight color="#3CB371">**first_item.yml**</Highlight>，然后创建相同的目录结构。请注意 - 您无需为本教程创建 pack.yml 文件。

<details>
  <summary>提示</summary>

1️⃣ 创建一个 `tutorial` 文件夹 \ 
2️⃣ 在其中创建一个 `configuration` 文件夹 \ 
3️⃣ 在那里添加一个名为 `first_item.yml` 的新文件

</details>

### 创建您的第一个物品配置

现在将此配置复制到您的 YML 文件中。保存后，只需运行 `/ce reload` 并在游戏中使用 `/ce item get tutorial:diamond` 获取您的物品。

```yaml
items:
  tutorial:diamond:
    material: diamond
```

### 添加基本物品信息

现在它只是一颗普通的钻石 - 让我们给它加点料！我们将给它一个自定义名称和描述。试试这个配置：

```yaml
items:
  tutorial:diamond:
    material: diamond
    data:
      item-name: "<blue>闪亮的钻石"
      lore:
        - "<!i><red>史诗物品"
```

![](/img/first_item.png)


:::tip

别忘了**重新加载**您的配置！\ 
（使用 `/ce reload` 应用更改）

关于 `<!i>`：它会移除斜体格式（lore 文本默认为紫色和斜体）。

需要文本格式方面的帮助吗？
查看 <Highlight color="#e96d7b"><ColoredLink to="https://docs.advntr.dev/minimessage/format.html" color="#ffffff">**MiniMessage**</ColoredLink></Highlight> 以获取自定义样式！✨

:::

### 动态物品渲染

如何更新物品的描述？只需使用 CraftEngine 特殊的客户端绑定数据功能！与常规数据不同，这只会向玩家显示 - 服务器甚至不会知道它的存在。

```yaml
items:
  tutorial:diamond:
    material: diamond
    client-bound-data:
      item-name: "<blue>闪亮的钻石"
      lore:
        - "<!i><white>普通物品"
```

如果您仍然拥有刚刚创建的那颗钻石，请尝试使用客户端绑定数据！只需触发服务器端物品更新 - 将其丢弃或在容器中移动它 - 然后 bam！焕然一新。如果它没有更新，请尝试切换到生存模式。

:::caution

`client-bound-data` 意味着服务器不会拥有真实数据。如果您将其用于物品名称，任何服务器端的名称检查都将失败。请根据您的服务器需求明智地使用它。

诸如 `max_damage` 和 `attribute_modifiers` 之类的内容不应是客户端绑定数据。它们会改变真实的服务器游戏玩法，您会得到奇怪的视觉不匹配

:::
