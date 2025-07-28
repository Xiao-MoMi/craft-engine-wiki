---
title: 🪇 事件
id: events
---

## 介绍

`events` 部分决定了在特定事件期间，哪个物品/家具/方块将执行预定义的行为。在 `events` 部分下，您需要指定一个事件触发器，例如 `"right_click"` 表示右键单击操作。在事件触发器下方，您必须传递一个包含其相应类型的操作列表。例如，`command` 执行一个特定的命令。

```yaml
# 格式 1
events:
  right_click:
    - type: command
      command: say 1
      conditions:
        - type: permission
          permission: "craftengine.admin"
    - type: command
      command: say 2
      conditions: []
# 格式 2
events:
  - on: right_click
    functions:
      - type: command
        command: say 1
        conditions:
          - type: permission
            permission: "craftengine.admin"
      - type: command
        command: say 2
        conditions: []
```

## 🧨 事件触发器

### 物品

* break
* right\_click
* left\_click
* consume

### 方块

* break
* place
* right\_click
* left\_click
* step

### 家具

* break
* place
* right\_click

:::caution
请注意，相应的事件应放置在适当的配置区域中。例如，如果您想在与一件家具互动时执行命令，正确的做法是将 `events` 放置在 `furniture` 部分下，而不是在您的物品部分下。

```yaml
items:
  default:bench:
    events: # ❌️
      right_click:
       - type: command
    behavior:
      type: furniture_item
      furniture:
        events: # ✅️
          right_click:
           - type: command
```
:::

## 🔧 函数

### cancel\_event

取消原始事件。

```yaml
type: cancel_event
```

### run

按顺序运行函数列表。这对于共享相同条件的函数很有用。

```yaml
type: run
delay: 0 # 可选；数字；[默认值：0]
functions: # 必需；映射列表
  - type: command
  - type: message
```

### command

以玩家或控制台身份运行命令。

```yaml
type: command
command: "say hello <arg:player.name>" # 必需；字符串列表/字符串
target: "self" # 可选；枚举[all,self]/玩家选择器；[默认值：self]
as-player: false # 可选；[默认值：false]
```

### message

发送消息/系统操作栏消息

```yaml
type: message
message: "Hello <papi:player_name>" # 必需；字符串列表/字符串
target: "self" # 可选；枚举[all,self]/玩家选择器
overlay: false # 可选；[默认值：false]；false = 聊天框 / true = 操作栏
```

### actionBar

发送操作栏

```yaml
type: actionbar
actionbar: "这是一个操作栏"  # 必需；字符串
target: "self" # 可选；枚举[all,self]/玩家选择器；[默认值：self]
```

### Title

发送标题

```yaml
type: title
title: "<red>标题</red>"  # 必需；字符串
subtitle: "<Yellow>副标题</yellow>" # 必需；字符串
fade-in: 20 # 可选；数字；[默认值：10]
stay: 10 # 可选；数字；[默认值：20]
fade-out: 10 # 可选；数字；[默认值：5]
```

### open\_window

打开一个 GUI 窗口

```yaml
type: open_window #
gui-type: anvil # 必需；枚举[anvil, enchantment, grindstone, loom, smithing, crafting, cartography]；
title: "超级铁砧"  # 可选；字符串
target: "self" # 可选；枚举[all,self]/玩家选择器；[默认值：self]
```

### place\_block

放置一个方块

```yaml
type: place_block
block-state: "default:chinese_lantern"
x: <arg:block.block_x>
y: <arg:block.block_y>
z: <arg:block.block_z>
```

### drop\_loot

根据给定的战利品表掉落战利品

```yaml
type: drop_loot
x: <arg:block.block_x> + 0.5
y: <arg:block.block_y> + 0.5
z: <arg:block.block_z> + 0.5
loot:
  pools: ...
```

### update\_interaction\_tick

更新上次交互结束时的时间点

```yaml
type: update_interaction_tick
```

### set\_count

设置此事件中当前物品的数量

```yaml
type: set_count
add: true # 默认值：false
count: -1
target: "self" # 可选；枚举[all,self]/玩家选择器
```

### set\_food

设置玩家的食物等级 (0\~20)

```yaml
type: set_food
add: true
food: 4
target: "self" # 可选；枚举[all,self]/玩家选择器
```

### set\_saturation

设置玩家的饱和度 (0\~10)

```yaml
type: set_saturation
add: true
saturation: 2.5
target: "self" # 可选；枚举[all,self]/玩家选择器
```

### swing\_hand

挥动参与此事件的手或配置中指定的手

```yaml
type: swing_hand
hand: main_hand # 可选参数
```

### particle

生成一个粒子

```yaml
type: particle
particle: minecraft:end_rod
x: "<arg:position.x>"
y: "<arg:position.y>"
z: "<arg:position.z>"
count: 5
offset-x: 0.3
offset-y: 0.3
offset-z: 0.3
speed: 0

# 以下参数仅在粒子为特定类型时有效。

# item
item: default:chinese_lantern

# block/falling_dust/dust_pillar/block_crumble/block_marker
block-state: default:plam_log[axis=y]

# charge
charge: 1.5

# shriek
shriek: 1

# dust
color: 255,255,255
scale: 1.0

# dust_color_transition
from: 255,255,255
to: 0,0,0
scale: 4.0

# vibration
target-x: 0
target-y: 1
target-z: 0
arrival-time: 10

# trail
target-x: 0
target-y: 1
target-z: 0
duration: 10
```

### potion\_effect

添加药水效果

```yaml
type: potion_effect
potion-effect: minecraft:blindness
duration: 20  # 默认值：20
amplifier: 0   # 默认值：0
ambient: false # 来自信标
particles: true
```

### remove\_potion\_effect

移除药水效果

```yaml
type: remove_potion_effect
potion-effect: minecraft:blindness # 如果 'all' 为 true，则可选
all: false  # 默认值：false
```

### leveler\_exp

添加技能/职业经验

```yaml
type: leveler_exp
plugin: AuraSkills  # 等级插件
leveler: fishing  # 职业/技能 ID
count: 10  # 要给予的经验数量
```

### set\_cooldown

为玩家设置冷却时间

```yaml
type: set_cooldown
time: 1m30s
id: my_cooldown_id
add: false  # 默认值：false  (是否累积冷却时间)
```

### remove\_cooldown

为玩家移除冷却时间

```yaml
type: remove_cooldown
id: my_cooldown_id  # 如果 'all' 为 true，则可选
all: false  # 默认值：false
```

### play\_sound

播放声音

```yaml
type: play_sound
sound: minecraft:xxxx.xxx
x: <arg:position.x>
y: <arg:position.y>
z: <arg:position.z>
pitch: 1
volume: 1
source: master
```

:::info
更多功能即将推出...
:::
