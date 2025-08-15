// src/components/ClickableYamlFragment.js
import React, {useEffect} from 'react';
import Link from '@docusaurus/Link'; // 1. 导入 Link 组件
import styles from './ClickableYamlFragment.module.css';
import CodeBlock from '@theme/CodeBlock';

// 辅助函数：将十六进制颜色转换为 RGBA 字符串
function hexToRgba(hex, alpha) {
  if (!hex || hex.length !== 7) {
    return `rgba(128, 128, 128, ${alpha})`; // 默认灰色
  }
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function ClickableYamlFragment({ yamlContent, to, title, highlightColor }) {
  const hasLink = !!to;
  let isDarkTheme = false;

  useEffect(() => {

    isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';

  })

  const defaultColor = '#3498db';
  const colorToUse = highlightColor || defaultColor;

  // 根据颜色模式调整透明度
  const shadowLightAlpha = isDarkTheme ? 0.04 : 0.08;
  const shadowMediumAlpha = isDarkTheme ? 0.15 : 0.2;
  const shadowStrongAlpha = isDarkTheme ? 0.25 : 0.3;
  const shadowFocusAlpha = isDarkTheme ? 0.4 : 0.5;
  const hoverBgAlpha = isDarkTheme ? 0.02 : 0.04; // 稍微增加 hover 透明度以获得更好的反馈

  const inlineStyles = {
    '--yaml-fragment-outline-color': colorToUse,
    '--yaml-fragment-shadow-light': hexToRgba(colorToUse, shadowLightAlpha),
    '--yaml-fragment-shadow-medium': hexToRgba(colorToUse, shadowMediumAlpha),
    '--yaml-fragment-shadow-strong': hexToRgba(colorToUse, shadowStrongAlpha),
    '--yaml-fragment-shadow-focus': hexToRgba(colorToUse, shadowFocusAlpha),
    '--yaml-fragment-hover-bg': hexToRgba(colorToUse, hoverBgAlpha),
  };

  // 4. 将内容封装在一个函数或变量中，以便复用
  const FragmentContent = () => (
      <>
        {title && <h4 className={styles.fragmentTitle}>{title}</h4>}
        <CodeBlock language="yaml" className={styles.codeBlockOverride}>
          {yamlContent}
        </CodeBlock>
      </>
  );

  // 5. 根据 hasLink 条件渲染不同的包裹元素
  return hasLink ? (
      <Link to={to} className={styles.fragmentContainer} style={inlineStyles}>
        <FragmentContent />
      </Link>
  ) : (
      <div
          className={`${styles.fragmentContainer} ${styles.nonClickable}`}
          style={inlineStyles}
      >
        <FragmentContent />
      </div>
  );
}

export default ClickableYamlFragment;