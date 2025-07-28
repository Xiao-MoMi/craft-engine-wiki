---
title: ⚔️ 装备
id: equipment
---

import Highlight from '@site/src/components/Highlight';

## 介绍

<div style={{textAlign: 'center'}}>
  <img src="/img/equipment_1.png" alt="" />
</div>

CraftEngine 提供了两种创建自定义装备的方法。一种方法基于 **Trim**（适用于 Minecraft 1.20+），另一种方法使用 **Equippable 组件**（在 1.21.2 中引入）。

:::info

请注意，以下所有配置都与装备设置有关，而不是单个物品的规格。要将这些装备配置应用于您的盔甲物品，请参阅[此文档]。

:::

## 基于组件
<Highlight color="#0d9622ff">**1.21.2+**</Highlight><Highlight color="#0d9622ff">**推荐**</Highlight>

```yaml
equipments:
  # 装备资产 ID
  default:topaz:
    type: component
    # 'namespace:path' 解析为 assets/<namespace>/textures/entity/equipment/<layer_type>/<path>.png。
    # 
    # 示例：minecraft:topaz
    #               ↓
    # assets/minecraft/textures/entity/equipment/humanoid/topaz.png
    humanoid: "minecraft:topaz"

    # 其他层类型
    # assets/minecraft/textures/entity/equipment/humanoid_leggings/topaz.png
    humanoid-leggings: "minecraft:topaz"

    # 更多层类型，根据您的需要
    # assets/minecraft/textures/entity/equipment/happy_ghast_body/topaz.png
    happy-ghast-body: "minecraft:topaz"
```

下图演示了配置与实际纹理路径之间的映射。如果层类型包含连字符（“-”），则必须在路径中将其替换为下划线（“_”）。示例 `humanoid-leggings` -> `humanoid_leggings`

<div style={{textAlign: 'center'}}>
  <img src="/img/equipment_3.png" alt="" />
</div>


**支持的层类型：**

* humanoid
* humanoid-leggings
* wings
* wolf-body
* horse-body
* llama-body
* pig-saddle
* strider-saddle
* camel-saddle
* horse-saddle
* donkey-saddle
* mule-saddle
* skeleton-horse-saddle
* zombie-horse-saddle
* happy-ghast-body

:::info

❓️**问：** 为什么 CraftEngine 不允许用户使用随机纹理路径并在生成资源包时重新定位它们？

✔️ **答：** 我希望用户遵循 Minecraft 的资源包标准——只有在 Mojang 违反自己的规则时，我才会允许自定义路径。然后插件将为您处理特定于版本的路径。
:::

:::tip

您还可以将其设置为配置块，以获取一些额外的选项

```yaml

equipments:
  default:topaz:
    type: component
    humanoid:
      texture: "minecraft:leather"
      dyeable:
        color-when-undyed: -6265536 # 皮革颜色
      # 用于鞘翅纹理
      use-player-texture: false
```
:::

:::tip

您还可以使用列表组合多个纹理。这里有两个例子：

```yaml
equipments:
  custom:partialy_dyeable_armor:
    type: component
    humanoid:
      - texture: "minecraft:dyeable_part"
        dyeable:
          color-when-undyed: -6265536
      - texture: "minecraft:undyeable_part"
```

```yaml
equipments:
  custom:red_flower_wreath:
    type: component
    humanoid:
      - texture: "minecraft:wreath"
      - texture: "minecraft:red_flower"
  custom:yellow_flower_wreath:
    type: component
    humanoid:
      - texture: "minecraft:wreath"
      - texture: "minecraft:yellow_flower"
  custom:white_flower_wreath:
    type: component
    humanoid:
      - texture: "minecraft:wreath"
      - texture: "minecraft:white_flower"
```
:::

## 基于饰纹
<Highlight color="#0d9622ff">**1.20+**</Highlight><Highlight color="#0d9622ff">**Iris/Optifine 着色器兼容性**</Highlight><Highlight color="#e03f26ff">**饰纹不适用**</Highlight>

当 CraftEngine 移除原版盔甲的基础纹理时，盔甲在穿戴时会变得完全透明。通过将自定义饰纹应用于此隐形盔甲，我们可以实现自定义盔甲纹理。但是，这种方法有一个限制——盔甲之后无法再接收其他饰纹。

默认情况下，插件已在 `config.yml` 中预先配置了原版盔甲牺牲选项。这些设置仅在您配置了至少一个基于饰纹的盔甲时才会生效。

:::info

问：牺牲的盔甲还会正常显示吗？这是否意味着我根本无法使用锁链盔甲？

答：CraftEngine 预料到了这种情况。解决方案出奇地简单，至少对于 CraftEngine 来说是这样——我们对原版锁链盔甲应用默认的饰纹图案以保留其原始外观。这是通过 CraftEngine 独有的 `client-bound-data` 功能实现的。

```yaml
# config.yml
equipment:
  sacrificed-vanilla-armor:
    type: chainmail
    asset-id: minecraft:chainmail
    humanoid: minecraft:trims/entity/humanoid/chainmail
    humanoid-leggings: minecraft:trims/entity/humanoid_leggings/chainmail

# legacy_armor/configuration/chainmail.yml
items:
  minecraft:chainmail_helmet:
    client-bound-data:
      trim:
        pattern: chainmail # 保留其原始外观的图案
        material: custom
      hide-tooltip:
        - trim
  ...护腿、胸甲和靴子
```

:::

此配置可配置基于饰纹的盔甲套装。纹理路径没有严格要求——CraftEngine 会自动为您重新定位纹理目录。

```yaml
equipments:
  # 装备资产 ID
  default:topaz:
    type: trim
    humanoid: minecraft:entity/equipment/humanoid/topaz
    humanoid-leggings: minecraft:entity/equipment/humanoid_leggings/topaz
```

:::caution

基于饰纹的盔甲仅支持 **humanoid** 和 **humanoid-leggings** 模型类型。

:::

## 基于核心着色器

CraftEngine 目前没有计划实现基于核心着色器的自定义盔甲。这种方法本质上将依赖皮革盔甲作为基础，这在与第三方着色器一起使用时会中断——尽管它确实提供了饰纹兼容性。但是，鉴于截至 2025 年，超过 90% 的服务器现在都在 1.21.2+ 版本上运行，因此该功能很可能永远不会实现。
