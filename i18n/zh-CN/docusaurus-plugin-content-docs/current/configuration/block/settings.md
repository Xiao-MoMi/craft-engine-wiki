---
title: 🔧 方块设置
id: settings
---

## 概述

设置定义了方块共享的基本属性。您可以同时启用所有这些属性。以下是一个包含所有可能设置类型的示例：

<details>
  <summary>示例</summary>

```yaml
blocks:
  custom:all_settings_block:
    settings:
      hardness: 0.5
      resistance: 0.5
      is-randomly-ticking: true
      push-reaction: NORMAL
      map-color: 36
      burnable: false
      fire-spread-chance: 0
      burn-chance: 0
      item: custom:all_settings_item
      replaceable: false
      is-redstone-conductor: true
      is-suffocating: true
      is-view-blocking: true
      sounds:
        break: minecraft:block.deepslate.break
        step: minecraft:block.deepslate.step
        place: minecraft:block.deepslate.place
        hit: minecraft:block.deepslate.hit
        fall: minecraft:block.deepslate.fall
        land: minecraft:block.anvil.land
        destroy: minecraft:block.anvil.destroy
      require-correct-tools: true
      respect-tool-component: false
      correct-tools:
        - minecraft:wooden_pickaxe
      incorrect-tool-dig-speed: 0.3
      tags:
        - minecraft:mineable/pickaxe
      instrument: BASEDRUM
      fluid-state: water
      support-shape: minecraft:stone
      luminance: 15
      can-occlude: false
      block-light: 0
      propagate-skylight: false
```
</details>

## 稳定设置

### hardness

确定玩家摧毁此方块需要多长时间（默认值：2.0）

```yaml
hardness: 0.5
```

### resistance

确定方块在爆炸中幸存的概率（默认值：2.0）

```yaml
resistance: 0.5
```

### is-randomly-ticking

确定方块状态是否接受随机刻，这与某些方块行为（例如树叶）有关。（默认值：false）

```yaml
is-randomly-ticking: true
```

### push-reaction

确定方块对活塞推动的反应。请注意，由于客户端视觉同步问题，某些反应可能无法与某些方块类型正常工作。此问题将在未来版本中修复。（默认值：NORMAL）

* NORMAL 活塞可以正常推拉此方块。
* DESTROY 被活塞推动的方块会立即被摧毁。
* BLOCK 活塞无法移动此方块。
* IGNORE 似乎与 PUSH\_ONLY 的行为类似，但可以粘在粘性方块上
* PUSH\_ONLY 方块可以被活塞推动，但无法收回。不会粘在粘性方块上。

```yaml
push-reaction: NORMAL
```

### map-color

