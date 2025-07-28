---
title: 🔧 物品设置
id: settings
---

## 介绍

与数据不同，设置中的内容涉及由插件处理的特殊机制。

## 类型

### fuel-time

确定可以燃烧多少 tick。

```yaml
fuel-time: 100
```

![](/img/item_settings_1.png)

### tags

用于配方的标签。

```yaml
tags:
  - "default:palm_logs"
  - "minecraft:logs"
  - "minecraft:logs_that_burn"
```

### equipment

将[装备](../equipment.md)应用于此物品。

![](/img/item_settings_2.png)

```yaml
equipment:
  #
  # 必需参数
  #
  asset-id: default:topaz
  
  # 
  # 可选参数。默认为 config.yml 中的全局 client-bound-model 选项
  #
  client-bound-model: true
  
  #
  # 1.21.2 及以上版本的可选参数
  # 选项“slot”是这些选项生效所必需的
  #
  slot: head # head / chest / legs / feet / body (动物盔甲) / saddle 
  # 装备时使用的覆盖纹理的资源位置。此目录指向 assets/<namespace>/textures/<id>。
  camera-overlay: "namespace:id"
  # 物品是否可以通过发射器发射。
  dispensable: true
  # 穿戴实体受到伤害时，此物品是否会受到伤害。
  damage-on-hurt: true
  # 是否可以通过右键单击将物品装备到相关槽位。
  swappable: true
  # >= 1.21.5
  # 是否可以通过对其按使用键将此物品装备到目标生物上（只要此物品可以装备到目标上）
  equip-on-interact: true
```

### repairable

决定物品是否可以通过工作台/铁砧修复。（默认值：true）

```yaml
repairable: true
```

![](/img/item_settings_3.png)

### anvil-repair-item

确定给定物品在修复时提供多少耐久度。

```yaml
anvil-repair-item:
  - target: "#topaz_tools" # 使用标签
    amount: 20  # 恢复固定耐久度
  - target:
      - "minecraft:iron_pickaxe"
      - "minecraft:shears"
    percent: 0.25  # 0.25 = 25%，恢复 n% 总耐久度
```

### renameable

决定物品是否可以在铁砧中重命名。（默认值：true）

```yaml
renameable: false
```

### projectile

根据物品创建一个自定义投射物实体。它支持 `trident`、`arrow`、`snowball` 等。

```yaml
projectile:
  item: default:topaz_trident # 要显示的物品
  translation: 0,0,0
  rotation: 1,1,1,1
  display-transform: NONE
  scale: 0.5
```

![](/img/item_settings_4.png)

<details>
  <summary>如何建模</summary>

  您的建模方式直接影响配置文件中的 `rotation` 参数。

  无论您使用哪种建模方法，最重要的是将三叉戟的尖锐部分置于上图所示的位置，以确保最佳的击中点。

![](/img/item_settings_6.avif)
![](/img/item_settings_7.avif)

</details>

### dyeable

决定物品是否可以在工作台中染色。（默认值：未定义）

```yaml
dyeable: true
```

![](/img/item_settings_5.png)

### food

基于插件的食物组件替代实现。

```yaml
food:
  nutrition: 5  # 0~20，整数
  saturation: 3.5  # 0~10，浮点数
```

:::caution
最好在 1.20.5+ 服务器上使用食物组件
:::

### consume-replacement

设置消耗物品后返回的物品。例如，玩家喝完水瓶后，将返回空瓶。（默认值：null）

```yaml
consume-replacement: minecraft:apple
```

### craft-remaining-item

选择在合成配方完成后，物品是否应返回其他物品。

```yaml
craft-remaining-item: bucket
```

![](/img/item_settings_8.png)

### invulnerable

```yaml
invulnerable:
  - lava
  - fire_tick
  - block_explosion  # 重生锚
  - entity_explosion  # 爬行者、TNT
  - lightning
  - contact  # 仙人掌
```

![](/img/item_settings_9.png)

### enchantable

此选项可让您阻止某些物品在附魔台上使用。提示：将其设置为 true 不会神奇地使不可附魔的物品变得可附魔。（默认值：true）

```yaml
enchantable: false
```

### compost-probability

此设置控制堆肥成功的可能性（默认值：0.5）。

```yaml
compost-probability: 0.5
```

### respect-repairable-component

此选项控制可修复组件中列出的物品是否可以在铁砧 GUI 中修复此物品。（默认值：false）

```yaml
respect-repairable-component: false
```
