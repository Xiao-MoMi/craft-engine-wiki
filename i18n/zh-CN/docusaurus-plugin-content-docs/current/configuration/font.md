---
title: ㊙️ 字体
id: font
---

import UrlCard from '@site/src/components/UrlCard';

:::info

这个过程非常简单，不需要任何插件端配置。只需按照下面的教程操作即可。

:::

## TTF

<UrlCard
  url="https://minecraft.wiki/w/Font#TTF_provider"
  title="TTF 字体"
/>

对于 TTF 字体，您需要在以下路径中创建一个 `default.json` 文件。如果您已经有一个 `default.json` 文件，只需将您的字体 JSON 附加到现有 JSON 文件的末尾即可。

<div style={{textAlign: 'center'}}>
  <img src="/img/font_1.png" alt="" />
</div>

```json
{
    "providers": [
        {
            "type": "ttf",
            "file": "minecraft:custom_font.ttf",
            "oversample": 10,
            "size": 11
        }
    ]
}
```

<div style={{textAlign: 'center'}}>
  <img src="/img/font_2.png" alt="" />
</div>

## 位图

<UrlCard
  url="https://minecraft.wiki/w/Font#Bitmap_provider"
  title="位图字体"
/>

如果您希望替换原版字符图像，只需将以下 PNG 文件放置在下面概述的指定路径中即可。

<div style={{textAlign: 'center'}}>
  <img src="/img/font_3.png" alt="" />
</div>

## Unihex

要在 Minecraft 中配置 unihex 字体，这是一种相对不太常见且很少使用的字体，您可以参阅 Minecraft Wiki 以获取详细说明。

<UrlCard
  url="https://minecraft.wiki/w/Font#Unihex_provider"
  title="Unihex 字体"
/>
