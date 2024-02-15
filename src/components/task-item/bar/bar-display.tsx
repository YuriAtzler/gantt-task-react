import React from "react";

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
  realX?: number;
  realWidth?: number;
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
  realWidth,
  realX,
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
        width={width}
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
