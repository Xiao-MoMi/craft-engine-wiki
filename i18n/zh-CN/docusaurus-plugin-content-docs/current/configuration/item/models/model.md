---
title: 📐 模型
id: model
---

import UrlCard from '@site/src/components/UrlCard';

## 介绍

<UrlCard
  url="https://minecraft.wiki/w/Items_model_definition#model"
  title="📐 模型"
/>

渲染一个物品模型。

```yaml
items:
  default:topaz_pickaxe:
    model:
      type: minecraft:model # 在这种情况下，类型是可选的
      path: minecraft:item/custom/topaz_pickaxe
      generation:
        parent: "minecraft:item/handheld"
        textures:
          "layer0": "minecraft:item/custom/topaz_pickaxe"
```

:::tip
如果您不指定类型，它将默认使用 `minecraft:model`。
:::

## 色调

在此配置中，我们为自定义树叶创建了一个模型。但是，原版游戏中的默认树叶没有颜色，因此我们需要配置一个色调来为它们着色。

```yaml
default:palm_leaves:
  model:
    type: "minecraft:model"
    path: "minecraft:item/custom/palm_leaves"
    generation:
      parent: "minecraft:block/custom/palm_leaves"
    tints:
      - type: "minecraft:constant"
        value: -12012264
```

<UrlCard
  url="https://minecraft.wiki/w/Items_model_definition#Tint_sources_types"
  title="🎨 色调"
/>

:::info
需要颜色的地方支持使用十进制或 RGB 格式

```yaml
value: 16711680
```

```yaml
value:
  - 255
  - 0
  - 0
# 或
value:
  - 1.0
  - 0.0
  - 0.0
```

```yaml
value: 255,0,0
# 或
value: 1.0,0.0,0.0
```
:::

### minecraft\:constant

```yaml
type: "minecraft:constant"
value: -12012264
```

### minecraft:custom\_model\_data

```yaml
type: "minecraft:custom_model_data"
index: 0
default: -12012264
```

### minecraft\:dye

```yaml
type: "minecraft:dye"
default: -12012264
```

### minecraft\:firework

```yaml
type: "minecraft:firework"
default: -12012264
```

### minecraft\:grass

```yaml
type: "minecraft:grass"
temperature: 0.5
downfall: 0.5
```

### minecraft:map\_color

```yaml
type: "minecraft:map_color"
default: -12012264
```

### minecraft\:potion

```yaml
type: "minecraft:potion"
default: -12012264
```

### minecraft\:team

```yaml
type: "minecraft:team"
default: -12012264
```
