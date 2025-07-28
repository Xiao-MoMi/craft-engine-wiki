---
title: 🍳 配方
id: recipe
---

import Highlight from '@site/src/components/Highlight';

## 准备工作

在设置新配方之前，您需要了解以下内容。这些提示将使配置更容易，并揭示额外的有用功能。

### 标签

CraftEngine 允许您使用标签，您也可以创建自定义标签。要使用标签，只需遵循以下格式：`#namespace:tag`。

:::tip

大多数合成插件都有一个共同的痛点——它们不支持为物品分配标签，也不允许在配方中使用标签。例如，如果您希望新创建的木板类型能够与原版木板在合成配方中混合使用，这根本无法实现

:::

在下面的示例中，我向 `palm_planks` 添加了两个原版标签，允许它们参与包含这两个标签的数据包中的所有配方。

```yaml
items:
  default:palm_planks:
    material: paper
    custom-model-data: 1004
    settings:
      fuel-time: 300
      tags:
        - "minecraft:planks"
        - "minecraft:wooden_tool_materials"
    data:
      item-name: "<!i>棕榈木板"
```

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_1.png" alt="" />
  <p style={{fontSize: '0.9em', color: '#666', marginTop: '0.5em'}}>#minecraft:planks</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_2.png" alt="" />
  <p style={{fontSize: '0.9em', color: '#666', marginTop: '0.5em'}}>#minecraft:wooden_tool_materials</p>
</div>

### 组/类别

```yaml
recipes:
  default:palm_planks:
    type: shapeless
    category: building
    group: planks
    ingredients:
      A: "#default:palm_logs"
    result:
      id: default:palm_planks
      count: 4
```

`group` 决定了此配方在客户端解锁后属于哪个组。`group` 可以是您自由选择的任何名称。但是，请避免使用非法字符。

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_3.png" alt="" />
  <p style={{fontSize: '0.9em', color: '#666', marginTop: '0.5em'}}>组</p>
</div>

`category` 决定了此配方在配方书中的哪个选项卡中。`category` 类型是有限的。

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_4.png" alt="" />
  <p style={{fontSize: '0.9em', color: '#666', marginTop: '0.5em'}}>类别</p>
</div>

* 对于烹饪类配方，选项为 `food`、`blocks` 和 `misc`。
* 对于合成类配方，选项为 `building`、`redstone`、`equipment` 和 `misc`。

### 与其他插件的兼容性

首先，将支持的插件添加到 `config.yml` 中的此列表中：

```yaml
recipe:
  ingredient-sources:
    - MythicMobs
```

:::info
支持的物品来源可以在 [📦️ 外部物品来源](../compatibility/external_item_sources.md) 中找到。您也可以通过 API 注册自己的物品来源。
:::

接下来，您必须将每个外部物品来源映射到其 CraftEngine 等效项。请参阅下面的示例配置以供参考：

```yaml
items: 
  mythicmobs:kingscrown:
    material: golden_helmet
    data:
      external:
        plugin: MythicMobs
        id: KingsCrown
    settings:
      tags:
        - add_tag:if_you_want
```

之后，只需像处理任何常规物品一样为此物品创建配方即可。

```yaml
recipes:
  default:bench:
    type: shaped
    pattern:
      - A A
      - A A
    ingredients:
      A: mythicmobs:kingscrown
    result:
      id: default:bench
      count: 1
```

:::caution

对于用作原料的任何物品，您必须确保它们在 CraftEngine 中的命名空间是插件名称的**小写**，并且 ID 也应为**小写**。让我给您举几个例子，以便您了解其工作原理：

* MythicMobs 中名为“MySword”的物品 -> `mythicmobs:mysword`
* CustomFishing 中名为“star\_fish”的物品 -> `customfishing:star_fish`
* MMOItems 中类型为“MATERIAL”且名为“MAGIC\_GEM”的物品 -> `mmoitems:material_magic_gem`
* 随机插件中具有命名空间 ID 的物品 -> `random_plugin:namespace_id`

:::

### 结果后处理器

<Highlight color="#da0d0dff">**实验性**</Highlight><Highlight color="#0d9622ff">**实施中**</Highlight>

**结果后处理器** 是为解决配方多样化需求而引入的概念。例如，如果您想制作一把镐，但希望输出带有附魔，那么为附魔物品创建一个单独的配方是不切实际的。

```yaml
result:
  id: default:topaz_pickaxe
  count: 1
  post-processors:
    - type: apply_data
      data:
        enchantments:
          minecraft:efficiency: 5
```

### 可视化结果

<Highlight color="#da0d0dff">**概念阶段**</Highlight><Highlight color="#0d58daff">**未实施**</Highlight>

