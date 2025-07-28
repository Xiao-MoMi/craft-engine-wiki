import { useState, useRef, useEffect } from 'react';
import { Tree } from 'react-arborist';
import {
  FaFolder,
  FaFolderOpen,
  FaFile,
  FaChevronRight,
  FaChevronDown,
  FaQuestionCircle,
} from 'react-icons/fa';
import ReactDOM from 'react-dom';

// 节点渲染组件
function Node({ node, style, dragHandle, currentTheme }) {
  const Icon = node.isLeaf ? FaFile : node.isOpen ? FaFolderOpen : FaFolder;
  const ArrowIcon = node.isInternal ? (node.isOpen ? FaChevronDown : FaChevronRight) : null;

  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);
  const questionIconRef = useRef(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  const handleQuestionClick = (e) => {
    e.stopPropagation();
    setShowCard(prev => !prev);
  };

  const calculateCardPosition = () => {
    if (questionIconRef.current && showCard) {
      const iconRect = questionIconRef.current.getBoundingClientRect();
      const cardWidth = 300;
      const cardHeight = cardRef.current ? cardRef.current.offsetHeight : 0;
      const margin = 8;

      let top = iconRect.top;
      let left = iconRect.right + margin;

      if (top + cardHeight > window.innerHeight) {
        top = window.innerHeight - cardHeight - margin;
      }
      if (top < 0) {
        top = margin;
      }

      if (left + cardWidth > window.innerWidth) {
        left = iconRect.left - cardWidth - margin;
      }

      if (left < 0) {
        left = 0;
      }

      setCardPosition({ top, left });
    }
  };

  useEffect(() => {
    if (showCard) {
      calculateCardPosition();
      window.addEventListener('resize', calculateCardPosition);
    } else {
      window.removeEventListener('resize', calculateCardPosition);
    }
    return () => {
      window.removeEventListener('resize', calculateCardPosition);
    };
  }, [showCard]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target) &&
          questionIconRef.current && !questionIconRef.current.contains(event.target)) {
        setShowCard(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 使用 CSS 变量或直接根据 document.documentElement.dataset.theme 判断
  const getThemeColor = (lightColor, darkColor) => {
    if (currentTheme === 'dark') {
      return darkColor;
    }
    return lightColor;
  };

  const textColor = getThemeColor('#333', '#e2e8f0');
  const arrowColor = getThemeColor('#666', '#a0aec0');
  const folderColor = getThemeColor('#f59e0b', '#fcd34d');
  const fileColor = getThemeColor('#6b7280', '#cbd5e0');
  const questionIconColor = getThemeColor('#a0aec0', '#a0aec0');

  // 卡片颜色
  const cardBgColor = getThemeColor('#ffffff', '#36454F');
  const cardBorderColor = getThemeColor('#e2e8f0', '#4a5568');
  const cardShadow = getThemeColor('0 4px 12px rgba(0, 0, 0, 0.1)', '0 4px 12px rgba(0, 0, 0, 0.2)');

  return (
    <div
      ref={dragHandle}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        cursor: node.isInternal ? 'pointer' : 'default',
        position: 'relative',
        color: textColor, // 应用文本颜色
      }}
      className="node-container"
      onClick={() => node.isInternal && node.toggle()}
    >
      {/* 箭头图标容器 */}
      <div style={{ width: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {ArrowIcon && <ArrowIcon style={{ fontSize: '0.75em', color: arrowColor }} />}
      </div>
      {/* 文件夹/文件图标 */}
      <div style={{ marginLeft: '4px', marginRight: '8px', display: 'flex', alignItems: 'center' }}>
        <Icon color={node.isLeaf ? fileColor : folderColor} /> {/* 应用图标颜色 */}
      </div>
      {/* 节点文本 */}
      <span style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        flexShrink: 1,
        minWidth: 0
      }}>
        {node.data.name}
      </span>

      {/* 问号图标及其可点击的卡片提示 */}
      {node.data.hoverText && (
        <>
          <div
            ref={questionIconRef}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1,
              marginLeft: '8px',
              flexShrink: 0,
            }}
            onClick={handleQuestionClick}
          >
            <FaQuestionCircle
              style={{
                fontSize: '0.8em',
                color: questionIconColor, // 应用问号图标颜色
              }}
            />
          </div>

          {/* 使用 Portal 渲染小卡片 */}
          {showCard && ReactDOM.createPortal(
            <div
              ref={cardRef}
              style={{
                position: 'fixed',
                top: cardPosition.top,
                left: cardPosition.left,
                width: '300px',
                padding: '12px',
                backgroundColor: cardBgColor, // 应用卡片背景色
                border: `1px solid ${cardBorderColor}`, // 应用卡片边框色
                borderRadius: '6px',
                boxShadow: cardShadow, // 应用卡片阴影
                zIndex: 1000,
                fontSize: '0.9em',
                color: textColor, // 应用卡片文本颜色 (与节点文本颜色一致)
                lineHeight: '1.5',
              }}
            >
              {node.data.hoverText}
            </div>,
            document.body
          )}
        </>
      )}
    </div>
  );
}

