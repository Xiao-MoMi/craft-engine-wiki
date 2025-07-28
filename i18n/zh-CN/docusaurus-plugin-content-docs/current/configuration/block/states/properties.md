---
title: ℹ️ 属性
id: properties
---

## 类型

:::tip

`default` 选项是可选的。

:::

### boolean

`boolean` 类型的属性只能有两个可能的值：`true` 或 `false`。

```yaml
properties:
  happy:
    type: boolean
    default: false
```

### int

`int` 类型的属性可以取指定范围内的任何整数值。

```yaml
properties:
  mode:
    type: int
    default: 1
    range: 1~3
```

### string

`string` 类型的属性只能从一组预定义的选项中取值。

```yaml
properties:
  color:
    type: string
    default: red
    values:
      - read
      - green
      - blue
```

### direction

`east, south, west, north, up, down`

```yaml
properties:
  facing:
    type: direction
    default: north
```

### horizontal\_direction

`east, south, west, north`

```yaml
properties:
  facing:
    type: horizontal_direction
    default: north
```

### axis

`x, y, z`

```yaml
properties:
  axis:
    type: axis
    default: y
```

### single\_block\_half

`top, bottom`

```yaml
properties:
  half:
    type: single_block_half
    default: bottom
```

### double\_block\_half

`upper, lower`

```yaml
properties:
  half:
    type: double_block_half
    default: lower
```

### hinge

`left, right`

```yaml
properties:
  hinge:
    type: hinge
    default: left
```


### slab\_type

`top, bottom, double`

```yaml
properties:
  type:
    type: slab_type
    default: bottom
```

### stairs\_shape

`straight, inner_left, inner_right, outer_left, outer_right`

```yaml
properties:
  shape:
    type: stairs_shape
    default: straight
```

## 硬编码名称

:::info

除了下面提到的名称外，一些名称由方块的行为决定。例如，树苗行为需要一个名为 `age` 的属性。

:::

### waterlogged

waterlogged 决定了此方块是否可以包含水。

:::warning
注意：使用 waterlogged 状态时，请确保相应的可视方块也包含水；否则，客户端将无法正常渲染水。
:::

```yaml
properties:
  waterlogged:
    type: boolean
    default: false
```

### facing

当方块具有此硬编码属性名称时，其放置方向将自动调整。

```yaml
properties:
  facing:
    type: direction
    default: north
```

### facing\_clockwise

与上述不同，放置时它将旋转 90 度

```yaml
properties:
  facing_clockwise:
    type: horizontal_direction
    default: north
```