您会注意到该插件保留了一个名为 **visual-result** 的功能。这允许在合成过程中显示一个独特的物品，从而有效地防止玩家提前预测随机配方的输出。

```yaml
result:
  id: default:topaz_pickaxe
  count: 1
  post-processors:
    - type: apply_data
      data:
        enchantments:
          minecraft:efficiency: 5
visual-result:
  id: default:random_icon
```


## 配方类型

:::caution

**重要通知：**

要重新加载配方，您必须使用 `/ce reload recipe` 或 `/ce reload all`。如果您正在运行 Folia 服务器，则只能使用 `/ce reload recipe`。

**Folia 服务器警告：**

此操作非常不安全！Folia 的配方管理器不是线程安全的，在运行时重新加载配方可能会导致服务器崩溃。

:::

### 有序合成配方

```yaml
recipes:
  default:topaz_shovel:
    type: shaped
    pattern:
      - "A"
      - "B"
      - "B"
    ingredients:
      A: "default:topaz"
      B: "minecraft:stick"
    result:
      id: default:topaz_shovel
      count: 1
```

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_5.png" alt="" />
</div>

```yaml
recipes:
  default:chinese_lantern:
    type: shaped
    pattern:
      - "ABA"
      - "BCB"
      - "ABA"
    ingredients:
      A: "#minecraft:planks"
      B: "minecraft:stick"
      C: "minecraft:torch"
    result:
      id: default:chinese_lantern
      count: 1
```

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_6.png" alt="" />
</div>

### 无序合成配方

```yaml
recipes:
  default:palm_planks:
    type: shapeless
    category: building
    group: planks
    ingredients:
      - "#default:palm_logs"
      # 也支持嵌套列表
      - - test:ingredient1
        - test:ingredient2
    result:
      id: default:palm_planks
      count: 4
```

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_7.png" alt="" />
</div>
<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_8.png" alt="" />
</div>


### 烹饪配方

烹饪配方包括 `smelting`、`blasting`、`smoking` 和 `campfire_cooking`。无论类型如何，配置格式都保持不变。

```yaml
recipes:
  default:topaz_from_smelting_topaz_ore:
    type: smelting
    experience: 1.0
    category: misc
    group: topaz
    time: 200
    ingredient: "default:topaz_ore"
    result:
      id: default:topaz
      count: 1
  default:topaz_from_smelting_deepslate_topaz_ore:
    type: smelting
    experience: 1.0
    category: misc
    group: topaz
    time: 200
    ingredient: "default:deepslate_topaz_ore"
    result:
      id: default:topaz
      count: 1
```

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_9.png" alt="" />
</div>

### 切石机配方

```yaml
recipes:
  default:stonecutting_example:
    type: stonecutting
    group: topaz
    ingredient: "minecraft:stone"
    result:
      id: default:topaz
      count: 1
```

:::warning

切石机配方是一种有点独特的配方类型。我不建议使用自定义物品作为原料，因为这很可能会导致严重的客户端视觉问题。

:::

### 锻造变换配方

```yaml
default:topaz_bow:
  type: smithing_transform
  template-type: default:topaz # 槽 1（可选）
  base: minecraft:bow # 槽 2（必需）
  addition: default:topaz # 槽 3（可选）
  # 像原版一样合并两个物品的组件
  merge-components: true # 默认值：true
  result:
    id: default:topaz_bow
    count: 1
  # 请参阅下面的指南
  post-processors: []
```

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_10.png" alt="" />
</div>


:::tip
如果您需要更精确地控制保留哪些组件，则应如下所示指定后处理器。

**重要提示：** 不要将此与[结果后处理器](#结果后处理器)混淆——这些是完全不同的系统。

```yaml
post-processors:
  # 保留指定的组件 (1.20.5+)
  - type: keep_components
    components:
      - minecraft:enchantments
  # 保留指定的 nbt 标签 (1.20-1.20.4)
  - type: keep_tags
    tags:
      - display.Name
      - CustomModelData
```
:::

### 锻造修剪配方

```yaml
default:bolt_tool_trims:
  type: smithing_trim
  template-type: "minecraft:bolt_armor_trim_smithing_template"
  base: "#minecraft:trimmable_tool"
  addition: "#minecraft:trim_materials"
  pattern: minecraft:bolt # 1.21.5+ 必需
```

<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_11.png" alt="" />
</div>

### 酿造配方

<Highlight color="#0dda4aff">**1.20.2+**</Highlight>

```yaml
tea_art:tea:
  type: brewing
  ingredient: tea_art:tea_leaf
  container: tea_art:cup
  result:
    id: tea_art:cup_of_tea
    count: 1
```
<div style={{textAlign: 'center'}}>
  <img src="/img/recipe_12.png" alt="" />
</div>
