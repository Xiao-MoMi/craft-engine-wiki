---
title: 🚪 门方块
id: door_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| open | boolean | 是 |
| powered | boolean | 是 |
| half | double_block_half | 是 |
| facing | horizontal_direction | 是 |
| hinge | hinge | 是 |

```yaml
blocks:
  default:palm_door:
    behavior:
      type: door_block
      can-open-with-hand: true
      can-open-by-wind-charge: true
      sounds:
        open: block.wooden_door.open
        close: block.wooden_door.close
```

![](/img/door_block.png)

:::tip

您最多可以创建 25 个新门

:::

:::warning

自定义门无法与村民或僵尸互动，即使您添加了相关的方块标签。这是因为门的打开/关闭在 Minecraft 中是硬编码的，对此的支持可能只会在未来的版本中添加。

:::
