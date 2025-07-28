---
title: 🪟 活板门方块
id: trapdoor_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| open | boolean | 是 |
| powered | boolean | 是 |
| half | single_block_half | 是 |
| facing | horizontal_direction | 是 |
| waterlogged | boolean | 否 |

```yaml
blocks:
  default:palm_trapdoor:
    behavior:
      type: trapdoor_block
      can-open-with-hand: true
      can-open-by-wind-charge: true
      sounds:
        open: block.wooden_trapdoor.open
        close: block.wooden_trapdoor.close
```

![](/img/trapdoor_block.png)

:::tip

您最多可以创建 25 个新的活板门

:::
