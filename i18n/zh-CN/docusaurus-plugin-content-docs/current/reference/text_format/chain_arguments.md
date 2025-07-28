---
title: 🔗 链式参数
id: chain_arguments
---

## 介绍

**链式参数** 是一种点表示法（用 `.` 连接），用于按层级方式访问与对象相关的参数。

例如，在我们可以访问玩家实例的交互事件中，我们可以通过此对象检索其他参数。

通过链接属性访问器，例如：

* `player.world` → 获取玩家当前所在的世界
* `world.name` → 获取该世界的名称

我们可以将它们组合成一个参数标签格式，如 `<arg:player.world.name>`。此标签将动态返回玩家当前所在世界的名称。

## 对象

### 玩家 (player)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | double | 玩家的 x 坐标 |
| y | double | 玩家的 y 坐标 |
| z | double | 玩家的 z 坐标 |
| block\_x | int | 玩家的方块 x 坐标 |
| block\_y | int | 玩家的方块 y 坐标 |
| block\_z | int | 玩家的方块 z 坐标 |
| name | string | 玩家的名称 |
| uuid | uuid | 玩家的 uuid |
| is\_flying | boolean | 检查飞行状态 |
| is\_sneaking | boolean | 检查潜行状态 |
| gamemode | string | 玩家的游戏模式 |
| main\_hand\_item | [物品](#物品-item) | 主手物品 |
| off\_hand\_item | [物品](#物品-item) | 副手物品 |
| world | [世界](#世界-world) | 玩家所在的世界 |
| position | [位置](#位置-position) | 玩家的位置 |

### 方块 (block)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | double | 方块的 x 坐标 |
| y | double | 方块的 y 坐标 |
| z | double | 方块的 z 坐标 |
| block\_x | int | 方块的方块 x 坐标 |
| block\_y | int | 方块的方块 y 坐标 |
| block\_z | int | 方块的方块 z 坐标 |
| world | [世界](#世界-world) | 方块所在的世界 |
| block\_state | block\_state | 方块的方块状态 |
| position | [位置](#位置-position) | 方块的位置 |

### 世界 (world)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| name | string | 世界的名称 |
| uuid | uuid | 世界的 uuid |
| time | long | 世界的时间 |

### 位置 (position)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| x | double | x 坐标 |
| y | double | y 坐标 |
| z | double | z 坐标 |
| block\_x | int | 方块 x 坐标 |
| block\_y | int | 方块 y 坐标 |
| block\_z | int | 方块 z 坐标 |
| world | [世界](#世界-world) | 世界 |

### 物品 (item)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| id | string | 物品的 id |
| custom\_model\_data | int | 物品的自定义模型数据 |
| is\_custom | boolean | 检查物品是否为自定义物品 |

### 家具 (furniture)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| id | string | 家具的 id |
| uuid | uuid | 家具的 uuid |
| anchor\_type | string | 家具的锚点类型 |
| x | double | 家具的 x 坐标 |
| y | double | 家具的 y 坐标 |
| z | double | 家具的 z 坐标 |
| position | [位置](#位置-position) | 家具的位置 |
