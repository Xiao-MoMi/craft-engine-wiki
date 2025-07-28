---
title: 💽 唱片机音乐
id: jukebox_song
---

:::caution

由于 Minecraft 的注册表一旦注册就不可变，因此您需要重新启动服务器才能应用任何新的修改。但是，您可以通过修改配置 ID 来实时注册新歌曲。

:::

```yaml
jukebox-songs:
  default:credits_music:
    sound: minecraft:music.credits
    length: 100.0  # 音乐长度（秒）
    description: "制作人员名单"
    comparator-output: 15
    range: 32
```

只需添加 `minecraft:jukebox_playable` 组件，您的物品就会变成可播放的音乐唱片

```yaml
items:
  default:music_stick:
    material: stick
    data:
      jukebox-playable: default:credits_music
```

如果您不知道如何自定义声音，请参阅[此页面](./sound.md)。
