---
title: 💦 混凝土粉末方块
id: concrete_powder_block
---

**混凝土粉末方块**是一种与水接触时会变硬的方块。

```yml
blocks:
  default:gunpowder_block:
    behavior:
      type: concrete_powder_block
      solid-block: default:solid_gunpowder_block
```

![](/img/concrete_powder_block.png)

:::warning

目前，粉末在处于下落实体状态时无法在与水接触时变成固体方块。这是因为这段代码在 Minecraft 中是硬编码的，我们无法修改其行为逻辑。

:::
