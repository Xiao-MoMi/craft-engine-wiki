---
title: 🎢 楼梯方块
id: stairs_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| shape | stairs_shape | 是 |
| half | single_block_half | 是 |
| facing | horizontal_direction | 是 |
| waterlogged | boolean | 否 |

```yml
blocks:
  default:palm_stairs:
    behavior:
      type: stairs_block
```

![](/img/stairs_block.png)

:::tip

您最多可以创建 4 个新楼梯

:::

:::warning

由于 Minecraft 的硬编码楼梯行为，自定义楼梯无法自动与原版楼梯无缝连接。

:::
