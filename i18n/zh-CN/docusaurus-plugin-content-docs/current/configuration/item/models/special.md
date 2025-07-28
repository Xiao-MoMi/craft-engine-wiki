---
title: 👻 特殊
id: special
---

import UrlCard from '@site/src/components/UrlCard';

## 介绍

<UrlCard
  url="https://minecraft.wiki/w/Items_model_definition#special"
  title="👻 特殊"
/>

渲染一个特殊的模型。

:::caution
使用 `minecraft:special` 时，您需要指定一个特殊的模型类型。`path` 参数是基础模型渲染所必需的。
:::

```yaml
items:
  default:gui_head_size_1:
    model:
      type: minecraft:special
      path: minecraft:item/custom/gui_head_size_1
      model:
        type: minecraft:head
        kind: player
```

## 特殊模型

有关每个参数的说明，请查看 [https://minecraft.wiki/w/Items\_model\_definition#special](https://minecraft.wiki/w/Items_model_definition#special)。

### minecraft\:trident

> 渲染一个三叉戟。

### minecraft\:conduit

> 渲染一个潮涌核心。

### minecraft\:shield

> 渲染一个盾牌。使用 `minecraft:banner_patterns` 组件中的图案和 `minecraft:base_color` 组件中的颜色。

### minecraft\:decorated\_pot

> 渲染一个饰纹陶罐。使用 `minecraft:pot_decorations` 组件中的值。

### minecraft\:hanging\_sign

> 渲染一个悬挂式告示牌。

```yaml
model:
  type: "minecraft:hanging_sign"
  wood-type: "oak"
  texture: ...
```

### minecraft\:standing\_sign

> 渲染一个立式告示牌。

```yaml
model:
  type: "minecraft:standing_sign"
  wood-type: "oak"
  texture: ...
```

### minecraft\:head

> 渲染一个头颅。 [适用时使用 `minecraft:profile` 组件中的个人资料。(1.21.4-1.21.5)]

```yaml
model:
  type: "minecraft:head"
  kind: player
  texture: ...
  animation: 0.0
```

### minecraft\:player\_head (1.21.6+)

> 渲染一个头颅。适用时使用 `minecraft:profile` 组件中的个人资料。

```yaml
model:
  type: "minecraft:player_head"
```

### minecraft\:chest

> 渲染一个单体箱子。

```yaml
model:
  type: "minecraft:chest"
  openness: 0.0
  texture: ...
```

### minecraft\:shulker\_box

> 渲染一个潜影盒。

```yaml
model:
  type: "minecraft:shulker_box"
  openness: 0.0
  orientation: up
  texture: ...
```

### minecraft\:bed

> 渲染一整张床。

```yaml
model:
  type: "minecraft:bed"
  texture: ...
```

### minecraft\:banner

> 使用 `minecraft:banner_patterns` 组件中的图案渲染一个旗帜。

```yaml
model:
  type: "minecraft:bed"
  color: white
```
