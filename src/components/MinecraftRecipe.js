import React from 'react';
import {translate} from '@docusaurus/Translate';
import MinecraftWindow from './MinecraftWindow';
import McSprite from './McSprite';
import styles from './MinecraftRecipe.module.css';

const TITLES = {
  crafting: translate({id: 'minecraftRecipe.title.crafting', message: 'Crafting'}),
  furnace: translate({id: 'minecraftRecipe.title.furnace', message: 'Furnace'}),
  smithing: translate({id: 'minecraftRecipe.title.smithing', message: 'Upgrade Gear'}),
  stonecutter: translate({id: 'minecraftRecipe.title.stonecutter', message: 'Stonecutter'}),
};

export function MinecraftRecipeRow({children}) {
  return <div className={styles.row}>{children}</div>;
}

// 酿造会原地替换下方容器中的物品，因此分开展示加工中和完成后的同一组槽位。
export function MinecraftBrewingRecipe({ingredient, container, result}) {
  return (
    <MinecraftRecipeRow>
      {[false, true].map(finished => (
        <figure key={String(finished)} className={styles.recipe}>
          <MinecraftWindow
            type="brewing"
            title={translate({id: 'minecraftRecipe.title.brewing', message: 'Brewing Stand'})}
            layout={[finished ? 'CCC F' : 'CCCIF']}
            empty={[' ']}
            items={{
              C: finished ? result : container,
              I: ingredient,
              F: {icon: 'blaze_powder', name: translate({id: 'minecraftRecipe.item.blazePowder', message: 'Blaze Powder'}), id: 'minecraft:blaze_powder'},
            }}
          >
            <McSprite name="brewing_stand/fuel_length" x={60} y={44} width={18} height={4} />
            {!finished && <>
              <McSprite name="brewing_stand/brew_progress" x={97} y={16} width={9} height={28} clip="inset(0 0 50% 0)" />
              <McSprite name="brewing_stand/bubbles" x={63} y={14} width={12} height={29} clip="inset(35% 0 0 0)" />
            </>}
          </MinecraftWindow>
          <figcaption className={styles.caption}>{finished ? translate({id: 'minecraftRecipe.brewing.finished', message: 'Brewing Complete'}) : translate({id: 'minecraftRecipe.brewing.progress', message: 'Brewing'})}</figcaption>
        </figure>
      ))}
    </MinecraftRecipeRow>
  );
}

// 按对应窗口的槽位顺序提供原料，结果追加到最后一个槽位。
export default function MinecraftRecipe({type = 'crafting', pattern, ingredients, result, caption, title = TITLES[type], children}) {
  return (
    <figure className={styles.recipe}>
      <MinecraftWindow
        type={type}
        title={title}
        layout={[...pattern, '`recipe:result`']}
        items={{...ingredients, 'recipe:result': result}}
        empty={[' ']}
      >
        {children}
      </MinecraftWindow>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
