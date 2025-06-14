import React, { useEffect, useRef, useContext, useState } from 'react';
import { CursorContext } from '../context/CursorContext.jsx';
import '../styles/cursor.css';

const Cursor = () => {
  const { theme, isHovered } = useContext(CursorContext);

  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [trailPositions, setTrailPositions] = useState([]);

  const initialized = useRef(false);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const length = theme.trailLength || 16;
  const smoothness = theme.trailSmoothing || 0.5;
  const size = theme.trailSize || 16;
  const color = theme.trailColor || "rgba(255,255,255,0.5)";
  const fade = theme.trailFade ?? true;

  useEffect(() => {
    setTrailPositions(Array.from({ length }, () => ({ x: mouse.current.x, y: mouse.current.y })));
  }, [length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mouse.current = { x, y };
      setMousePos({ x, y });

      if (!initialized.current) {
        setTrailPositions(Array.from({ length }, () => ({ x, y })));
        initialized.current = true;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    let animationFrame;
    const animate = () => {
      setTrailPositions(prev => {
        if (!prev.length) return prev;
        const newPositions = [...prev];
        newPositions[0] = {
          x: newPositions[0].x + (mouse.current.x - newPositions[0].x) * smoothness,
          y: newPositions[0].y + (mouse.current.y - newPositions[0].y) * smoothness,
        };
        for (let i = 1; i < length; i++) {
          newPositions[i] = {
            x: newPositions[i].x + (newPositions[i - 1].x - newPositions[i].x) * smoothness,
            y: newPositions[i].y + (newPositions[i - 1].y - newPositions[i].y) * smoothness,
          };
        }
        return newPositions;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [length, smoothness]);

  if (theme.enableTrail && theme.trailType === "dots") {
    return (
      <>
        {trailPositions.map((pos, i) => {
          const minSize = 2;
          const dotSize = minSize + (size - minSize) * (1 - i / length);
          const offset = dotSize / 2;
          return (
            <div
              key={i}
              className="cursor-trail-dot"
              style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                borderRadius: "50%",
                backgroundColor: color,
                pointerEvents: "none",
                zIndex: 9998,
                opacity: Math.pow(1 - i / length, 2),
                transform: `translate3d(${pos.x - offset}px, ${pos.y - offset}px, 0)`,
                transition: "opacity 0.2s, transform 0.05s ease-out",
                mixBlendMode: theme.styles?.mixBlendMode || "normal",
                border: theme.styles?.border || "none",
                boxShadow: theme.styles?.boxShadow || "none",
              }}
            />
          );
        })}
      </>
    );
  }

  const cursorSize = isHovered
    ? theme.baseSize * theme.hoverScale
    : theme.baseSize;

  const shapeType = isHovered && theme.hoverType ? theme.hoverType : theme.type;

  const getShapeStyle = () => {
    switch (shapeType) {
      case "dot":
        return { borderRadius: "50%" };
      case "ring":
        return {
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: isHovered ? theme.hoverBorder || "2px solid" : theme.styles?.border || "2px solid",
        };
      case "square":
        return { borderRadius: "4px" };
      case "blob":
        return {
          borderRadius: "40% 60% 60% 40% / 50% 40% 60% 50%",
          transition: "all 0.3s ease-out",
        };
      case "custom":
        return {
          backgroundImage: `url(${theme.customShape})`,
          backgroundSize: "cover",
        };
      default:
        return { borderRadius: "50%" };
    }
  };

  return (
    <div
      className="cursor"
      style={{
        ...getShapeStyle(),
        ...theme.styles,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        backgroundColor: isHovered ? theme.hoverColor || theme.color : theme.color,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        mixBlendMode: isHovered ? theme.hoverBlendMode || theme.styles?.mixBlendMode || "normal" : theme.styles?.mixBlendMode || "normal",
        transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
        zIndex: theme.zIndex || 9999,
        border: isHovered ? theme.hoverBorder || theme.styles?.border : theme.styles?.border,
        boxShadow: isHovered ? theme.hoverShadow || theme.styles?.boxShadow : theme.styles?.boxShadow,
        transition:
          theme.hoverTransition ||
          theme.transition ||
          "width 0.25s ease, height 0.25s ease, background-color 0.25s ease, transform 0.3s ease-out",
      }}
    />
  );
};

export default Cursor;
