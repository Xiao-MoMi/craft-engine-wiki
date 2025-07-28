---
title: 🐚 命令
id: commands
---

## 基础命令

### reload

`/ce reload [all/recipe/config/pack]`

此命令可让您重新加载插件资源。如果您不输入任何参数，则默认为 `/ce reload config`。

### upload

`/ce upload`

此命令强制手动启动资源包上传过程。

### item

`/ce item browser`

此命令打开插件的物品浏览器。您可以只输入 `/ce` 作为快捷方式。

![](/img/commands_15.png)

`/ce item get [item-id] (count)`

获取特定数量的物品

`/ce item give [player] [item-id] (count)`

给予特定数量的物品

`/ce item search-recipe/search-usage [player] [item-id]`

查询物品的配方或用途

![](/img/commands_16.png)

## 功能命令

### send-pack

`/ce feature send-pack [player]`

此命令会将资源包发送给指定的玩家。

### totem-animation

`/ce feature totem-animation [player] [item-id]`

此命令为玩家播放不死图腾动画。

![](/img/commands_14.png)


## 调试命令

### appearance-state-usage

`/ce debug appearance-state-usage [block_type]`

该命令用于检索指定方块类型的多余外观的使用状态。红色部分表示已在使用的状态，而绿色部分表示可用的未使用状态。当您将鼠标悬停在这些部分上时，可以查看具体状态并识别哪些自定义状态正在使用它们。

<div style={{textAlign: 'center'}}>
  <img src="/img/commands_1.png" alt="" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/commands_2.png" alt="" />
  <p style={{fontSize: '0.9em', color: '#666', marginTop: '0.5em'}}>使用中的外观状态</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/commands_2.png" alt="" />
  <p style={{fontSize: '0.9em', color: '#666', marginTop: '0.5em'}}>空闲状态</p>
</div>

### real-state-usage

`/ce debug real-state-usage [block_type]`

此命令与上述命令类似，但主要区别在于其功能是检查可用的真实状态。当您在 `additional-real-blocks.yml` 文件中注册其他真实状态时，真实状态的数量可能会超过可用外观的数量。

<div style={{textAlign: 'center'}}>
  <img src="/img/commands_4.png" alt="" />
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/commands_5.png" alt="" />
  <p style={{fontSize: '0.9em', color: '#666', marginTop: '0.5em'}}>使用中的真实状态</p>
</div>

<div style={{textAlign: 'center'}}>
  <img src="/img/commands_6.png" alt="" />
  <p style={{fontSize: '0.9em', color: '#666', marginTop: '0.5em'}}>空闲状态</p>
</div>


:::warning
在下图中，上部显示了橡树叶可用的外观状态，而下部显示了橡树叶可用的真实状态。\n您可以使用该命令来体验它们之间的差异。

```sh
/ce debug appearance-state-usage minecraft:oak_leaves
```

```sh
/ce debug real-state-usage minecraft:oak_leaves
```

![](/img/commands_7.png)

:::


### item-data

`/ce debug item-data`

此命令允许您检查当前持有的物品的物品数据（例如 NBT 或组件）。

![](/img/commands_8.png)


### get-block-internal-id

`/ce debug get-block-internal-id [custom_block_state]`

此命令用于检索与自定义方块对应的服务器端真实方块名称，通常用于 WorldEdit 和数据包等工具中。

![](/img/commands_9.png)
![](/img/commands_10.png)


:::tip

**问：** 为什么数据包中必须使用真实方块 ID，而不是像 default:plam_log 这样的名称？

**答：** 因为配置文件仅在服务器启动后加载，而数据包在服务器初始化期间加载得更早。服务器在此阶段无法识别不存在的方块 ID。为确保预注册的自定义方块能够适应最新的用户配置，CraftEngine 采用了一种容器式的动态绑定解决方案。

:::


### get-block-state-registry-id

`/ce debug get-block-state-registry-id [real_block_state]`

此命令用于获取相应方块状态的注册表 ID（不常用）。

![](/img/commands_11.png)

### target-block

`/ce debug target-block [--this]`

“target-block”用于检查鼠标指向的方块的数据（或使用“--this”标志获取当前位置）。它包括实际的方块 ID 和 CraftEngine 方块状态。如果方块具有自定义标签，它们也将被显示。

![](/img/commands_12.png)

### is-section-injected

`/ce debug is-section-injected`

此方法检查当前区块是否已被注入。返回值为 false 表示需要调查的异常情况。

![](/img/commands_13.png)

