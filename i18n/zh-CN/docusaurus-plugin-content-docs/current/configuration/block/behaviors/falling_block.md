---
title: 🟨 下落方块
id: falling_block
---

**下落方块**在下方没有方块时会变成一个下落的实体。

```yml
blocks:
  default:falling_block_example:
    behavior:
      type: falling_block
      hurt-amount: -1 # 可选
      max-hurt: -1 # 可选
```

![](/img/falling_block.png)

:::info

`hurt-amount` 和 `max-hurt` 选项是可选的，但它们必须成对配置。它们的作用是确定下落方块击中实体时造成的伤害。

:::
