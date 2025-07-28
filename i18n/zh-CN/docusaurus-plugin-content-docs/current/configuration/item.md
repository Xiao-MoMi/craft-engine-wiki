---
title: 🗡️ 物品
id: item
---

import UrlCard from '@site/src/components/UrlCard';
import Highlight from '@site/src/components/Highlight';

## 概述

**一个完整的物品配置包含以下部分：**

- **material** <Highlight color="#d64f1aff">**必需**</Highlight>

`material` 作为物品的基础模板，例如 `paper` 或 `wooden_sword`。

- **client-bound-material** <Highlight color="#2E8B57">**可选**</Highlight>

用于此物品的 `client-bound-material`。您可以使用此功能为服务器/客户端上的物品分配完全不同的基础材料，从而影响它们在服务器/客户端上下文中的特定行为。

- **custom-model-data** <Highlight color="#2E8B57">**可选**</Highlight>

`custom-model-data` 是一个正整数，相同材料的自定义物品应具有不同的 custom-model-data 值。custom-model-data 决定了物品显示的模型，对于下面的模型部分至关重要。

- **item-model** (1.21.2+) <Highlight color="#2E8B57">**可选**</Highlight>

定义此物品的物品模型资源位置。例如 `default:custom_book`

:::tip
使用 custom model data 具有更好的版本兼容性，因为它自 1.14 起就已发布，而 item_model 至少需要 1.21.2

您可以同时使用 `custom-model-data` 和 `item-model`
:::

:::caution
配置模型部分时，您必须指定 `custom-model-data` 或 `item-model`。如果您的资源包支持 1.21.2 或更高版本，插件将自动使用物品 ID 作为 `item-model` 的值。
:::

- **client-bound-model** <Highlight color="#2E8B57">**可选**</Highlight> <Highlight color="#272ad8ff">**默认值：config.yml 中的全局值**</Highlight>

- **oversized-in-gui** (1.21.6+) <Highlight color="#2E8B57">**可选**</Highlight> <Highlight color="#272ad8ff">**默认值：true**</Highlight>

- **hand-animation-on-swap** <Highlight color="#2E8B57">**可选**</Highlight> <Highlight color="#272ad8ff">**默认值：true**</Highlight>

- [**data / client-bound-data**](./item/data.md) <Highlight color="#2E8B57">**可选**</Highlight>

- [**behavior(s)**](./item/behaviors.md) <Highlight color="#2E8B57">**可选**</Highlight>

- [**settings**](./item/settings.md) <Highlight color="#2E8B57">**可选**</Highlight>

- [**model / legacy-model**](./item/models.md) <Highlight color="#2E8B57">**可选**</Highlight>

- [**events**](../reference/events.md) <Highlight color="#2E8B57">**可选**</Highlight>

- [**category**](./category.md) <Highlight color="#2E8B57">**可选**</Highlight>

<details>
  <summary>完整配置概述</summary>

  ```yaml
  items:
    default:palm_log:
      material: paper
      custom-model-data: 1000
      item-model: default:palm_log
      settings:
        fuel-time: 300
        tags:
          - "default:palm_logs"
          - "minecraft:logs"
          - "minecraft:logs_that_burn"
      data:
        display-name: "<!i>棕榈木"
      model:
        type: "minecraft:model"
        path: "minecraft:item/custom/palm_log"
        generation:
          parent: "minecraft:block/custom/palm_log"
      oversized-in-gui: true
      hand-animation-on-swap: true
      client-bound-model: false
      behavior:
        type: block_item
        block: default:palm_log

  ```
</details>
