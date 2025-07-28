---
title: 🔣 方块状态
id: states
---

## 介绍

在 Minecraft 的方块系统中，每个方块都有一个或多个方块状态。例如，木头有朝向，树叶有不同的距离。这些状态决定了方块在游戏中的行为和外观。


![](/img/block_states_1.png)

## 单一状态方块

大多数方块只需要一个单一状态即可正常工作。下面的示例展示了如何配置一个单一状态的方块。

```yaml
blocks:
  default:chinese_lantern:
    state:
      id: 15
      state: note_block:15
      model:
        path: "minecraft:block/custom/chinese_lantern"
        generation:
          parent: "minecraft:block/cube_column"
          textures:
            "end": "minecraft:block/custom/chinese_lantern_top"
            "side": "minecraft:block/custom/chinese_lantern"
```

### 内部 ID

```yaml
blocks:
  default:chinese_lantern:
    state:
      id: 15
```

**id** 代表方块的唯一标识符。例如，本例中的 `15` 将对应于 `craftengine:note_block_15`。

:::caution
`id: 15` 中的 **15** 与 `state: note_block:15` 中的 **15** 完全无关。我稍后会解释。
:::

:::info

**id** 的最大数量由两个因素的总和决定：

1. **可用的方块外观状态**：这些在 `mappings.yml` 文件中定义。对于单个方块类型，您“释放”的自由方块状态越多，可用的外观状态数量就越多。
2. **额外注册的真实状态**：这些通过 `additional-real-blocks.yml` 文件添加。此配置允许您为特定方块手动注册额外的真实服务器端状态，从而进一步增加内部 ID 的总池。

:::

### 可视状态

```yaml
blocks:
  default:chinese_lantern:
    state: note_block:15
```
`state` 指的是客户端看到的可视外观。这些状态是我们在 **mappings.yml** 文件中释放的原版方块状态。可用状态的最大数量由 Minecraft 版本决定，并且受到严格限制。`note_block:15` 指的是第 **16** 个被释放的 note_block 方块状态（从零开始索引）。

![](/img/block_states_2.png)![](/img/block_states_3.png)

:::tip

如果您想精确控制正在使用的外观状态，可以像这样配置状态。
```yaml
state: minecraft:note_block[instrument=hat,note=0,powered=false]
```
:::

### 模型

```yaml
blocks:
  default:chinese_lantern:
    state:
      model:
        path: "minecraft:block/custom/chinese_lantern"
        generation:
          parent: "minecraft:block/cube_column"
          textures:
            "end": "minecraft:block/custom/chinese_lantern_top"
            "side": "minecraft:block/custom/chinese_lantern"
```

`model` 决定了哪个 3D 模型将替换被释放的原版方块状态。除了标准方块模型外，CraftEngine 还允许进一步配置随机模型和模型旋转。

:::caution

如果您不确定如何配置 `path` 和 `generation` 等属性，您应该首先完成[教程](../../getting_start.md)。

:::

#### 加权模型

要实现随机模型，只需以列表格式提供模型路径：

```yaml
state:
  models: # model(s)
    - path: "minecraft:block/custom/fairy_flower_1"
      weight: 8
    - path: "minecraft:block/custom/fairy_flower_2"
      weight: 5
    - path: "minecraft:block/custom/fairy_flower_3"
      weight: 2
```

> weight: 设置模型在游戏中使用的概率，默认为 1 (=100%)。如果同一变体使用多个模型，则通过将单个模型的权重除以所有模型的权重之和来计算概率。（例如，如果使用三个权重分别为 1、1 和 2 的模型，则它们的总权重为 4 (1+1+2)。然后，通过将每个权重除以 4 来确定每个模型的使用概率：分别为 1/4、1/4 和 2/4，或 25%、25% 和 50%。）

![](/img/block_states_4.png)

#### 旋转

如果您需要创建一个具有三种不同方向的木块，您需要做的就是指定 x 和 y 属性。

```yaml
model:
  path: "minecraft:block/custom/chinese_lantern"
  x: 90
  y: 180
  uvlock: false
```

> x: 模型在 x 轴上的旋转，增量为 90 度.\
> y: 模型在 y 轴上的旋转，增量为 90 度.\
> uvlock: 可以是 true 或 false（默认值）。如果设置为 true，则锁定方块纹理的旋转。这样，在使用上面的 x 和 y 标签时，纹理不会随方块旋转。

