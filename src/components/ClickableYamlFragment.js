// src/components/ClickableYamlFragment.js
import Link from '@docusaurus/Link';
import React, {useEffect} from 'react';
import styles from './ClickableYamlFragment.module.css';
import CodeBlock from '@theme/CodeBlock';

// Helper function: Convert hex color to RGBA string
function hexToRgba(hex, transparentValue) {
  if (!hex || hex.length !== 7) {
    return `rgba(128, 128, 128, ${transparentValue})`;
  }
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${transparentValue})`;
}

function ClickableYamlFragment({ yamlContent, to, title, highlightColor }) {
  const hasLink = !!to;

  let isDarkTheme = false;
  useEffect(() => {
    isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
  })

  const defaultColor = '#3498db';
  const colorToUse = highlightColor || defaultColor;

  const shadowLightAlpha = isDarkTheme ? 0.04 : 0.08;
  const shadowMediumAlpha = isDarkTheme ? 0.15 : 0.2;
  const shadowStrongAlpha = isDarkTheme ? 0.25 : 0.3;
  const shadowFocusAlpha = isDarkTheme ? 0.4 : 0.5;
  const hoverBgAlpha = isDarkTheme ? 0.01 : 0.02;

  const inlineStyles = {
    '--yaml-fragment-outline-color': colorToUse,
    '--yaml-fragment-shadow-light': hexToRgba(colorToUse, shadowLightAlpha),
    '--yaml-fragment-shadow-medium': hexToRgba(colorToUse, shadowMediumAlpha),
    '--yaml-fragment-shadow-strong': hexToRgba(colorToUse, shadowStrongAlpha),
    '--yaml-fragment-shadow-focus': hexToRgba(colorToUse, shadowFocusAlpha),
    '--yaml-fragment-hover-bg': hexToRgba(colorToUse, hoverBgAlpha),
  };

  const content = (
      <>
        {title && <h4 className={styles.fragmentTitle}>{title}</h4>}
        <CodeBlock language="yaml" className={styles.codeBlockOverride}>
          {yamlContent}
        </CodeBlock>
      </>
  );

  if (hasLink) {
    return (
        <Link
            to={to}
            className={`${styles.fragmentContainer} ${styles.clickable}`}
            style={inlineStyles}
        >
          {content}
        </Link>
    );
  }

  return (
      <div
          className={`${styles.fragmentContainer} ${styles.nonClickable}`}
          style={inlineStyles}
      >
        {content}
      </div>
  );
}

export default ClickableYamlFragment;