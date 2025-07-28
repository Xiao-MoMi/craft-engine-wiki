---
title: ⚙️ 配置
id: configuration
---

import Highlight from '@site/src/components/Highlight';

## 介绍

此处的**配置**特指 <Highlight color="#1877F2">**resources**</Highlight> 目录下每个包内的 <Highlight color="#1877F2">**configuration**</Highlight> 文件夹。配置文件存储在以下文件夹中，并支持 JSON 和 YML 格式。您可以在配置文件夹中创建无限的子目录。

## 专业提示

### 部分标识符

CraftEngine 引入此功能是为了解决 YAML 配置中的某些痛点——特别是当您需要在单个文件中定义同一类型的多个配置时。在 YAML 配置中，不允许使用以下格式：

```yaml
items:
  default:topaz_helmet:
    template: default:topaz_armor
    arguments:
      part: helmet
      slot: head
blocks:
  default:topaz_ore:
    ...更多
items:
  default:topaz_boots:
    template: default:topaz_armor
    arguments:
      part: boots
      slot: feet
```

因此，您需要在配置部分名称后添加 `# + 任何标识符`，这允许您在单个 YAML 文件中配置同一类型的多个部分。

```yaml
items#0:
  default:topaz_helmet:
    template: default:topaz_armor
    arguments:
      part: helmet
      slot: head
blocks:
  default:topaz_ore:
    ...更多
items#1:
  default:topaz_boots:
    template: default:topaz_armor
    arguments:
      part: boots
      slot: feet
```

### 部分分隔符

通过使用 `::`，您可以将标准键拆分为具有复杂层次结构的结构化映射键。例如，以下两个配置是等效的：

```yaml
# 单行格式
key::subkey::nested_key: value

# 展开格式
key:
  subkey:
    nested_key: value
```

:::info

这有助于在某些情况下减少配置所需的行数，使整体设置更简洁、更直观。

:::


### 基于版本的配置

:::tip

对于普通用户来说，此选项意义不大。但是，如果您是资源包创建者，则可以使用此选项来指定某些设置仅适用于特定版本。

:::

Craftengine 支持三种不同的版本规范格式，它们是：

1. 固定版本：`$$1.21.4`
2. 版本范围：`$$1.20.1~1.21.4`
3. 版本比较：`$$>=1.21.4`, `$$<1.21.8`

它们可以用作值选择器或用于参数覆盖/合并。

#### **示例 1：值选择**

```yaml
items:
  default:topaz_trident:
    material: trident
    client-bound-material:
      $$1.20.1~1.21.1: bow
      $$1.21.2~1.21.3: honey_bottle
    custom-model-data: 1001
    data:
      item-name: <!i><#FF8C00><i18n:item.topaz_trident>
      components:
        minecraft:max_damage: 300
```

#### **示例 2：块合并**

```yaml
items:
  default:topaz_trident:
    material: trident
    custom-model-data: 1001
    data:
      item-name: <!i><#FF8C00><i18n:item.topaz_trident>
      components:
        minecraft:max_damage: 300
    $$>=1.21.2:
      client-bound-data:
        components:
          minecraft:consumable:
            consume_seconds: 128000
            animation: spear
```