## 多状态方块

:::warning

以下内容可能难以理解。我将尽可能详细地解释。请务必**逐字**阅读。

:::

创建多状态方块的第一步是定义该方块的状态**属性**类型。在本例中，我设置了一个 `axis` 属性。

```yaml
blocks:
  default:palm_log:
    states: # state(s)
      properties:
        axis:             # 属性名称
          type: axis      # 数据类型
          default: y      # 默认值
```

### 属性

属性名称几乎是任意的，但我建议使用小写字母。但是，插件为特殊的放置行为硬编码了某些名称。例如，当属性名为 `axis` 时，插件将在放置期间自动对齐其方向。整个过程是完全自动化的。

在下面的示例中，由于属性名为 `custom_axis`，插件在放置期间将**不**应用旋转。无论您如何放置它，放置时方块将始终使用 `custom_axis=y` 状态。

```yaml
custom_axis:
  type: axis
  default: y 
```

:::tip

您可以在 [ℹ️ 属性](./states/properties.md) 上找到有关属性类型和插件硬编码属性名称的详细信息。

:::

### 外观

第二步，我们需要为自定义方块配置可能的外观。例如，一个原木方块需要三个方向，因此我们需要分配三个原版状态作为其视觉表示。

```yaml
blocks:
  default:palm_log:
    states:
      appearances:
        axisY:
          state: "note_block:0"
          model:
            path: "minecraft:block/custom/stripped_palm_log"
            generation:
              parent: "minecraft:block/cube_column"
              textures:
                "end": "minecraft:block/custom/palm_log_top"
                "side": "minecraft:block/custom/palm_log"
        axisX:
          state: "note_block:1"
          model:
            x: 90
            y: 90
            path: "minecraft:block/custom/stripped_palm_log_horizontal"
            generation:
              parent: "minecraft:block/cube_column_horizontal"
              textures:
                "end": "minecraft:block/custom/palm_log_top"
                "side": "minecraft:block/custom/palm_log"
        axisZ:
          state: "note_block:2"
          model:
            x: 90
            path: "minecraft:block/custom/stripped_palm_log_horizontal"
            generation:
              parent: "minecraft:block/cube_column_horizontal"
              textures:
                "end": "minecraft:block/custom/palm_log_top"
                "side": "minecraft:block/custom/palm_log"
```

:::info

在上面的配置中，`axisX`、`axisZ` 和 `axisY` 是任意名称。您可以使用任何清楚地表示视觉状态的描述性术语，只要它们是唯一的即可。

`state` 和 `model(s)` 的配置遵循与单一状态方块相同的规则。如果您不确定任何细节，请返回相关文档。

:::

### 变体

现在是最后一步：我们需要组合所有自定义属性，列出所有可能的组合，并为每个组合分配内部方块 ID。如果您不熟悉**内部 ID**，请查看相关文档。

对于属性及其值，使用 `=` 连接它们（例如 `axis=y`）。当多个属性一起出现时，用逗号分隔它们（例如 `axis=y,age=7`）。

```yaml
blocks:
  default:palm_log:
    states:
      variants:
        axis=x:
          appearance: axisX # 指的是我们刚刚在“appearances”中定义的 appearance 名称
          id: 0
        axis=y:
          appearance: axisY
          id: 1
        axis=z:
          appearance: axisZ
          id: 2
```

<details>
  <summary>完整配置</summary>

```yml
blocks:
  default:palm_log:
    states:
      properties:
        axis:
          type: axis
          default: y
      appearances:
        axisY:
          state: "note_block:0"
          model:
            path: "minecraft:block/custom/stripped_palm_log"
            generation:
              parent: "minecraft:block/cube_column"
              textures:
                "end": "minecraft:block/custom/palm_log_top"
                "side": "minecraft:block/custom/palm_log"
        axisX:
          state: "note_block:1"
          model:
            x: 90
            y: 90
            path: "minecraft:block/custom/stripped_palm_log_horizontal"
            generation:
              parent: "minecraft:block/cube_column_horizontal"
              textures:
                "end": "minecraft:block/custom/palm_log_top"
                "side": "minecraft:block/custom/palm_log"
        axisZ:
          state: "note_block:2"
          model:
            x: 90
            path: "minecraft:block/custom/stripped_palm_log_horizontal"
            generation:
              parent: "minecraft:block/cube_column_horizontal"
              textures:
                "end": "minecraft:block/custom/palm_log_top"
                "side": "minecraft:block/custom/palm_log"
      variants:
        axis=x:
          appearance: axisX
          id: 0
        axis=y:
          appearance: axisY
          id: 1
        axis=z:
          appearance: axisZ
          id: 2
```

