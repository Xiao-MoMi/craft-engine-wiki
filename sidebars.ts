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
      label: '📗 Introduction',
      collapsed: true,
      link: {
        type: 'doc',
        id: "intro",
      },
      items: [
        {
          type: 'doc',
          id: "intro/exclusive_feature",
          label: '☄️ Exclusive Features',
        },
        {
          type: 'doc',
          id: "intro/simply_better",
          label: '🥕 Simply Better',
        },
        {
          type: 'doc',
          id: "intro/under_development",
          label: '🚧 Under Development',
        },
      ]
    },
    {
      type: 'category',
      label: '👋 Getting Started',
      collapsed: true,
      link: {
        type: 'doc',
        id: "getting_start",
      },
      items: [
        {
          type: 'doc',
          id: "getting_start/create_first_item",
          label: '💎 First Item',
        },
        {
          type: 'category',
          label: '🛜 Set Up Pack Host',
          collapsed: true,
          link: {
            type: 'doc',
            id: "getting_start/set_up_host",
          },
          items: [
            {
              type: 'doc',
              id: "getting_start/set_up_host/self",
              label: 'Self hosting',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/lobfile",
              label: 'Lobfile',
            },
            {
              type: 'category',
              label: 'S3',
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
                  label: 'Tencent Cloud COS',
                },
              ]
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/external",
              label: 'External',
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
              id: "getting_start/set_up_host/alist",
              label: 'Alist',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/gitlab",
              label: 'Gitlab',
            },
          ]
        },
        {
          type: 'doc',
          id: "getting_start/add_custom_model",
          label: '🌌 Add Custom Model',
        },
        {
          type: 'doc',
          id: "getting_start/item_model_display",
          label: '🏹 Item Model Display',
        },
        
      ]
    },
    {
      type: 'category',
      label: '⚙️ Configuration',
      collapsed: true,
      link: {
        type: 'doc',
        id: "configuration",
      },
      items: [
        {
          type: 'category',
          label: '🗡️ Item',
          collapsed: true,
          link: {
            type: 'doc',
            id: "configuration/item",
          },
          items: [
            {
              type: 'doc',
              id: "configuration/item/data",
              label: '🔢 Item Data',
            },
            {
              type: 'doc',
              id: "configuration/item/settings",
              label: '🔧 Item Settings',
            },
            {
              type: 'category',
              label: '🟰 Item Models',
              link: {
                type: 'doc',
                id: "configuration/item/models",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/item/models/model",
                  label: '📐 Model',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/composite",
                  label: '🧩 Composite',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/condition",
                  label: '⚖️ Condition',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/range_dispatch",
                  label: '📡 Range Dispatch',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/select",
                  label: '✅ Select',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/special",
                  label: '👻 Special',
                },
              ]
            },
            {
              type: 'category',
              label: '🕹️ Item Behaviors',
              link: {
                type: 'doc',
                id: "configuration/item/behaviors",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/block_item",
                  label: '🧱 Block Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/liquid_collision_block_item",
                  label: '🌊 Liquid Collision Block Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/double_high_block_item",
                  label: '2️⃣ Double High Block Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/furniture_item",
                  label: '🪑 Furniture Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/compostable_item",
                  label: '🪹 Compostable Item',
                },
              ]
            },
            {
              type: 'doc',
              id: "configuration/item/updater",
              label: '🔄 Item Updater',
            }
          ]
        },
        {
          type: 'category',
          label: '🧱 Block',
          collapsed: true,
          link: {
            type: 'doc',
            id: "configuration/block",
          },
          items: [
            {
              type: 'doc',
              id: "configuration/block/settings",
              label: '🔧 Block Settings',
            },
            {
              type: 'category',
              label: '🔣 Block States',
              link: {
                type: 'doc',
                id: "configuration/block/states",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/block/states/properties",
                  label: 'ℹ️ Properties',
                },
              ]
            },
            {
              type: 'category',
              label: '🕹️ Block Behaviors',
              link: {
                type: 'doc',
                id: "configuration/block/behaviors",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/concrete_powder_block",
                  label: '💦 Concrete Powder Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/falling_block",
                  label: '🟨 Falling Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/leaves_block",
                  label: '🍁 Leaves Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/vertical_crop_block",
                  label: '🎍 Vertical Crop Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/crop_block",
                  label: '🌽 Crop Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/sapling_block",
                  label: '🌴 Sapling Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/bush_block",
                  label: '🪻 Bush Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/strippable_block",
                  label: '🪓 Strippable Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/hanging_block",
                  label: '🚟 Hanging Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/grass_block",
                  label: '🌿 Grass Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/on_liquid_block",
                  label: '🌊 On Liquid Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/near_liquid_block",
                  label: '🤽 Near Liquid Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/lamp_block",
                  label: '💡 Lamp Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/stackable_block",
                  label: '🥪 Stackable Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/sturdy_base_block",
                  label: '🏗️ Sturdy Base Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/trapdoor_block",
                  label: '🪟 Trapdoor Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/door_block",
                  label: '🚪 Door Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/fence_gate_block",
                  label: '🪵 Fence Gate Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/stairs_block",
                  label: '🎢 Stairs Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/slab_block",
                  label: '➖️ Slab Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/pressure_plate_block",
                  label: '⬜️ Pressure Plate Block',
                },
                {
                  type: 'doc',
                  id: "configuration/block/behaviors/double_high_block",
                  label: '2️⃣ Double High Block',
                },
              ]
            },
            {
              type: 'doc',
              id: "configuration/block/entities",
              label: '🫑 Block Entities',
            },
          ]
        },
        {
          type: 'category',
          label: '🪑 Furniture',
          collapsed: true,
          link: {
            type: 'doc',
            id: "configuration/furniture",
          },
          items: [
            {
              type: 'doc',
              id: "configuration/furniture/settings",
              label: '⚙️ Furniture Settings',
            },
            {
              type: 'doc',
              id: "configuration/furniture/behaviors",
              label: '🕹️ Furniture Behaviors',
            },
            {
              type: 'doc',
              id: "configuration/furniture/placement",
              label: '📍 Furniture Placement',
            },
          ]
        },
        {
          type: 'doc',
          id: "configuration/category",
          label: '📂 Category',
        },
        {
          type: 'doc',
          id: "configuration/emoji",
          label: '😀 Emoji',
        },
        {
          type: 'doc',
          id: "configuration/equipment",
          label: '⚔️ Equipment',
        },
        {
          type: 'doc',
          id: "configuration/font",
          label: '㊙️ Font',
        },
        {
          type: 'doc',
          id: "configuration/image",
          label: '🖼️ Image',
        },
        {
          type: 'doc',
          id: "configuration/i18n",
          label: '🌍 I18n',
        },
        {
          type: 'doc',
          id: "configuration/lang",
          label: '🌍 Language',
        },
        {
          type: 'doc',
          id: "configuration/recipe",
          label: '🍳 Recipe',
        },
        {
          type: 'doc',
          id: "configuration/sound",
          label: '🔊 Sound',
        },
        {
          type: 'doc',
          id: "configuration/jukebox_song",
          label: '💽 Jukebox Song',
        },
        {
          type: 'doc',
          id: "configuration/vanilla_loot",
          label: '🗃️ Vanilla Loot',
        },
      ]
    },
    {
      type: 'category',
      label: '📒 Reference',
      collapsed: true,
      link: {
        type: 'doc',
        id: "reference",
      },
      items: [
        {
          type: 'doc',
          id: "reference/block_tags",
          label: '🏷️ Block Tags',
        },
        {
          type: 'category',
          label: '✏️ Text Format',
          collapsed: true,
          link: {
            type: 'doc',
            id: "reference/text_format",
          },
          items: [
            {
              type: 'doc',
              id: "reference/text_format/chain_arguments",
              label: '🔗 Chain Arguments',
            },
          ]
        },
        {
          type: 'doc',
          id: "reference/number_format",
          label: '🔢 Number Format',
        },
        {
          type: 'doc',
          id: "reference/template",
          label: '📄 Template System',
        },
        {
          type: 'doc',
          id: "reference/file_conflict",
          label: '⚔️ File Conflict',
        },
        {
          type: 'doc',
          id: "reference/events",
          label: '🪇 Events',
        },
        {
          type: 'doc',
          id: "reference/conditions",
          label: '⚖️ Conditions',
        },
        {
          type: 'doc',
          id: "reference/loot_table",
          label: '🎲 Loot Table',
        },
        {
          type: 'doc',
          id: "reference/commands",
          label: '🐚 Commands',
        },
      ]
    },
    {
      type: 'category',
      label: '🤝 Compatibility',
      collapsed: true,
      link: {
        type: 'doc',
        id: "compatibility",
      },
      items: [
        {
          type: 'doc',
          id: "compatibility/datapack",
          label: '📦️ Datapack',
        },
        {
          type: 'doc',
          id: "compatibility/anti_xray",
          label: '✈️ Paper Anti Xray',
        },
        {
          type: 'doc',
          id: "compatibility/asp",
          label: '🟢 Advanced Slime Paper',
        },
        {
          type: 'doc',
          id: "compatibility/world_painter",
          label: '🖌️ World Painter',
        },
        {
          type: 'doc',
          id: "compatibility/supported_levelers",
          label: '👔 Supported Levelers',
        },
        {
          type: 'doc',
          id: "compatibility/external_item_sources",
          label: '📦️ External Item Sources',
        },
        {
          type: 'doc',
          id: "compatibility/placeholderapi",
          label: '🅿️ PlaceholderAPI',
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
      ]
    },
    {
      type: 'category',
      label: '⌨️ API',
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
