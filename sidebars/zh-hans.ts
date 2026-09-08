import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '📗 介绍',
      collapsed: true,
      link: {
        type: 'doc',
        id: "intro",
      },
      items: [
        {
          type: 'doc',
          id: "intro/exclusive_feature",
          label: '☄️ 独家功能',
        },
        {
          type: 'doc',
          id: "intro/simply_better",
          label: '🥕 简而不凡',
        },
        {
          type: 'doc',
          id: "intro/under_development",
          label: '🚧 画饼专区',
        },
        {
          type: 'doc',
          id: "intro/spark",
          label: '⚡ Spark',
        },
      ]
    },
    {
      type: 'category',
      label: '👋 入门指南',
      collapsed: true,
      link: {
        type: 'doc',
        id: "getting_start",
      },
      items: [
        {
          type: 'doc',
          id: "getting_start/installation",
          label: '📦 安装与托管',
        },
        {
          type: 'doc',
          id: "getting_start/project_structure",
          label: '🗂️ 认识项目',
        },
        {
          type: 'category',
          label: '🗡️ 内容制作',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: "getting_start/items",
              label: '🗡️ 第一个物品',
            },
            {
              type: 'doc',
              id: "getting_start/item_models",
              label: '🎨 为物品绑定模型',
            },
            {
              type: 'doc',
              id: "getting_start/first_block",
              label: '🧱 第一个方块',
            },
            {
              type: 'doc',
              id: "getting_start/first_furniture",
              label: '🪑 第一件家具',
            },
            {
              type: 'doc',
              id: "getting_start/first_image",
              label: '🖼️ 第一张图片',
            },
          ]
        },
        {
          type: 'category',
          label: '🛜 资源包托管',
          collapsed: true,
          link: {
            type: 'doc',
            id: "getting_start/set_up_host",
          },
          items: [
            {
              type: 'doc',
              id: "getting_start/set_up_host/self",
              label: '自托管',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/external",
              label: '外部托管',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/lobfile",
              label: 'Lobfile',
            },
            {
              type: 'category',
              label: 'S3 对象存储',
              collapsed: true,
              link: {
                type: 'doc',
                id: "getting_start/set_up_host/s3",
              },
              items: [
                {
                  type: 'doc',
                  id: "getting_start/set_up_host/s3/cloudflare_r2",
                  label: 'Cloudflare R2',
                },
                {
                  type: 'doc',
                  id: "getting_start/set_up_host/s3/tencentcloud_cos",
                  label: '腾讯云 COS',
                },
              ]
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/openlist",
              label: 'OpenList',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/onedrive",
              label: 'OneDrive',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/dropbox",
              label: 'Dropbox',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/gitlab",
              label: 'GitLab',
            },
          ]
        },
        {
          type: 'doc',
          id: "getting_start/workflows",
          label: '⚙️ 工作流',
        },
        {
          type: 'doc',
          id: "getting_start/database",
          label: '🗄️ 数据库配置',
        },
        {
          type: 'doc',
          id: "getting_start/next_steps",
          label: '🧭 下一步',
        },
      ]
    },
    {
      type: 'category',
      label: '📈 进阶教程',
      collapsed: true,
      link: {
        type: 'doc',
        id: "advanced",
      },
      items: [
        {
          type: 'doc',
          id: "advanced/template_in_action",
          label: '📄 模板系统实战',
        },
        {
          type: 'doc',
          id: "advanced/item_model_definition",
          label: '🎨 物品模型定义',
        },
        {
          type: 'doc',
          id: "advanced/model_tinting",
          label: '🖌️ 模型着色',
        },
      ]
    },
    {
      type: 'category',
      label: '⚙️ 配置',
      collapsed: true,
      link: {
        type: 'doc',
        id: "configuration",
      },
      items: [
        {
          type: 'category',
          label: '🗡️ 物品',
          collapsed: true,
          link: {
            type: 'doc',
            id: "configuration/item",
          },
          items: [
            {
              type: 'doc',
              id: "configuration/item/data",
              label: '🔢 物品数据',
            },
            {
              type: 'doc',
              id: "configuration/item/settings",
              label: '🔧 物品设置',
            },
            {
              type: 'category',
              label: '🟰 物品模型',
              link: {
                type: 'doc',
                id: "configuration/item/models",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/item/models/model",
                  label: '📐 模型',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/composite",
                  label: '🧩 组合',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/condition",
                  label: '⚖️ 布尔条件型',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/range_dispatch",
                  label: '📡 值调配型',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/select",
                  label: '✅ 枚举条件型',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/special",
                  label: '👻 特殊模型',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/empty",
                  label: '∅ 空模型',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/bundle_selected_item",
                  label: '📦 收纳袋选中物品',
                },
              ]
            },
            {
              type: 'category',
              label: '🕹️ 物品行为',
              link: {
                type: 'doc',
                id: "configuration/item/behaviors",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/ground_block_item",
                  label: '⬆️ 地面方块物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/multi_high_block_item",
                  label: '🔢 多层方块物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/block_item",
                  label: '🧱 方块物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/range_mining_item",
                  label: '⛏️ 范围挖掘工具',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/furniture_item",
                  label: '🪑 家具物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/compostable_item",
                  label: '🪹 可堆肥物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/wall_block_item",
                  label: '🧱 墙面方块物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/double_high_block_item",
                  label: '2️⃣ 双层方块物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/ceiling_block_item",
                  label: '⬇️ 天花板方块物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/liquid_collision_block_item",
                  label: '🌊 液体碰撞方块物品',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/liquid_collision_furniture_item",
                  label: '🌊 液体碰撞家具物品',
                },
              ]
            },
            {
              type: 'doc',
              id: "configuration/item/updater",
              label: '🔄 物品更新器',
            }
          ]
        },
        {
          type: 'category',
          label: '🧱 方块',
          collapsed: true,
          link: {
            type: 'doc',
            id: "configuration/block",
          },
          items: [
            {
              type: 'doc',
              id: "configuration/block/settings",
              label: '🔧 方块设置',
            },
            {
              type: 'category',
              label: '🔣 方块状态',
              link: {
                type: 'doc',
                id: "configuration/block/states",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/block/states/properties",
                  label: 'ℹ️ 属性',
                },
                {
                  type: 'doc',
                  id: "configuration/block/states/entity_renderer",
                  label: '🫑 方块实体渲染器',
                },
              ]
            },
            {
              type: 'category',
              label: '🕹️ 方块行为',
              link: {
                type: 'doc',
                id: "configuration/block/behaviors",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/button_block",
                  label: '🔘 按钮方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/surface_spreading_block",
                  label: '🌿 表面扩散方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/grass_block",
                  label: '🌿 草方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/drawer_block",
                  label: '🗄️ 抽屉方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/vertical_crop_block",
                  label: '🎍 垂直作物方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/lamp_block",
                  label: '💡 灯方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/drop_experience_block",
                  label: '💎 掉落经验方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/directional_attached_block",
                  label: '➡️ 定向附着方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/multi_high_block",
                  label: '🏢 多层方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/snowy_block",
                  label: '❄️ 覆雪方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/attached_stem_block",
                  label: '🍄 附着茎方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/bush_block",
                  label: '🪻 灌木方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/concrete_powder_block",
                  label: '💦 混凝土粉末方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/trapdoor_block",
                  label: '🪟 活板门方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/simple_storage_block",
                  label: '📦 简单存储方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/simple_particle_block",
                  label: '✨ 简单粒子方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/stem_block",
                  label: '🍄 茎方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/strippable_block",
                  label: '🪓 可剥离方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/stackable_block",
                  label: '🥪 可堆叠方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/toggleable_lamp_block",
                  label: '💡 可切换灯方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/falling_block",
                  label: '🟨 可下落方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/hangable_block",
                  label: '🚟 可悬挂方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/spreading_block",
                  label: '👾 扩散方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/seagrass_like_block",
                  label: '🪸 类海草方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/near_liquid_block",
                  label: '🤽 邻液方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/liquid_flowable_block",
                  label: '🪣 流体推动方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/stairs_block",
                  label: '🎢 楼梯方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/door_block",
                  label: '🚪 门方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/budding_block",
                  label: '🌱 母岩方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/crop_block",
                  label: '🌽 农作物方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/wall_torch_particle_block",
                  label: '✨ 墙上火把粒子方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/sofa_block",
                  label: '🛋️ 沙发方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/double_high_block",
                  label: '2️⃣ 双层方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/face_attached_horizontal_directional_block",
                  label: '➡️ 水平面定向附着方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/sapling_block",
                  label: '🌴 树苗方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/leaves_block",
                  label: '🍁 树叶方块',
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/decay_block",
                  "label": "🍂 衰变方块"
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/change_over_time_block",
                  label: '🔄 随时间更改方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/slab_block",
                  label: '➖️ 台阶方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/bouncing_block",
                  label: '⏏️ 弹跳方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/sturdy_base_block",
                  label: '🏗️ 稳固基底方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/display_item_block",
                  label: '🖼️ 物品展示方块'
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/item_frame_block",
                  label: '🖼️ 物品展示框方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/hanging_block",
                  label: '🚟 悬挂方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/pressure_plate_block",
                  label: '⬜️ 压力板方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/on_liquid_block",
                  label: '🌊 液面方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/tint_source_block",
                  label: '🎨 颜色提供器方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/fence_block",
                  label: '🚧 栅栏方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/fence_gate_block",
                  label: '🪵 栅栏门方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/chime_block",
                  label: '🔔 震响方块',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/seat_block",
                  label: '💺 座椅方块',
                },
              ]
            },
          ]
        },
        {
          type: 'category',
          label: '🪑 家具',
          collapsed: true,
          link: {
            type: 'doc',
            id: "configuration/furniture",
          },
          items: [
            {
              type: 'doc',
              id: "configuration/furniture/settings",
              label: '⚙️ 家具设置',
            },
            {
              type: 'category',
              label: '🕹️ 家具行为',
              link: {
                type: 'doc',
                id: "configuration/furniture/behaviors",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/furniture/behaviors/simple_storage_furniture",
                  label: '📦 简单存储家具',
                },
                {
                  type: 'doc',
                  id: "configuration/furniture/behaviors/glowing_furniture",
                  label: '💡 发光家具',
                },
                {
                  type: 'doc',
                  id: "configuration/furniture/behaviors/display_item_furniture",
                  label: '📷 物品展示家具',
                },
              ],
            },
            {
              type: 'doc',
              id: "configuration/furniture/variants",
              label: '📍 家具变体',
            },
          ]
        },
        {
          type: 'doc',
          id: "configuration/category",
          label: '📂 分类',
        },
        {
          type: 'doc',
          id: "configuration/emoji",
          label: '😀 表情',
        },
        {
          type: 'doc',
          id: "configuration/equipment",
          label: '⚔️ 装备',
        },
        {
          type: 'category',
          label: '📈 属性',
          collapsed: true,
          link: {
            type: 'doc',
            id: "configuration/attribute",
          },
          items: [
            {
              type: 'doc',
              id: "configuration/attribute/definition",
              label: '🧩 属性定义',
            },
            {
              type: 'doc',
              id: "configuration/attribute/operation",
              label: '🧮 运算方式',
            },
            {
              type: 'doc',
              id: "configuration/attribute/modifier",
              label: '🗡️ 物品修饰符',
            },
            {
              type: 'doc',
              id: "configuration/attribute/equipment-set",
              label: '🛡️ 装备套装',
            },
            {
              type: 'doc',
              id: "configuration/attribute/damage-formula",
              label: '💥 伤害公式',
            },
          ],
        },
        {
          type: 'doc',
          id: "configuration/font",
          label: '㊙️ 字体',
        },
        {
          type: 'doc',
          id: "configuration/atlas",
          label: '🗂️ 图集',
        },
        {
          type: 'doc',
          id: "configuration/image",
          label: '🖼️ 图像',
        },
        {
          type: 'doc',
          id: "configuration/translations",
          label: '🌍 翻译',
        },
        {
          type: 'doc',
          id: "configuration/recipe",
          label: '🍳 配方',
        },
        {
          type: 'doc',
          id: "configuration/sound",
          label: '🔊 音效',
        },
        {
          type: 'doc',
          id: "configuration/jukebox_song",
          label: '💽 唱片机曲目',
        },
        {
          type: 'doc',
          id: "configuration/loot_source",
          label: '🗃️ 战利品源',
        },
        {
          type: 'doc',
          id: "configuration/worldgen_feature",
          label: '🌍 世界生成地物',
        },
        {
          type: 'doc',
          id: "configuration/global_variable",
          label: '🔢 全局变量',
        },
        {
          type: 'doc',
          id: "configuration/painting",
          label: '🖼️ 画',
        },
      ]
    },
    {
      type: 'category',
      label: '📒 参考',
      collapsed: true,
      link: {
        type: 'doc',
        id: "reference",
      },
      items: [
        {
          type: 'category',
          label: '✏️ 文本格式',
          collapsed: true,
          link: {
            type: 'doc',
            id: "reference/text_format",
          },
          items: [
            {
              type: 'doc',
              id: "reference/text_format/chain_arguments",
              label: '🔗 链式参数',
            },
          ]
        },
        {
          type: 'doc',
          id: "reference/number_format",
          label: '🔢 数字格式',
        },
        {
          type: 'doc',
          id: "reference/template",
          label: '📄 模板系统',
        },
        {
          type: 'doc',
          id: "reference/file_conflict",
          label: '⚔️ 文件冲突',
        },
        {
          type: 'doc',
          id: "reference/events",
          label: '🪇 事件',
        },
        {
          type: 'doc',
          id: "reference/functions",
          label: '🔧 函数',
        },
        {
          type: 'doc',
          id: "reference/conditions",
          label: '⚖️ 条件',
        },
        {
          type: 'doc',
          id: "reference/script",
          label: '📜 脚本',
        },
        {
          type: 'doc',
          id: "reference/loot_table",
          label: '🎲 战利品表',
        },
        {
          type: 'doc',
          id: "reference/commands",
          label: '🐚 命令',
        },
        {
          type: 'doc',
          id: "reference/particle_effect",
          label: '✨ 粒子效果',
        },
      ]
    },
    {
      type: 'category',
      label: '🤝 兼容性',
      collapsed: true,
      link: {
        type: 'doc',
        id: "compatibility",
      },
      items: [
        {
          type: 'doc',
          id: "compatibility/datapack",
          label: '📦️ 数据包',
        },
        {
          type: 'doc',
          id: "compatibility/anti_xray",
          label: '✈️ Paper 反矿透',
        },
        {
          type: 'doc',
          id: "compatibility/asp",
          label: '🟢 史莱姆世界',
        },
        {
          type: 'doc',
          id: "compatibility/world_painter",
          label: '🖌️ World Painter',
        },
        {
          type: 'doc',
          id: "compatibility/supported_levelers",
          label: '👔 支持的等级系统',
        },
        {
          type: 'doc',
          id: "compatibility/external_item_sources",
          label: '📦️ 外部物品来源',
        },
        {
          type: 'doc',
          id: "compatibility/placeholderapi",
          label: '🅿️ 占位符',
        },
        {
          type: 'doc',
          id: "compatibility/axiom",
          label: '⚛️ Axiom',
        },
        {
          type: 'doc',
          id: "compatibility/mythicmobs",
          label: '🦕 MythicMobs',
        },
        {
          type: 'doc',
          id: "compatibility/skript",
          label: '⌨️ Skript',
        },
        {
          type: 'doc',
          id: "compatibility/denizen",
          label: '📜 Denizen',
        },
        {
          type: 'doc',
          id: "compatibility/quickshop_hikari",
          label: '📦 QuickShop-Hikari',
        },
        {
          type: 'doc',
          id: "compatibility/bluemap",
          label: '🗺️ BlueMap',
        },
      ]
    },
    {
      type: 'category',
      label: '🧩 附加组件',
      collapsed: true,
      link: {
        type: 'doc',
        id: "addon",
      },
      items: [
        {
          type: 'doc',
          id: "addon/craft_engine_proxy",
          label: 'CraftEngine Proxy',
        },
        {
          type: 'doc',
          id: "addon/craft_engine_client_mod",
          label: 'CraftEngine Client Mod',
        },
      ]
    },
    {
      type: 'category',
      label: '⌨️ 应用程序编程接口',
      collapsed: true,
      link: {
        type: 'doc',
        id: "api",
      },
      items: [
      ]
    },
  ],
};

export default sidebars;
