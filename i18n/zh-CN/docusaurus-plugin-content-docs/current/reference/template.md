---
title: 📄 模板系统
id: template
---

## 介绍

该插件拥有极高的定制性，但不提供任何设置就无法进行配置。即使是一个非常简短的选项，也需要在您的 YAML 文件中占据一行。当有大量此类选项时，配置文件可能会变得过长。因此，该插件引入了模板系统，允许您定义一个基础模板，并使用参数和覆盖来填充或覆写某些参数，从而显著简化流程并减少在重复配置上花费的时间。

## 工作原理

要配置模板，您需要在 YAML 文件中使用 `templates` 作为根键。`templates` 下的第一个内容是您的模板名称。在下面的示例中，模板名为 `namespace:my_first_template`。该名称下的所有内容都是实际的模板内容。

```yaml
templates:
  namespace:my_first_template:
    option_1: true
    option_2: false
    option_3: 
      - hello
    option_4: 20.25
    option_5:
      hello: world
```

观看此快速动画，了解插件如何应用模板：

![](/img/template_1.gif)

:::info

`namespace:template_id` 作为您模板的唯一标识符。在其他地方引用或调用此模板时，必须使用此名称。

:::

:::tip

`namespace:template_id` 下的配置区域是完全可定制的，只要它遵循 YAML 语法即可。您可以根据需要完全自由地定义它。

:::

## 多个模板

您可以通过将 `template` 设置为列表来组合多个模板。

```yaml
items:
  craftengine:custom_item:
     template:
       - namespace:my_first_template
       - namespace:my_second_template

```

:::warning

注意：如果两个模板具有相同的设置，则下面的模板将覆盖上面的模板。但如果该设置是列表，它们将合并为一个组合列表。

:::

![](/img/template_2.gif)

## 参数

您可以在模板中使用 `${xxx}` 定义参数，例如 `${nutrition}` 或 `${saturation}`。然后，在调用模板时，使用 `arguments` 部分设置参数值。这是一个快速示例：

```yaml
templates:
  craftengine:apple_template:
    material: apple
    data:
      food:
        nutrition: "${nutrition}"
        saturation: "${saturation}"
items:
  craftengine:custom_apple:
    template: craftengine:apple_template
    arguments:
      nutrition: 1
      saturation: 2.5
```

![](/img/template_3.gif)

:::info

如果您需要将花括号 `{}` 用作普通文本（而不是参数），只需用反斜杠进行转义，例如 `\{` 或 `\}`。

`\${Hello world}`

:::

:::tip

要为参数设置默认值，请在参数名称后添加 `:-`，例如：

- `${nutrition:-1}`
- `${saturation:-2.5d}`
- `${map:-{aa:bb,cc:ddd}}`
- `${string:-"1234"}`

默认值遵循 Minecraft 的 SNBT 格式（与在命令中指定 NBT 数据时使用的格式相同）。

:::

## 覆盖 (Overrides)

覆盖会完全替换指定配置路径中的所有内容，包括列表和映射。不会进行合并，只是完全替换。

```yaml
items:
  craftengine:custom_bread:
    template: craftengine:apple_template
    arguments:
      nutrition: 1
      saturation: 2.5
    overrides:
      material: bread
```

![](/img/template_4.gif)

## 合并 (Merges)

合并会深度合并两个配置部分，包括所有列表——不会留下任何内容。基本上，合并的功能与多个模板几乎完全相同。

```yaml
items:
  craftengine:custom_bread:
    template: craftengine:apple_template
    arguments:
      nutrition: 1
      saturation: 2.5
    merges:
      data:
        food:
          can-always-eat: true
```

## 提示

:::tip

尽管此功能很少需要，但您可以在配置键中使用参数。

```yaml
templates:
  craftengine:example:
    "${argument}": value
```

您还可以在模板列表、覆盖和合并中使用参数。

```yaml
templates:
  default:settings/ore:
    template:
      - default:sound/stone
      - default:pickaxe_power/level_${break_power}
    overrides:
      push-reaction: NORMAL
      is-redstone-conductor: true
      is-suffocating: true
      instrument: BASEDRUM
      can-occlude: true
      map-color: ${map_color}
      tags:
        - minecraft:mineable/pickaxe
    merges:
      hardness: ${hardness}
      resistance: 3.0
```
