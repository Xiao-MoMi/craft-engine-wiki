---
title: 
 添加自定义模型
id: add_custom_model
---

import PluginFileTree from '@site/src/components/PluginFileTree';
import Highlight from '@site/src/components/Highlight';
import DiffViewer from '@site/src/components/DiffViewer';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

在开始之前，请确保您的资源包主机已完全设置好。请记住——每次模型编辑都需要更新资源包才能生效。否则，当您执行 `/ce reload all` 时，您将无法立即看到更改。


## 准备工作

### 什么是资源位置

> 资源位置是 Minecraft 中声明和指定游戏对象的一种方式，它可以识别内置和用户定义的对象，而不会产生潜在的歧义或冲突。

在设置物品 ID、模型路径或纹理路径时，您需要遵循以下命名规则：https://minecraft.wiki/w/Resource_location#Legal_characters

:::tip

让我们做一个快速测试！这五个资源位置中，哪些是有效的？

1. `MyFirst:golden_sword`
2. `minecraft:steel furnace`
3. `abcd-efgh:1122.3344`
4. `craftengine:happy$crafting`
5. `test:tutorial_book`

<details>
  <summary>答案</summary>
  1. ❌️ 不允许使用大写字母
  2. ❌️ 不允许使用空格
  3. ✔️
  4. ❌️ `$` 不是有效字母
  5. ✔️
</details>

:::

### 什么是模型？

> 模型是 Minecraft 中使用的三维形状，用于显示游戏中遇到的对象。

