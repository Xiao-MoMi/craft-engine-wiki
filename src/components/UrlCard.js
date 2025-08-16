import React from 'react';
import Link from '@docusaurus/Link'; // 1. 导入 Docusaurus 的 Link 组件
import styles from './UrlCard.module.css';

export default function UrlCard({ url = '', title = '', subtitle = '' }) {
  let displayLink = url; // 实际用于链接的地址
  let displayDomainOrPath = ''; // 用于显示域名或路径的部分

  // 判断是否为完整的外部 URL
  const isExternalUrl = url.startsWith('http://') || url.startsWith('https://');

  if (isExternalUrl) {
    try {
      const urlObject = new URL(url);
      displayDomainOrPath = urlObject.hostname.replace('www.', '');
    } catch (error) {
      console.error("Invalid URL provided to UrlCard:", url, error);
      displayDomainOrPath = '无效链接';
    }
  } else {
    // 假设非 http/https 开头的都是内部相对路径
    displayDomainOrPath = url;
  }

  // 优先显示传入的 title，如果没有则显示域名或路径
  const displayTitle = title || displayDomainOrPath || '链接';

  return (
      <div className={styles.cardWrapper}>
        {url ? (
            // 2. 将 <a> 标签替换为 <Link> 组件
            <Link
                to={displayLink} // 使用 `to` 属性代替 `href`
                className={styles.cardLink}
                // Docusaurus 的 Link 组件会自动处理 target 和 rel for 外部链接,
                // 你无需手动设置。它默认会对外部链接添加 target="_blank" rel="noopener noreferrer"
            >
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>{displayTitle}</span>
                {/* 3. 副标题逻辑优化：如果提供了 subtitle 就用它，否则显示 url */}
                <span className={styles.cardUrl}>{subtitle || url}</span>
              </div>
            </Link>
        ) : (
            // 对于没有 url 的情况，保持原样
            <div className={styles.cardLink + ' ' + styles.disabledCard}>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>{displayTitle}</span>
                <span className={styles.cardUrl}>{subtitle || url || '无效链接'}</span>
              </div>
            </div>
        )}
      </div>
  );
}