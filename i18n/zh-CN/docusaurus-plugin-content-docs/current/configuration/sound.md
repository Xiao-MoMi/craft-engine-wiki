---
title: 🔊 声音
id: sound
---

import UrlCard from '@site/src/components/UrlCard';

<UrlCard
  url="https://minecraft.wiki/w/Sounds.json"
  title="声音"
/>

:::info

当您使用 `/playsound` 命令播放声音时，它实际上应该被称为声音事件，而实际的声音位于声音列表下。您可以查看 Minecraft Wiki 以了解每个参数对应的效果。该插件在此处不提供广泛的描述，因为 Minecraft Wiki 已经非常清楚地解释了每个部分，并且 CraftEngine 使用与 Wiki 中描述的相同的配置选项名称。

:::

```yaml
sounds:
  minecraft:custom_block.place:
    replace: false
    subtitle: subtitles.custom_block.place
    sounds:
      - "block/custom_block_1"
  minecraft:custom_ambient.custom_biome:
    replace: false
    subtitle: subtitles.custom_ambient.custom_biome
    sounds:
      - name: "ambient/custom_biome_1"
        volume: 0.4
        weight: 3
      - name: "ambient/custom_biome_2"
        volume: 0.4
        weight: 7
      - name: "ambient/custom_biome_3"
        volume: 0.4
        weight: 10
        stream: false
        attenuation-distance: 16
        preload: false
        type: "file"
```
