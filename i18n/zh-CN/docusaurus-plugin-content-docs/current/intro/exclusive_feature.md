---
title: ☄️ 独家功能
id: exclusive_feature
---

import ColoredLink from '@site/src/components/ColoredLink';
import Highlight from '@site/src/components/Highlight';

## 完全兼容原版行为

CraftEngine 允许您将未使用的音符盒、绊线等重新用作自定义方块状态——而不会干扰它们原始的服务器端机制。
无需为了自定义内容而牺牲原版功能。两全其美！🎮✨

![](/img/preserve_vanilla_block_behavior.png)

## 使用任何闲置的原版方块状态作为自定义方块模型

CraftEngine 不会硬编码音符盒或绊线——由您决定！想要使用任何原版方块状态作为自定义方块吗？只需在 mappings.yml 中进行映射，然后就可以了。完全的创作自由，零浪费。🛠️✨

![](/img/use_any_block.png)

## 无缝集成数据包/Iris/Terra

CraftEngine 注册的是真实的方块——因此您可以直接在数据包中使用它们！🌳✨ 想要生成自定义树木，甚至重新设计末地？现在您可以了。完全兼容原版，无限可能。”

![](/img/datapack_tree.png)

:::caution
说实话——CraftEngine 是唯一能正确处理数据包的插件。其他一些插件告诉您**只需使用等效的原版方块**作为自定义方块的替代品。这完全是错误的！

数据包的转换（如旋转和镜像）将完全破坏这些变通方法，使您得到的方块与您预期的完全不同。使用 CraftEngine，您设计的就是实际生成的——没有意外。✅
:::

## 资源包保护

<Highlight color="#f2184eff">**高级版独有**</Highlight>

CraftEngine 采用先进的混淆技术来保护您的资产——我们确保它们只能被 Minecraft 客户端读取。任何提取尝试（Bandizip、JD-GUI 等）都将灾难性地失败。

我们的保护更进一步：
- 安全的混淆，永久改变文件结构
- 专有的纹理图集算法，将所有模型合并为巨型纹理
→ 减小包大小，使资产盗窃在实践中更加困难

![](/img/pack_obfuscation.png)

## 客户端物品组件

CraftEngine 允许您使用客户端组件动态自定义物品名称、描述和视觉效果。这意味着您可以实时更新物品纹理，甚至向不同的玩家显示不同的物品。

![](/img/clientbound_data.png)
