---
title: ⌨️ API
id: api
---

## 仓库

将 CraftEngine API 添加到您的项目中：

```kotlin
repositories {
    maven("https://repo.momirealms.net/releases/")
}
```
```kotlin
dependencies {
    compileOnly("net.momirealms:craft-engine-core:{version}") // 将“{version}”替换为插件版本
    compileOnly("net.momirealms:craft-engine-bukkit:{version}") // 例如 0.0.60
}
```

确保将 CraftEngine 添加为您插件的依赖项：

```yaml
softdepend:
  - CraftEngine
```

:::caution

**注意更改**

只有 `api` 包下的内容被认为是稳定的。与插件交互的其他方法是不稳定的，并且可能会发生变化，尤其是在当前的 beta 阶段。

以下链接提供的内容被认为是稳定的，涵盖了 90% 的 API 使用要求：
https://github.com/Xiao-MoMi/craft-engine/tree/main/bukkit/src/main/java/net/momirealms/craftengine/bukkit/api

:::

:::info

如果您渴望开始注册自己的方块行为，可以参考我们的一些内置实现作为示例。
https://github.com/Xiao-MoMi/craft-engine/tree/main/bukkit/src/main/java/net/momirealms/craftengine/bukkit/block/behavior

:::

## 一些开发约定

### 命名

1. 新类型的 ID：使用带下划线的小写字母（例如 `my_plugin:test_function`）。
2. 配置参数：如果用户需要在配置文件中传递值，请使用连字符（`-`）作为键（可读性更好）。

示例：

```yaml
type: my_plugin:test_function
send-to-all: true
message: "Test TeST tEST"
```

### 方块事件

请避免直接使用像 `CustomBlockBreakEvent` 这样的事件。相反，您应该：

1. 监听相应的 Bukkit 事件（例如 `BlockBreakEvent`）。
2. 从事件中检索 BlockData。
3. 使用 `CraftEngineBlocks` 类将其转换为自定义方块以进行进一步处理。

使用 Bukkit 事件可以让您以更全面的方式实现所需的一切，而无需额外的学习。

### 关于注册

在注册新的方块行为、物品行为或主机类型等时，请首先检查是否有可用的相应常量类（例如 `BlockBehaviors`、`ItemBehaviors`）。强烈建议使用这些类中提供的注册方法进行注册。

:::info

API 文档将在正式发布后进行重组，以包含更多高级示例。

:::
