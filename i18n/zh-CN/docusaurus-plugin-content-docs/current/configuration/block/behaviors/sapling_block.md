---
title: 🌴 树苗方块
id: sapling_block
---

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| stage | int | 是 |

一旦指定了 `configured feature`，**树苗方块**就可以在随机刻事件中生长成指定的树木配置。

```yaml
blocks:
  default:palm_sapling:
    behavior:
      type: sapling_block
      # 这需要您使用数据包注册自定义树木配置
      # 为防止错误，我们在此处使用原版的树木特征
      feature: minecraft:fancy_oak
      bone-meal-success-chance: 0.45
      grow-speed: 0.7  # (0-1)
```

![](/img/sapling_block.png)

:::tip

树苗的阶段值越多，其所需的生长时间就越长。

:::