// 接收 initialTreeData 作为 props
export default function PluginFileTree({ initialTreeData }) {
  const treeApiRef = useRef(null);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(720);
  const PADDING = 16;

  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.dataset.theme || 'light';
      setCurrentTheme(theme);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const initialTheme = document.documentElement.dataset.theme || 'light';
    setCurrentTheme(initialTheme);

    return () => observer.disconnect();
  }, []);

  const [containerStyle, setContainerStyle] = useState({
    height: 200,
    borderWidth: 2,
    backgroundColor: '#f8fafc',
  });

  // 直接使用传入的 initialTreeData
  const data = initialTreeData;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const newWidth = Math.min(window.innerWidth * 0.5, 720);
        setContainerWidth(newWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const updateLayout = () => {
    if (!treeApiRef.current) return;

    const ROW_HEIGHT = 32;
    const PADDING_VERTICAL = PADDING * 2;
    const MIN_HEIGHT = 32;
    const MAX_HEIGHT = 500;
    const EXTRA_HEIGHT_PIXELS = 0;

    const visibleNodesCount = treeApiRef.current.visibleNodes.length;
    const nodesHeight = visibleNodesCount * ROW_HEIGHT;
    const newBorderWidth = Math.min(6, 2 + Math.floor(visibleNodesCount / 4));
    let totalHeight = nodesHeight + PADDING_VERTICAL + newBorderWidth * 2 + EXTRA_HEIGHT_PIXELS;
    totalHeight = Math.min(Math.max(totalHeight, MIN_HEIGHT), MAX_HEIGHT);

    setContainerStyle((prevStyle) => ({
      ...prevStyle,
      height: totalHeight,
      borderWidth: newBorderWidth,
    }));
  };

  useEffect(() => {
    const timer = setTimeout(updateLayout, 0);
    return () => clearTimeout(timer);
  }, [containerWidth, data]);

  const containerBgColor = currentTheme === 'dark' ? '#2d3748' : '#f8fafc';
  const containerBorderColor = currentTheme === 'dark' ? '#4a5568' : '#eeeeee';
  const containerHoverBgColor = currentTheme === 'dark' ? '#36454F' : '#ecedf0ff';


  const handleMouseEnter = () => {
    setContainerStyle(prev => ({ ...prev, backgroundColor: containerHoverBgColor }));
  };

  const handleMouseLeave = () => {
    setContainerStyle(prev => ({ ...prev, backgroundColor: containerBgColor }));
  };

  return (
    <div
      ref={containerRef}
      style={{
        boxSizing: 'border-box',
        width: `${containerWidth}px`,
        borderRadius: '8px',
        padding: `${PADDING}px`,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        height: `${containerStyle.height}px`,
        border: `${containerStyle.borderWidth}px solid ${containerBorderColor}`,
        backgroundColor: containerBgColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Tree
        ref={treeApiRef}
        initialData={data}
        indent={28}
        rowHeight={32}
        width={containerWidth - PADDING * 2}
        className="file-tree"
        onToggle={() => setTimeout(updateLayout, 50)}
        openByDefault={false}
      >
        {(nodeProps) => <Node {...nodeProps} currentTheme={currentTheme} />}
      </Tree>
    </div>
  );
}