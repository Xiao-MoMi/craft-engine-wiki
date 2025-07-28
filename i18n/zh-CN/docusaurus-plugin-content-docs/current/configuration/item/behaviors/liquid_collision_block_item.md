---
title: 🌊 液体碰撞方块物品
id: liquid_collision_block_item
---

## 介绍

**液体碰撞方块物品**检查与流体的碰撞。它适用于创建可以放置在水或熔岩表面的方块。所有其他配置选项与方块物品的配置选项相同。

```yaml
items:
  default:reed:
    material: paper
    behavior:
      type: liquid_collision_block_item
      offset-y: 1 # 放置方块的位置
      block: default:reed
```
