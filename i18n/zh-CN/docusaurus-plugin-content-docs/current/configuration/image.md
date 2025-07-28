---
title: 🖼️ 图像
id: image
---

import PluginFileTree from '@site/src/components/PluginFileTree';

## 介绍

从本质上讲，**图像显示**是一个字符替换系统。游戏通过其字体系统将 Unicode 字符映射到图像文件来渲染纹理。Minecraft 本身使用多个字体集，其中同一个字符在不同的字体中可以有不同的视觉样式。这是我们自定义图像设计的基础。

下面的文件树结构显示了自定义字体文件的位置。您无需手动创建这些文件——此演示仅旨在帮助您了解原版字体的工作原理。

<PluginFileTree
  initialTreeData={[
    {
      id: "assets",
      name: "assets",
      children: [
        {
          id: "namespace",
          name: "namespace",
          children: [
            {
              id: "font",
              name: "font",
              children: [
                  {
                    id: "font_name.json",
                    name: "font_name.json"
                  },
              ]
            },
          ]
        },
      ]
    },
  ]}
/>

```
assets/[namespace]/font/[font_name].json
```

:::tip

像 MiniMessage 和 Minedown 这样的富文本组件解析器都支持使用自定义字体。

MiniMessage: `<font:namespace:font_name>文本</font>`\
MineDown: `[文本](font=namespace:font_name)`
:::

:::info
**问：** 我国家的字符会受到影响吗？
我的玩家可以通过聊天、铁砧或其他方式非法使用这些图像吗？

**答：** 当然不会，除非您使用 Minecraft 的默认字体 (`minecraft:default`)。请避免使用该字体，除非您必须这样做。
:::

## 单字符位图

```yaml
images:
  internal:item_browser:
    height: 140
    ascent: 18
    font: minecraft:internal
    file: minecraft:font/gui/custom/item_browser.png
    char: '\ub000'
```

:::caution
`height` 值必须始终大于或等于 `ascent` 值。这是 Minecraft 强制执行的严格要求。
:::

## 多字符位图

```yaml
images:
  default:icons:
    height: 10
    ascent: 9
    font: minecraft:icons
    file: minecraft:font/image/icons.png
    chars:
     - '\ub000\ub001'
     - '\ub002\ub003'
```

## 在游戏中预览图像

您可以使用一个非常简单的命令来预览图像的效果。您需要做的就是将 `\ub000` 替换为与您的图像对应的字符。

```
/tellraw @p {"text":"\ub000","font":"minecraft:icons"}
```

<div style={{textAlign: 'center'}}>
  <img src="/img/image_1.png" alt="" />
</div>

## 与其他插件的兼容性

在其他插件中使用图像有两种方法：

1. 使用同时支持 **MiniMessage/MineDown** 和 **PlaceholderAPI** 的插件。在这种情况下，您只需使用相应的占位符即可。请参阅[**此页面**](../compatibility/placeholderapi.md)以了解如何使用占位符。
2. 使用 `<image:namespace:id>` `<image:namespace:id:row:column>` `<shift:-20>` 格式的标签，就像我们在 [✏️ 文本格式](../reference/text_format.md) 中所做的那样。CraftEngine 将在**数据包级别**将这些标签替换为相应字体的字符。

:::info
您可以在 config.yml 中找到以下配置，它控制这些标签生效的范围。

```yaml
image:
  # 通过拦截数据包，您可以在其他插件中使用 <image:...> <shift:...>
  intercept-packets:
    system-chat: true
    tab-list: true
    actionbar: true
    ... 更多选项
```
:::
