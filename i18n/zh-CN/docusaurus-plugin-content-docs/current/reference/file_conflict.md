---
title: ⚔️ 文件冲突
id: file_conflict
---

## 介绍

在合并多个资源包时，我们经常会遇到冲突的文件，例如 `pack.png`、`sounds.json` 等。将它们配置成一个单独的文件可能会相当繁琐。因此，该插件提供了一个冲突解决程序，允许您自定义解决冲突的方案。当插件检测到冲突文件时，它将搜索第一个满足条件的解决方案。如果没有找到合适的解决方案，它将在控制台中向用户发出警告。

:::info
冲突解决的配置位于 `config.yml` 文件中的 `resource-pack.duplicated-files-handler` 部分。
:::

:::warning
该插件不支持着色器的合并，因为它被认为是不稳定的。
:::

```yaml
duplicated-files-handler:
  # 处理物品模型
  - term:
      type: any_of
      terms:
        - type: parent_path_suffix
          suffix: "minecraft/items" # 1.21.4+
        - type: parent_path_suffix
          suffix: "minecraft/models/item" # 1.20-1.21.3
    resolution:
      type: merge_json
      deeply: true
  # 处理 pack.mcmeta
  - term:
      type: exact
      path: "pack.mcmeta"
    resolution:
      type: merge_pack_mcmeta
      description: "<gray>CraftEngine ResourcePack"
  # 处理 pack.png
  - term:
      type: exact
      path: "pack.png"
    resolution:
      type: retain_matching
      term:
        type: contains
        path: "resources/default/resourcepack"
  # 处理 sounds
  - term:
      type: filename
      name: "sounds.json"
    resolution:
      type: merge_json
      deeply: false
```

:::tip
您可以简单地理解为：**term** 决定匹配规则，**resolution** 决定如何处理冲突文件。以下是一些可用的匹配方法和解决方法选项：
:::

## 匹配规则

### all\_of

必须满足所有条件。

```yaml
type: all_of
terms:
  - type: xxx1
    aaa: bbb
  - type: xxx2
    ccc: ddd
```

### any\_of

满足任何一个条件即可。

```yaml
type: any_of
terms:
  - type: xxx1
    aaa: bbb
  - type: xxx2
    ccc: ddd
```

### inverted

对当前条件的结果值取反。

```yaml
type: inverted
term:
  type: xxx
```

### filename

匹配文件名

```yaml
type: filename
name: "sounds.json"
```

### exact

匹配确切路径

```yaml
type: exact
path: "assets/minecraft/lang/en_us.json"

type: exact
path: "pack.mcmeta"
```

### parent\_path\_prefix / parent\_path\_suffix

检测路径是否具有特定的前缀或后缀

```yaml
type: parent_path_prefix 
path: "assets/minecraft"

type: parent_path_suffix
path: "minecraft/models/item"
```

### contains

检查路径是否包含某些字符

```yaml
type: contains
path: "custom/furniture"
```

### pattern

使用正则表达式匹配路径

```yaml
type: pattern
pattern: "在此处使用正则表达式"
```

## 解决方法

### merge\_json

将两个 json 文件合并为一个

```yaml
type: merge_json
deeply: true
```

### retain\_matching

当两个文件冲突时，保留满足指定条件的文件。

```yaml
type: retain_matching
term:
  type: contains
  path: "resources/default/resourcepack"
```

### conditional

运行条件性解决方法

```yaml
type: conditional
term:
  type: xxx
resolution:
  type: xxx
```

### merge\_pack\_mcmeta

为 `pack.mcmeta` 定制的特殊解决方法

```yaml
type: "merge_pack_mcmeta"
description: "<gray>CraftEngine ResourcePack" # 包描述
```

### merge\_atlas

为 `atlases/xx.json` 定制的特殊解决方法

```yaml
type: "merge_atlas"
```
