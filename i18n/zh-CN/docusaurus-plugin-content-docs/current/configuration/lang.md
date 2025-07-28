---
title: 🌍 语言
id: lang
---

import UrlCard from '@site/src/components/UrlCard';

## 概述

在这里，“语言”特指客户端语言设置。这意味着任何文本内容都会根据玩家当前的客户端语言实时动态调整。

<UrlCard
  url="https://minecraft.wiki/w/Resource_pack#Language"
  title="语言"
/>

在 CraftEngine 中，您只需按以下格式配置您的语言相关内容：

```yaml
lang:
  en_us:
    item.custom.palm_leaves: 棕榈叶
    item.custom.palm_log: 棕榈木
```

:::tip

在没有语言文件的情况下，Minecraft 将默认使用 `en_us`。因此，如果您要创建**新**的翻译键，强烈建议配置 en\_us。

如果您希望覆盖所有语言，请使用“all”作为语言。

```yaml
lang:
  all:
    container.inventory: ""
```

:::

:::info

要渲染客户端翻译，请插入 [https://docs.advntr.dev/minimessage/format.html#translatable](https://docs.advntr.dev/minimessage/format.html#translatable)

示例：
```yml
items:
  custom:translate:
    material: paper
    data:
      item-name: "<lang:item.custom.palm_log>"
```
:::

## 翻译方块

除了自定义翻译键外，CraftEngine 还为方块名称提供了内置的快捷翻译，以确保与以下内容的兼容性：

- CraftEngine 模组（客户端）
- 服务器端方块翻译插件

配置方法非常简单。只需在常规方块 ID 前添加 `block_name:` 前缀，插件就会自动将其转换为相应的真实方块 ID。

示例：`block_name:default:chinese_lantern` -> `block.craftengine.note_block_13`

```yaml
lang:
  en_us:
    block_name:default:chinese_lantern: Chinese Lantern
    block_name:default:netherite_anvil: Netherite Anvil
    block_name:default:topaz_ore: Topaz Ore
  zh_cn:
    block_name:default:chinese_lantern: 灯笼
    block_name:default:netherite_anvil: 下界合金砧
    block_name:default:topaz_ore: 黄玉矿石
```
