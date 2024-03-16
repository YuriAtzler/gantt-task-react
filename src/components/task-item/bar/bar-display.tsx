import React from "react";
import style from "./bar.module.css";
import { Tag } from "./tag";

type BarDisplayProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  isSelected: boolean;
  /* progress start point */
  progressX: number;
  progressWidth: number;
  barCornerRadius: number;
  isGhost: boolean;
  tag?: {
    color: string;
    name: string;
    value?: string | number | undefined;
    category?: string | number | undefined;
  };
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    progressColor: string;
    progressSelectedColor: string;
    barRealEndColor: string;
  };
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,
  isGhost,
  width,
  height,
  isSelected,
  progressX,
  progressWidth,
  tag,
  styles,
  onMouseDown,
}) => {
  const getProcessColor = () => {
    return isSelected ? styles.progressSelectedColor : styles.progressColor;
  };

  const getBarColor = () => {
    return isSelected ? styles.backgroundSelectedColor : styles.backgroundColor;
  };

  return (
    <g onMouseDown={onMouseDown}>
      {/**
       * @Description
       * -> final execution
       */}
      {realWidth && realX && (
        <rect
          x={realX}
          width={realWidth}
          y={y}
          height={height}
          ry={5}
          rx={5}
          fill={styles.barRealEndColor}
          className={styles.barRealEndColor}
        />
      )}

      {/**
       * @Description
       * -> background
       */}
      <rect
        x={x}
        width={width < 16 ? 16 : width}
        y={y}
        height={height}
        ry={5}
        rx={5}
        fill={getBarColor()}
      />

      {/**
       * @Description
       * -> progress
       */}
      {width > 16 && (
        <rect
          x={progressX}
          width={progressWidth}
          y={y}
          height={height}
          ry={5}
          rx={5}
          fill={getProcessColor()}
        />
      )}

      {/**
       * @Description
       * -> tag
       */}
      {!isGhost && tag?.name && (
        <Tag height={height} tag={tag} width={width} x={x} y={y} />
      )}
    </g>
  );
};
