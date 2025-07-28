---
title: ✈️ Paper Anti Xray
id: anti_xray
---

CraftEngine 原生支持 Paper 的反 X 射线功能。您只需获取相应方块的真实方块 ID 并将其填入即可生效。

```yaml
anticheat:
  anti-xray:
    enabled: false
    engine-mode: 1
    hidden-blocks:
    - copper_ore
    - deepslate_copper_ore
    - raw_copper_block
    - gold_ore
    - craftengine:note_block_56
    - craftengine:tripwire_19
```

:::tip

单击[**此处**](../reference/commands.md#get-block-internal-id)以了解如何获取自定义方块的真实方块 ID。
:::
