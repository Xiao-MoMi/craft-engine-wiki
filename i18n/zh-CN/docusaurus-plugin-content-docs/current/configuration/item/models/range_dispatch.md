---
title: 📡 范围分派
id: range_dispatch
---

import UrlCard from '@site/src/components/UrlCard';

## 介绍

<UrlCard
  url="https://minecraft.wiki/w/Items_model_definition#range_dispatch"
  title="📡 范围分派"
/>

根据数值属性渲染物品模型。将选择阈值小于或等于属性值的最后一个条目。

:::caution
使用 `minecraft:range_dispatch` 时，您需要指定数值属性类型。`scale` 表示与属性值相乘的因子，`entries` 表示不同数值下的模型，`fallback` 表示在未找到有效条目时将使用的物品模型对象。它是可选的，但如果未指定，将渲染一个**缺失**的错误模型。
:::

```yaml
items:
  default:range_dispatch_item:
    model:
      type: "minecraft:range_dispatch"
      property: "minecraft:crossbow/pull"
      entries:
        - model:
            type: minecraft:model
            path: "minecraft:item/custom/model_1"
          threshold: 0.58
        - model:
            type: minecraft:model
            path: "minecraft:item/custom/model_2"
          threshold: 1.0
      fallback:
        type: minecraft:model
        path: "minecraft:item/custom/model_3"
```

## 属性

有关每个参数的说明，请查看 [https://minecraft.wiki/w/Items\_model\_definition#range\_dispatch](https://minecraft.wiki/w/Items_model_definition#range_dispatch)。

### minecraft\:crossbow/pull

> 返回弩特定的使用时间。

### minecraft\:bundle/fullness

> 返回 `minecraft:bundle_contents` 组件的权重，如果不存在则返回 `0`。

### minecraft\:cooldown

> 返回物品的剩余冷却时间，范围在 `0.0` 到 `1.0` 之间。

### minecraft\:compass

> 返回一个角度，在 x-z 平面上，在持有者位置和目标之间，范围在 `0.0` 到 `1.0` 之间。如果目标无效（不存在、在其他维度或离持有者位置太近），将返回随机值。

```yaml
type: "minecraft:range_dispatch"
property: "minecraft:compass"
target: spawn
wobble: true
```

### minecraft\:count

> 返回堆叠大小。

```yaml
type: "minecraft:range_dispatch"
property: "minecraft:count"
normalize: true
```

### minecraft\:damage

> 返回 `minecraft:damage` 组件的值，如果不存在则返回 `0`。

```yaml
type: "minecraft:range_dispatch"
property: "minecraft:damage"
normalize: true
```

### minecraft\:time

> 返回游戏内时间的值，范围在 `0.0` 到 `1.0` 之间。

```yaml
type: "minecraft:range_dispatch"
property: "minecraft:time"
source: daytime
wobble: true
```

### minecraft\:use\_cycle

> 返回剩余使用 tick 数模 `period`。

```yaml
type: "minecraft:range_dispatch"
property: "minecraft:use_cycle"
period: 1.0
```

### minecraft\:use\_duration

> 返回物品使用 tick 数。

```yaml
type: "minecraft:range_dispatch"
property: "minecraft:use_duration"
remaining: false
```

### minecraft\:custom\_model\_data

> 从 `minecraft:custom_model_data` 组件的 `floats` 列表中返回值，如果不存在则返回 `0`。

```yaml
type: "minecraft:range_dispatch"
property: "minecraft:custom_model_data"
index: 0
```
