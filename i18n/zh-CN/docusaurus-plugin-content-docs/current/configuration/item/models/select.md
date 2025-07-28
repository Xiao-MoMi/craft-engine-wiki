---
title: ✅ 选择
id: select
---

import UrlCard from '@site/src/components/UrlCard';

## 介绍

<UrlCard
  url="https://minecraft.wiki/w/Items_model_definition#select"
  title="✅ 选择"
/>

根据离散属性渲染物品模型。

:::caution
使用 `minecraft:select` 时，您需要指定一个**属性**类型。`cases` 表示要匹配的场景列表，而 `fallback` 表示在未找到有效条目时将使用的物品模型对象。它是可选的，但如果未提供，将渲染一个“缺失”的错误模型。
:::

```yaml
items:
  default:select_item:
    model:
      type: "minecraft:select"
      property: "minecraft:charge_type"
      cases:
        - when: arrow
          model:
            type: minecraft:model
            path: "minecraft:item/custom/model_1"
        - when: rocket
          model:
            type: minecraft:model
            path: "minecraft:item/custom/model_2"
      fallback:
        type: minecraft:model
        path: "minecraft:item/custom/model_3"
```

## 属性

有关每个参数的说明，请查看 [https://minecraft.wiki/w/Items\_model\_definition#select](https://minecraft.wiki/w/Items_model_definition#select)。

### minecraft\:charge\_type

> 返回存储在 `minecraft:charged_projectiles` 组件中的充能类型。

### minecraft\:context\_dimension

> 如果有，则返回上下文中的维度 ID。

### minecraft\:context\_entity\_type

> 如果存在，则返回持有实体的类型。

### minecraft\:display\_context

> 返回此物品渲染的上下文。

### minecraft\:main\_hand

> 返回持有玩家的主手。

### minecraft\:trim\_material

> 如果存在，则返回 `minecraft:trim` 组件中 `material` 字段的值。

### minecraft\:block\_state

> 返回 `minecraft:block_state` 组件中某个属性的值。

```yaml
type: "minecraft:select"
property: "minecraft:block_state"
block-state-property: "facing"
```

### minecraft\:component (1.21.5+)

> 从[组件](https://minecraft.wiki/w/Data_component_format)返回值。如果所选值来自注册表，而当前数据包未提供该值，则该条目将被静默忽略。

```yaml
type: "minecraft:select"
property: "minecraft:component"
component: "minecraft:unbreakable"
```

### minecraft\:custom\_model\_data

> 从 `minecraft:custom_model_data` 组件的 `strings` 列表中返回值。

```yaml
type: "minecraft:select"
property: "minecraft:custom_model_data"
index: 0
```

### minecraft\:local\_time

> 根据给定模式返回当前格式化的时间。该值每秒更新一次。有关区域设置、时区和模式的完整格式文档，请参阅 ICU（国际统一码部件）文档。

```yaml
type: "minecraft:select"
property: "minecraft:local_time"
locale: "en_US"
time-zone: "GMT+0:45"
pattern: "HH:mm:ss"
```
