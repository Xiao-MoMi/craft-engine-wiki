---
title: 🪹 可堆肥物品
id: compostable_item
---

使不可堆肥的物品可堆肥

```yaml
items:
  default:ender_pearl_flower_seeds:
    behavior:
      type: compostable_item
      chance: 0.5
```

![](/img/compostable_item_1.png)

:::caution

这不适用于漏斗。Minecraft 的堆肥系统是硬编码的——因此只有天然可堆肥的物品才能在漏斗中正常工作。

但别担心！您仍然可以使用可堆肥物品作为基础材料，并使用 [⚙️ 物品设置](../settings.md) 调整堆肥几率。

:::
