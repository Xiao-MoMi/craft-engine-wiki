---
title: 🚟 悬挂方块
id: hanging_block
---

**悬挂方块**是一种必须附着在另一个方块下方的方块。如果其上方的方块被破坏，悬挂方块本身也会被破坏。

```yml
blocks:
  default:stalactites:
    behavior:
      type: hanging_block
      stackable: false
      blacklist: false # 使用黑名单模式
      above-block-tags: []
      above-blocks: []
      delay: 0
```

![](/img/hanging_block.png)