确定方块在地图上显示的颜色。可用颜色可在 [https://minecraft.wiki/w/Map\_item\_format](https://minecraft.wiki/w/Map_item_format#Color_table) 上找到（默认值：0）

```yaml
map-color: 36
```
![](/img/block_settings_1.png)

### burnable

确定此方块是否可以被环境点燃（默认值：false）

```yaml
burnable: true
```

![](/img/block_settings_2.png)

### fire-spread-chance

确定方块可以燃烧多长时间。燃烧时间越长，火势蔓延到周围方块的机会就越大。（默认值：0）

```yaml
fire-spread-chance: 100  # 0-100
```

### burn-chance

确定被点燃的概率（默认值：0）

```yaml
burn-chance: 30  # 0-100
```

### item

确定此方块对应的物品。这通常用于在创造模式下通过中键单击获取方块。（默认值：null）

```yaml
item: default:xxx_block_item
```

### replaceable

确定当玩家使用方块与此方块交互时是否替换其原始位置的方块（默认值：false）

```yaml
replaceable: false
```

### is-redstone-conductor

确定此方块是否为红石信号导体（默认值：UNDEFINED）

```yaml
is-redstone-conductor: true
```

![](/img/block_settings_3.png)

### is-suffocating

确定玩家是否会受到窒息伤害（默认值：UNDEFINED）

```yaml
is-suffocating: true
```

### is-view-blocking

是否阻挡视线。但是，此选项对玩家无用，但会影响服务器上的一些实体机制。（默认值：UNDEFINED）

```yaml
is-view-blocking: true
```

### sounds

确定方块在各种情况下的声音（默认值：null）

* fall 当玩家落在此方块上时
* hit 当玩家挖掘此方块时
* break 当玩家破坏此方块时
* step 当玩家走在此方块上时
* place 当玩家放置此方块时
* land 当方块落在地面上时（对于下落方块）
* destroy 当方块落在地面上并破碎时（对于下落方块）

```yaml
sounds:
  break: minecraft:block.deepslate.break
  step: minecraft:block.deepslate.step
  place: minecraft:block.deepslate.place
  hit: minecraft:block.deepslate.hit
  fall: minecraft:block.deepslate.fall
  land: minecraft:block.anvil.land
  destroy: minecraft:block.anvil.destroy
```

:::info
您可以像这样配置以精确控制音量和音高

```yaml
sounds:
  break:
    id: minecraft:block.deepslate.break
    pitch: 0.5
    volume: 0.25~0.3 # 也支持范围值
  step: minecraft:block.deepslate.step
```
:::

### require-correct-tools

确定掉落物是否需要正确的工具（默认值：false）

```yaml
require-correct-tools: false
```

### respect-tool-component

决定 `minecraft:tool` 组件的 `correct_for_drops` 选项是否应像下面的 `correct-tools` 一样工作（默认值：false）

```yaml
respect-tool-component: false
```

### correct-tools

确定挖掘此方块所需的正确工具，否则不会掉落任何物品（默认值：null）

```yaml
correct-tools:
  - minecraft:wooden_pickaxe
  - minecraft:stone_pickaxe
  - minecraft:iron_pickaxe
  - minecraft:golden_pickaxe
  - minecraft:diamond_pickaxe
  - minecraft:netherite_pickaxe
```

:::tip
如果设置了 `correct-tools`，则 `require-correct-tools` 将为 true
:::

### incorrect-tool-dig-speed

如果工具不正确，则减慢挖掘速度（默认值：0.3）

```yaml
incorrect-tool-dig-speed: 0.3 # 0~1
```

### tags

标签决定了许多方块的属性。例如，使用 `minecraft:mineable/axe` 会使您的方块用斧头挖掘得更快。（默认值：null）[🏷️ 方块标签](../../reference/block_tags.md)

```yaml
tags:
  - minecraft:mineable/axe
  - minecraft:logs_that_burn
  - minecraft:logs
  - minecraft:completes_find_tree_tutorial
```

### client-bound-tags

这仅适用于原版方块

```yaml
client-bound-tags:
  - minecraft:beacon_base_blocks
```

### instrument

确定当音符盒位于此方块上方时将播放哪种乐器。（默认值：harp）

```yaml
instrument: BASEDRUM
```

### fluid-state

决定此方块状态的流体状态（默认值：empty）

```yaml
fluid-state: water
```

### support-shape

确定方块提供的支撑形状。默认情况下，自定义方块将使用其相应视觉状态的**支撑形状**。但是，您可以在此处手动指定原版方块的**支撑形状**。

```yaml
support-shape: minecraft:stone
```

## 不稳定设置

:::caution
其余的方块设置都与光照系统有关。CraftEngine 在不影响服务器性能的情况下，尽可能地实现了部分光照效果。客户端光照系统的视觉问题是正常的，在大多数情况下我无法修复它们。

方块对**天光**的遮挡完全由**客户端**决定，并且**无法**通过从服务器发送数据包来修复。因此，**block-light** 和 **can-occlude** 设置**仅影响方块发出的光**，而不影响天光。
:::

### luminance

确定方块的光照强度（默认值：0）

```yaml
luminance: 15
```

### can-occlude

确定此方块是否可以阻挡光线。这也决定了该方块是否可以将下方的方块变成另一种类型。（例如 grass\_block -> dirt）（默认值：undefined）

```yaml
can-occlude: false
```

### block-light

确定光线穿过此方块后减少多少光照等级（默认值：undefined）

```yaml
block-light: 0
```

### propagate-skylight

确定自然光是否可以穿过此方块。

```yaml
propagate-skylight: true
```
