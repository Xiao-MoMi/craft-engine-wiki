---
title: 🅿️ PlaceholderAPI
id: placeholderapi
---

## %image\_%

`image` 占位符用于返回与给定 ID 对应的图像的原始 Unicode 字符及其关联的字体。

:::caution
`row` 和 `column` 都是可选的，但是当您使用其中一个时，它们必须成对使用。
:::

### %image\_mm\_namespace:id\:\[row]:\[column]%

以 `minimessage` 格式返回图像。

![](/img/placeholderapi_1.png)

### %image\_md\_namespace:id\:\[row]:\[column]%

以 `minedown` 格式返回图像。

![](/img/placeholderapi_2.png)

### %image\_raw\_namespace:id\:\[row]:\[column]%

返回原始图像字符。

![](/img/placeholderapi_3.png)

## %shift\_%

`shift` 占位符用于获取偏移字符，通常用于对齐菜单标题和类似操作。

### %shift\_mm\_value%

以 `minimessage` 格式返回移位字符。

### %shift\_md\_value%

以 `minedown` 格式返回移位字符。

### %shift\_raw\_value%

返回原始移位字符

:::tip

**如果您需要在其他插件中使用 PlaceholderAPI 显示图像，请确保它们支持 MiniMessage 或 Minedown 格式并正确发送文本组件。**
（我强调这一点是因为一些设计不佳的插件会强制将富文本转换为旧版颜色代码。）

或者，您可以通过 CraftEngine 的数据包拦截来显示自定义图像。有关详细信息，请参阅[**此页面**](/configuration/image#与其他插件的兼容性)。

:::
