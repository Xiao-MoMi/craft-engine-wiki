---
title: 🗃️ 原版战利品
id: vanilla_loot
---

## 介绍

Minecraft 的原生战利品系统很强大，但有一个关键限制：它无法集成插件特定的元素，如占位符检查、权限或其他高级功能。此外，配置原版数据包很麻烦，尤其是在覆盖默认战利品表时。

为了解决这个问题，我们的插件提供了一个原版战利品系统覆盖。以下是一个快速入门示例（其中“...”代表战利品配置）。为获得最佳效果，我们建议您先查看 [💎 战利品表](../reference/loot_table.md) 以掌握战利品配置。

## 方块战利品

```yaml
vanilla-loots:
  minecraft:grass_loot:
    type: block
    target: "minecraft:grass"
    # 是否覆盖原版战利品
    override: false
    loot:
      ...
```

```yaml
vanilla-loots:
  minecraft:grass_loot:
    type: block
    target:
      - minecraft:wheat[age=0] # 使用精确状态
      - minecraft:wheat[age=1]
    override: false
    loot:
      ...
```

## 实体战利品

```yaml
vanilla-loots:
  minecraft:sheep_loot:
    type: entity
    target: "minecraft:sheep"
    # 是否覆盖原版战利品
    override: false
    loot:
      ...
```
