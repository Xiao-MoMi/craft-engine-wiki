---
title: 😀 表情符号
id: emoji
---

:::caution

创建表情符号需要现有的图像配置。如果您不熟悉此过程，请查阅 [🖼️ 图像](./image.md) 页面。

:::

创建表情符号非常简单——您只需填写几个易于理解的参数即可。但是，与其他插件不同，CraftEngine 赋予您更大的自定义自由度，尤其是在表情符号的反馈内容方面。您可以使用自定义文本样式、变量、数学运算等。

这是一个基本的表情符号配置示例：

```yaml
emoji:
  default:time:
    permission: emoji.time
    content: "<white><arg:emoji></white>"
    image: "default:icons:0:0"
    keywords:
      - ":time:"
```

:::tip

`<arg:emoji>` 是一个特定于上下文的参数，用于返回相应表情符号的图像表示。\
`<arg:keyword>` 将返回第一个可用的关键字

:::

在下面的示例中，玩家可以通过键入 `:pos:` 来检索其当前坐标。虽然 CraftEngine 为表情符号内容提供了极大的自定义性（尤其是在 MiniMessage 中），但这种灵活性也使其学习起来更加复杂——特别是对于不熟悉高级文本格式的用户而言。

```yaml
emoji:
  default:emoji_location:
    permission: emoji.location
    content: "<hover:show_text:'使用 <yellow>\"<arg:keyword>\"</yellow> 发送 \"<arg:emoji>\" 表情符号'><!shadow><white><arg:emoji></white></!shadow><bold>当前坐标：<papi:player_x>,<papi:player_y>,<papi:player_z></bold></hover>"
    image: "default:icons:0:0"
    keywords:
      - ":pos:"
```

<div style={{textAlign: 'center'}}>
  <img src="/img/emoji_1.png" alt="" />
</div>

:::tip

为了在处理复杂配置时提高可读性，我为格式化添加了多行支持。CraftEngine 将在处理过程中自动将这些行合并为单个字符串，从而更容易编写和维护复杂的设置，而不会牺牲功能。

```yaml
content:
- <hover:show_text:'使用 <yellow>"<arg:keyword>"</yellow> 发送 "<arg:emoji>" 表情符号'>
- <!shadow><white><arg:emoji></white></!shadow>
- "<bold>当前坐标：<papi:player_x>,<papi:player_y>,<papi:player_z></bold>"
- </hover>
```
:::

:::info

CraftEngine 使用 Paper 的现代聊天组件 API 实现表情符号。任何仍然依赖 Bukkit 旧版聊天事件的聊天插件几乎肯定与表情符号渲染不兼容。

已知的兼容聊天插件：[**TrChat**](https://github.com/TrPlugins/TrChat)

<details>
  <summary>开发者指南</summary>

  ```java
import io.papermc.paper.event.player.AsyncChatEvent;
import net.kyori.adventure.text.Component;
import net.kyori.adventure.text.minimessage.Context;
import net.kyori.adventure.text.minimessage.MiniMessage;
import net.kyori.adventure.text.minimessage.ParsingException;
import net.kyori.adventure.text.minimessage.tag.Tag;
import net.kyori.adventure.text.minimessage.tag.resolver.ArgumentQueue;
import net.kyori.adventure.text.minimessage.tag.resolver.TagResolver;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ChatListener implements Listener {
    public static final String CHAT_FORMAT = "<gray><player>: <chat>";

    @EventHandler(ignoreCancelled = true)
    public void onAsyncChat(AsyncChatEvent event) {
        Component chatMessage = event.message();
        Component formattedChatMessage = MiniMessage.miniMessage().deserialize(CHAT_FORMAT, new PlayerTagResolver(event.getPlayer()), new ChatMessageTagResolver(chatMessage));
        // do further process
    }

    public static class PlayerTagResolver implements TagResolver {
        private final Player sender;

        public PlayerTagResolver(Player sender) {
            this.sender = sender;
        }

        @Override
        public boolean has(@NotNull String name) {
            return name.equals("player");
        }

        @Override
        public @Nullable Tag resolve(@NotNull String name, @NotNull ArgumentQueue arguments, @NotNull Context ctx) throws ParsingException {
            return Tag.inserting(Component.text(sender.getName()));
        }
    }

    public static class ChatMessageTagResolver implements TagResolver {
        private final @NotNull Component chatMessage;

        public ChatMessageTagResolver(@NotNull Component chatMessage) {
            this.chatMessage = chatMessage;
        }

        @Override
        public boolean has(@NotNull String name) {
            return name.equals("chat");
        }

        @Override
        public @Nullable Tag resolve(@NotNull String name, @NotNull ArgumentQueue arguments, @NotNull Context ctx) throws ParsingException {
            return Tag.selfClosingInserting(this.chatMessage);
        }
    }
}

  ```

</details>

:::

```