---
title: ⬜️ 压力板方块
id: pressure_plate_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| powered | boolean | 是 |

```yaml
blocks:
  default:palm_pressure_plate:
    behavior:
      type: pressure_plate_block
      sensitivity: all
      pressed-time: 20
      sounds:
        on: minecraft:block.wooden_pressure_plate.click_on
        off: minecraft:block.wooden_pressure_plate.click_off
```

![](/img/pressure_plate_block.png)
