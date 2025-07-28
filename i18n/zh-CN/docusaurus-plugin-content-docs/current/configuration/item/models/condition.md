---
title: ⚖️ 条件
id: condition
---

import UrlCard from '@site/src/components/UrlCard';

## 介绍

<UrlCard
  url="https://minecraft.wiki/w/Items_model_definition#condition"
  title="⚖️ 条件"
/>

根据条件渲染物品模型。

:::caution
使用 `minecraft:condition` 时，您需要指定条件类型，即下面提到的**属性**。`on-false` 和 `on-true` 分别表示在不同条件下显示不同的模型。
:::

```yaml
items:
  default:condition_item:
    model:
      type: "minecraft:condition"
      property: "minecraft:using_item"
      on-false:
        type: "minecraft:model"
        path: "minecraft:item/custom/model_false"
      on-true:
        type: "minecraft:model"
        path: "minecraft:item/custom/model_true"
```

## 属性

有关每个参数的说明，请查看 [https://minecraft.wiki/w/Items\_model\_definition#condition](https://minecraft.wiki/w/Items_model_definition#condition)。

### minecraft\:broken

> 如果物品是可损坏的，并且在损坏前只剩下一次使用次数，则返回 `true`。

### minecraft\:carried

> 如果物品在 GUI 中的插槽之间被携带，则返回 `true`。

### minecraft\:damaged

> 如果物品是可损坏的，并且至少被使用过一次，则返回 `true`。

### minecraft\:extended\_view

> 如果玩家按住 shift 键请求了扩展详细信息，则返回 `true`。仅在物品显示在 UI 中时有效。注意：不是键绑定，无法重新绑定。

### minecraft\:fishing\_rod/cast

> 如果当前使用的鱼竿上附有鱼漂，则返回 `true`。

### minecraft\:selected

> 如果物品在快捷栏中被选中，则返回 `true`。

### minecraft\:using\_item

> 如果玩家当前正在使用此物品，则返回 `true`。

### minecraft\:view\_entity

> * 未旁观时，如果上下文实体是本地玩家实体，即客户端控制的实体，则返回 `true`。
> * 旁观时，如果上下文实体是_被旁观的_实体，则返回 `true`。
> * 如果上下文实体不存在，将返回 `false`。

### minecraft\:bundle/has\_selected\_item

> 如果收纳袋是“打开的”，即它在 GUI 中有可见的选定物品，则返回 `true`。

### minecraft\:component (1.21.5+)

> 使用组件[物品子谓词](https://minecraft.wiki/w/Item_sub-predicate)来匹配物品组件。

### minecraft\:has\_component

> 如果物品上存在给定的组件，则返回 `true`。

```yaml
type: "minecraft:condition"
property: "minecraft:has_component"
component: "minecraft:enchantments"
ignore-default: false
```

### minecraft\:keybind\_down

> 如果键绑定当前处于活动状态，则返回 `true`。

```yaml
type: "minecraft:condition"
property: "minecraft:keybind_down"
keybind: "key.left"
```

### minecraft\:custom\_model\_data

> 从 `minecraft:custom_model_data` 组件的 `flags` 列表中返回值。

```yaml
type: "minecraft:condition"
property: "minecraft:custom_model_data"
index: 0
```
