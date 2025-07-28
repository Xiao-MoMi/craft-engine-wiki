---
title: ⚖️ 条件
id: conditions
---

:::tip
在条件类型前添加 `!` 会反转其逻辑。例如：

```yaml
type: "!permission"
permission: "craftengine.admin"
```
:::

### any\_of

满足任何一个条件即可。

```yaml
type: any_of
terms:
  - type: xxx
  - type: xxx
```

### all\_of

必须满足所有条件。

```yaml
type: all_of
terms:
  - type: xxx
  - type: xxx
```

### inverted

对当前条件的结果值取反。

```yaml
type: inverted
term:
  type: xxx
```

### falling\_block

检查掉落是否由方块下落引起。

```yaml
type: falling_block
```

### survives\_explosion

检测是否有可能在爆炸中幸存。

```yaml
type: survives_explosion
```

### match\_item

匹配手中的物品。

```yaml
type: match_item
id: "minecraft:iron_pickaxe"
regex: false # 是否使用正则表达式匹配
```

```yaml
type: match_item
id: 
  - "minecraft:iron_pickaxe"
  - "minecraft:stone_pickaxe"
regex: false # 是否使用正则表达式匹配
```

### match\_block\_property

匹配方块状态属性

```yaml
type: match_block_property
properties:
  age: 3
```

### enchantment

检测手中物品的附魔。

```yaml
type: enchantment
predicate: minecraft:silk_touch>=1 # > >= = < <=
```

### table\_bonus

在不同附魔等级下提供不同的成功概率。

```yaml
type: table_bonus
enchantment: minecraft:fortune
chances:
  - 0.1
  - 0.5
  - 0.8
  - 1
```

### random

```yaml
type: random
value: 0.1 # 10%
```

### permission

检查玩家是否拥有权限

```yaml
type: permission
permission: "craftengine.admin"
```

### expression

检查表达式是否返回 `true`

```yaml
type: expression
# https://ezylang.github.io/EvalEx/references/references.html
expression: "<papi:farming_level> >= 10"
```

### string\_equals

确定两个值是否相等

```yaml
type: string_equals
value1: "<arg:player.name>"
value2: "Player_A"
```

### string\_contains

确定 value1 是否包含 value2

```yaml
type: string_contains
value1: "<arg:player.name>"
value2: "A"
```

### string\_regex

确定值是否匹配模式

```yaml
type: string_regex
value: "<arg:player.name>"
regex: "[a-Z]"
```

### is\_null

检查参数是否为空

```yaml
type: is_null
argument: "player.main_hand_item"
```

### hand

检查交互手

```yaml
type: hand
hand: main_hand # off_hand
```

### on\_cooldown

检查玩家是否处于冷却状态（使用 `set_cooldown` 函数为玩家设置冷却时间）

```yaml
type: on_cooldown
id: my_cooldown_id
```

:::info
用法示例

```yaml
events:
  - on: right_click
    functions:
      - type: set_cooldown
        id: test
        time: 30s
      - type: command
        command: give <arg:player.name> minecraft:apple
    conditions:
      - type: "!on_cooldown"
        id: test
```
:::

:::info
更多条件即将推出...
:::
