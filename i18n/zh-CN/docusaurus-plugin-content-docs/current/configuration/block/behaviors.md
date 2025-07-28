---
title: 🕹️ 方块行为
id: behaviors
---

## 介绍

方块行为指的是方块独特的机制和物理特性。一些方块行为基于某些属性工作。例如：
- 作物方块需要一个 `age` 属性来跟踪生长阶段
- 门需要一个 `hinge` 属性来确定左/右部分

在后续页面中，您会找到一个类似这样的表头，指定此方块行为所需的属性名称和类型。

| 属性名称 | 属性类型 | 是否必需 |
|---|---|---|
| facing | direction | 是 |
| waterlogged | boolean | 否 |

:::info

未来版本可能支持自定义属性名称，但当前实现使用硬编码名称以简化配置。
:::

## 复合行为

您可以组合多个行为来创建复合行为。以下是单行为和多行为方块的示例。

```yaml
blocks:
  default:fairy_flower:
    behavior:
      type: bush_block
      bottom-block-tags:
        - minecraft:dirt
        - minecraft:farmland
```
```yml
blocks:
  default:gunpowder_block:
    behaviors:
      - type: concrete_powder_block
        solid-block: default:solid_gunpowder_block
      - type: falling_block
```

:::warning

请注意：组合某些方块行为可能会导致意外冲突。如果您遇到问题，请联系支持人员，我们将尽力解决任何冲突。

:::

:::caution

组合多个方块行为时，您还必须合并它们所需的属性。

:::