</details>

:::tip

要为特定状态自定义方块设置，请添加如下配置：

```yaml
variants:
  "distance=7,persistent=false,waterlogged=false":
    appearance: "default"
    id: 6
    settings:
      is-randomly-ticking: true
```

:::

## 感到困惑？

但是，您可能也会对 `id` 和 `state` 之间的关系感到困惑——为什么我需要配置两个参数？除了使配置更复杂之外，这的实际目的是什么？

要理解为什么，您需要从根本上了解 CraftEngine 如何实现自定义方块。让我们从讨论插件背后的原理开始。

### 未使用的状态

首先，让我问您一个简单的问题：一个原版树叶方块有多少种不同的外观？我相信您会很快得出答案：两种状态——浸水和未浸水。

但是您知道单个类型的树叶方块需要在服务器端维护多少个方块状态吗？

<details>
  <summary>答案</summary>

  正确的数字是 **28**。您答对了吗？

  但是这个数字是如何计算的呢？让我们启用调试模式 (F3) 并将光标悬停在树叶方块上。您会注意到方块 ID 下列出了几个键值对——这些代表了方块的属性。或者，您可以使用调试棒来检查这些。

  ![](/img/block_states_6.png)
  
  - waterlogged: 2 个状态 (true/false)。
  - persistent: 2 个状态 (true/false)。
  - distance: 7 个状态 (值 1 到 7)。

  因此，可能的树叶方块状态总数为 `2 × 2 × 7 = 28`。

  ![](/img/block_states_5.png)

</details>

然后您会意识到——哇！有这么多树叶方块状态，但只有两种视觉变体，我们不能将那些额外的状态重新用于自定义方块外观吗？完全正确！这就是 `mappings.yml` 文件发挥作用的地方。通过 `mappings.yml`，我们可以**将看起来相同的方块状态映射为共享相同的视觉表示**。这种巧妙的方法为我们的自定义方块实现释放了那些冗余的状态。

### mappings.yml

以下是默认 mappings.yml 配置的摘录。它将所有 distance=1-7 的橡树叶映射到 distance=7 和 persistent=true。这意味着世界上的每个原版树叶方块在技术上都被插件转换为 distance=7、persistent=true 的树叶——但您在视觉上无法分辨出差异，因为它们看起来完全相同。

```yml
"minecraft:oak_leaves[distance=1,persistent=false,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=2,persistent=false,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=3,persistent=false,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=4,persistent=false,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=5,persistent=false,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=6,persistent=false,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=7,persistent=false,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=1,persistent=true,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=2,persistent=true,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=3,persistent=true,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=4,persistent=true,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=5,persistent=true,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
"minecraft:oak_leaves[distance=6,persistent=true,waterlogged=false]": minecraft:oak_leaves[distance=7,persistent=true,waterlogged=false]
```

### Id 和 State

现在，让我们回到我们刚刚讨论的 **id** 和 **state**。state 指的是我们在 mappings.yml 中释放的“未使用”方块状态，而 **id** 代表服务器端实际存在的方块状态。我们需要用**数据包魔法**在这两个参数之间建立一座桥梁，这样服务器上实际存在的新方块将被映射到那些被释放的原版状态，从而显示为自定义方块。

### 真实方块状态不足

默认情况下，插件生成并释放的真实方块状态数量等于可用的被释放的视觉状态数量。但是，在某些情况下，我们可能需要需要更多真实方块状态但视觉状态较少的特殊机制。在这种情况下，多个真实状态将被映射到同一个视觉状态，从而导致标题中提到的问题：“真实方块不足”。

要解决此问题，您需要使用 `additional-real-blocks.yml` 文件来注册其他真实方块。

