---
title: 🧱 方块物品
id: block_item
---

## 介绍

**方块物品**是与方块绑定的物品。您可以在此处配置其对应的方块 ID，甚至整个方块配置。当您将此行为绑定到物品时，您可以通过右键单击来放置它。

```yaml
items:
  default:palm_sapling:
    behavior:
      type: block_item
      block: default:palm_sapling

blocks:
  default:palm_sapling:
    behavior: ...
    settings: ...
    states: ...
    loot: ...
    events: ...
```

或

```yaml
items:
  default:palm_sapling:
    behavior:
      type: block_item
      block: 
        behavior: ...
        settings: ...
        states: ...
        loot: ...
        events: ...
```

:::tip
其他基于**方块物品**的变体行为也可以采用此格式进行配置。
:::

![](/img/block_item_1.png)
