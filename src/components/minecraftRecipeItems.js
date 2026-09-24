import {translate} from '@docusaurus/Translate';

// 配方页共用的物品外观；数量、标签和条件由每个示例按需补充。
export const recipeItems = {
  palmPlanks: {icon: 'palm_planks', name: translate({id: 'minecraftRecipe.item.palmPlanks', message: 'Palm Planks'}), id: 'default:palm_planks'},
  oakPlanks: {icon: 'oak_planks', name: translate({id: 'minecraftRecipe.item.oakPlanks', message: 'Oak Planks'}), id: 'minecraft:oak_planks'},
  palmLog: {icon: 'palm_log', name: translate({id: 'minecraftRecipe.item.palmLog', message: 'Palm Log'}), id: 'default:palm_log'},
  strippedPalmLog: {icon: 'stripped_palm_log', name: translate({id: 'minecraftRecipe.item.strippedPalmLog', message: 'Stripped Palm Log'}), id: 'default:stripped_palm_log'},
  stick: {icon: 'stick', name: translate({id: 'minecraftRecipe.item.stick', message: 'Stick'}), id: 'minecraft:stick'},
  chest: {icon: 'chest', name: translate({id: 'minecraftRecipe.item.chest', message: 'Chest'}), id: 'minecraft:chest'},
  woodenPickaxe: {icon: 'wooden_pickaxe', name: translate({id: 'minecraftRecipe.item.woodenPickaxe', message: 'Wooden Pickaxe'}), id: 'minecraft:wooden_pickaxe'},
  diamondSword: {icon: 'diamond_sword', name: translate({id: 'minecraftRecipe.item.diamondSword', message: 'Diamond Sword'}), id: 'minecraft:diamond_sword'},
  paper: {icon: 'paper', name: translate({id: 'minecraftRecipe.item.paper', message: 'Paper'}), id: 'minecraft:paper'},
  topaz: {icon: 'topaz', name: translate({id: 'minecraftRecipe.item.topaz', message: 'Topaz'}), nameColor: '#ffaa00', id: 'default:topaz'},
  topazSword: {icon: 'topaz_sword', name: translate({id: 'minecraftRecipe.item.topazSword', message: 'Topaz Sword'}), nameColor: '#ffaa00', id: 'default:topaz_sword'},
  topazShovel: {icon: 'topaz_shovel', name: translate({id: 'minecraftRecipe.item.topazShovel', message: 'Topaz Shovel'}), nameColor: '#ffaa00', id: 'default:topaz_shovel'},
  topazCrossbow: {icon: 'topaz_crossbow', name: translate({id: 'minecraftRecipe.item.topazCrossbow', message: 'Topaz Crossbow'}), nameColor: '#ffaa00', id: 'default:topaz_crossbow'},
  topazBow: {icon: 'topaz_bow', name: translate({id: 'minecraftRecipe.item.topazBow', message: 'Topaz Bow'}), nameColor: '#ffaa00', id: 'default:topaz_bow'},
  topazPickaxe: {icon: 'topaz_pickaxe', name: translate({id: 'minecraftRecipe.item.topazPickaxe', message: 'Topaz Pickaxe'}), nameColor: '#ffaa00', id: 'default:topaz_pickaxe'},
  topazOre: {icon: 'topaz_ore', name: translate({id: 'minecraftRecipe.item.topazOre', message: 'Topaz Ore'}), id: 'default:topaz_ore'},
  deepslateTopazOre: {icon: 'deepslate_topaz_ore', name: translate({id: 'minecraftRecipe.item.deepslateTopazOre', message: 'Deepslate Topaz Ore'}), id: 'default:deepslate_topaz_ore'},
  chineseLantern: {icon: 'chinese_lantern', name: translate({id: 'minecraftRecipe.item.chineseLantern', message: 'Chinese Lantern'}), id: 'default:chinese_lantern'},
  torch: {icon: 'torch', name: translate({id: 'minecraftRecipe.item.torch', message: 'Torch'}), id: 'minecraft:torch'},
  cobblestone: {icon: 'cobblestone', name: translate({id: 'minecraftRecipe.item.cobblestone', message: 'Cobblestone'}), id: 'minecraft:cobblestone'},
  enchantedCobblestone: {icon: 'enchanted_cobblestone', name: translate({id: 'minecraftRecipe.item.enchantedCobblestone', message: 'Enchanted Cobblestone'}), nameColor: '#ff55ff', id: 'default:enchanted_cobblestone'},
  crossbow: {icon: 'crossbow_standby', name: translate({id: 'minecraftRecipe.item.crossbow', message: 'Crossbow'}), id: 'minecraft:crossbow'},
  bow: {icon: 'bow', name: translate({id: 'minecraftRecipe.item.bow', message: 'Bow'}), id: 'minecraft:bow'},
  blazeRod: {icon: 'blaze_rod', name: translate({id: 'minecraftRecipe.item.blazeRod', message: 'Blaze Rod'}), id: 'minecraft:blaze_rod'},
  stone: {icon: 'stone', name: translate({id: 'minecraftRecipe.item.stone', message: 'Stone'}), id: 'minecraft:stone'},
  boltTemplate: {icon: 'bolt_armor_trim_smithing_template', name: translate({id: 'minecraftRecipe.item.boltTemplate', message: 'Smithing Template'}), id: 'minecraft:bolt_armor_trim_smithing_template', lore: [{text: translate({id: 'minecraftRecipe.item.boltTrim', message: 'Bolt Armor Trim'}), color: '#ffaa00'}]},
  goldIngot: {icon: 'gold_ingot', name: translate({id: 'minecraftRecipe.item.goldIngot', message: 'Gold Ingot'}), id: 'minecraft:gold_ingot'},
};

