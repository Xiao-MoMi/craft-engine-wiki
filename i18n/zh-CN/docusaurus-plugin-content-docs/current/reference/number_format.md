---
title: 🔢 数字格式
id: number_format
---

:::caution

这些数字格式在大多数地方都有效，除了早期开发的物品数据相关功能。我们将在下一次物品系统重构期间尝试重新设计数字支持，以更好地处理随机化物品。

:::

### constant (常量)

提供一个固定的数值。

```yaml
type: constant
value: 1
```

:::tip
在大多数情况下，您可以使用以下缩写表示法。

```yaml
count:
  type: constant
  value: 1
```

->

```yaml
count: 1
```
:::

### uniform (均匀分布)

在给定范围内提供一个随机数。

```yaml
type: uniform
min: 1
max: 3
```

:::tip
在大多数情况下，您可以使用以下缩写表示法。

```yaml
count:
  type: uniform
  min: 1
  max: 3
```

->

```yaml
count: 1~3
```

`min` 和 `max` 都支持嵌套使用 `number provider`。

```yaml
count:
  type: uniform
  min:
    type: uniform
    min: 2
    max: 7
  max: "<papi:skilllevel_farming>*5~<papi:skilllevel_farming>*10"
```
:::

### expression (表达式)

[https://ezylang.github.io/EvalEx/references/references.html](https://ezylang.github.io/EvalEx/references/references.html)

```yaml
type: expression
expression: "20 + 70 / 2"
```

:::tip
在大多数情况下，您可以使用以下缩写表示法。

```yaml
count:
  type: expression
  expression: "<papi:skilllevel_farming> / 20 + 5"
```

->

```yaml
count: "<papi:skilllevel_farming> / 20 + 5"
```

:::
