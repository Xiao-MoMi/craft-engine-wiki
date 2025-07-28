---
title: 🧩 复合
id: composite
---

import UrlCard from '@site/src/components/UrlCard';

## 介绍

<UrlCard
  url="https://minecraft.wiki/w/Items_model_definition#composite"
  title="🧩 复合"
/>

在同一空间中渲染多个子模型。

```yml
default:composite_item:
  model:
    type: "minecraft:composite"
    models:
      - type: minecraft:model
        path: "minecraft:item/custom/model_1"
      - type: minecraft:model
        path: "minecraft:item/custom/model_2"
      - type: minecraft:model
        path: "minecraft:item/custom/model_3"
```
