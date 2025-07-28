---
title: 🪑 家具物品
id: furniture_item
---

## 介绍

**家具物品**是与一件家具绑定的物品。您可以在此处配置其对应的家具 ID，甚至整个家具配置。当您将此行为绑定到物品时，您可以通过右键单击来放置它。

```yaml
items:
  default:bench:
    behavior:
      type: furniture_item
      furniture: default:bench
furniture:
  default:bench:
    settings: ...
    placement: ...
    loot: ...
```

或

```yaml
items:
  default:bench:
    behavior:
      type: block_item
      block: 
        settings: ...
        placement: ...
        loot: ...
```

![](/img/furniture_item_1.png)
