import React, { useState, useRef, useEffect } from 'react';
import styles from './Comment.module.css';

function Comment({ children, text }) {
    const [showComment, setShowComment] = useState(false);
    const [position, setPosition] = useState({ type: 'center' });
    const containerRef = useRef(null);
    const commentRef = useRef(null);

    useEffect(() => {
        if (showComment && containerRef.current && commentRef.current) {
            const container = containerRef.current;
            const comment = commentRef.current;
            const containerRect = container.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            const margin = 10; // 屏幕边缘的安全距离

            // 先让注释框显示以获取真实尺寸
            comment.style.visibility = 'hidden';
            comment.style.display = 'block';
            const commentRect = comment.getBoundingClientRect();
            comment.style.visibility = 'visible';
            comment.style.display = '';

            const commentWidth = commentRect.width;
            const containerCenter = containerRect.left + containerRect.width / 2;

            // 计算居中显示时的左右边界
            const centeredLeft = containerCenter - commentWidth / 2;
            const centeredRight = containerCenter + commentWidth / 2;

            // 检查是否会溢出
            const wouldOverflowLeft = centeredLeft < margin;
            const wouldOverflowRight = centeredRight > viewportWidth - margin;

            if (wouldOverflowLeft && !wouldOverflowRight) {
                // 左侧溢出：计算需要向右偏移多少
                const shiftRight = margin - centeredLeft;
                setPosition({ type: 'shift-right', offset: shiftRight, containerCenter });
            } else if (wouldOverflowRight && !wouldOverflowLeft) {
                // 右侧溢出：计算需要向左偏移多少
                const shiftLeft = centeredRight - (viewportWidth - margin);
                setPosition({ type: 'shift-left', offset: shiftLeft, containerCenter });
            } else if (wouldOverflowLeft && wouldOverflowRight) {
                // 两侧都溢出：居中显示在可视区域
                const availableWidth = viewportWidth - 2 * margin;
                const centerOffset = (viewportWidth / 2) - containerCenter;
                setPosition({ type: 'center-viewport', offset: centerOffset, containerCenter });
            } else {
                // 不溢出，正常居中显示
                setPosition({ type: 'center', containerCenter });
            }
        }
    }, [showComment, text]);

    const getCommentStyle = () => {
        const baseStyle = {};

        if (position.type === 'shift-right') {
            // 向右偏移，但仍然基于容器中心
            baseStyle.left = '50%';
            baseStyle.transform = `translateX(calc(-50% + ${position.offset}px)) translateY(-10px)`;
        } else if (position.type === 'shift-left') {
            // 向左偏移，但仍然基于容器中心
            baseStyle.left = '50%';
            baseStyle.transform = `translateX(calc(-50% - ${position.offset}px)) translateY(-10px)`;
        } else if (position.type === 'center-viewport') {
            // 在视窗中心显示
            baseStyle.left = '50%';
            baseStyle.transform = `translateX(calc(-50% + ${position.offset}px)) translateY(-10px)`;
        }
        // center 情况下使用默认CSS样式

        return baseStyle;
    };

    const getArrowStyle = () => {
        if (!containerRef.current) {
            return { left: '50%' };
        }

        if (position.type === 'center') {
            return { left: '50%' };
        }

        if (position.type === 'shift-right') {
            return { left: `calc(50% - ${position.offset}px)` };
        } else if (position.type === 'shift-left') {
            return { left: `calc(50% + ${position.offset}px)` };
        } else if (position.type === 'center-viewport') {
            return { left: `calc(50% - ${position.offset}px)` };
        }

        return { left: '50%' };
    };

    return (
        <span
            ref={containerRef}
            className={styles.commentContainer}
            onMouseEnter={() => setShowComment(true)}
            onMouseLeave={() => setShowComment(false)}
            onTouchStart={() => setShowComment(true)}
            onTouchEnd={() => setShowComment(false)}
        >
            {children}
            {showComment && (
                <span
                    ref={commentRef}
                    className={styles.commentText}
                    style={getCommentStyle()}
                >
                    {text}
                    <span
                        className={styles.commentArrow}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            ...getArrowStyle(),
                            transform: 'translateX(-50%)',
                            borderLeft: '5px solid transparent',
                            borderRight: '5px solid transparent',
                            borderTop: '5px solid #333',
                            width: 0,
                            height: 0
                        }}
                    />
                </span>
            )}
        </span>
    );
}

export default Comment;