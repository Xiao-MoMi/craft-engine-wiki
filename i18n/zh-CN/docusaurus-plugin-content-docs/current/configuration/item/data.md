---
title: 🔢 物品数据
id: data
---

import Highlight from '@site/src/components/Highlight';

## 介绍

物品数据指的是旧版本中物品的 <Highlight color="#3c5cb3ff">**NBT**</Highlight>（命名二进制标签），或 1.20.5 及以上版本中的物品 <Highlight color="#3c5cb3ff">**组件**</Highlight>。通过这些数据，我们可以自定义物品的各个方面，例如其名称、描述、属性以及**原版 Minecraft** 提供的其他功能。

## 与其他插件的兼容性

如果您希望 CraftEngine 物品保留外部插件物品的数据，请遵循以下配置：

```yml
items:
  default:example_item:
    data:
      external:
        plugin: neigeitems
        id: example_item
```

:::info

支持的插件可以在[**此页面**](../../compatibility/external_item_sources.md)上找到。

对于使用 ResourceLocation 作为物品的插件，只需使用 `namespace:path` 作为 id。例如：

```yaml
id: test_namespace:test/my_path
```

对于像 MMOItems 这样包含类型的插件，您需要使用冒号 `:` 来分隔类型和 ID。例如：

```yaml
id: MATERIAL:IRON_INGOT
```

:::

## 硬编码数据

:::tip
在此上下文中，硬编码数据意味着配置格式由插件提供和维护，从而确保了不同版本之间的兼容性。这些格式由插件定义，因此它们可能与游戏本身使用的标准 NBT（命名二进制标签）或组件格式不同。这种方法的优点是插件处理所有维护工作，包括版本兼容性，因此您无需担心游戏版本之间的更改或更新。
:::

### item-name

确定此物品的默认名称，与 `custom-name` 不同，此名称无法使用铁砧擦除，不会变为斜体，并且不会显示在某些标签中，例如旗帜标记和物品展示框。

```yaml
items:
  default:topaz_rod:
    data:
      item-name: "<!i><#FF8C00>黄玉杖" # 我们在这里使用 <!i> 是因为 1.20.4 及更低版本
                                          # 没有 item_name 组件
```

### custom-name

用于指定物品的自定义名称，就像您可以在铁砧中做的那样。

```yaml
items:
  default:topaz_rod:
    data:
      custom-name: "<!i><#FF8C00>黄玉杖"
```

### lore

确定物品的显示描述。

```yml
items:
  default:topaz_rod:
    data:
      lore: 
        - "多么闪亮的杖！"
```

### unbreakable

确定物品是否不可破坏。

```yml
items:
  default:topaz_rod:
    data:
      unbreakable: true
```

### enchantment

确定物品的附魔。

```yaml
items:
  default:topaz_rod:
    data:
      enchantment:
        minecraft:sharpness: 1
        custom:enchant: 3
```

:::tip
当物品类型为附魔书时，任何附魔都将自动转换为存储的附魔。
:::

### dyed-color

确定物品的颜色

```yml
items:
  default:sofa:
    data:
      dyed-color: 255,255,255
```

### custom-model-data

```yaml
items:
  default:sofa:
    data:
      custom-model-data: 100
```

:::caution
为确保向后兼容性，此上下文中的 custom-model-data 仅支持整数值。如果要使用较新版本的功能，则应改用 `components`。
:::

### hide-tooltip

隐藏此物品上由指定**组件**提供的任何工具提示。由于插件处理跨版本兼容性，因此此功能适用于所有版本。以前称为 `HideFlags`。

```yaml
items:
  default:sofa:
    data:
      hide-tooltip:
        - dyed_color
        - enchantments
        - attribute_modifiers
```

### attribute-modifiers