无论是**方块**还是**物品**，它们都需要一个模型。即使某个东西看起来只是一个简单的纹理，它仍然需要一个基本的模型。这些模型文件都以 `.json` 结尾，您可以在 [BlockBench](https://www.blockbench.net/) 中打开/编辑其中的大部分。

这是一个快速的文件结构，显示了模型应该放在哪里：

<PluginFileTree
    initialTreeData={[
        {
        id: "assets",
        name: "assets",
        children: [
            {
            id: "minecraft",
            name: "minecraft",
            hoverText: "默认的 Minecraft 资产使用“minecraft”命名空间。您可以使用此命名空间或您自己的命名空间，但要避免与原版模型发生命名冲突。",
            children: [
                {
                id: "models",
                name: "models",
                children: [
                    {
                    id: "item",
                    name: "item",
                    children: [
                        {
                            id: "acacia_boat.json",
                            name: "acacia_boat.json",
                            isLeaf: true,
                        },
                        {
                            id: "my_custom_item_model.json",
                            name: "my_custom_item_model.json",
                            isLeaf: true,
                        }
                    ]
                    },
                    {
                    id: "block",
                    name: "block",
                    children: [
                        {
                            id: "acacia_button.json",
                            name: "acacia_button.json",
                            isLeaf: true,
                        },
                        {
                            id: "my_custom_block_model.json",
                            name: "my_custom_block_model.json",
                            isLeaf: true,
                        }
                    ]
                    },
                ]
                }
            ]
            }
        ]
        }
    ]}
/>

<div style={{ marginBottom: "32px" }}></div>

:::info

在制作资源包时，我强烈建议遵循 Minecraft 的结构：

- 将物品模型放在 `/models/item/`
- 将方块模型放在 `/models/block/`

保持这种组织结构可以使您的包更加标准化，更易于使用！

为避免与 Minecraft 的默认资产发生冲突，您有两个很好的选择：

- 创建子文件夹，如 /models/item/custom/
- 或者更好的是，使用您自己的命名空间（例如 mypack:item/sword）

:::

### 什么是纹理/图集？

模型定义形状，但纹理带来色彩！纹理是指专门采用 PNG 格式（文件扩展名为 .png）的图像文件。不允许使用 JPG/JPEG 或 GIF 等替代图像格式。

 这是它们的位置：

<PluginFileTree
    initialTreeData={[
        {
        id: "assets",
        name: "assets",
        children: [
            {
            id: "minecraft",
            name: "minecraft",
            hoverText: "默认的 Minecraft 资产使用“minecraft”命名空间。您可以使用此命名空间或您自己的命名空间，但要避免与原版模型发生命名冲突。",
            children: [
                {
                id: "textures",
                name: "textures",
                children: [
                    {
                        id: "item",
                        name: "item",
                        children: [
                        {
                            id: "acacia_boat.png",
                            name: "acacia_boat.png",
                            isLeaf: true,
                        },
                        {
                            id: "my_custom_item_texture.png",
                            name: "my_custom_item_texture.png",
                            isLeaf: true,
                        }
                        ]
                    },
                    {
                        id: "block",
                        name: "block",
                        children: [
                        {
                            id: "allium.png",
                            name: "allium.png",
                            isLeaf: true,
                        },
                        {
                            id: "my_custom_block_texture.png",
                            name: "my_custom_block_texture.png",
                            isLeaf: true,
                        }
                        ]
                    }
                ]
                }
            ]
            }
        ]
        }
    ]}
/>

<div style={{ marginBottom: "32px" }}></div>

:::caution

**纹理路径比模型路径更严格！**

虽然即使您放错了 JSON 文件（例如，放在 /item/ 或 /block/ 之外），模型也可能正常工作，但由于 Minecraft 的纹理图集系统，纹理必须放在正确的文件夹中。

让我简化一下 Minecraft 中纹理的工作原理：

Minecraft 将多个纹理组合成一个巨大的图像（称为图集）以提高性能。但是，并非所有纹理都是模型纹理（例如，南瓜头面具、雨/雪环境纹理等）。因此，必须使用图集文件来定义哪些纹理有资格加载。

![](/img/minecraft_textures_atlas_blocks.png_0.png)

默认情况下，Minecraft 使用以下纹理图集 `(minecraft/atlases/blocks.json)`：

```json
{
    "sources": [
        { "type": "directory", "source": "block", "prefix": "block/" }, 
        { "type": "directory", "source": "item", "prefix": "item/" },
        ...更多
    ]
}
```

这就是为什么 Minecraft 默认只能加载位于 block 和 item 目录中的纹理。如果您尝试引用不受支持的路径（例如 `textures/custom`）中的纹理，引擎将无法加载它们，从而导致出现紫色和黑色的棋盘格图案。

![](/img/out_of_atlas.png)

<details>
  <summary>自定义图集教程</summary>

要创建图集路径，您只需在资源包的以下路径中添加一个文件：`resourcepack/assets/minecraft/atlases/blocks.json`。以下是一个简单的示例，将自定义路径添加到图集中：

```json
{
    "sources": [
        { "type": "directory", "source": "custom", "prefix": "custom/" }
    ]
}
```

</details>

:::

:::warning

**Minecraft 的模型纹理尺寸要求**

仅对于模型纹理，宽度和高度必须是 2 的幂（例如 16、32、64、128）以确保正确渲染。此限制不适用于字体纹理（例如 rank.png、GUI 元素、HUD 图标等），它们可以使用任意尺寸。

有效示例：\n✅ 16×16（原版默认）\n✅ 32×32（高清纹理常用）\n✅ 64×64、64×128（更高分辨率的包）

无效示例：\n❌ 7×7、13×13、19×19（非 2 的幂的尺寸）\n❌ 17×32（混合了有效/无效尺寸）

**切勿将字体/GUI 纹理（例如 rank.png、HUD 元素）与模型纹理（例如 block/、item/）放在同一目录中。** 即使这些纹理没有直接在模型中使用，Minecraft 的纹理图集系统也会在生成组合精灵表时自动包含它们。这可能会导致意外的视觉效果下降（mipmap 级别）：

<details>
  <summary>Mipmap 级别 4 VS Mipmap 级别 0</summary>

    ![Mipmap 级别 4](/img/mipmap_4.png)

    ![Mipmap 级别 0](/img/mipmap_0.png)

</details>

:::

## 创建模型文件

现在让我们创建第一个模型文件！您可以通过 [BlockBench](https://www.blockbench.net/) 或在 CraftEngine 中配置来创建模型。我将把本节分为两个独立的教程。我强烈建议您尝试这两种方法，以更深入地了解模型系统的工作原理。

<a href="/img/toxic_sword.png" download>下载教程剑纹理</a>

将下载的 PNG 图像放入如下所示的文件夹结构中。然后，我们将继续创建模型。

<PluginFileTree
    initialTreeData={[
        {
        id: "resourcepack",
        name: "resourcepack",
        children: [
        {
        id: "assets",
        name: "assets",
        children: [
            {
            id: "tutorial",
            name: "tutorial",
            children: [
                {
                id: "textures",
                name: "textures",
                children: [
                    {
                        id: "item",
                        name: "item",
                        children: [
                        {
                            id: "toxic_sword.png",
                            name: "toxic_sword.png",
                            isLeaf: true,
                        }
                        ]
                    }
                ]
                }
            ]
            }
        ]
        }
        ]
        }
    ]}
/>

### 使用 BlockBench 创建模型

作为服务器开发人员，您不需要高级的建模技能。您只需要掌握基本的模型编辑和导入！将以下教程视为一个游乐场，自由地进行实验。

![](/img/blockbench_1.png)

![](/img/blockbench_2.png)

:::tip

首先，在进行任何编辑之前，使用 Ctrl+S 将模型保存到您的资源包文件夹中。在本教程中，我将 JSON 文件保存到：
`/resources/tutorial/resourcepack/assets/tutorial/models/item/`

:::

![](/img/blockbench_3.png)


:::tip

创建一个基本的立方体并应用 toxic_sword 纹理 `resourcepack/assets/tutorial/textures/item/toxic_sword.png`。尝试进行简单的调整——将此视为一次随意的练习。在下面的示例中，我创建了一个非常规的剑形方块。虽然不寻常，但关键在于这代表了一个完全自定义的模型。

:::

![](/img/blockbench_4.png)

![](/img/blockbench_5.png)

现在让我们使用专业的文本编辑器打开我们刚刚创建的模型 JSON 文件。您的 JSON 结构通常应与我的匹配。

:::caution

始终将模型 JSON 文件保存在完整的资源包结构中。否则，BlockBench 无法推断出正确的资源包层次结构，从而导致 Minecraft 无法解析的纹理路径。如果您的 `textures` 条目与我的有很大不同，这很可能是原因。

:::

```json
{
  "format_version": "1.21.6",
  "credit": "使用 Blockbench 制作",
  "textures": {
    "0": "tutorial:item/toxic_sword",
    "particle": "tutorial:item/toxic_sword" // 指的是方块破坏、进食等的视觉效果。
  },
  "elements": [
    {
      "from": [0, 0, 0],
      "to": [16, 16, 16],
      "faces": {
        "north": {"uv": [0, 0, 16, 16], "texture": "#0"},
        "east": {"uv": [0, 0, 16, 16], "texture": "#0"},
        "south": {"uv": [0, 0, 16, 16], "texture": "#0"},
        "west": {"uv": [0, 0, 16, 16], "texture": "#0"},
        "up": {"uv": [0, 0, 16, 16], "texture": "#0"},
        "down": {"uv": [0, 0, 16, 16], "texture": "#0"}
      }
    }
  ]
}
```

:::info

使用第三方资源包时，修改模型纹理路径可能会导致纹理丢失错误。在这种情况下，请在 BlockBench 中打开模型并重新配置纹理路径。否则，模型将显示为紫色-黑色的错误方块。

或者，您可以使用文本编辑器直接修改 JSON 文件中的 `textures` 条目。请注意，资源位置会自动忽略 `models` 和 `textures` 等前缀。在这里，`tutorial:item/toxic_sword` 对应于实际的纹理路径：`assets/tutorial/textures/item/toxic_sword.png`。

:::

现在让我们回到 CraftEngine 的配置，并将我们新创建的模型分配给剑物品。为确保与预期结果一致，我已将我的配置文件 <a href="/file/tutorial_1.zip" download>上传到此处</a> 供您参考。如果您的结果不同，请进行交叉检查。

```yaml
items:
  tutorial:toxic_sword:
    material: diamond_sword
    data:
      item-name: "<#3CB371>剧毒之剑"
    model:
      type: minecraft:model # 这里不要太关注类型，我们稍后会详细解释。
      path: tutorial:item/toxic_sword
    # 如果您在低于 1.21.2 的服务器上运行，请在此处添加 custom-model-data 以实现向后兼容
    custom-model-data: 1000
```

![](/img/toxic_sword_looks.png)

:::tip

别忘了运行 `/ce reload all` 来应用资源包更改。

:::

<details>
  <summary>什么是 CustomModelData？</summary>

    CustomModelData 是一个数据组件，可为共享相同基础材料的物品启用独特的模型变体。对于具有相同基础材料的物品，您必须分配不同的 CustomModelData 值以区分它们的模型。示例：

    ```yaml
    items:
      tutorial:toxic_sword:
        material: diamond_sword
        custom-model-data: 1000
      tutorial:flame_sword:
        material: diamond_sword
        custom-model-data: 1001
    ```

    但是，此限制不适用于具有不同基础材料的物品。例如：

    ```yaml
    items:
      tutorial:toxic_sword:
        material: diamond_sword
        custom-model-data: 1000
      tutorial:flame_sword:
        material: wooden_sword
        custom-model-data: 1000
    ```

</details>

<details>
  <summary>什么是 ItemModel？</summary>

  ItemModel 是 1.21.2 中引入的数据组件，其渲染效率高于 CustomModelData，从而减少了客户端性能开销。通常，您无需手动指定模型路径 (item-model)，因为插件会自动生成它。

  但是，如果您的服务器需要广泛的版本兼容性（例如 1.20–1.21.8）并为较新的客户端提供最佳渲染，请同时配置两者：

  ```yaml
  items:
    tutorial:toxic_sword:
      material: diamond_sword
      item-model: tutorial:toxic_sword
      custom-model-data: 1000
  ```

</details>

### 使用 CraftEngine 生成模型

现在让我们尝试 CraftEngine 的模型生成功能。注意：如果您已完成之前的 BlockBench 教程，请删除之前创建的模型 JSON 文件。正如标题“生成”所示，我们不会在本节中使用 BlockBench 创建的模型。

<DiffViewer>
{
`
items:
    tutorial:toxic_sword:
      material: diamond_sword
      data:
        item-name: "<#3CB371>剧毒之剑"
      model:
        path: tutorial:item/toxic_sword
+     generation:
+       parent: minecraft:item/handheld
+       textures:
+         layer0: tutorial:item/toxic_sword
`
}
</DiffViewer>

:::tip

在路径定义的部分中使用生成配置时，插件会从读取模式切换到写入模式。这将在指定路径生成相应的 JSON 模型文件。

:::

让我解释一下每个参数的用途以及从何处获取它们：

<Tabs>
  <TabItem value="parent" label="
 parent" default>
    > 以资源位置的形式从给定路径加载不同的模型

    parent 字段不仅可以引用原版 Minecraft 提供的默认模型，还可以指向您的自定义模型。您可以在此[网站](https://misode.github.io/assets/model/)上查看所有可用的 Minecraft 模型

    在 Minecraft 中，大多数模型（物品、工具甚至方块）都使用基于父级的生成，而不是独立建模。您可能会在至少 80% 的配置中使用这种模型生成方法。

    **将父模型视为预构建的 3D 模板**——您只需提供纹理参数即可使其正常工作。

    ```yaml
    generation:
      parent: minecraft:item/handheld
      textures:
        layer0: tutorial:item/toxic_sword
    ```

    ![](/img/model_generation_1.png)

    ```yaml
    generation:
      parent: minecraft:item/generated
      textures:
        layer0: tutorial:item/toxic_sword
    ```

    ![](/img/model_generation_2.png)

    ```yml
    generation:
      parent: minecraft:block/cube_all
      textures:
        all: tutorial:item/toxic_sword
    ```

    ![](/img/model_generation_3.png)

    您可能想知道为什么前两个模型使用 `layer0` 而第三个使用 `all`。

    **要进一步探索，请按 
 textures 继续本教程。**

  </TabItem>
  <TabItem value="textures" label="
 textures">
    > 以资源位置的形式保存模型的纹理，也可以是另一个纹理变量。

    要确定确切的纹理参数：

    1. 检查父模型的 JSON 结构。
    2. 如果父模型本身继承了另一个模型（例如，minecraft:item/generated 扩展了一个基础模板），请递归检查所有上游纹理。

    **所有原版 Minecraft 模型都可以在 [GitHub](https://github.InventivetalentDev/minecraft-assets/tree/1.21.8/assets/minecraft/models) 上找到。**

    让我们通过这个例子来理解纹理覆盖。对于这种情况，您有两种方法来分配纹理：

    ![](/img/model_generation_textures.png)

    使用 cube_all 的简写
    ```yaml
    generation:
      parent: "minecraft:block/cube_all"
      textures:
        "all": "minecraft:block/custom/block_texture"
    ```

    覆盖 cube（cube_all 的父级）\n    这实际上是一个不恰当的例子。更好的方法是直接将父级设置为 `cube` 而不是 `cube_all`。

    ```yaml
    generation:
      parent: "minecraft:block/cube_all"
      textures:
        "particle": "minecraft:block/custom/block_particle"
        "down": "minecraft:block/custom/block_down"
        "up": "minecraft:block/custom/block_up"
        "north": "minecraft:block/custom/block_north"
        "east": "minecraft:block/custom/block_east"
        "south": "minecraft:block/custom/block_south"
        "west": "minecraft:block/custom/block_west"
    ```

  </TabItem>
  <TabItem value="display" label="
 display">
    > 保存物品模型显示的不同位置。
    > - rotation：根据方案 [x, y, z] 指定模型的旋转。
    > - translation：根据方案 [x, y, z] 指定模型的位置。如果值大于 80，则显示为 80。如果值小于 -80，则显示为 -80。
    > - scale：根据方案 [x, y, z] 指定模型的比例。如果值大于 4，则显示为 4。
  
    可用值：`thirdperson_righthand`、`thirdperson_lefthand`、`firstperson_righthand`、`firstperson_lefthand`、`gui`、`head`、`ground` 或 `fixed`。
    
    此配置很少使用，因为在大多数情况下，您可以更直观地直接在 Blockbench 中调整模型显示模式。

    ```yaml
    items:
      default:big_apple:
        material: apple
        custom-model-data: 1000
        model:
          type: minecraft:model
          path: "minecraft:item/custom/big_apple"
          generation:
            parent: "minecraft:item/apple" # 继承苹果的模型
            # 在 gui 中显示一个大苹果
            display:
              gui:
                scale: 2,2,2
    ```

  </TabItem>

  <TabItem value="gui-light" label="
 gui-light">
    可以是 `front` 或 `side`。如果设置为 `side`，则模型像方块一样渲染。如果设置为 `front`，则模型像平面物品一样着色。默认为 `side`。

    ![](/img/gui_light.png)

    ```yaml
    items:
      default:gui_head_size_1:
        material: player_head
        custom-model-data: 1000
        model:
          type: minecraft:special
          # 此处的模型是 minecraft:special 模型所需的参数
          # 与外部模型无关。我们将在未来的教程中详细介绍特殊模型。
          model:
            type: minecraft:player_head
          path: minecraft:item/custom/gui_head_size_1
          generation:
            parent: minecraft:item/template_skull
            gui-light: front
            display:
              gui:
                translation: 0,8,0
                scale: 2,2,2
    ```

  </TabItem>
</Tabs>


## 调试

如果您的模型显示为紫色-黑色的立方体或无法正常渲染，请首先检查您的服务器控制台——CraftEngine 会在那里记录大多数潜在的错误。或者，检查客户端日志以诊断资源包加载问题。
