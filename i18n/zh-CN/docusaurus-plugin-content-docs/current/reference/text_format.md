---
title: ✏️ 文本格式
id: text_format
---

## MiniMessage

在为插件配置物品名称、描述、GUI 等时，请使用 MiniMessage 格式。 [https://docs.advntr.dev/minimessage/format.html](https://docs.advntr.dev/minimessage/format.html)

> 在任何有意义的标记（token）所在的位置，它们都可以被转义。在纯文本中，标签的起始字符（`<`）可以通过前导的反斜杠（`\`）进行转义。在带引号的字符串中，起始的引号字符可以被转义（`\' 或 `"`）。在这两种情况下，转义字符本身也可以被转义，以输出一个字面意义上的 `\`。为了简单起见，不带引号的标签参数不能使用转义。在不支持转义的地方，字面意义上的转义字符将被直接传递。在支持转义但需要输出字面意义上的转义字符的地方，转义字符本身可以被转义以产生一个 `\`。

## 额外标签

这些是插件提供的额外标签。

:::tip
`[_参数_]` 表示可选
:::

:::info
你可以用 `'` 和 `"` 将你的参数括起来，例如 `<papi:'exp_multiplier':'1'>`

你也可以使用**嵌套**标签，例如 `<expr:'0.##':'<papi:exp_multiplier:1> * 10'>`
:::

:::info
你会注意到一些标签以“**viewer_**”开头。这是因为在某些情况下，一个文本可能由多个上下文实体构建而成。例如，考虑以下配置：

```yaml
message: -| 
  你好, <viewer_arg:player.name>。
  你注意到 <arg:player.name> 与一个自定义方块互动了吗？
```

如果**玩家 A** 与自定义方块互动并触发了消息广播，那么接收到此消息的**玩家 B** 将会看到：\
`"你好, B。你注意到 A 与一个自定义方块互动了吗？"`
:::

### `<shift:_pixels_>`

`shift` 允许你直接使用插件的偏移字符。

```yaml
item-name: "<!i><shift:-100><#FF8C00>黄玉法杖"
```

![](/img/text_format_1.png)

### `<papi:_placeholder_:_default_value_>`

### `<viewer_papi:_placeholder_:_default_value_>`

### `<rel_papi:_placeholder_:_default_value_>`

`papi` 允许使用 `PlaceholderAPI` 提供的占位符。

:::tip

**rel_papi** 指的是关系占位符

:::

```yaml
item-name: "<!i><#FF8C00><papi:player_name>的黄玉法杖"
```

![](/img/text_format_2.png)

你也可以指定一个默认值，使其在更多地方可用，而**不会导致错误**，例如：

```yaml
functions:
  - type: drop_exp
    count:
      type: uniform
      min: "<papi:exp_multiplier:1> * 3"
      max: "<papi:exp_multiplier:1> * 5"
```

### `<image:_namespace_:_id_:_row_:_column_>`

`image` 允许使用在插件中注册的图像

```yaml
item-name: "<!i><white><image:default:icons><#FF8C00> 黄玉法杖"
```

![](/img/text_format_3.png)

```yaml
item-name: "<!i><white><image:default:icons:0:1><#FF8C00> 黄玉法杖"
```

![](/img/text_format_4.png)

### `<i18n:_id_>`

搜索适用于当前语言的翻译。

```yaml
internal:cooking_info:
  template: "internal:icon/2d"
  arguments:
    model_data: 1006
    texture: cooking_info
    name: "<!i><#FF8C00><i18n:internal.cooking_info>"
    lore:
      - "<!i><gray><i18n:internal.cooking_info.0>"
      - "<!i><gray><i18n:internal.cooking_info.1>"
```

### `<expr:_format_:_expression_>`

执行一些数学运算

```yaml
item-name: "<!i><#FF8C00><expr:0.##:'70 / 8'>"
```

```yaml
item-name: "<!i><#FF8C00><expr:0.##:'<papi:player_x> / 8'>"
```

![](/img/text_format_5.png)

:::tip

**有用链接**

[https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/text/DecimalFormat.html](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/text/DecimalFormat.html)

[https://ezylang.github.io/EvalEx/references/references.html](https://ezylang.github.io/EvalEx/references/references.html)

:::

### `<arg:_index_>`

仅用于 `translations` 下的文件，表示索引参数。

### `<arg:_id_>`

### `<viewer_arg:_id_>`

这是一个命名参数。它的值可以来自两个可能的来源：

1.  **特定于上下文的参数** – 这些是在当前上下文中明确传递的参数。

```yaml
internal.cooking_info.0: "时间: <arg:cooking_time>ticks"
internal.cooking_info.1: "经验: <arg:cooking_experience>"
```

2.  **通用参数**

```yaml
<arg:random>  # 生成一个 0 到 1 之间的随机数
<arg:last_random>  # 获取最后一个随机数
```

3.  **上下文主题** – 如果上下文主题（例如，一个玩家）提供参数。查看此页面了解更多：

:::tip

在某些情况下，多个**上下文主题**可能共存。通过访问来自不同上下文主题的参数，您可以精确地控制函数的范围和行为。

```yaml
# 在方块的位置生成粒子
- type: particle
  x: '<arg:block.x> + 0.5'
  y: '<arg:block.y> + 0.5'
  z: '<arg:block.z> + 0.5'
  ...
# 在玩家的位置生成粒子
- type: particle
  x: '<arg:player.x>'
  y: '<arg:player.y>'
  z: '<arg:player.z>'
  ...
# 广播消息
- type: message
  target: 'all'
  message:
    - "你好 <viewer_arg:player.name>！这条消息来自 <arg:player.name>。"
    - "<arg:player.name> 刚刚与一个 <arg:block.owner> 方块互动！"
```

:::

### `<global:_id_:[args...]>`

在配置中定义的全局变量

```yaml
item-name: "<global:rare_tag> 稀有长矛"
```