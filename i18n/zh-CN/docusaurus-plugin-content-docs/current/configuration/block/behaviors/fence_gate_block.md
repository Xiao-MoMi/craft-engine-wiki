---
title: 🪵 栅栏门方块
id: fence_gate_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| open | boolean | 是 |
| powered | boolean | 是 |
| in_wall | boolean | 是 |
| facing | horizontal_direction | 是 |

```yaml
blocks:
  default:palm_fence_gate:
    behavior:
      type: fence_gate_block
      can-open-with-hand: true
      can-open-by-wind-charge: true
      sounds:
        open: block.fence_gate.open
        close: block.fence_gate.close
```

![](/img/fence_gate_block.png)

:::tip

您最多可以创建 12 个新的栅栏门

:::
