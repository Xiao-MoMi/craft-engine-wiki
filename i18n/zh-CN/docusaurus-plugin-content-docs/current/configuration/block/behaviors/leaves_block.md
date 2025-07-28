---
title: 🍁 树叶方块
id: leaves_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| distance | int | 是 |
| persistent | boolean | 是 |
| waterlogged | boolean | 否 |

**树叶方块**是在脱离树干后会自然腐烂的方块。当 `persistent` 设置为 true 时，它们将永远不会腐烂。`distance` 属性决定了与树干的最大允许距离。

```yml
blocks:
  default:palm_leaves:
    behavior:
      type: leaves_block
```

![](/img/leaves_block.png)

:::tip

您可以根据需要增加或减少距离值。对于特别大的树木，为防止树叶腐烂，您可以将距离设置为 10 或更高。在原版游戏中，树叶的最大距离为 7。

:::
