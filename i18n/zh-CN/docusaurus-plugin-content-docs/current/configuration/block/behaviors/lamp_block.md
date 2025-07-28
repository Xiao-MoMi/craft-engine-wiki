---
title: 💡 灯方块
id: lamp_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| lit | boolean | 是 |

**灯方块**允许方块在红石供电时变为 `lit` 状态。

```yaml
blocks:
  default:copper_coil:
    behavior:
      type: lamp_block
```

![](/img/lamp_block.png)