export const recipeBookRecipes = [
  {
    id: 'default:palm_planks', category: 'building', group: 'planks', shapeless: true,
    pattern: ['   ', ' L ', '   '],
    ingredients: {L: recipeItems.palmLog},
    result: {...recipeItems.palmPlanks, count: 4},
  },
  {
    id: 'minecraft:oak_planks', category: 'building', group: 'planks', shapeless: true,
    pattern: ['   ', ' L ', '   '],
    ingredients: {L: {icon: 'oak_log', name: translate({id: 'minecraftRecipe.item.oakLog', message: 'Oak Log'}), id: 'minecraft:oak_log'}},
    result: {...recipeItems.oakPlanks, count: 4},
  },
  {
    id: 'minecraft:chest', category: 'misc',
    pattern: ['PPP', 'P P', 'PPP'],
    ingredients: {P: {...recipeItems.oakPlanks, tags: ['minecraft:planks']}},
    result: recipeItems.chest,
  },
  {
    id: 'minecraft:wooden_pickaxe', category: 'equipment',
    pattern: ['PPP', ' S ', ' S '],
    ingredients: {P: {...recipeItems.oakPlanks, tags: ['minecraft:wooden_tool_materials']}, S: recipeItems.stick},
    result: recipeItems.woodenPickaxe,
  },
  {
    id: 'minecraft:bread', category: 'misc',
    pattern: ['   ', 'WWW', '   '],
    ingredients: {W: {icon: 'wheat', name: translate({id: 'minecraftRecipe.item.wheat', message: 'Wheat'}), id: 'minecraft:wheat'}},
    result: {icon: 'bread', name: translate({id: 'minecraftRecipe.item.bread', message: 'Bread'}), id: 'minecraft:bread'},
  },
  {
    id: 'minecraft:redstone_torch', category: 'redstone',
    pattern: ['   ', ' R ', ' S '],
    ingredients: {R: {icon: 'redstone', name: translate({id: 'minecraftRecipe.item.redstone', message: 'Redstone Dust'}), id: 'minecraft:redstone'}, S: recipeItems.stick},
    result: {icon: 'redstone_torch', name: translate({id: 'minecraftRecipe.item.redstoneTorch', message: 'Redstone Torch'}), id: 'minecraft:redstone_torch'},
  },
];
