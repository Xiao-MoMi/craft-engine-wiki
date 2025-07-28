---
title: 📂 类别
id: category
---

import PluginFileTree from '@site/src/components/PluginFileTree';

`category` 用于在使用物品浏览器时管理物品的排列顺序和分类规则。

<div style={{textAlign: 'center'}}>
  <img src="/img/category_1.png" alt="" />
</div>


一个基本的配置如下。完成设置后，它将出现在您的 /ce 菜单中。

```yaml
categories:
  default:palm_tree:
    name: "<!i><green><i18n:category.palm_tree></green>"
    lore: []
    hidden: false
    priority: 1
    icon: default:palm_log
    list:
      - default:palm_sapling
      - default:palm_leaves
      - default:palm_log
      - default:stripped_palm_log
      - default:palm_wood
      - default:stripped_palm_wood
      - default:palm_planks
```

### 选项说明

* `name` 和 `lore` 决定了类别图标的标题和描述。
* `icon` 代表此类别物品的视觉外观，您需要在插件中配置此物品的设置。
* `priority` 决定了显示顺序；“priority”值越小，其在 GUI 中的显示优先级越高。
* `hidden` 属性决定了此类别是否显示在主菜单中。有时您可能希望将一个类别嵌套在另一个类别中；在这种情况下，您需要将此属性设置为 `true`。稍后将提供相关示例。
* 在 `list` 中，您需要填写物品或类别（类别必须以“#”为前缀，例如 `#default:palm_tree`）。

### UI 提示

:::tip

无需打开配方页面并单击“获取物品”。直接使用这些快速操作：

- Shift + 左键单击以获取单个物品。
- Shift + 右键单击以获取一组。
- 中键单击以立即拾取一组。

:::

### 子类别

有时，您可能需要具有以下结构或更深层嵌套的类别配置。在这种情况下，您需要灵活使用 `hidden` 和 `#` 前缀。

<PluginFileTree
  initialTreeData={[
    {
      id: "main_category",
      name: "main_category",
      children: [
        {
          id: "sub_category_1",
          name: "sub_category_1",
          children: []
        },
        {
          id: "sub_category_2",
          name: "sub_category_2",
          children: []
        },
        {
          id: "sub_category_3",
          name: "sub_category_3",
          children: []
        },
      ]
    },
  ]}
/>


```yaml
categories:
  default:default:
    priority: 1
    name: "<!i><white><i18n:category.default.name></white>"
    lore:
      - "<!i><gray><i18n:category.default.lore>"
    icon: default:topaz
    list:
      - "#default:palm_tree"
      - "#default:topaz"
      - "#default:furniture"
      - "#default:misc"
  default:palm_tree:
    name: "<!i><green><i18n:category.palm_tree></green>"
    hidden: true
    icon: default:palm_log
    list:
      - default:palm_sapling
      - default:palm_leaves
      - default:palm_log
      - default:stripped_palm_log
      - default:palm_wood
      - default:stripped_palm_wood
      - default:palm_planks
  default:topaz:
    name: "<!i><#FF8C00><i18n:category.topaz></#FF8C00>"
    hidden: true
    icon: default:topaz
    list:
      - default:topaz
      - default:topaz_ore
      - default:deepslate_topaz_ore
      - default:topaz_axe
      - default:topaz_pickaxe
      - default:topaz_hoe
      - default:topaz_shovel
      - default:topaz_sword
      - default:topaz_bow
      - default:topaz_crossbow
      - default:topaz_rod
  default:furniture:
    name: "<!i><#FFD700><i18n:category.furniture></#FFD700>"
    hidden: true
    icon: default:table_lamp
    list:
      - default:bench
      - default:table_lamp
      - default:wooden_chair
  default:misc:
    name: "<!i><gray><i18n:category.misc></gray>"
    hidden: true
    icon: default:chinese_lantern
    list:
      - default:chinese_lantern
      - default:fairy_flower
```
:::tip
您也可以直接在物品本身中配置物品所属的类别。但是，请注意，在这种情况下，我们无法保证它在类别中的显示顺序。
```yaml
items:
  default:topaz_sword:
    material: golden_sword
    category: default:topaz
    ...更多选项
```
```yaml
items:
  default:topaz_sword:
    material: golden_sword
    category: 
      - default:swords
      - default:topaz_gears
    ...更多选项
```
:::
