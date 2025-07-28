---
title: 🎲 战利品表
id: loot_table
---

## 介绍

在 `loots` 下，必须有一个 `pools` 列表，它代表战利品池。每个战利品池由四个部分组成：

`rolls` 决定了池被抽取的次数
`conditions` 代表战利品的条件
`entries` 表示实际的战利品项目
`functions` 是后处理函数，例如修改战利品的数量、NBT 数据等

:::info
如果您非常熟悉原版数据包，您会发现这个结构非常熟悉。该插件采用了这种格式并对其进行了修改，以便快速顺利地过渡到 CraftEngine 战利品系统。
:::

```yaml
loot:
  functions: []
  pools:
    - rolls: 1
      conditions:
        - type: survives_explosion
      entries:
        - type: item
          item: "minecraft:apple"
      functions: []
```

## ☘️ 条目 (Entry)

“条目”指定了掉落物的实际内容，但在某些情况下，它也可以表示可能掉落物中的一种选择。

:::tip
所有 `entry` 部分都能够使用 `functions` 和 `conditions`。

```yaml
type: item
item: "minecraft:apple"
functions: []
conditions: []
```
:::

### item

设置掉落物品的类型，可以是自定义物品。

```yaml
type: item
item: "minecraft:apple"
```

### furniture\_item

将物品设置为放置时的原始家具物品，否则使用备用物品。

```yaml
type: furniture_item
item: "default:fallback_item"
```

### exp

掉落一定数量的经验。

```yaml
type: exp
count: 1
```

### alternatives

从给定列表中找到第一个满足 `conditions` 的 `entry`。

```yaml
type: alternatives
children:
  - type: item
    item: "${ore_block}"
    conditions:
      - type: enchantment
        predicate: minecraft:silk_touch>=1
  - type: item
    item: "${ore_drop}"
    functions:
      - type: apply_bonus
        enchantment: minecraft:fortune
        formula:
          type: ore_drops
      - type: explosion_decay
      - type: drop_exp
        count:
          type: uniform
          min: "${min_exp}"
          max: "${max_exp}"
```

## 🔧 函数 (Function)

`function` 的作用是在设置物品类型后对其执行附加操作，例如调整数量。它还可以处理并发操作，如掉落经验或其他额外内容。

:::tip
所有 `function` 部分都支持使用 `conditions`。

```yaml
type: set_count
count: 10
conditions: []
```
:::

### apply\_bonus

根据给定的附魔和公式增加掉落物品的数量。有关更多信息，请参阅 [公式](#️-公式-formula)。

```yaml
type: apply_bonus
enchantment: minecraft:fortune
formula:
  type: ore_drops
```

### set\_count

设置物品的数量。

```yaml
type: set_count
count: 10
add: true  # 添加或设置
```

### explosion\_decay

确定此物品的数量是否会在爆炸时减少。在原版 Minecraft 中，爆炸通常会导致掉落的方块少于原来的数量，这是由于此功能的实现。

```yaml
type: explosion_decay
```

### drop\_exp

掉落一定数量的经验。

```yaml
type: drop_exp
count: 1
```

## ➕️ 公式 (Formula)

### ore\_drops

与原版 Minecraft 中使用的掉落算法相同。

```yaml
type: ore_drops
```

### binomial\_with\_bonus\_count

与原版 Minecraft 中使用的二项式掉落算法相同。`extra` 表示几次额外的掉落尝试，`probability` 表示每次成功的概率。附魔等级会增加尝试次数。

```yaml
type: binomial_with_bonus_count
extra: 3
probability: 0.5
```