将[属性修改器](https://minecraft.wiki/w/Attribute#Modifiers)应用于物品。

```yaml
items:
  default:sofa:
    data:
      attribute-modifiers:
        - type: attack_speed
          amount: 1.0
          operation: add_value # add_value, add_multiplied_base, add_multiplied_total
          id: namespace:custom_attribute # 可选
          slot: any # any, hand, armor, mainhand, offhand, head, chest, legs, feet or body
          display: # 1.21.5
            type: override
            value: <yellow>攻击速度 +1
```

:::tip

您可以安全地在旧版本上使用最新的属性名称，因为插件会帮助您转换它们。
最新的属性名称可以在 https://minecraft.wiki/w/Attribute 上找到

:::

### food (1.20.5+)

```yaml
items:
  default:magic_apple:
    material: apple
    data:
      food: 
        nutrition: 5
        saturation: 3.5
        can-always-eat: false
```

:::tip

有关在旧版 Minecraft 中设置与食物相关的属性，请参阅[食物](./settings.md#food)。

:::

### jukebox-playable (1.21+)

插入唱片机时播放的一首唱片机歌曲。

```yaml
items:
  default:music_stick:
    material: stick
    data:
      jukebox-playable: default:credits_music
```

### item-model (1.21.2+)

定义此物品的物品模型。

```yaml
items:
  default:music_stick:
    data:
      item-model: default:music_stick
```

### tooltip-style (1.21.2+)

确定物品的工具提示样式。

```yml
items:
  default:topaz_rod:
    data:
      tooltip-style: minecraft:topaz #namespace:tooltip_style_id
```

:::tip
要创建工具提示样式，您必须将纹理放置在以下目录中：https://minecraft.wiki/w/Data_component_format/tooltip_style
:::

### trim

对工具或盔甲应用装饰性改造

```yaml
trim:
  pattern: eye # https://minecraft.wiki/w/Smithing#Trimming
  material: iron # https://minecraft.wiki/w/Smithing#Material
```

### equippable (1.21.2+)

如果存在，此物品可以装备在指定的槽位中。

```yml
equippable:
  # 放置物品的槽位
  slot: head # HEAD / CHEST / LEGS / FEET / BODY / MAIN_HAND / OFF_HAND / SADDLE

  # 可选参数
  # 此目录指向 assets/<namespace>/equipment/<id>.json
  asset-id: minecraft:topaz
  # 装备时使用的覆盖纹理的资源位置。此目录指向 assets/<namespace>/textures/<id>。
  camera-overlay: namespace:id
  # 物品是否可以通过发射器发射。
  dispensable: true
  # 穿戴实体受到伤害时，此物品是否会受到伤害。
  damage-on-hurt: true
  # 是否可以通过右键单击将物品装备到相关槽位。
  swappable: true
  # >= 1.21.5
  # 是否可以通过对其按使用键将此物品装备到目标生物上（只要此物品可以装备到目标上）
  equip-on-interact: true
```

## 可自定义数据

:::caution
可自定义数据不由插件维护，其格式可能会随着 Minecraft 的更新而更改，尤其是在最近对组件进行频繁更改的情况下。
:::

### NBT (1.20-1.20.4)

:::warning
由于 NBT（命名二进制标签）已过时，因此此处不再详细讨论。https://minecraft.wiki/w/Item_format/Before_1.20.5
:::

```yaml
items:
  default:topaz_rod:
    data:
      nbt:
        CustomModelData: 1000
```

### 组件 (1.20.5+)

自定义组件的格式严格遵守 [Minecraft Wiki](https://minecraft.wiki/w/Data_component_format) 指南。下面，我将引导您完成几个示例，以帮助您熟悉如何配置自定义组件。此处的示例按难度递增的顺序排列，从简单到高级。我们建议您逐一学习，以确保平稳的学习曲线。

<details>
  <summary>max_damage [★]</summary>

    ![](/img/item_data_1.png)

    从图中我们可以看到，max_damage 接受一个 `I`（代表一个整数类型参数）。因此，在我们的配置中，我们只需直接使用一个数值即可。
    ```yaml
    items:
    guide:test:
        data:
        components:
            minecraft:max_damage: 128
    ```
</details>

<details>
  <summary>food [★★]</summary>

    ![](/img/item_data_2.png)

    从图中我们可以看到，food 需要三个参数：`int` 类型的 nutrition、`float` 类型的 saturation 和 `boolean` 类型的 can_always_eat。

    ```yaml
    items:
      guide:test:
        data:
          components:
            minecraft:food:
              nutrition: 4
              saturation: 2.0
              can_always_eat: false
    ```
</details>

<details>
  <summary>block_state [★★]</summary>

    ![](/img/item_data_3.png)

    根据此处的描述，我们需要提供**键值**对，其中值必须是**字符串**类型。

    ```yaml
    items:
      default:palm_leaves:
        data:
          components:
            minecraft:block_state:
              distance: '1'
              persistent: 'false'
              waterlogged: 'false'
    ```
</details>

<details>
  <summary>instrument [★★★]</summary>

    ![](/img/item_data_4.png)

    当一个选项支持多种数据类型时，您可以根据您的具体需求简单地选择合适的类型。

    ```yaml
    items:
      guide:horn:
        material: goat_horn
        data:
          components:
            minecraft:instrument: "seek_goat_horn"
    ```
    ```yaml
    items:
      guide:horn:
        material: goat_horn
        data:
          components:
            minecraft:instrument:
              description:
                text: "自定义乐器"
                color: "red"
              sound_event: minecraft:block.note_block.bell
              use_duration: 1
              range: 16
    ```
</details>

<details>
  <summary>fireworks [★★★★]</summary>

    ![](/img/item_data_5.png)

    ```yaml
    items:
      guide:firework:
        material: firework_rocket
        data:
          components:
            minecraft:fireworks:
              flight_duration: 3
              explosions:
                - shape: small_ball
                  colors: [11223344]
                  fade_colors: [0]
                  has_trail: true
                  has_twinkle: true
    ```
</details>


### 移除组件 (1.20.5+)

从物品中移除组件。

```yaml
items:
  test:item:
    data:
      remove-components:
        - minecraft:equippable
```

## 客户端绑定数据

客户端绑定数据仅存在于客户端，不涉及任何服务器端组件。使用客户端物品组件，您可以轻松地实时更新物品描述——包括 item_model 和 custom_model_data 等属性。此外，与其他插件不同，CraftEngine 物品在创造模式下永久保持不变！

:::info
只需在您的配置区域中添加一个 `client-bound-data` 部分，然后将所需的数据从原始 `data` 部分移动（剪切/粘贴）到其中

```yaml
items:
  default:topaz_rod:
    client-bound-data:
      item-name: "<!i><#FF8C00>我不是黄玉杖"
    data:
      item-name: "<!i><#FF8C00>黄玉杖"
```

:::

:::tip
客户端绑定数据对于冒险模式下的玩家非常有用，允许他们在服务器端破坏某些真实的自定义方块。

```yaml
items:
  default:topaz_pickaxe:
    material: golden_pickaxe
    custom-model-data: 1000
    settings:
      tags:
        - "default:topaz_tools"
    client-bound-data:
      components:
        # 客户端方块状态
        can_break:
          blocks: minecraft:note_block
          state:
            "instrument": "hat"
            "note": "0"
            "powered": "false"
    data:
      item-name: "<!i><#FF8C00><i18n:item.topaz_pickaxe>"
      tooltip-style: minecraft:topaz
      components:
        minecraft:max_damage: 64
        # 服务器端方块状态
        can_break:
          blocks: "craftengine:note_block_1"
    model:
      template: default:model/simplified_handheld
      arguments:
        path: "minecraft:item/custom/topaz_pickaxe"
```

:::
