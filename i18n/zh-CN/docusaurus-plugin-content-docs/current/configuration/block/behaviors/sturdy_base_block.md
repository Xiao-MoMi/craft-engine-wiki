---
title: 🏗️ 坚固基座方块
id: sturdy_base_block
---

**坚固基座方块**指的是需要坚固支撑面的方块。例如，门在滴水石上无法正常工作。支撑类型包括 `full`、`rigid` 和 `center`。

```yaml
blocks:
  default:pebble:
    behavior:
      type: sturdy_base_block
      direction: down
      support-types:
        - full
```

![](/img/sturdy_base_block.png)
