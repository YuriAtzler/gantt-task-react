import React from "react";
import style from "./bar.module.css";

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
  };
  onMouseDown: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
};
export const BarDisplay: React.FC<BarDisplayProps> = ({
  x,
  y,

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
       * -> background
       */}
      <rect
        x={x}
        width={width}
        y={y}
        height={height}
        ry={5}
        rx={5}
        fill={getBarColor()}
        className={style.barBackground}
      />

      {/**
       * @Description
       * -> progress
       */}
      <rect
        x={progressX}
        width={progressWidth}
        y={y}
        height={height}
        ry={5}
        rx={5}
        fill={getProcessColor()}
      />

      {/**
       * @Description
       * -> tag
       */}
      {tag && tag.name && tag.color && (
        <g>
          <rect
            x={x}
            width={10}
            y={y}
            ry={4}
            rx={4}
            height={height}
            style={{
              fill: tag.color,
            }}
          />
          <rect
            x={x + 5}
            width={5}
            y={y}
            height={height}
            style={{
              fill: tag.color,
            }}
          />
        </g>
      )}
      {tag && tag.name && tag.color && (
        <g>
          <rect
            x={x + width - 10}
            width={10}
            y={y}
            ry={4}
            rx={4}
            height={height}
            style={{
              fill: tag.color,
            }}
          />
          <rect
            x={x + width - 10}
            width={5}
            y={y}
            height={height}
            style={{
              fill: tag.color,
            }}
          />
        </g>
      )}
    </g>
  );
};
