---
title: 🟰 物品模型
id: models
---

import UrlCard from '@site/src/components/UrlCard';

## 介绍

自 1.21.4 版本以来，Minecraft 开始支持更复杂的物品模型。这使您可以为物品创建更多动态变体。本文档专门针对 1.21.4 及以上版本。对于旧版本，插件将降级相应的模型文件（注意：这与旧版本并非 100% 兼容，因为许多条件和模型类型在旧版本中不存在）。

<UrlCard
  url="../../getting_start/item_model_display"
  title="入门 | 教程"
  subtitle="🏹 物品模型显示"
/>

:::info
如果您发现 CraftEngine 在最新的 Minecraft 版本中缺少某些功能，您可以在 GitHub 上提交问题以引起开发人员的注意。
:::

## 旧版模型

**旧版模型**特指 1.21.3 及更早版本中使用的物品模型格式。您可以使用 legacy-model 部分指定旧版物品模型格式。但是，在大多数情况下，您不需要这样做，因为插件会在可能的情况下自动将 1.21.4 物品模型转换为旧版格式。只有在旧版模型格式出现问题时，才应使用此配置部分。

```yaml
items#topaz_gears:
  default:topaz_rod:
    material: fishing_rod
    item-model: default:topaz_rod
    custom-model-data: 1000
    settings:
      tags:
        - "default:topaz_tools"
    data:
      item-name: "<!i><#FF8C00><i18n:item.topaz_rod>"
      tooltip-style: minecraft:topaz
    model:
      template: default:model/simplified_fishing_rod_2d
      arguments:
        path: minecraft:item/custom/topaz_rod
        cast_path: minecraft:item/custom/topaz_rod_cast
    # 如果您在 legacy-model 部分中指定了模型，
    # 插件将使用您手动定义的模型，而不是
    # 依赖于自动转换的旧版格式。
    legacy-model:
      path: minecraft:item/custom/topaz_rod
      overrides:
        - path: minecraft:item/custom/topaz_rod_cast
          predicate: 
            cast: 1
```

:::tip
如果您不需要支持 1.21.4 以上的版本，您可以只配置 legacy-model 部分，而完全省略 model 部分。
:::
