---
title: 🧱 方块
id: block
---

import OverallYamlConfig from '@site/src/components/OverallYamlConfig';
import ClickableYamlFragment from '@site/src/components/ClickableYamlFragment';

## 概述

<OverallYamlConfig >
  <ClickableYamlFragment
    highlightColor="#e41616ff"
    yamlContent={`blocks:
    default:palm_log: `}
  />

  <ClickableYamlFragment
    to="/configuration/block/behaviors"
    highlightColor="#f1a10bff"
    yamlContent={`    behavior:
        type: "strippable_block"
        stripped: "default:stripped_palm_log"`}
  />

  <ClickableYamlFragment
    to="/configuration/block/settings"
    highlightColor="#ebe717ff"
    yamlContent={`    settings:
        sounds:
          break: "minecraft:block.wood.break"
          step: "minecraft:block.wood.step"
          place: "minecraft:block.wood.place"
          hit: "minecraft:block.wood.hit"
          fall: "minecraft:block.wood.fall"
        burnable: true
        burn-chance: 5
        fire-spread-chance: 5
        hardness: 2.0
        resistance: 2.0
        push-reaction: "NORMAL"
        replaceable: false
        is-redstone-conductor: true
        is-suffocating: true
        instrument: "BASS"
        can-occlude: true
        tags:
          - minecraft:mineable/axe
          - minecraft:logs_that_burn
          - minecraft:logs
          - minecraft:completes_find_tree_tutorial`}
  />

  <ClickableYamlFragment
    to="/configuration/block/states"
    highlightColor="#1fe05fff"
    yamlContent={`    states:
        properties:
          axis:
            type: "axis"
            default: "y"
        appearances:
          axisY:
            state: "note_block:0"
            model:
              path: "minecraft:block/custom/palm_log"
              generation:
                parent: "minecraft:block/cube_column"
                textures:
                  end: "minecraft:block/custom/palm_log_top"
                  side: "minecraft:block/custom/palm_log"
          axisX:
            state: "note_block:1"
            model:
              x: 90
              y: 90
              path: "minecraft:block/custom/palm_log_horizontal"
              generation:
                parent: "minecraft:block/cube_column_horizontal"
                textures:
                  end: "minecraft:block/custom/palm_log_top"
                  side: "minecraft:block/custom/palm_log"
          axisZ:
            state: "note_block:2"
            model:
              x: 90
              path: "minecraft:block/custom/palm_log_horizontal"
              generation:
                parent: "minecraft:block/cube_column_horizontal"
                textures:
                  end: "minecraft:block/custom/palm_log_top"
                  side: "minecraft:block/custom/palm_log"
        variants:
          axis=x:
            appearance: "axisX"
            id: "0"
          axis=y:
            appearance: "axisY"
            id: "1"
          axis=z:
            appearance: "axisZ"
            id: "2"`}
  />

  <ClickableYamlFragment
    to="/reference/loot_table"
    highlightColor="#1fc9e0ff"
    yamlContent={`      loot:
          pools:
            - rolls: 1
              conditions:
                - type: "survives_explosion"
              entries:
                - type: "item"
                  item: "default:palm_log"`}
  />

  <ClickableYamlFragment
    to="/reference/events"
    highlightColor="#c91fe0ff"
    yamlContent={`      events:
          - on: "right_click"
            functions:
              - type: "open_window"
                gui-type: "anvil"
              - type: "cancel_event"
            conditions:
              - type: "expression"
                expression: '!<arg:player.is_sneaking>'`}
  />

</OverallYamlConfig>
