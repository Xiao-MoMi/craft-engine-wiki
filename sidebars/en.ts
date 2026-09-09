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
        {
          type: 'doc',
          id: "intro/spark",
          label: '⚡ Spark',
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
          id: "getting_start/installation",
          label: '📦 Installation & Hosting',
        },
        {
          type: 'doc',
          id: "getting_start/project_structure",
          label: '🗂️ Project Structure',
        },
        {
          type: 'category',
          label: '🗡️ Create Content',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: "getting_start/items",
              label: '🗡️ First Item',
            },
            {
              type: 'doc',
              id: "getting_start/item_models",
              label: '🎨 Binding Models',
            },
            {
              type: 'doc',
              id: "getting_start/first_block",
              label: '🧱 First Block',
            },
            {
              type: 'doc',
              id: "getting_start/first_furniture",
              label: '🪑 First Furniture',
            },
            {
              type: 'doc',
              id: "getting_start/first_image",
              label: '🖼️ First Image',
            },
          ]
        },
        {
          type: 'category',
          label: '🛜 Resource Pack Hosting',
          collapsed: true,
          link: {
            type: 'doc',
            id: "getting_start/set_up_host",
          },
          items: [
            {
              type: 'doc',
              id: "getting_start/set_up_host/self",
              label: 'Self Hosting',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/external",
              label: 'External Hosting',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/lobfile",
              label: 'Lobfile',
            },
            {
              type: 'doc',
              id: "getting_start/set_up_host/mcpacks",
              label: 'MCPacks',
            },
            {
              type: 'category',
              label: 'S3 Object Storage',
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
          label: '⚙️ Workflows',
        },
        {
          type: 'doc',
          id: "getting_start/database",
          label: '🗄️ Database Configuration',
        },
        {
          type: 'doc',
          id: "getting_start/next_steps",
          label: '🧭 Next Steps',
        },
      ]
    },
    {
      type: 'category',
      label: '📈 Advanced Tutorial',
      collapsed: true,
      link: {
        type: 'doc',
        id: "advanced",
      },
      items: [
        {
          type: 'doc',
          id: "advanced/template_in_action",
          label: '📄 Templates in Action',
        },
        {
          type: 'doc',
          id: "advanced/item_model_definition",
          label: '🎨 Item Model Definitions',
        },
        {
          type: 'doc',
          id: "advanced/model_tinting",
          label: '🖌️ Model Tinting',
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
                {
                  type: 'doc',
                  id: "configuration/item/models/empty",
                  label: '∅ Empty',
                },
                {
                  type: 'doc',
                  id: "configuration/item/models/bundle_selected_item",
                  label: '📦 Bundle Selected Item',
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
                  id: "configuration/item/behaviors/ceiling_block_item",
                  label: '⬇️ Ceiling Block Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/compostable_item",
                  label: '🪹 Compostable Item',
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
                  id: "configuration/item/behaviors/ground_block_item",
                  label: '⬆️ Ground Block Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/liquid_collision_block_item",
                  label: '🌊 Liquid Collision Block Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/liquid_collision_furniture_item",
                  label: '🌊 Liquid Collision Furniture Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/multi_high_block_item",
                  label: '🔢 Multi High Block Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/range_mining_item",
                  label: '⛏️ Range Mining Item',
                },
                {
                  type: 'doc',
                  id: "configuration/item/behaviors/wall_block_item",
                  label: '🧱 Wall Block Item',
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
                {
                  type: 'doc',
                  id: "configuration/block/states/entity_renderer",
                  label: '🫑 Block Entity Renderer',
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
                  "type": "doc",
                  "id": "configuration/block/behaviors/attached_stem_block",
                  "label": "🍄 Attached Stem Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/bouncing_block",
                  "label": "⏏️ Bouncing Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/budding_block",
                  "label": "🌱 Budding Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/bush_block",
                  "label": "🪻 Bush Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/button_block",
                  "label": "🔘 Button Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/change_over_time_block",
                  "label": "🔄 Change Over Time Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/chime_block",
                  "label": "🔔 Chime Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/concrete_powder_block",
                  "label": "💦 Concrete Powder Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/crop_block",
                  "label": "🌽 Crop Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/decay_block",
                  "label": "🍂 Decay Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/directional_attached_block",
                  "label": "➡️ Directional Attached Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/display_item_block",
                  "label": "🖼️ Display Item Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/door_block",
                  "label": "🚪 Door Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/double_high_block",
                  "label": "2️⃣ Double High Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/drawer_block",
                  "label": "🗄️ Drawer Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/drop_experience_block",
                  "label": "💎 Drop Experience Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/face_attached_horizontal_directional_block",
                  "label": "➡️ Face Attached Horizontal Directional Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/falling_block",
                  "label": "🟨 Falling Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/fence_block",
                  "label": "🚧 Fence Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/fence_gate_block",
                  "label": "🪵 Fence Gate Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/grass_block",
                  "label": "🌿 Grass Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/hangable_block",
                  "label": "🚟 Hangable Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/hanging_block",
                  "label": "🚟 Hanging Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/item_frame_block",
                  "label": "🖼️ Item Frame Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/lamp_block",
                  "label": "💡 Lamp Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/leaves_block",
                  "label": "🍁 Leaves Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/liquid_flowable_block",
                  "label": "🪣 Liquid Flowable Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/multi_high_block",
                  "label": "🏢 Multi High Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/near_liquid_block",
                  "label": "🤽 Near Liquid Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/on_liquid_block",
                  "label": "🌊 On Liquid Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/pressure_plate_block",
                  "label": "⬜️ Pressure Plate Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/sapling_block",
                  "label": "🌴 Sapling Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/seagrass_like_block",
                  "label": "🪸 Seagrass-like Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/seat_block",
                  "label": "💺 Seat Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/simple_particle_block",
                  "label": "✨ Simple Particle Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/simple_storage_block",
                  "label": "📦 Simple Storage Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/slab_block",
                  "label": "➖️ Slab Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/snowy_block",
                  "label": "❄️ Snowy Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/sofa_block",
                  "label": "🛋️ Sofa Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/spreading_block",
                  "label": "👾 Spreading Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/stackable_block",
                  "label": "🥪 Stackable Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/stairs_block",
                  "label": "🎢 Stairs Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/stem_block",
                  "label": "🍄 Stem Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/strippable_block",
                  "label": "🪓 Strippable Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/sturdy_base_block",
                  "label": "🏗️ Sturdy Base Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/surface_spreading_block",
                  "label": "🌿 Surface Spreading Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/tint_source_block",
                  "label": "🎨 Tint Source Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/toggleable_lamp_block",
                  "label": "💡 Toggleable Lamp Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/trapdoor_block",
                  "label": "🪟 Trapdoor Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/vertical_crop_block",
                  "label": "🎍 Vertical Crop Block"
                },
                {
                  "type": "doc",
                  "id": "configuration/block/behaviors/wall_torch_particle_block",
                  "label": "✨ Wall Torch Particle Block"
                }
              ]
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
              type: 'category',
              label: '🕹️ Furniture Behaviors',
              link: {
                type: 'doc',
                id: "configuration/furniture/behaviors",
              },
              items: [
                {
                  type: 'doc',
                  id: "configuration/furniture/behaviors/display_item_furniture",
                  label: '📷 Display Item Furniture',
                },
                {
                  type: 'doc',
                  id: "configuration/furniture/behaviors/glowing_furniture",
                  label: '💡 Glowing Furniture',
                },
                {
                  type: 'doc',
                  id: "configuration/furniture/behaviors/simple_storage_furniture",
                  label: '📦 Simple Storage Furniture',
                },
              ],
            },
            {
              type: 'doc',
              id: "configuration/furniture/variants",
              label: '📍 Furniture Variants',
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
          type: 'category',
          label: '📈 Attribute',
          collapsed: true,
          link: {
            type: 'doc',
            id: "configuration/attribute",
          },
          items: [
            {
              type: 'doc',
              id: "configuration/attribute/definition",
              label: '🧩 Attribute Definition',
            },
            {
              type: 'doc',
              id: "configuration/attribute/operation",
              label: '🧮 Operations',
            },
            {
              type: 'doc',
              id: "configuration/attribute/modifier",
              label: '🗡️ Item Attribute Modifiers',
            },
            {
              type: 'doc',
              id: "configuration/attribute/equipment-set",
              label: '🛡️ Equipment Sets',
            },
            {
              type: 'doc',
              id: "configuration/attribute/damage-formula",
              label: '💥 Damage Formulas',
            },
          ],
        },
        {
          type: 'doc',
          id: "configuration/font",
          label: '㊙️ Font',
        },
        {
          type: 'doc',
          id: "configuration/atlas",
          label: '🗂️ Atlas',
        },
        {
          type: 'doc',
          id: "configuration/image",
          label: '🖼️ Image',
        },
        {
          type: 'doc',
          id: "configuration/translations",
          label: '🌍 Translations',
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
          id: "configuration/loot_source",
          label: '🗃️ Loot Source',
        },
        {
          type: 'doc',
          id: "configuration/worldgen_feature",
          label: '🌍 Worldgen Feature',
        },
        {
          type: 'doc',
          id: "configuration/global_variable",
          label: '🔢 Global Variables',
        },
        {
          type: 'doc',
          id: "configuration/painting",
          label: '🖼️ Painting',
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
          id: "reference/functions",
          label: '🔧 Functions',
        },
        {
          type: 'doc',
          id: "reference/conditions",
          label: '⚖️ Conditions',
        },
        {
          type: 'doc',
          id: "reference/script",
          label: '📜 Scripting',
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
        {
          type: 'doc',
          id: "reference/particle_effect",
          label: '✨ Particle Effect',
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
      label: '🧩 Addons',
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
